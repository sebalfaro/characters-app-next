"use client";
import React from "react";
import { Character } from "@/domain/entities";
import { useMediaQuery } from "@/presentation/hooks/useMediaQuery";
import { LargeCard } from "./LargeCards";
import { MediumCard } from "./MediumCard";
import { FavCharactersCookie } from "@/infrastructure/cookies/FavCharactersCookie";

type Props = Pick<
  Character,
  "image" | "name" | "species" | "status" | "location" | "episode"
>;

export const CardStrategy = (props: Props) => {
  const matches = useMediaQuery("(min-width: 768px)");

  const handleOnClick = () => {
    FavCharactersCookie.setFavCharacter(props.name);
  };

  const isCharacterFav = () => {
    return FavCharactersCookie.isCharacterFav(props.name);
  };

  return matches ? (
    <MediumCard
      isFavCharacter={isCharacterFav()}
      setFavs={handleOnClick}
      {...props}
    />
  ) : (
    <LargeCard
      isFavCharacter={isCharacterFav()}
      setFavs={handleOnClick}
      {...props}
    />
  );
};
