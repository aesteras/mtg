<script lang="ts" setup>
import { useDeckData } from "~/composables/useDeckData";
import type { DeckData } from "~~/types/deckData";

const deckData = useDeckData();

const sortFieldMap: Record<string, keyof DeckData> = {
	"Total Played": "totalPlayed",
	"Total Wins": "totalWins",
	"Total Losses": "totalLosses",
	"Won Percentage": "wonPercentage",
	"Lost Percentage": "lostPercentage",
} as const;
const sortItems = ref(Object.keys(sortFieldMap));
const sortValue = ref("Total Played");
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
sortDecks("Total Played");
</script>

<template>
	<div class="flex flex-row items-center">
		<p class="text-sm mr-2">Sort:</p>
		<USelect v-model="sortValue" :items="sortItems" class="mr-2" />
		<USwitch v-model="reverse" label="Reversed" />
	</div>
	<UPageGrid class="pt-4">
		<div v-for="data in deckData" :key="data.id">
			<DeckCard :data="data" />
		</div>
	</UPageGrid>
</template>
