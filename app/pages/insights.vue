<script setup lang="ts">
import ColorDeckCountSection from "~/components/insights/ColorDeckCountSection.vue";
import ColorWinRateSection from "~/components/insights/ColorWinRateSection.vue";
import { useDecksData } from "~/composables/useDecksData";
import { buildColorInsights } from "~/utils/buildColorInsights";

const decksData = await useDecksData();
const insights = computed(() => buildColorInsights(decksData.value));
</script>

<template>
	<UContainer class="py-8">
		<UPageHeader title="Deck insights" class="border-0">
			<template #description>
				Color distribution and average deck win rates across your collection.
			</template>
		</UPageHeader>

		<div class="space-y-12 pt-8">
			<ColorDeckCountSection :insights="insights" />
			<ColorWinRateSection :insights="insights" />
		</div>
	</UContainer>
</template>
