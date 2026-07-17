<script setup lang="ts">
import { useDecksData } from "~/composables/useDecksData";
import HeroHeader from "~/components/details/HeroHeader.vue";

const { params } = useRoute();
const decksData = await useDecksData();
const deckData = decksData.value.find(
	(deck) => String(deck.archidektId) === params.id
);
const archidektLink = `https://archidekt.com/decks/${deckData?.archidektId}`;
</script>

<template>
	<div v-if="deckData === undefined">No data</div>
	<div v-else>
		<HeroHeader :title="deckData.deckName" :image="`/${deckData.image}`" />
		<UContainer>
			<!--placeholder data-->
			<p>
				<span>Archidekt link: </span>
				<NuxtLink :to="archidektLink" color="primary">{{ archidektLink }}</NuxtLink>
			</p>
			<p>results: {{ deckData.results }}</p>
			<p>image: {{ deckData.image }}</p>
			<p>total wins: {{ deckData.totalWins }}</p>
			<p>total losses: {{ deckData.totalLosses }}</p>
			<p>total played: {{ deckData.totalPlayed }}</p>
			<p>win percentage: {{ deckData.wonPercentage }}</p>
		</UContainer>
	</div>
</template>
