"use client";
import { HomePageHero } from "@/presentation/components/home/Hero/HomePageHero";
import { MainSection } from "@/presentation/components/home/MainSection/MainSection";
import { ModalDialog } from "@/presentation/components/ui/dialogs/ModalDialog";
import { Footer } from "@/presentation/components/ui/footer/Footer";
import { useCharactersStore } from "@/presentation/store/useCharacterStore";

export default function HomePage() {
  const isDialogOpen = useCharactersStore((state) => state.isDialogOpen);

  return (
    <>
      <main className="h-full flex flex-col bg-[#E3E4E7] flex-1 relative">
        {isDialogOpen ? <ModalDialog /> : null}
        <HomePageHero />
        <MainSection />
      </main>
      <Footer />
    </>
  );
}
