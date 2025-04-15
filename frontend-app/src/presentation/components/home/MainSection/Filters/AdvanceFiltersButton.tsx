"use client";
import { FiltersModal } from "@/presentation/components/ui/dialogs";
import { FiltersIcon } from "@/presentation/components/ui/icons";
import { useCharactersStore } from "@/presentation/store/useCharacterStore";

export const AdvanceFiltersButton = () => {
  const updateIsDialogOpen = useCharactersStore(
    (state) => state.updateIsDialogOpen,
  );

  const handleClick = () => {
    updateIsDialogOpen({
      isOpen: true,
      children: FiltersModal,
    });
  };

  return (
    <button
      className="flex flex-col justify-center items-center size-11 bg-baseW rounded-full cursor-pointer"
      onClick={handleClick}
    >
      <FiltersIcon />
    </button>
  );
};
