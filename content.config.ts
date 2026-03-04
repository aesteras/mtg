import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
	collections: {
		// Decks Info
		decksInfo: defineCollection({
			type: "data",
			source: "decks/**/*.json",
			schema: z
				.object({
					archidektId: z.int(),
					deckName: z.string(),
					image: z.string(),
					colors: z.string(),
				}),
		}),

		// Decks Results
		decksResults: defineCollection({
			type: "data",
			source: "decks/**/*.csv",
			schema: z.object({
				date: z.iso.date(),
				result: z.regex(/^[LWlw]+$/),
			}),
		}),
	},
});
