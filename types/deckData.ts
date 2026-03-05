import type { DeckInfo } from "../schema/deckInfoSchema";

export type DeckData = DeckInfo & {
	id: string;
	totalWins: number;
	totalLosses: number;
	totalPlayed: number;
	wonPercentage: number;
	lostPercentage: number;
};
