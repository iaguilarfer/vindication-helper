import { TileSet, TileSetId } from "../models/tile";
import {
  AcademyTile,
  AncientTombTile,
  ArcaneTowerTile,
  BazaarOfSolTile,
  BuildingSiteTile,
  ChronogateTile,
  CommandPostTile,
  CrystalMineTile,
  CurioShoppeTile,
  DobneysWishTile,
  DreamwoodTile,
  ElderTowerTile,
  FarmTile,
  FearGauntletTile,
  FortTile,
  GapingMawTile,
  HiddenRuinsTile,
  HolySpireTile,
  InnTile,
  JewelcrafterTile,
  LibraryTile,
  MausoleumTile,
  MenagerieTile,
  MercenaryCampTile,
  MonasteryTile,
  ObeliskTile,
  ReformatoryTile,
  SacredStonesTile,
  SanctumTile,
  ShrineTile,
  TarceesRiddleTile,
  TempleOfLegendsTile,
  TempleRuinsTile,
  TheaterTile,
  TreacherousLairTile,
  TriflesNTrinketsTile,
  VenferosSecretTile,
  WellOfWishesTile,
  WhiteRavenInnTile,
} from "./tiles";

export const HeroicRegionsSet: TileSet = {
  id: TileSetId.HeroicRegions,
  name: "Heroic Regions",
  tiles: [AncientTombTile, ArcaneTowerTile, GapingMawTile],
  count: 1,
  isSelected: true,
};

export const BasicAbilityRegionsSet: TileSet = {
  id: TileSetId.BasicAbilityRegions,
  name: "Basic Ability Regions",
  tiles: [ShrineTile, CommandPostTile, MonasteryTile],
  count: 2,
  isSelected: false,
};

export const BasicInnSet: TileSet = {
  id: TileSetId.BasicInn,
  name: "Basic Inns",
  tiles: [InnTile, InnTile],
  count: 1,
  isSelected: true,
};

export const ExtraInnSet: TileSet = {
  id: TileSetId.ExtraInn,
  name: "Extra Inn",
  tiles: [InnTile],
  count: 1,
  isSelected: false,
};

export const AcademySet: TileSet = {
  id: TileSetId.Academy,
  name: "Academy",
  tiles: [AcademyTile],
  count: 1,
  isSelected: false,
};

export const CurioShoppeSet: TileSet = {
  id: TileSetId.CurioShoppe,
  name: "Curio Shoppe",
  tiles: [CurioShoppeTile],
  count: 1,
  isSelected: true,
};

export const MenagerieSet: TileSet = {
  id: TileSetId.Menagerie,
  name: "Menagerie",
  tiles: [MenagerieTile],
  count: 1,
  isSelected: true,
};

export const BasicResourceRegionsSet: TileSet = {
  id: TileSetId.BasicResourceRegions,
  name: "Basic Resource Regions",
  tiles: [FortTile, HolySpireTile, LibraryTile],
  count: 2,
  isSelected: false,
};

export const TempleOfLegendsSet: TileSet = {
  id: TileSetId.TempleOfLegends,
  name: "Temple Of Legends",
  tiles: [TempleOfLegendsTile],
  count: 1,
  isSelected: false,
};

export const VillagesSet: TileSet = {
  id: TileSetId.Villages,
  name: "Villages",
  tiles: [DobneysWishTile, TarceesRiddleTile, VenferosSecretTile],
  count: 1,
  isSelected: false,
};

export const HiddenRuinsSet: TileSet = {
  id: TileSetId.HiddenRuins,
  name: "Hidden Ruins",
  tiles: [HiddenRuinsTile],
  count: 6,
  isSelected: false,
};

export const BuildingSiteSet: TileSet = {
  id: TileSetId.BuildingSite,
  name: "Building Site",
  tiles: [BuildingSiteTile],
  count: 6,
  isSelected: false,
};

export const ChronogateSet: TileSet = {
  id: TileSetId.Chronogate,
  name: "Chronogate",
  tiles: [ChronogateTile],
  count: 1,
  isSelected: false,
};

export const FarmSet: TileSet = {
  id: TileSetId.Farm,
  name: "Farm",
  tiles: [FarmTile],
  count: 1,
  isSelected: true,
};

