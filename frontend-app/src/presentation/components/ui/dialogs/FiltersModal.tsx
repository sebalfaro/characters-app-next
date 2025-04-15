import { useCharacterForm } from "@/presentation/hooks/useCharacterForm";
import { useCharactersStore } from "@/presentation/store/useCharacterStore";
import React, { FormEvent } from "react";
import { CloseIcon } from "../icons";
import { AdvanceFiltersBlock } from "../../home/MainSection/Filters/AdvanceFiltersBlock";
import { GenderTags, SpeciesTags, StatusTags } from "@/presentation/types";
import { Button } from "../buttons/Button";
import { extractValidParams } from "@/presentation/utils/extractValidParams";
import { searchCharactersUseCase } from "@/infrastructure/config/useCases";

const speciesTags: SpeciesTags = ["Human", "Alien"];
const genderTags: GenderTags = ["Male", "Female", "Genderless", "unknown"];
const statusTags: StatusTags = ["Alive", "Dead", "unknown"];

export const FiltersModal = () => {
  const {
    formValues: { gender, status, species },
    formControllers: { setGender, setStatus, setSpecies, resetFormValues },
  } = useCharacterForm();
  const updateIsDialogOpen = useCharactersStore(
    (state) => state.updateIsDialogOpen,
  );
  const updateCharactersList = useCharactersStore(
    (state) => state.updateCharactersList,
  );
  const updateIsCallLoading = useCharactersStore(
    (state) => state.updateIsCallLoading,
  );
  const updateResultCount = useCharactersStore(
    (state) => state.updateResultCount,
  );

  const handleCloseBtn = () => {
    updateIsDialogOpen({ isOpen: false, children: undefined });
  };

  const hanldeSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const extractedParams = extractValidParams({
      gender,
      status,
      species,
    });

    if (Object.keys(extractedParams).length === 0) return;

    try {
      const data = await searchCharactersUseCase(extractedParams);
      console.log("data", data);
      updateCharactersList(data.results);
      updateResultCount(data.info.count);
      updateIsCallLoading(false);
      resetFormValues();
      handleCloseBtn();
    } catch (error) {
      if ((error as Error).message === "404") {
        updateCharactersList([]);
        updateResultCount(0);
        updateIsCallLoading(false);
        resetFormValues();
        handleCloseBtn();
      }
    }

    console.log({
      gender,
      status,
      species,
    });
  };

  return (
    <form
      action=""
      className="w-full max-w-[600px]"
      onSubmit={(event) => hanldeSubmit(event)}
    >
      <div className="w-full max-w-[600px] bg-baseW rounded-2xl">
        <div className="flex justify-between p-6">
          <h3 className="font-semibold text-lg text-[#2E333D]">
            Filtros avanzados
          </h3>
          <button onClick={handleCloseBtn} className="cursor-pointer">
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-col gap-6 py-6 px-6">
          <AdvanceFiltersBlock
            title="Especie"
            filtersTags={speciesTags}
            setFilter={setSpecies}
          />
          <AdvanceFiltersBlock
            title="Genero"
            filtersTags={genderTags}
            setFilter={setGender}
          />
          <AdvanceFiltersBlock
            title="Estado"
            filtersTags={statusTags}
            setFilter={setStatus}
          />
        </div>
        <hr className="border-[#C7CBC2]" />
        <div className="flex justify-end pt-4 px-6 pb-5">
          <Button variant="secondary" clickHandler={() => {}}>
            Aplicar Filtros
          </Button>
        </div>
      </div>
    </form>
  );
};
