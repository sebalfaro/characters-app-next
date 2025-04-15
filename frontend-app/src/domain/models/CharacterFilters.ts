import { Gender, Status } from "../entities";

export type CharacterFilters = {
  name?: string;
  status?: Status;
  gender?: Gender;
  page?: number;
  type?: string;
};
