import type { DeckData } from "~~/types/deckData";
import type {
	DeckInfoCollectionItem,
	DeckResultsCollectionItem,
} from "@nuxt/content";
import type { DeckResults } from "~~/schema/deckResultsSchema";

const extractPath = (stem: string): string =>
	stem.substring(0, stem.lastIndexOf("/"));

const calculateWinLoss = (results: DeckResults["body"]) => {
	const totalPlayed = results
		.map(({ result }) => result.length)
		.reduce((acc, cur) => acc + cur, 0);

	const totalWins = results
		.map(({ result }) => result.replace("l", "").length)
		.reduce((acc, cur) => acc + cur, 0);

	const totalLosses = totalPlayed - totalWins;

	const wonPercentage =
		totalPlayed == 0 ? 0 : Math.floor((totalWins / totalPlayed) * 100);

	const lostPercentage = 100 - wonPercentage;

	return { totalPlayed, totalWins, totalLosses, wonPercentage, lostPercentage };
};

type CalculateStatsArgs = {
	deckInfo: DeckInfoCollectionItem[];
	deckResults: DeckResultsCollectionItem[];
};
export const calculateStats = ({
	deckInfo,
	deckResults,
}: CalculateStatsArgs): DeckData[] => {
	// Build maps with paths as keys
	const deckInfoMap: Map<string, DeckInfoCollectionItem> = new Map(
		deckInfo.map((info) => [extractPath(info.stem), info])
	);
	const deckResultsMap: Map<string, DeckResultsCollectionItem["body"]> =
		new Map(
			deckResults.map((results) => [extractPath(results.stem), results.body])
		);

	// Calculate win loss and merge data
	return Array.of(
		...deckInfoMap.keys().map((key) => {
			const info = deckInfoMap.get(key)!;
			const results = deckResultsMap.get(key) ?? [];
			const winLossStats = calculateWinLoss(results);
			return { ...info, ...winLossStats };
		})
	);
};
