<script setup lang="ts">
import { useDeckData } from "~/composables/useDeckData";

const deckData = useDeckData();
deckData.value = deckData.value.sort(
	(first, second) => first.totalPlayed - second.totalPlayed
);
</script>

<template>
	<UPageGrid>
		<div v-for="(data, index) in deckData" :key="index">
			<DeckCard :data="data" />
		</div>
	</UPageGrid>
</template>
