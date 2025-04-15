import React from "react";
import { ImageBanner } from "../../welcome/ImageBanner";
import { SearchCharacterByNameForm } from "./SearchCharacterByNameForm";
import { WelcomeLogo } from "../../welcome/WelcomeLogo";

export const HomePageHero = () => {
  return (
    <section className="h-[256px] sm:h-[328px] flex flex-col justify-center items-center gap-12 overflow-hidden relative isolate">
      <WelcomeLogo />
      <SearchCharacterByNameForm />
      <ImageBanner />
    </section>
  );
};
