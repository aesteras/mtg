import type { DeckData } from "~~/types/deckData";

export const useDecksData = () => useState<DeckData[]>("deckData", () => []);
