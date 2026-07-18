<script setup lang="ts">
import { VisDonut, VisSingleContainer } from "@unovis/vue";
import { MTG_COLOR_DETAILS, type MtgColor } from "~~/types/colorInsights";

const props = defineProps<{
	color: MtgColor;
	name: string;
	deckCount: number;
	winRate: number;
}>();

const FULL_CIRCLE_ANGLE = Math.PI * 2;
const backgroundAngleRange: [number, number] = [0, FULL_CIRCLE_ANGLE];

const progressAngleRange = computed<[number, number]>(() => [
	0,
	(FULL_CIRCLE_ANGLE * Math.min(Math.max(props.winRate, 0), 100)) / 100,
]);

const formattedWinRate = computed(() => `${Math.round(props.winRate)}%`);
</script>

<template>
	<UPageCard :title="name" variant="subtle">
		<div class="relative h-45 win-rate-ring">
			<VisSingleContainer :data="[1]" :height="180">
				<VisDonut
					:value="1"
					:color="MTG_COLOR_DETAILS[color].chartColor"
					:angle-range="progressAngleRange"
					:background-angle-range="backgroundAngleRange"
					:show-background="true"
					:corner-radius="99"
					:arc-width="20"
				/>
			</VisSingleContainer>
			<span
				class="absolute inset-0 flex items-center justify-center text-2xl font-semibold pointer-events-none"
			>
				{{ formattedWinRate }}
			</span>
		</div>

		<p class="mt-3 text-center text-sm text-muted">
			{{ deckCount }} deck{{ deckCount === 1 ? "" : "s" }} included
		</p>
	</UPageCard>
</template>

<style scoped>
.win-rate-ring {
	--vis-donut-background-color: var(--ui-bg-accented);
	--vis-dark-donut-background-color: var(--ui-bg-accented);
}
</style>
