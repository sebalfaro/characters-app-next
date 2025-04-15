import { Character } from "@/domain/entities";
import { useState } from "react";
import { GenderTag, SpeciesTag, StatusTag } from "../types";

type CharacterFormTypes = {
  name: Character["name"] | undefined;
  gender: GenderTag | undefined;
  status: StatusTag | undefined;
  species: SpeciesTag | undefined;
};

const initialState: CharacterFormTypes = {
  name: "",
  gender: undefined,
  status: undefined,
  species: undefined,
};

export const useCharacterForm = () => {
  const [formValues, setFormValues] = useState<CharacterFormTypes>(initialState);

  const resetFormValues = () => {
    setFormValues(initialState);
  };

  const setName = (value: string) => {
    setFormValues((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const setGender = (tag: GenderTag | undefined) => {
    setFormValues((prev) => ({
      ...prev,
      gender: tag,
    }));
  };

  const setStatus = (status: StatusTag | undefined) => {
    setFormValues((prev) => ({
      ...prev,
      status,
    }));
  };

  const setSpecies = (species: SpeciesTag | undefined) => {
    setFormValues((prev) => ({
      ...prev,
      species,
    }));
  };

  return {
    formValues,
    formControllers: {
      setName,
      setGender,
      setStatus,
      setSpecies,
      resetFormValues,
    },
  };
};
