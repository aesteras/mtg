<script setup lang="ts">
import ColorGamesPlayedChart from "~/components/insights/ColorGamesPlayedChart.vue";
import type { ColorInsight } from "~~/types/colorInsights";

defineProps<{
	insights: readonly ColorInsight[];
}>();
</script>

<template>
	<section>
		<UPageHeader class="border-0">
			<h2 class="text-xl font-semibold">Games played by color</h2>
			<p class="text-muted">
				Games played with decks that include each color.
			</p>
		</UPageHeader>

		<ColorGamesPlayedChart :insights="insights" />
	</section>
</template>
