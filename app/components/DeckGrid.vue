<script setup lang="ts">
import { useDeckData } from "~/composables/deckData";

const deckData = useDeckData();
</script>

<template>
	<UPageGrid>
		<div v-for="(data, index) in deckData" :key="index">
			<DeckCard :data="data" />
		</div>
	</UPageGrid>
</template>
