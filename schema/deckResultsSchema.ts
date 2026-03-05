import { z } from "zod";

export const deckResultsSchema = z.object({
	body: z.array(
		z.object({
			date: z.iso.date(),
			result: z.string().regex(/^[lw]+$/),
		})
	),
});

export type DeckResults = z.infer<typeof deckResultsSchema>;
