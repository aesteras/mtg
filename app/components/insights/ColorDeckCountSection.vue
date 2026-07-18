<script setup lang="ts">
import ColorDeckCountChart from "~/components/insights/ColorDeckCountChart.vue";
import type { ColorInsight } from "~~/types/colorInsights";

defineProps<{
	insights: readonly ColorInsight[];
}>();
</script>

<template>
	<section>
		<UPageHeader class="border-0">
			<h2 class="text-xl font-semibold">Decks by color</h2>
			<p class="text-muted">Number of decks that include each color.</p>
		</UPageHeader>

		<ColorDeckCountChart :insights="insights" />
	</section>
</template>
