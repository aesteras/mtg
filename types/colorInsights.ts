export const MTG_COLORS = ["w", "u", "b", "r", "g"] as const;

export type MtgColor = (typeof MTG_COLORS)[number];

export type ColorInsight = {
	color: MtgColor;
	name: string;
	deckCount: number;
	averageWinRate: number;
};
