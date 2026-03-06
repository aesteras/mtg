<script lang="ts" setup>
import { useDeckData } from "~/composables/useDeckData";

// Fetch data
const { data: deckInfo } = await useAsyncData(
	"deckInfo",
	() => {
		return queryCollection("deckInfo").all();
	},
	{ server: true }
);
const { data: deckResults } = await useAsyncData(
	"deckResults",
	() => {
		return queryCollection("deckResults").all();
	},
	{ server: true }
);

// TODO delete
console.log("deckInfo.value, deckResults.value:");
console.log(deckInfo.value);
console.log(deckResults.value);
// TODO end

// Initialize state
const deckData = useDeckData();
if (deckInfo.value && deckResults.value)
	deckData.value = calculateStats({
		deckInfo: deckInfo.value,
		deckResults: deckResults.value,
	});
</script>

<template>
	<UContainer class="pt-4">
		<div v-if="deckData.length == 0">No data</div>
		<div v-else>
			<DeckGrid />
		</div>
	</UContainer>
</template>
