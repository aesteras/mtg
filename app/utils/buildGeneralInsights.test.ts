import { describe, expect, it } from "vitest";
import { Temporal } from "temporal-polyfill";
import type { DeckData } from "~~/types/deckData";
import { buildGeneralInsights } from "./buildGeneralInsights";

const buildDeck = (
	totalWins: number,
	totalLosses: number,
	dates: string[]
): DeckData =>
	({
		id: "test-deck",
		archidektId: 1,
		deckName: "Test deck",
		image: "test.jpg",
		colors: "w",
		totalWins,
		totalLosses,
		totalPlayed: totalWins + totalLosses,
		wonPercentage: 0,
		lostPercentage: 0,
		results: dates.map((date) => ({
			date: Temporal.PlainDate.from(date),
			wins: 0,
			losses: 0,
		})),
	});

describe("buildGeneralInsights", () => {
	it("returns zero-safe metrics for an empty collection", () => {
		expect(buildGeneralInsights([])).toEqual({
			totalGamesPlayed: 0,
			averageGamesPerWeek: 0,
			overallWinRate: 0,
		});
	});

	it("calculates weighted totals and win rate across decks", () => {
		const insights = buildGeneralInsights([
			buildDeck(3, 1, ["2026-01-05"]),
			buildDeck(1, 5, ["2026-01-05"]),
		]);

		expect(insights.totalGamesPlayed).toBe(10);
		expect(insights.averageGamesPerWeek).toBe(10);
		expect(insights.overallWinRate).toBe(40);
	});

	it("includes inactive weeks in the recorded-history span", () => {
		const insights = buildGeneralInsights([
			buildDeck(2, 0, ["2026-01-05"]),
			buildDeck(2, 0, ["2026-01-26"]),
		]);

		expect(insights.averageGamesPerWeek).toBe(1);
	});

	it("uses inclusive ISO weeks across a calendar-year boundary", () => {
		const insights = buildGeneralInsights([
			buildDeck(1, 0, ["2025-12-29"]),
			buildDeck(1, 0, ["2026-01-04"]),
		]);

		expect(insights.averageGamesPerWeek).toBe(2);
	});
});
