import { CharacterRepository } from "@/domain/repositories/CharacterRepository";
import { Character } from "@/domain/entities/Character";

export const GetCharacterById =
  (characterRepo: CharacterRepository) =>
  async (id: number): Promise<Character> => {
    return await characterRepo.getById(id);
  };
