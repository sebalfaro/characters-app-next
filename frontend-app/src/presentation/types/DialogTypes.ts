import {
  FiltersModal,
  SingleCharacterInfoModal,
} from "../components/ui/dialogs";

export type DialogType = {
  isOpen: boolean;
  children?: typeof FiltersModal | typeof SingleCharacterInfoModal;
};
