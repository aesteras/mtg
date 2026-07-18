export const MTG_COLORS = ["w", "u", "b", "r", "g"] as const;

export type MtgColor = (typeof MTG_COLORS)[number];

type MtgColorDetails = {
	name: string;
	chartColor: string;
};

export const MTG_COLOR_DETAILS: Record<MtgColor, MtgColorDetails> = {
	w: {
		name: "White",
		chartColor: "#E8E4C9",
	},
	u: {
		name: "Blue",
		chartColor: "#0E68AB",
	},
	b: {
		name: "Black",
		chartColor: "#6B5B5B",
	},
	r: {
		name: "Red",
		chartColor: "#D3202A",
	},
	g: {
		name: "Green",
		chartColor: "#00733E",
	},
};

export type ColorInsight = {
	color: MtgColor;
	name: string;
	deckCount: number;
	averageWinRate: number;
};
