<script setup lang="ts">
const { totalWins, totalLosses, totalPlayed } = defineProps<{
	totalWins: number;
	totalLosses: number;
	totalPlayed: number;
}>();

const wonPercentage =
	totalPlayed == 0 ? 0 : Math.floor((totalWins / totalPlayed) * 100);
const lostPercentage = 100 - wonPercentage;
const wonStyle = {
	width: wonPercentage + "%",
};
const lostStyle = {
	width: lostPercentage + "%;",
};
console.log({ wonStyle, lostStyle });
</script>

<template>
	<div class="pt-4">
		<p class="text-center text-sm text-muted">
			Won: {{ totalWins }} / Lost: {{ totalLosses }}
		</p>
		<div
			class="mt-2 flex flex-row w-full h-2 bg-success rounded-lg overflow-hidden"
		>
			<div v-if="totalPlayed > 0" class="h-full bg-success" :style="wonStyle" />
			<div v-if="totalPlayed > 0" class="h-full bg-error" :style="lostStyle" />
			<div v-else class="h-full w-full bg-gray-500" />
		</div>
	</div>
</template>
