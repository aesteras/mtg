<script setup lang="ts">
import type { DeckData } from "~~/types/deckData";

const { data } = defineProps<{
	data: DeckData;
}>();

const totalWins = data.results
	.map(({ result }) => result.replace("l", "").length)
	.reduce((acc, cur) => acc + cur, 0);
const totalLosses =
	data.results
		.map(({ result }) => result.length)
		.reduce((acc, cur) => acc + cur, 0) - totalWins;
const totalPlayed = totalLosses + totalWins;

const card = {
	title: data.deckName,
	description: `colors: ${data.colors}, wins: ${totalWins}, losses: ${totalLosses}, played: ${totalPlayed}`,
	to: `https://archidekt.com/decks/${data.archidektId}`,
	orientation: "vertical",
	reverse: true,
	spotlight: true,
	spotlightColor: "primary",
} as const;
</script>

<template>
	<UPageCard v-bind="card">
		<img
			:src="data.image"
			alt="Deck Image"
			class="h-48 w-96 object-cover object-[0%_25%] overflow-hidden rounded-lg"
		/>
	</UPageCard>
</template>
