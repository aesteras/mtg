import { z } from "zod";

export const deckInfoSchema = z.object({
	archidektId: z.int(),
	deckName: z.string(),
	image: z.string(),
	colors: z.string().regex(/^[wubrg]+$/),
});

export type DeckInfo = z.infer<typeof deckInfoSchema>;
