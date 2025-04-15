"use client";
import React from "react";
import { ImageBanner } from "./ImageBanner";
import { WelcomeLogo } from "./WelcomeLogo";
import { Button } from "../ui/buttons/Button";
import { useRouter } from "next/navigation";
import { WelcomeCopy } from "./WelcomeCopy";

export const WelcomeHero = ({}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };

  return (
    <main className="h-dvh w- relative flex flex-col justify-center items-center overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-10 sm:gap-12">
        <WelcomeLogo />
        <WelcomeCopy />
        <Button variant="secondary" clickHandler={handleClick}>
          Comenzar
        </Button>
      </div>
      <ImageBanner />
    </main>
  );
};
