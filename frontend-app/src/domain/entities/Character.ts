import { Gender } from "./Gender";
import { LocationReference } from "./LocationReference";
import { OriginReference } from "./OriginReference";
import { Status } from "./Status";

export type Character = {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: OriginReference;
  location: LocationReference;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
