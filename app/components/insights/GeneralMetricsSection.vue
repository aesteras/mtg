<script setup lang="ts">
import type { GeneralInsights } from "~~/types/generalInsights";

const props = defineProps<{
	insights: GeneralInsights;
}>();

const formattedAverageGamesPerWeek = computed(() =>
	props.insights.averageGamesPerWeek.toFixed(1)
);

const formattedOverallWinRate = computed(
	() => `${Math.round(props.insights.overallWinRate)}%`
);
</script>

<template>
	<section>
		<UPageHeader class="border-0">
			<h2 class="text-xl font-semibold">General metrics</h2>
			<p class="text-muted">A snapshot of your recorded play history.</p>
		</UPageHeader>

		<UPageGrid class="grid-cols-1 sm:grid-cols-3">
			<UPageCard title="Total games logged" variant="subtle">
				<p class="text-3xl font-semibold">{{ insights.totalGamesPlayed }}</p>
			</UPageCard>
			<UPageCard title="Average games per week" variant="subtle">
				<p class="text-3xl font-semibold">{{ formattedAverageGamesPerWeek }}</p>
			</UPageCard>
			<UPageCard title="Overall win ratio" variant="subtle">
				<p class="text-3xl font-semibold">{{ formattedOverallWinRate }}</p>
			</UPageCard>
		</UPageGrid>
	</section>
</template>
