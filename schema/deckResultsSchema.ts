import { z } from "zod";

export const deckResultsSchema = z.object({
	date: z.iso.date(),
	result: z.regex(/^[lw]+$/),
});

export type DeckResults = z.infer<typeof deckResultsSchema>;
