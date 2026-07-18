<script setup lang="ts">
import { GroupedBar } from "@unovis/ts";
import {
	VisAxis,
	VisGroupedBar,
	VisTooltip,
	VisXYContainer,
} from "@unovis/vue";
import { MTG_COLOR_DETAILS, type ColorInsight } from "~~/types/colorInsights";

const props = defineProps<{
	insights: readonly ColorInsight[];
}>();

const xFormatter = (tick: number): string => props.insights[tick]?.name ?? "";

const yFormatter = (value: number | Date): string => String(value);

const yNumTicks = computed(
	() => Math.max(...props.insights.map((insight) => insight.deckCount)) / 2
);

const getX = (_insight: ColorInsight, index: number): number => index;

const getDeckCount = (insight: ColorInsight): number => insight.deckCount;

const getColor = (insight: ColorInsight): string =>
	MTG_COLOR_DETAILS[insight.color].chartColor;

const tooltipTriggers = {
	[GroupedBar.selectors.bar]: (insight: ColorInsight): string => {
		const deckLabel = insight.deckCount === 1 ? "deck" : "decks";

		return `${insight.name}: ${insight.deckCount} ${deckLabel}`;
	},
};
</script>

<template>
	<VisXYContainer :data="[...insights]" :height="300">
		<VisTooltip :triggers="tooltipTriggers" />
		<VisGroupedBar
			:x="getX"
			:y="getDeckCount"
			:color="getColor"
			:rounded-corners="2"
			:group-padding="0"
			:bar-padding="0.2"
		/>
		<VisAxis type="x" :tick-format="xFormatter" :num-ticks="5" />
		<VisAxis
			type="y"
			:tick-format="yFormatter"
			:num-ticks="yNumTicks"
			:grid-line="true"
		/>
	</VisXYContainer>
</template>
