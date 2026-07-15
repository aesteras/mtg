import { summarizeResults } from "~~/app/utils/summarizeResults";
import { buildDeckStats } from "~~/app/utils/buildDeckStats";
import type { DeckData } from "~~/types/deckData";
import type {
	DeckInfoCollectionItem,
	DeckResultsCollectionItem,
} from "@nuxt/content";

const extractPath = (stem: string): string =>
	stem.substring(0, stem.lastIndexOf("/"));

type CalculateStatsArgs = {
	deckInfo: DeckInfoCollectionItem[];
	deckResults: DeckResultsCollectionItem[];
};
export function calculateStats({
	deckInfo,
	deckResults,
}: CalculateStatsArgs): DeckData[] {
	const resultsByDeck = new Map(
		deckResults.map((deck) => [
			extractPath(deck.stem),
			summarizeResults(deck.body),
		])
	);

	return deckInfo.map((info) => {
		const id = extractPath(info.stem);

		const results = resultsByDeck.get(id) ?? [];

		return {
			...info,
			results,
			...buildDeckStats(results),
		};
	});
}
