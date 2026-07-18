import type { DeckData } from "~~/types/deckData";
import {
	MTG_COLORS,
	type ColorInsight,
	type MtgColor,
} from "~~/types/colorInsights";

const COLOR_NAMES: Record<MtgColor, string> = {
	w: "White",
	u: "Blue",
	b: "Black",
	r: "Red",
	g: "Green",
};

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
			name: COLOR_NAMES[color],
			deckCount: decksWithColor.length,
			averageWinRate:
				decksWithColor.length === 0 ? 0 : totalWinRate / decksWithColor.length,
		};
	});
}
