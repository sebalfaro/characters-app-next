import { Character } from "@/domain/entities";
import { create } from "zustand";
import { DialogType } from "../types/DialogTypes";

type State = {
  charactersList: Character[];
  character: Character | null;
  isCallLoading: boolean;
  resultCount: number;
  isDialogOpen: DialogType;
};

type Action = {
  updateCharactersList: (characterList: Character[]) => void;
  updateCharacter: (character: Character) => void;
  updateIsCallLoading: (value: boolean) => void;
  updateResultCount: (value: number) => void;
  updateIsDialogOpen: ({ isOpen, children }: DialogType) => void;
};

export const useCharactersStore = create<State & Action>((set) => ({
  charactersList: [],
  character: null,
  isCallLoading: false,
  resultCount: 0,
  isDialogOpen: {
    isOpen: false,
  },
  updateCharactersList: (data) => set(() => ({ charactersList: data })),
  updateCharacter: (data) => set(() => ({ character: data })),
  updateIsCallLoading: (data) => set(() => ({ isCallLoading: data })),
  updateResultCount: (data) => set(() => ({ resultCount: data })),
  updateIsDialogOpen: ({ isOpen, children }) =>
    set(() => ({ isDialogOpen: { isOpen, children } })),
}));
