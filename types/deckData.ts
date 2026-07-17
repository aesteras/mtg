import type { DeckInfo } from "~~/schema/deckInfoSchema";
import type { Temporal } from "temporal-polyfill";

export type DeckResultSummary = {
	date: Temporal.PlainDate;
	wins: number;
	losses: number;
};

export type DeckData = DeckInfo & {
	id: string;
	results: DeckResultSummary[];
	totalWins: number;
	totalLosses: number;
	totalPlayed: number;
	wonPercentage: number;
	lostPercentage: number;
};
