"use client";
import React, { ChangeEvent, FormEvent } from "react";
import { SearchCharacterInput } from "./SearchCharacterInput";
import { useCharacterForm } from "@/presentation/hooks/useCharacterForm";
import { CharacterFiltersValidator } from "@/domain/validator/CharacterFiltersValidator";
import { LoupeButton } from "./LoupeButton";
import { searchCharactersUseCase } from "@/infrastructure/config/useCases";
import { useCharactersStore } from "@/presentation/store/useCharacterStore";

export const SearchCharacterByNameForm = () => {
  const {
    formValues: { name },
    formControllers: { setName, resetFormValues },
  } = useCharacterForm();
  const updateCharactersList = useCharactersStore(
    (state) => state.updateCharactersList,
  );
  const updateIsCallLoading = useCharactersStore(
    (state) => state.updateIsCallLoading,
  );
  const updateResultCount = useCharactersStore(
    (state) => state.updateResultCount,
  );

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!CharacterFiltersValidator.isValidName(name)) return;
    updateIsCallLoading(true);
    try {
      const data = await searchCharactersUseCase({ name });
      updateCharactersList(data.results);
      updateResultCount(data.info.count);
      updateIsCallLoading(false);
      resetFormValues();
    } catch (error) {
      console.log("SearchCharacterByNameForm error:", error);
    }
  };

  return (
    <form
      className="w-full max-w-[1040px]"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className="border border-[#808C73] rounded-lg w-full h-12 max-w-[1040px] relative">
        <LoupeButton />
        <SearchCharacterInput value={name} handleOnChange={handleInput} />
      </div>
    </form>
  );
};
