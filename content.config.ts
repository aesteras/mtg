import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
	collections: {
		// Decks Stats
		deckStats: defineCollection({
			type: "data",
			source: "decks/**/*.json",
			schema: z
				.object({
					archidektId: z.int(),
					deckName: z.string(),
					image: z.string(),
					colors: z.regex(/^[wubrg]+$/),
				}),
		}),

		// Decks Results
		deckResults: defineCollection({
			type: "data",
			source: "decks/**/*.csv",
			schema: z.object({
				date: z.iso.date(),
				result: z.regex(/^[lw]+$/),
			}),
		}),
	},
});
