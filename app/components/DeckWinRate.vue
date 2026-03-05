<script setup lang="ts">
import type { DeckData } from "~~/types/deckData";

const { data } = defineProps<{
	data: DeckData;
}>();

const wonStyle = {
	width: data.wonPercentage + "%",
};
const lostStyle = {
	width: data.lostPercentage + "%;",
};
</script>

<template>
	<div class="pt-4">
		<p class="text-center text-sm text-muted">
			Won: {{ data.totalWins }} / Lost: {{ data.totalLosses }}
		</p>
		<div
			class="mt-2 flex flex-row w-full h-2 bg-success rounded-lg overflow-hidden"
		>
			<div
				v-if="data.totalPlayed > 0"
				class="h-full bg-success"
				:style="wonStyle"
			/>
			<div
				v-if="data.totalPlayed > 0"
				class="h-full bg-error"
				:style="lostStyle"
			/>
			<div v-else class="h-full w-full bg-gray-500" />
		</div>
	</div>
</template>
