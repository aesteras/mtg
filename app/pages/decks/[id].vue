<script setup lang="ts">
import { useDecksData } from "~/composables/useDecksData";
import HeroHeader from "~/components/details/HeroHeader.vue";
import ActivityHistogram from "~/components/details/ActivityHistogram.vue";
import HistoryTable from "~/components/details/HistoryTable.vue";

const { params } = useRoute();
const decksData = await useDecksData();
const deckData = decksData.value.find(
	(deck) => String(deck.archidektId) === params.id
);
if (!deckData) throw new Error(`Deck ${params.id} not found`);

const archidektUrl = `https://archidekt.com/decks/${deckData.archidektId}`;
</script>

<template>
	<div v-if="deckData === undefined">No data</div>
	<div v-else>
		<HeroHeader
			:title="deckData.deckName"
			:image="`/${deckData.image}`"
			:archidekt-url="archidektUrl"
		/>
		<UContainer>
			<ActivityHistogram :results="deckData.results" />
			<HistoryTable :results="deckData.results" />
		</UContainer>
	</div>
</template>
