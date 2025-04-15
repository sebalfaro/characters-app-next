import { CharacterRepository } from "@/domain/repositories/CharacterRepository";
import { Character } from "@/domain/entities/Character";
import { CharacterFilters } from "@/domain/models/CharacterFilters";
import { CharacterResponse } from "@/domain/models/CharacterResponse";
import { AxiosAdapter } from "../http/adapters/axios.adapter";

export class CharacterApiRepository implements CharacterRepository {
  constructor(private readonly http: AxiosAdapter) {}

  async getAll(page = 1): Promise<CharacterResponse> {
    const response = await this.http.get<CharacterResponse>("", {
      params: { page },
    });
    return response;
  }

  async getById(id: number): Promise<Character> {
    return await this.http.get<Character>(`${id}`);
  }

  async searchByParams(params: CharacterFilters): Promise<CharacterResponse> {
    const response = await this.http.get<CharacterResponse>("", {
      params,
    });
    return response;
  }
}
