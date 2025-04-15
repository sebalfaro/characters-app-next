"use client";
import React, { useState } from "react";
import { LabelButton } from "@/presentation/components/ui/labels/LabelBtn";
import { UiFilters } from "@/presentation/types";
import { useCharactersStore } from "@/presentation/store/useCharacterStore";
import { FavCharactersCookie } from "@/infrastructure/cookies/FavCharactersCookie";
import { loadFeed } from "@/presentation/services/loadFeed";

type Filter = Extract<UiFilters, "all" | "fav">;

export const ToogleFavsFilter = () => {
  const [activeBtn, setActiveBtn] = useState<{ active: Filter }>({
    active: "all",
  });
  const updateCharactersList = useCharactersStore(
    (state) => state.updateCharactersList,
  );
  const updateResultCount = useCharactersStore(
    (state) => state.updateResultCount,
  );
  const charactersList = useCharactersStore((state) => state.charactersList);

  const handleClick = async (filter: Filter) => {
    setActiveBtn({ active: filter });
    if (filter === "fav") {
      const favCharacters = FavCharactersCookie.getAll();
      const currentFavs = charactersList.filter((character) =>
        favCharacters.includes(character.name),
      );
      updateCharactersList(currentFavs);
      updateResultCount(currentFavs.length)
    }
    if (filter === "all") {
      await loadFeed();
    }
  };

  return (
    <div className="w-fit flex gap-2 p-1 bg-baseW rounded-4xl">
      <LabelButton
        variant={activeBtn.active === "all" ? "active" : "inactive"}
        clickHandler={() => handleClick("all")}
        key={"all"}
      >
        Todos
      </LabelButton>
      <LabelButton
        variant={activeBtn.active === "fav" ? "active" : "inactive"}
        clickHandler={() => handleClick("fav")}
        key={"fav"}
      >
        Favoritos
      </LabelButton>
    </div>
  );
};
