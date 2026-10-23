import { Temporal } from "temporal-polyfill";
import type { DeckData } from "~~/types/deckData";
import type { GeneralInsights } from "~~/types/generalInsights";

const getWeekStart = (date: Temporal.PlainDate): Temporal.PlainDate =>
	date.subtract({ days: date.dayOfWeek - 1 });

export function buildGeneralInsights(
	decks: readonly DeckData[]
): GeneralInsights {
	const totalGamesPlayed = decks.reduce(
		(sum, deck) => sum + deck.totalPlayed,
		0
	);
	const totalWins = decks.reduce((sum, deck) => sum + deck.totalWins, 0);
	const sessionDates = decks.flatMap((deck) =>
		deck.results.map((result) => result.date)
	);

	if (sessionDates.length === 0) {
		return {
			totalGamesPlayed,
			averageGamesPerWeek: 0,
			overallWinRate: 0,
		};
	}

	const earliestDate = sessionDates.reduce((earliest, date) =>
		Temporal.PlainDate.compare(date, earliest) < 0 ? date : earliest
	);
	const latestDate = sessionDates.reduce((latest, date) =>
		Temporal.PlainDate.compare(date, latest) > 0 ? date : latest
	);
	const earliestWeek = getWeekStart(earliestDate);
	const latestWeek = getWeekStart(latestDate);
	const weekSpan =
		earliestWeek.until(latestWeek, { largestUnit: "day" }).days / 7 + 1;

	return {
		totalGamesPlayed,
		averageGamesPerWeek: totalGamesPlayed / weekSpan,
		overallWinRate: totalGamesPlayed === 0 ? 0 : (totalWins / totalGamesPlayed) * 100,
	};
}
