import { TileSet } from "./tile";

export enum ExpansionId {
  Base,
  Chronicles,
  VillagesAndHamlets,
  ForgottenIsle,
}

export interface Expansion {
  id: ExpansionId;
  title: string;
  isSelected: boolean;
  isOptional: boolean;
  numberOfExtraTiles: number;
  requiredTileSets: Array<TileSet>;
}
