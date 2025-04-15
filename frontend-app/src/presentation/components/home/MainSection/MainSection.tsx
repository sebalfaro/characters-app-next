"use client";
import { CharactersList } from "./CharactersList";
import { FiltersWrapper } from "./Filters/FiltersWrapper";
import { ResultLength } from "./ResultLength";
import { useEffect } from "react";
import { loadFeed } from "@/presentation/services/loadFeed";

export const MainSection = () => {
  useEffect(() => {
    const executeFeed = async () => {
      await loadFeed();
    };
    executeFeed();
  }, []);
  return (
    <section className="flex flex-col items-center px-4 pt-6 pb-16 flex-1">
      <div className="flex flex-col items-end gap-8 w-full max-w-[1040px]">
        <FiltersWrapper />
        <ResultLength />
      </div>
      <CharactersList />
    </section>
  );
};
