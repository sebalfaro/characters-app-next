import { getAllCharactersUseCase } from "@/infrastructure/config/useCases";
import { useCharactersStore } from "@/presentation/store/useCharacterStore";

export const loadFeed = async () => {
  const { updateCharactersList, updateIsCallLoading, updateResultCount } =
    useCharactersStore.getState();

  updateIsCallLoading(true);

  try {
    const feed = await getAllCharactersUseCase(1);
    updateCharactersList(feed.results);
    updateResultCount(feed.info.count);
  } catch (error) {
    console.error("Error loading feed:", error);
  } finally {
    updateIsCallLoading(false);
  }
};
