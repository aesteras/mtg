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
const PROGRESS_START_ANGLE = -0.0001;
const RING_SIZE = 180;
const backgroundAngleRange: [number, number] = [0, FULL_CIRCLE_ANGLE];

const progressAngleRange = computed<[number, number]>(() => [
	PROGRESS_START_ANGLE,
	PROGRESS_START_ANGLE +
		(FULL_CIRCLE_ANGLE * Math.min(Math.max(props.winRate, 0), 100)) / 100,
]);

const formattedWinRate = computed(() => `${Math.round(props.winRate)}%`);
</script>

<template>
	<UPageCard :title="name" variant="subtle">
		<div class="flex h-45 justify-center">
			<div class="relative size-45 win-rate-ring">
				<VisSingleContainer :data="[1]" :width="RING_SIZE" :height="RING_SIZE">
					<VisDonut
						:value="1"
						:color="MTG_COLOR_DETAILS[color].chartColor"
						:angle-range="progressAngleRange"
						:background-angle-range="backgroundAngleRange"
						:show-background="true"
						:corner-radius="10"
						:arc-width="20"
					/>
				</VisSingleContainer>
				<span
					class="absolute inset-0 flex items-center justify-center text-2xl font-semibold pointer-events-none"
				>
					{{ formattedWinRate }}
				</span>
			</div>
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
