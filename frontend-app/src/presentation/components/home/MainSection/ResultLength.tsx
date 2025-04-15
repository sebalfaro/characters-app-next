"use client";
import { useCharactersStore } from "@/presentation/store/useCharacterStore";

export const ResultLength = () => {
  const resultCount = useCharactersStore((state) => state.resultCount);
  return (
    <div className="flex justify-center items-center gap-2 text-neutralExtraDark text-lg font-semibold">
      <b className="text-dark text-[32px]">{resultCount}</b> personajes
    </div>
  );
};
