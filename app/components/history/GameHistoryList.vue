<script setup lang="ts">
import type { GameHistoryEntry } from "~~/types/deckData";

defineProps<{
	entries: GameHistoryEntry[];
}>();
</script>

<template>
	<ul class="space-y-3">
		<li v-for="entry in entries" :key="entry.entryId">
			<NuxtLink
				:to="`/decks/${entry.archidektId}`"
				class="flex items-center gap-4 rounded-lg border border-default bg-elevated p-3 transition-colors hover:bg-accented"
			>
				<img
					:src="`/${entry.image}`"
					:alt="`${entry.deckName} deck`"
					class="h-14 w-20 shrink-0 rounded-md object-cover"
				/>
				<div class="min-w-0 flex-1">
					<p class="truncate font-medium">{{ entry.deckName }}</p>
					<p class="text-sm text-muted">{{ entry.date.toString() }}</p>
				</div>
				<p class="shrink-0 text-right text-sm text-muted">
					{{ entry.wins }}W / {{ entry.losses }}L
					<span class="block">{{ entry.totalGames }} games</span>
				</p>
			</NuxtLink>
		</li>
	</ul>
</template>
