import { Character, Gender, Status } from "@/domain/entities";

export type SpeciesTag = Character["species"];
export type GenderTag = Gender;
export type StatusTag = Status;

export type SpeciesTags = SpeciesTag[];
export type GenderTags = GenderTag[];
export type StatusTags = StatusTag[];
