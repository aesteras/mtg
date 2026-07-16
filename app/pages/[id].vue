<script setup lang="ts">
import { useDecksData } from "~/composables/useDecksData";

const { params } = useRoute();
const decksData = await useDecksData();
const deckData = decksData.value.find(
	(deck) => String(deck.archidektId) === params.id
);
</script>

<template>
	<div v-if="deckData === undefined">No data</div>
	<div v-else>
		<HeroHeader :title="deckData.deckName" :image="deckData.image" />
		<UContainer>
			<!--placeholder data-->
			<p>archidektId: {{ deckData.archidektId }}</p>
			<p>deckName: {{ deckData.deckName }}</p>
			<p>image: {{ deckData.image }}</p>
			<p>colors: {{ deckData.colors }}</p>
			<p>id: {{ deckData.id }}</p>
			<p>results: {{ deckData.results }}</p>
			<p>totalWins: {{ deckData.totalWins }}</p>
			<p>totalLosses: {{ deckData.totalLosses }}</p>
			<p>totalPlayed: {{ deckData.totalPlayed }}</p>
			<p>wonPercentage: {{ deckData.wonPercentage }}</p>
		</UContainer>
	</div>
</template>
