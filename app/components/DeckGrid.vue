<script setup lang="ts">
import { useDeckData } from "~/composables/useDeckData";

const deckData = useDeckData();

const sortItems = ref([
	"Total Played",
	"Total Wins",
	"Total Losses",
	"Won Percentage",
	"Lost Percentage",
]);
const sortValue = ref("Total Played");
const reverse = ref(false);

deckData.value = deckData.value.sort(
	(first, second) => first.totalPlayed - second.totalPlayed
);
</script>

<template>
	<div class="flex flex-row items-center">
		<p class="text-sm mr-2">Sort:</p>
		<USelect v-model="sortValue" class="mr-2" :items="sortItems" />
		<USwitch v-model="reverse" label="Reversed" />
	</div>
	<UPageGrid class="pt-4">
		<div v-for="(data, index) in deckData" :key="index">
			<DeckCard :data="data" />
		</div>
	</UPageGrid>
</template>
