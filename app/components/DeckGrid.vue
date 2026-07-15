<script lang="ts" setup>
import { useDecksData } from "~/composables/useDecksData";
import type { DeckData } from "~~/types/deckData";

const deckData = useDecksData();

const sortFieldMap: Record<string, keyof DeckData> = {
	"Games Played": "totalPlayed",
	"Games Won": "totalWins",
	"Games Lost": "totalLosses",
	"Win Ratio": "wonPercentage",
} as const;
const sortItems = ref(Object.keys(sortFieldMap));
const sortValue = ref("Games Played");
const reverse = ref(false);

const sortDecks = (
	fieldKey: keyof typeof sortFieldMap,
	reverse: boolean = false
) => {
	const field = sortFieldMap[fieldKey]!;
	deckData.value = deckData.value.sort((left, right) => {
		const leftVal = Number(left[field]);
		const rightVal = Number(right[field]);
		if (reverse) return rightVal - leftVal;
		return leftVal - rightVal;
	});
};

// Set up watcher
watch([sortValue, reverse], () => sortDecks(sortValue.value, reverse.value));

// Initial sort
sortDecks("Games Played");
</script>

<template>
	<div class="flex flex-row items-center">
		<p class="text-sm mr-2">Sort:</p>
		<USelect v-model="sortValue" :items="sortItems" class="mr-2" />
		<USwitch v-model="reverse" :label="reverse ? 'Descending' : 'Ascending'" />
	</div>
	<UPageGrid class="pt-4">
		<div v-for="data in deckData" :key="data.id">
			<DeckCard :data="data" />
		</div>
	</UPageGrid>
</template>
