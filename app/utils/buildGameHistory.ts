import { Temporal } from "temporal-polyfill";
import type { DeckData, GameHistoryEntry } from "~~/types/deckData";

export function buildGameHistory(decks: DeckData[]): GameHistoryEntry[] {
	return decks
		.flatMap(({ id, archidektId, deckName, image, results }) =>
			results.map(({ date, wins, losses }, index) => ({
				entryId: `${id}-${index}`,
				archidektId,
				deckName,
				image,
				date,
				wins,
				losses,
				totalGames: wins + losses,
			}))
		)
		.sort((left, right) => {
			const dateComparison = Temporal.PlainDate.compare(right.date, left.date);
			return dateComparison !== 0
				? dateComparison
				: left.deckName.localeCompare(right.deckName);
		});
}
