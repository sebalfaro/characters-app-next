import { GetAllCharacters, GetCharacterById, SearchCharacters } from "@/application/use-cases";
import { CharacterApiRepository } from "../repositories/CharacterApiRepository";
import { AxiosAdapter } from "../http/adapters/axios.adapter";
import { API_CONFIG } from "./apiConfig";

const characterApiRepository = new CharacterApiRepository(
  new AxiosAdapter({ baseUrl: `${API_CONFIG.BASE_URL}/character/` }),
);

export const searchCharactersUseCase = SearchCharacters(characterApiRepository);
export const getCharacterByIdUseCase = GetCharacterById(characterApiRepository);
export const getAllCharactersUseCase = GetAllCharacters(characterApiRepository);
