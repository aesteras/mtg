<script setup lang="ts">
import { useDecksData } from "~/composables/useDecksData";
import HeroHeader from "~/components/details/HeroHeader.vue";
import UsageHistogram from "~/components/details/UsageHistogram.vue";

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
			<UsageHistogram :results="deckData.results" />
			<!--placeholder data-->
			<p>results: {{ deckData.results }}</p>
		</UContainer>
	</div>
</template>