export const MercenaryCampSet: TileSet = {
  id: TileSetId.MercenaryCamp,
  name: "Mercenary Camp",
  tiles: [MercenaryCampTile],
  count: 1,
  isSelected: true,
};

export const ObeliskSet: TileSet = {
  id: TileSetId.Obelisk,
  name: "Obelisk",
  tiles: [ObeliskTile],
  count: 1,
  isSelected: true,
};

export const SanctumSet: TileSet = {
  id: TileSetId.Sanctum,
  name: "Sanctum",
  tiles: [SanctumTile],
  count: 1,
  isSelected: true,
};

export const TempleRuinsSet: TileSet = {
  id: TileSetId.TempleRuins,
  name: "Temple Ruins",
  tiles: [TempleRuinsTile],
  count: 1,
  isSelected: true,
};

export const TriflesNTrinketsSet: TileSet = {
  id: TileSetId.TriflesNTrinkets,
  name: "Trifles N Trinkets",
  tiles: [TriflesNTrinketsTile],
  count: 1,
  isSelected: true,
};

export const WellOfWishesSet: TileSet = {
  id: TileSetId.WellOfWishes,
  name: "Well Of Wishes",
  tiles: [WellOfWishesTile],
  count: 1,
  isSelected: true,
};

export const WhiteRavenInnSet: TileSet = {
  id: TileSetId.WhiteRavenInn,
  name: "White Raven Inn",
  tiles: [WhiteRavenInnTile],
  count: 1,
  isSelected: true,
};

export const BazaarOfSolSet: TileSet = {
  id: TileSetId.BazaarOfSol,
  name: "Bazaar Of Sol",
  tiles: [BazaarOfSolTile],
  count: 1,
  isSelected: false,
};

export const SacredStonesSet: TileSet = {
  id: TileSetId.SacredStones,
  name: "Sacred Stones",
  tiles: [SacredStonesTile, SacredStonesTile],
  count: 1,
  isSelected: true,
};

export const JewelRegionsSet: TileSet = {
  id: TileSetId.JewelRegions,
  name: "Jewel Regions",
  tiles: [CrystalMineTile, CrystalMineTile, JewelcrafterTile],
  count: 1,
  isSelected: true,
};

export const TreacherousLairSet: TileSet = {
  id: TileSetId.TreacherousLair,
  name: "Treacherous Lair",
  tiles: [TreacherousLairTile],
  count: 1,
  isSelected: false,
};

export const ReformatorySet: TileSet = {
  id: TileSetId.Reformatory,
  name: "Reformatory",
  tiles: [ReformatoryTile],
  count: 1,
  isSelected: false,
};

export const ElderTowerSet: TileSet = {
  id: TileSetId.ElderTower,
  name: "Elder Tower",
  tiles: [ElderTowerTile],
  count: 1,
  isSelected: true,
};

export const MausoleumSet: TileSet = {
  id: TileSetId.Mausoleum,
  name: "Mausoleum",
  tiles: [MausoleumTile],
  count: 1,
  isSelected: true,
};

export const DreamwoodSet: TileSet = {
  id: TileSetId.Dreamwood,
  name: "Dreamwood",
  tiles: [DreamwoodTile],
  count: 1,
  isSelected: true,
};

export const FearGauntletSet: TileSet = {
  id: TileSetId.FearGauntlet,
  name: "Fear Gauntlet",
  tiles: [FearGauntletTile],
  count: 1,
  isSelected: true,
};

export const TheaterSet: TileSet = {
  id: TileSetId.Theater,
  name: "Theater",
  tiles: [TheaterTile],
  count: 1,
  isSelected: true,
};

export const AllSelectableSets: Array<TileSet> = [
  BasicAbilityRegionsSet,
  ExtraInnSet,
  AcademySet,
  CurioShoppeSet,
  MenagerieSet,
  BasicResourceRegionsSet,
  TempleOfLegendsSet,
  ChronogateSet,
  FarmSet,
  MercenaryCampSet,
  ObeliskSet,
  SanctumSet,
  TempleRuinsSet,
  TriflesNTrinketsSet,
  WellOfWishesSet,
  WhiteRavenInnSet,
  BazaarOfSolSet,
  SacredStonesSet,
  JewelRegionsSet,
  TreacherousLairSet,
  ReformatorySet,
  ElderTowerSet,
  MausoleumSet,
  DreamwoodSet,
  FearGauntletSet,
  TheaterSet,
];
