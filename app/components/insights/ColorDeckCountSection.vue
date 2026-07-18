<script setup lang="ts">
import type { ColorInsight } from "~~/types/colorInsights";

const props = defineProps<{
	insights: readonly ColorInsight[];
}>();

const categories: Record<string, BulletLegendItemInterface> = {
	deckCount: {
		name: "Decks",
		color: "var(--ui-primary)",
	},
};

const xFormatter = (tick: number): string => props.insights[tick]?.name ?? "";

const yFormatter = (value: number | Date): string => String(value);

const tooltipTitleFormatter = (insight: ColorInsight): string => insight.name;
</script>

<template>
	<section>
		<UPageHeader>
			<h2 class="text-xl font-semibold">Decks by color</h2>
			<p class="text-muted">Number of decks that include each color.</p>
		</UPageHeader>

		<BarChart
			:data="[...insights]"
			:categories="categories"
			:height="300"
			:y-axis="['deckCount']"
			:x-formatter="xFormatter"
			:y-formatter="yFormatter"
			:y-num-ticks="Math.max(...insights.map(insight => insight.deckCount))/2"
			:hide-legend="true"
			:tooltip-title-formatter="tooltipTitleFormatter"
		/>
	</section>
</template>
