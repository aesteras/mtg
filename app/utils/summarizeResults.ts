import type { DeckResults } from "~~/schema/deckResultsSchema";
import type { DeckResultSummary } from "~~/types/deckData";
import { Temporal } from "temporal-polyfill";

export function summarizeResults(
	results: DeckResults["body"]
): DeckResultSummary[] {
	return results.map(({ date, result }) => ({
		date: Temporal.PlainDate.from(date),
		wins: [...result].filter((r) => r === "w").length,
		losses: [...result].filter((r) => r === "l").length,
	}));
}
