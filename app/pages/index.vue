<script lang="ts" setup>
import type { DeckData } from "~~/types/deckData";
import type {
	DeckInfoCollectionItem,
	DeckResultsCollectionItem,
} from "@nuxt/content";
import { useDeckData } from "~/composables/deckData";

// Fetch data
const { data: deckInfo } = await useAsyncData("deckInfo", () => {
	return queryCollection("deckInfo").order("deckName", "ASC").all();
});
const { data: deckResults } = await useAsyncData("deckResults", () => {
	return queryCollection("deckResults").all();
});

// Build maps with paths as keys
const extractPath = (stem: string): string =>
	stem.substring(0, stem.lastIndexOf("/"));
const deckInfoMap: Map<string, DeckInfoCollectionItem> = new Map(
	deckInfo.value?.map((info) => [extractPath(info.stem), info])
);
const deckResultsMap: Map<string, DeckResultsCollectionItem["body"]> = new Map(
	deckResults.value?.map((results) => [extractPath(results.stem), results.body])
);

// Merge data
const mergedData: DeckData[] = Array.of(
	...deckInfoMap.keys().map((key) => {
		const info = deckInfoMap.get(key)!;
		const results = deckResultsMap.get(key) ?? [];
		return { ...info, results };
	})
);

// Initialize state
const deckData = useDeckData();
await callOnce(async () => {
	deckData.value = mergedData;
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
