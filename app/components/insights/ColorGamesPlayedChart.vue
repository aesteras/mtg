<script setup lang="ts">
import { GroupedBar, Orientation } from "@unovis/ts";
import {
	VisAxis,
	VisGroupedBar,
	VisTooltip,
	VisXYContainer,
} from "@unovis/vue";
import {
	orderColorInsightsByGamesPlayed,
} from "~/utils/buildColorInsights";
import { MTG_COLOR_DETAILS, type ColorInsight } from "~~/types/colorInsights";

const props = defineProps<{
	insights: readonly ColorInsight[];
}>();

const sortedInsights = computed(() => orderColorInsightsByGamesPlayed(props.insights));

const yFormatter = (tick: number): string =>
	sortedInsights.value[tick]?.name ?? "";

const xFormatter = (value: number | Date): string => String(value);

const xNumTicks = computed(() =>
	Math.max(...sortedInsights.value.map((insight) => insight.totalGamesPlayed)) / 2
);

const getY = (_insight: ColorInsight, index: number): number => index;

const getGamesPlayed = (insight: ColorInsight): number =>
	insight.totalGamesPlayed;

const getColor = (insight: ColorInsight): string =>
	MTG_COLOR_DETAILS[insight.color].chartColor;

const tooltipTriggers = {
	[GroupedBar.selectors.bar]: (insight: ColorInsight): string => {
		const gameLabel = insight.totalGamesPlayed === 1 ? "game" : "games";

		return `${insight.name}: ${insight.totalGamesPlayed} ${gameLabel}`;
	},
};
</script>

<template>
	<VisXYContainer :data="sortedInsights" :height="300">
		<VisTooltip :triggers="tooltipTriggers" />
		<VisGroupedBar
			:x="getGamesPlayed"
			:y="getY"
			:color="getColor"
			:orientation="Orientation.Horizontal"
			:rounded-corners="2"
			:group-padding="0"
			:bar-padding="0.2"
		/>
		<VisAxis
			type="x"
			:tick-format="xFormatter"
			:num-ticks="xNumTicks"
			:grid-line="false"
		/>
		<VisAxis
			type="y"
			:tick-format="yFormatter"
			:num-ticks="5"
			:grid-line="false"
		/>
	</VisXYContainer>
</template>
