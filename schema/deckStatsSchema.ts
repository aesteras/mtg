import { z } from "zod";

export const deckStatsSchema = z.object({
	archidektId: z.int(),
	deckName: z.string(),
	image: z.string(),
	colors: z.regex(/^[wubrg]+$/),
});

export type DeckStats = z.infer<typeof deckStatsSchema>;
