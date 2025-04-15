import { useCharactersStore } from "@/presentation/store/useCharacterStore";

export const ModalDialog = () => {
  const { children, isOpen } = useCharactersStore(
    (state) => state.isDialogOpen,
  );

  const Component = children;

  if (!isOpen || !Component) return null;

  return (
    <dialog open className="absolute w-full h-full z-100 bg-[#00000099]">
      <div className="flex flex-col justify-center items-center w-full h-full max-h-dvh">
        <Component />
      </div>
    </dialog>
  );
};
