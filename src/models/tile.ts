export enum TileId {
  AncientTomb,
  ArcaneTower,
  GapingMaw,
  Shrine,
  CommandPost,
  Monastery,
  Inn,
  Academy,
  CurioShoppe,
  Menagerie,
  Fort,
  Library,
  HolySpire,
  TempleOfLegends,
  DobneysWish,
  TarceesRiddle,
  VenferosSecret,
  HiddenRuins,
  BuildingSite,
  Chronogate,
  Farm,
  MercenaryCamp,
  Obelisk,
  Sanctum,
  TempleRuins,
  TriflesNTrinkets,
  WellOfWishes,
  WhiteRavenInn,
  BazaarOfSol,
  SacredStones,
  Jewelcrafter,
  CrystalMine,
  TreacherousLair,
  Reformatory,
  ElderTower,
  Mausoleum,
  Dreamwood,
  FearGauntlet,
  Theater,
}

export enum TileSetId {
  HeroicRegions,
  BasicAbilityRegions,
  BasicInn,
  ExtraInn,
  Academy,
  CurioShoppe,
  Menagerie,
  BasicResourceRegions,
  TempleOfLegends,
  Villages,
  HiddenRuins,
  BuildingSite,
  Chronogate,
  Farm,
  MercenaryCamp,
  Obelisk,
  Sanctum,
  TempleRuins,
  TriflesNTrinkets,
  WellOfWishes,
  WhiteRavenInn,
  BazaarOfSol,
  SacredStones,
  JewelRegions,
  TreacherousLair,
  Reformatory,
  ElderTower,
  Mausoleum,
  Dreamwood,
  FearGauntlet,
  Theater,
}

// We will use the priority number to sort the tiles before
// displaying the final setup.
// 1-100: Tiles that have to be in the scumbag.
//        Lower numbers will appear first and will be assigned
//        to the required tiles.
// 100:   Tiles that are preferred to be in the scumbag.
//        This will all have the same number to show in random order.
// 200:   Tiles that have no preference.
//        This will all have the same number to show in random order.
// 300:   Tiles that are preferred to be in the villages bag.
//        This will all have the same number to show in random order.
// 999:   Tiles that shouldn't be in the bag

export interface Tile {
  id: TileId;
  name: string;
  imageKey: string;
  priority: number;
}

export interface TileSet {
  id: TileSetId;
  name: string;
  tiles: Array<Tile>;
  count: number;
  isSelected: boolean;
}

export interface UniqueTile {
  tile: Tile;
  count: number;
}

export interface Bags {
  scumbag: Array<UniqueTile>;
  villagesBag: Array<UniqueTile>;
}
