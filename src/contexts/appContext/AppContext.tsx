"use client";

import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Expansion, ExpansionId } from "../../models/expansion";
import { defaultExpansions } from "../../data/defaultExpansions";
import { AllSelectableSets } from "../../data/tileSets";
import {
  Bags,
  Tile,
  TileId,
  TileSet,
  TileSetId,
  UniqueTile,
} from "../../models/tile";

const BASE_NUMBER_OF_TILES = 19;

export interface AppContextProps {
  expansions: Array<Expansion>;
  selectExpansion: (expansionId: ExpansionId) => void;
  optionalSets: Array<TileSet>;
  selectSet: (setId: TileSetId) => void;
  numberOfNeededTiles: number;
  numberOfSelectedOptionalTiles: number;
  randomlySelectedTiles: Bags;
  calculateRandomSetup: () => void;
}

const defaultAppContextProps: AppContextProps = {
  expansions: defaultExpansions,
  selectExpansion: () => null,
  optionalSets: [],
  selectSet: () => null,
  numberOfNeededTiles: 0,
  numberOfSelectedOptionalTiles: 0,
  randomlySelectedTiles: { scumbag: [], villagesBag: [] },
  calculateRandomSetup: () => null,
};

export const AppContext = createContext<AppContextProps>(
  defaultAppContextProps
);

export const useAppContext = (): AppContextProps => useContext(AppContext);

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [expansions, setExpansions] = useState(defaultExpansions);
  const [optionalSets, setOptionalSets] = useState<Array<TileSet>>([]);
  const [randomlySelectedTiles, setRandomlySelectedTiles] = useState<Bags>({
    scumbag: [],
    villagesBag: [],
  });

  const requiredSets: Array<TileSet> = useMemo(() => {
    const unfilteredSets = expansions.reduce(
      (acc: Array<TileSet>, expansion) => {
        if (expansion.isSelected) {
          return [...acc, ...expansion.requiredTileSets];
        }
        return acc;
      },
      []
    );
    const filteredSets = [...new Set(unfilteredSets)];
    return filteredSets.map((set) => ({
      ...set,
      isSelected: true,
    }));
  }, [expansions]);

  const numberOfNeededTiles = useMemo(() => {
    const numberOfRequiredTiles = requiredSets.reduce((acc, set) => {
      return acc + set.tiles.length;
    }, 0);

    const numberOfExtraTiles = expansions.reduce((acc, expansion) => {
      if (expansion.isSelected) {
        return acc + expansion.numberOfExtraTiles;
      }
      return acc;
    }, 0);

    return BASE_NUMBER_OF_TILES + numberOfExtraTiles - numberOfRequiredTiles;
  }, [expansions, requiredSets]);

  const numberOfSelectedOptionalTiles = useMemo(() => {
    return optionalSets.reduce((acc, set) => {
      if (set.isSelected) {
        return acc + set.tiles.length;
      }
      return acc;
    }, 0);
  }, [optionalSets]);

  const selectExpansion = (expansionId: ExpansionId) => {
    setExpansions((prevState) => {
      const result = [...prevState];
      const expansionToUpdate = result.find(
        (expansion) => expansion.id === expansionId
      );
      if (expansionToUpdate && expansionToUpdate.isOptional) {
        expansionToUpdate.isSelected = !expansionToUpdate.isSelected;
      }

      return result;
    });
  };

  useEffect(() => {
    const requiredSetsIds = requiredSets.map((set) => set.id);

    setOptionalSets(
      AllSelectableSets.filter(
        (set) =>
          !requiredSetsIds.includes(set.id) ||
          set.id === TileSetId.BasicAbilityRegions ||
          set.id === TileSetId.BasicResourceRegions
      )
    );
  }, [requiredSets]);

  const selectSet = (setId: TileSetId) => {
    setOptionalSets((prevState) => {
      const result = [...prevState];
      const setToUpdate = result.find((set) => set.id === setId);

      if (setToUpdate) {
        setToUpdate.isSelected = !setToUpdate.isSelected;
      }

      return result;
    });
  };

  const groupByTileType = (tiles: Array<Tile>): Array<UniqueTile> => {
    const result: Array<UniqueTile> = [];

    tiles.forEach((tile) => {
      const uniqueTile = result.find((uniqueTile) => {
        if (
          (tile.id === TileId.DobneysWish ||
            tile.id === TileId.TarceesRiddle ||
            tile.id === TileId.VenferosSecret) &&
          uniqueTile.tile.id === TileId.DobneysWish
        ) {
          return true;
        }
        return uniqueTile.tile.id === tile.id;
      });
      if (!uniqueTile) {
        result.push({
          tile,
          count: 1,
        });
      } else {
        uniqueTile.count++;
      }
    });

    return result;
  };

  const calculateRandomSetup = useCallback(() => {
    const requiredTiles = requiredSets.reduce((acc: Array<Tile>, set) => {
      return [...acc, ...set.tiles];
    }, []);

    const shuffledOptionalSets = optionalSets
      .filter((set) => set.isSelected)
      .sort(() => 0.5 - Math.random());

    const { sets: selectedOptionalSets } = shuffledOptionalSets.reduce(
      (acc: { numberOfTiles: number; sets: Array<TileSet> }, set) => {
        if (acc.numberOfTiles + set.tiles.length <= numberOfNeededTiles) {
          return {
            sets: [...acc.sets, set],
            numberOfTiles: acc.numberOfTiles + set.tiles.length,
          };
        }

        return acc;
      },
      { sets: [], numberOfTiles: 0 }
    );

    const selectedOptionalTiles = selectedOptionalSets.reduce(
      (acc: Array<Tile>, set) => {
        return [...acc, ...set.tiles];
      },
      []
    );

    const finalTiles: Array<Tile> = [
      ...requiredTiles,
      ...selectedOptionalTiles,
    ].sort((a: Tile, b: Tile) => a.priority - b.priority - Math.random());

    const isVillagesExpansionsSelected = expansions.find(
      (expansion) => expansion.id === ExpansionId.VillagesAndHamlets
    )?.isSelected;

    if (isVillagesExpansionsSelected) {
      setRandomlySelectedTiles({
        scumbag: groupByTileType(finalTiles.slice(0, BASE_NUMBER_OF_TILES)),
        villagesBag: groupByTileType(finalTiles.slice(BASE_NUMBER_OF_TILES)),
      });
    } else {
      setRandomlySelectedTiles({
        scumbag: groupByTileType(finalTiles),
        villagesBag: [],
      });
    }
  }, [expansions, numberOfNeededTiles, optionalSets, requiredSets]);

  useEffect(() => {
    calculateRandomSetup();
  }, [calculateRandomSetup]);

  return (
    <AppContext.Provider
      value={{
        expansions,
        selectExpansion,
        optionalSets,
        selectSet,
        numberOfNeededTiles,
        numberOfSelectedOptionalTiles,
        randomlySelectedTiles,
        calculateRandomSetup,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
