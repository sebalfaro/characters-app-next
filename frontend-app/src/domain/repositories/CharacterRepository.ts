import { Character } from "../entities/Character";
import { CharacterFilters } from "../models/CharacterFilters";
import { CharacterResponse } from "../models/CharacterResponse";

export interface CharacterRepository {
  getAll(page?: number): Promise<CharacterResponse>;
  getById(id: number): Promise<Character>;
  searchByParams(params: CharacterFilters): Promise<CharacterResponse>;
}
