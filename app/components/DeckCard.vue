<script setup lang="ts">
import type { DeckData } from "~~/types/deckData";

const { data } = defineProps<{
	data: DeckData;
}>();

const card = {
	title: data.deckName,
	description: `${data.totalPlayed} game${data.totalPlayed !== 1 ? "s" : ""} played`,
	to: `https://archidekt.com/decks/${data.archidektId}`,
	orientation: "vertical",
	reverse: true,
	spotlight: true,
	spotlightColor: "primary",
	variant: "subtle",
} as const;
</script>

<template>
	<UPageCard v-bind="card" :ui="{ footer: 'w-full' }">
		<template #header>
			<img
				:src="data.image"
				alt="Deck Image"
				class="h-48 w-96 object-cover overflow-hidden rounded-lg"
			>
		</template>
		<template #footer>
			<DeckColors :colors="data.colors" />
			<DeckWinRate :data="data" />
		</template>
	</UPageCard>
</template>
