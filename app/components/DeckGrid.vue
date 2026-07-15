<script lang="ts" setup>
import type { DeckData } from "~~/types/deckData";

const decksData = await useDecksData();

const sortFieldMap = {
	"Games Played": "totalPlayed",
	"Games Won": "totalWins",
	"Games Lost": "totalLosses",
	"Win Ratio": "wonPercentage",
} satisfies Record<string, keyof DeckData>;

const sortItems = ref(Object.keys(sortFieldMap));
const sortValue = ref<keyof typeof sortFieldMap>("Games Played");
const reverse = ref(false);

const sortedDecks = computed(() => {
	const field = sortFieldMap[sortValue.value];

	return [...(decksData.value ?? [])].sort((left, right) => {
		const diff = Number(left[field]) - Number(right[field]);
		return reverse.value ? -diff : diff;
	});
});
</script>

<template>
	<div class="flex flex-row items-center">
		<p class="text-sm mr-2">Sort:</p>
		<USelect v-model="sortValue" :items="sortItems" class="mr-2" />
		<USwitch v-model="reverse" :label="reverse ? 'Descending' : 'Ascending'" />
	</div>
	<UPageGrid class="pt-4">
		<DeckCard v-for="deck in sortedDecks" :key="deck.id" :data="deck" />
	</UPageGrid>
</template>
