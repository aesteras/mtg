<script setup lang="ts">
import ColorWinRateChart from "~/components/insights/ColorWinRateChart.vue";
import type { ColorInsight } from "~~/types/colorInsights";

defineProps<{
	insights: readonly ColorInsight[];
}>();
</script>

<template>
	<section>
		<UPageHeader>
			<h2 class="text-xl font-semibold">Average win rate by color</h2>
			<p class="text-muted">
				Average win rate of decks that include each color.
			</p>
		</UPageHeader>

		<UPageGrid class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
			<ColorWinRateChart
				v-for="insight in insights"
				:key="insight.color"
				:color="insight.color"
				:name="insight.name"
				:deck-count="insight.deckCount"
				:win-rate="insight.averageWinRate"
			/>
		</UPageGrid>
	</section>
</template>
