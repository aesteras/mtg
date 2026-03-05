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
	description: `${totalPlayed} game${totalPlayed > 1 ? "s" : ""} played`,
	to: `https://archidekt.com/decks/${data.archidektId}`,
	orientation: "vertical",
	reverse: true,
	spotlight: true,
	spotlightColor: "primary",
	variant: "subtle",
} as const;
</script>

<template>
	<UPageCard v-bind="card" :ui="{ footer: 'w-full' }">
		<template #header>
			<img
				:src="data.image"
				alt="Deck Image"
				class="h-48 w-96 object-cover overflow-hidden rounded-lg"
			>
		</template>
		<template #footer>
			<DeckColors :colors="data.colors" />
			<DeckWinRate
				:total-wins="totalWins"
				:total-losses="totalLosses"
				:total-played="totalPlayed"
			/>
		</template>
	</UPageCard>
</template>
