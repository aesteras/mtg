<script lang="ts" setup>
import { useDecksData } from "~/composables/useDecksData";

const { data, error } = await useAsyncData("deckData", async () => {
	const [deckInfo, deckResults] = await Promise.all([
		queryCollection("deckInfo").all(),
		queryCollection("deckResults").all(),
	]);

	return calculateStats({
		deckInfo,
		deckResults,
	});
});

if (!data.value) throw error;

const decksData = useDecksData();
decksData.value = data.value;
</script>

<template>
	<UContainer class="pt-4">
		<div v-if="decksData.length == 0">No data</div>
		<div v-else>
			<DeckGrid />
		</div>
	</UContainer>
</template>
