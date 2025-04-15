import { CharacterRepository } from "@/domain/repositories/CharacterRepository";
import { CharacterFilters } from "@/domain/models/CharacterFilters";
import { CharacterResponse } from "@/domain/models/CharacterResponse";

export const SearchCharacters =
  (characterRepo: CharacterRepository) =>
  async (filters: CharacterFilters): Promise<CharacterResponse> => {
    return await characterRepo.searchByParams(filters);
  };
