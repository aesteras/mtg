<script setup lang="ts">
import type { MtgColor } from "~~/types/colorInsights";

const props = defineProps<{
	color: MtgColor;
	name: string;
	deckCount: number;
	winRate: number;
}>();

const colorValues: Record<MtgColor, string> = {
	w: "#E8E4C9",
	u: "#0E68AB",
	b: "#6B5B5B",
	r: "#D3202A",
	g: "#00733E",
};

const chartData = computed(() => [props.winRate, 100 - props.winRate]);

const categories = computed<Record<string, BulletLegendItemInterface>>(() => ({
	winRate: {
		name: "Average win rate",
		color: colorValues[props.color],
	},
	remaining: {
		name: "Remaining",
		color: "var(--ui-bg-accented)",
	},
}));

const formattedWinRate = computed(() => `${Math.round(props.winRate)}%`);
</script>

<template>
	<UPageCard :title="name" variant="subtle">
		<DonutChart
			:data="chartData"
			:categories="categories"
			:height="180"
			:radius="75"
			:arc-width="20"
			:hide-legend="true"
			:hide-tooltip="true"
		>
			<span class="text-2xl font-semibold">{{ formattedWinRate }}</span>
		</DonutChart>

		<p class="mt-3 text-center text-sm text-muted">
			{{ deckCount }} deck{{ deckCount === 1 ? "" : "s" }} included
		</p>
	</UPageCard>
</template>
