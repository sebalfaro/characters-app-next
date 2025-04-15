import { Character } from "@/domain/entities";

type ExtendendCharacterProps = Pick<
  Character,
  "image" | "name" | "species" | "status" | "location" | "episode"
>;

type MinimumCharacterProps = Pick<Character, "image" | "name" | "species">;

type FavCharacterProps = {
  setFavs: () => void;
  isFavCharacter: boolean;
};

export type MediumLargeCardProps = ExtendendCharacterProps & FavCharacterProps;

export type SmallCardProps = MinimumCharacterProps & FavCharacterProps;
