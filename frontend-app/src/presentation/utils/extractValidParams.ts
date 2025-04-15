import { GenderTag, SpeciesTag, StatusTag } from "../types";

interface FormValues {
  gender: GenderTag | undefined;
  status: StatusTag | undefined;
  species: SpeciesTag | undefined;
}

export const extractValidParams = (filters: FormValues): Partial<FormValues> => {
  const entries = Object.entries(filters).filter(
    ([, value]) => value !== undefined,
  );

  return entries.length ? Object.fromEntries(entries) : {};
};
