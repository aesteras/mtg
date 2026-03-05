import type { DeckData } from "~~/types/deckData";

export const useDeckData = () => useState<DeckData[]>("deckData");
