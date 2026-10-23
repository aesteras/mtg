import { describe, expect, it } from "vitest";
import type { DeckData } from "~~/types/deckData";
import {
	buildColorInsights,
	orderColorInsightsByGamesPlayed,
} from "./buildColorInsights";

const buildDeck = (colors: DeckData["colors"], totalPlayed: number): DeckData =>
	({
		id: "test-deck",
		archidektId: 1,
		deckName: "Test deck",
		image: "test.jpg",
		colors,
		totalPlayed,
		totalWins: 0,
		totalLosses: totalPlayed,
		results: [],
		wonPercentage: 0,
		lostPercentage: 0,
	});

describe("buildColorInsights", () => {
	it("counts a multicolor deck's games for every included color", () => {
		const insights = buildColorInsights([
			buildDeck("wu", 4),
			buildDeck("u", 2),
		]);

		expect(insights.find((insight) => insight.color === "w")?.totalGamesPlayed).toBe(
			4
		);
		expect(insights.find((insight) => insight.color === "u")?.totalGamesPlayed).toBe(
			6
		);
		expect(insights.find((insight) => insight.color === "b")?.totalGamesPlayed).toBe(
			0
		);
	});

	it("orders descending by games played and uses WUBRG to break ties", () => {
		const orderedColors = orderColorInsightsByGamesPlayed(
			buildColorInsights([
				buildDeck("r", 3),
				buildDeck("w", 3),
				buildDeck("u", 5),
			])
		).map((insight) => insight.color);

		expect(orderedColors).toEqual(["u", "w", "r", "b", "g"]);
	});
});
