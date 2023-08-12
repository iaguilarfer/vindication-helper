import { Expansion, ExpansionId } from "../models/expansion";
import {
  AcademySet,
  BasicAbilityRegionsSet,
  BasicInnSet,
  BasicResourceRegionsSet,
  CurioShoppeSet,
  HeroicRegionsSet,
  MenagerieSet,
  TempleOfLegendsSet,
  VillagesSet,
} from "./tileSets";

export const defaultExpansions: Array<Expansion> = [
  {
    id: ExpansionId.Base,
    title: "Base Game",
    isSelected: true,
    isOptional: false,
    numberOfExtraTiles: 0,
    requiredTileSets: [HeroicRegionsSet, BasicAbilityRegionsSet, BasicInnSet],
  },
  {
    id: ExpansionId.Chronicles,
    title: "Chronicles",
    isSelected: false,
    isOptional: true,
    numberOfExtraTiles: 0,
    requiredTileSets: [
      HeroicRegionsSet,
      BasicAbilityRegionsSet,
      BasicInnSet,
      BasicResourceRegionsSet,
      AcademySet,
      CurioShoppeSet,
      MenagerieSet,
    ],
  },
  {
    id: ExpansionId.VillagesAndHamlets,
    title: "Villages & Hamlets",
    isSelected: false,
    isOptional: true,
    numberOfExtraTiles: 11,
    requiredTileSets: [
      HeroicRegionsSet,
      BasicAbilityRegionsSet,
      BasicInnSet,
      VillagesSet,
    ],
  },
  {
    id: ExpansionId.ForgottenIsle,
    title: "Forgotten Isle",
    isSelected: false,
    isOptional: true,
    numberOfExtraTiles: 3,
    requiredTileSets: [
      HeroicRegionsSet,
      BasicAbilityRegionsSet,
      BasicInnSet,
      TempleOfLegendsSet,
    ],
  },
];
