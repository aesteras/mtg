<script setup lang="ts">
import { Temporal } from "temporal-polyfill";
import { computed } from "vue";
import type { DeckResultSummary } from "~~/types/deckData";

const props = defineProps<{
	results: DeckResultSummary[];
}>();

const getKey = (date: Temporal.PlainDate) => date.toPlainYearMonth().toString();

const chartData = computed(() => {
	const today = Temporal.Now.plainDateISO();

	const months = [];

	for (let i = 11; i >= 0; i--) {
		const month = today.subtract({ months: i });

		months.push({
			key: getKey(month),
			label: month.toLocaleString("en", {
				month: "short",
			}),
			games: 0,
		});
	}

	const lookup = new Map(months.map((month) => [month.key, month]));

	for (const session of props.results) {
		const key = getKey(session.date);

		const month = lookup.get(key);

		if (!month) {
			continue;
		}

		month.games += session.wins + session.losses;
	}

	return months;
});

const yNumTicks = chartData.value.reduce(
	(current, session) => (session.games > current ? session.games : current),
	0
);

const categories: Record<string, BulletLegendItemInterface> = {
	games: {
		name: "Games played",
		color: "var(--ui-primary)",
	},
};

const xFormatter = (tick: number): string => {
	const month = chartData.value[tick]?.label;
	return month ? String(month) : "";
};

const tooltipTitleFormatter = (data: (typeof chartData.value)[number]) =>
	Temporal.PlainDate.from(`${data.key}-01`).toLocaleString("en", {
		month: "long",
		year: "numeric",
	});
</script>

<template>
	<section class="pb-8">
		<UPageHeader>
			<h2 class="text-xl font-semibold">Activity</h2>
		</UPageHeader>

		<AreaChart
			:data="chartData"
			:height="300"
			:categories="categories"
			:y-axis="['games']"
			:x-formatter="xFormatter"
			:x-num-ticks="12"
			:y-num-ticks="yNumTicks"
			:hide-legend="true"
			:curve-type="CurveType.Step"
			:tooltip-title-formatter="tooltipTitleFormatter"
		/>
	</section>
</template>
