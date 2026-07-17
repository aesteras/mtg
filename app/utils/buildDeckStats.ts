import type { DeckResultSummary } from "~~/types/deckData";

export function buildDeckStats(results: DeckResultSummary[]) {
	const totalWins = results.reduce((sum, day) => sum + day.wins, 0);

	const totalLosses = results.reduce((sum, day) => sum + day.losses, 0);

	const totalPlayed = totalWins + totalLosses;

	const wonPercentage =
		totalPlayed === 0 ? 0 : Math.floor((100 * totalWins) / totalPlayed);

	return {
		totalPlayed,
		totalWins,
		totalLosses,
		wonPercentage,
		lostPercentage: 100 - wonPercentage,
	};
}
