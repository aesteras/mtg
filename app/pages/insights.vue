<script setup lang="ts">
import ColorDeckCountSection from "~/components/insights/ColorDeckCountSection.vue";
import ColorGamesPlayedSection from "~/components/insights/ColorGamesPlayedSection.vue";
import ColorWinRateSection from "~/components/insights/ColorWinRateSection.vue";
import GeneralMetricsSection from "~/components/insights/GeneralMetricsSection.vue";
import { useDecksData } from "~/composables/useDecksData";
import { buildColorInsights } from "~/utils/buildColorInsights";
import { buildGeneralInsights } from "~/utils/buildGeneralInsights";

const decksData = await useDecksData();
const insights = computed(() => buildColorInsights(decksData.value));
const generalInsights = computed(() => buildGeneralInsights(decksData.value));
</script>

<template>
	<UContainer class="py-8">
		<UPageHeader title="Deck insights" class="border-0">
			<template #description>
				Play volume, color distribution, and average deck win rates across your
				collection.
			</template>
		</UPageHeader>

		<div class="space-y-12">
			<GeneralMetricsSection :insights="generalInsights" />
			<ColorGamesPlayedSection :insights="insights" />
			<ColorDeckCountSection :insights="insights" />
			<ColorWinRateSection :insights="insights" />
		</div>
	</UContainer>
</template>
