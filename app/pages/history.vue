<script setup lang="ts">
import GameHistoryList from "~/components/history/GameHistoryList.vue";
import { useGameHistory } from "~/composables/useGameHistory";

const gameHistory = await useGameHistory();
</script>

<template>
	<UContainer class="py-4">
		<UPageHeader
			title="Game History"
			description="The 10 most recent recorded play sessions across all decks."
		/>

		<div v-if="gameHistory.length === 0" class="pt-6 text-muted">
			No game history yet.
		</div>
		<GameHistoryList v-else :entries="gameHistory" class="pt-6" />
	</UContainer>
</template>
