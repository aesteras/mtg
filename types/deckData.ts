import type { DeckInfo } from "../schema/deckInfoSchema";
import type { DeckResults } from "../schema/deckResultsSchema";

export type DeckData = DeckInfo & { id: string; results: DeckResults["body"] };
