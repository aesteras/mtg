<script lang="ts" setup>
import { useDeckData } from "~/composables/useDeckData";

// Fetch data
const { data: deckInfo } = await useAsyncData("deckInfo", () => {
	return queryCollection("deckInfo").all();
});
const { data: deckResults } = await useAsyncData("deckResults", () => {
	return queryCollection("deckResults").all();
});

// TODO delete
console.log(deckInfo.value?.[0]);
console.log(deckResults.value?.[0]);
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
	<UContainer>
		<br />
		<div v-if="deckData == undefined">Undefined</div>
		<div v-else>
			<DeckGrid />
		</div>
	</UContainer>
</template>
