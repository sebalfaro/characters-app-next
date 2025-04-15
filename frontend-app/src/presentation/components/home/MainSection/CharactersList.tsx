"use client";
import { useCharactersStore } from "@/presentation/store/useCharacterStore";
import { CardStrategy } from "../Cards/CardStrategy";

export const CharactersList = () => {
  const charactersList = useCharactersStore((state) => state.charactersList);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-[1040px]">
      {charactersList.map(
        ({ name, image, species, status, location, episode }) => (
          <CardStrategy
            name={name}
            image={image}
            species={species}
            status={status}
            location={location}
            episode={episode}
            key={name}
          />
        ),
      )}
    </div>
  );
};
