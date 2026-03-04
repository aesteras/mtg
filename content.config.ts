import { defineCollection, defineContentConfig } from "@nuxt/content";
import { deckStatsSchema } from "./schema/deckStatsSchema";
import { deckResultsSchema } from "./schema/deckResultsSchema";

export default defineContentConfig({
	collections: {
		// Deck Stats
		deckStats: defineCollection({
			type: "data",
			source: "decks/**/*.json",
			schema: deckStatsSchema,
		}),

		// Deck Results
		deckResults: defineCollection({
			type: "data",
			source: "decks/**/*.csv",
			schema: deckResultsSchema,
		}),
	},
});
