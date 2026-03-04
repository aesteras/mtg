<script setup lang="ts">
import type { DeckStats } from "~~/schema/deckStatsSchema";

const { deckStats } = defineProps<{ deckStats: DeckStats }>();
</script>

<template>
	<p>{{ deckStats.archidektId }}</p>
	<p>{{ deckStats.deckName }}</p>
	<p>{{ deckStats.image }}</p>
	<p>{{ deckStats.colors }}</p>
</template>
