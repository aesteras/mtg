<script setup lang="ts">
import { MTG_COLOR_DETAILS, type MtgColor } from "~~/types/colorInsights";

const props = defineProps<{
	color: MtgColor;
	name: string;
	deckCount: number;
	winRate: number;
}>();

const chartData = computed(() => [props.winRate, 100 - props.winRate]);

const categories = computed<Record<string, BulletLegendItemInterface>>(() => ({
	winRate: {
		name: "Average win rate",
		color: MTG_COLOR_DETAILS[props.color].chartColor,
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
