<script setup lang="ts">
const {deck} = defineProps<{deck: DeckStatsCollectionItem}>();
</script>

<template>
		<p>{{deck.archidektId}}</p>
		<p>{{deck.deckName}}</p>
		<p>{{deck.image}}</p>
		<p>{{deck.colors}}</p>
		<p>--</p>
</template>
