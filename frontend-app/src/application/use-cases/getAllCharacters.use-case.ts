import { CharacterRepository } from "@/domain/repositories/CharacterRepository";
import { CharacterResponse } from "@/domain/models/CharacterResponse";

export const GetAllCharacters =
  (characterRepo: CharacterRepository) =>
  async (page?: number): Promise<CharacterResponse> => {
    return await characterRepo.getAll(page);
  };
