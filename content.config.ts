import { defineCollection, defineContentConfig } from "@nuxt/content";
import { deckInfoSchema } from "./schema/deckInfoSchema";
import { deckResultsSchema } from "./schema/deckResultsSchema";

export default defineContentConfig({
	collections: {
		// Deck Stats
		deckInfo: defineCollection({
			type: "data",
			source: "decks/**/*.json",
			schema: deckInfoSchema,
		}),

		// Deck Results
		deckResults: defineCollection({
			type: "data",
			source: "decks/**/*.csv",
			schema: deckResultsSchema,
		}),
	},
});
