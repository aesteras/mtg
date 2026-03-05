<script setup lang="ts">
const { totalWins, totalLosses } = defineProps<{
	totalWins: number;
	totalLosses: number;
}>();
</script>

<template>
	<div class="pt-4">
		<p>Wins: {{ totalWins }}</p>
		<p>Losses: {{ totalLosses }}</p>
	</div>
</template>

<style scoped></style>
