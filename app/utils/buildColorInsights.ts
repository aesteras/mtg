import type { DeckData } from "~~/types/deckData";
import {
	MTG_COLORS,
	MTG_COLOR_DETAILS,
	type ColorInsight,
} from "~~/types/colorInsights";

const getDeckWinRate = (deck: DeckData): number =>
	deck.totalPlayed === 0 ? 0 : (deck.totalWins / deck.totalPlayed) * 100;

export function buildColorInsights(decks: readonly DeckData[]): ColorInsight[] {
	return MTG_COLORS.map((color) => {
		const decksWithColor = decks.filter((deck) => deck.colors.includes(color));
		const totalWinRate = decksWithColor.reduce(
			(sum, deck) => sum + getDeckWinRate(deck),
			0
		);

		return {
			color,
			name: MTG_COLOR_DETAILS[color].name,
			deckCount: decksWithColor.length,
			averageWinRate:
				decksWithColor.length === 0 ? 0 : totalWinRate / decksWithColor.length,
		};
	});
}
