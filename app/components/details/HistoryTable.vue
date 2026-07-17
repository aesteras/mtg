<script setup lang="ts">
import { Temporal } from "temporal-polyfill";
import { computed } from "vue";
import type { DeckResultSummary } from "~~/types/deckData";

const props = defineProps<{
	results: DeckResultSummary[];
}>();

const rows = computed(() =>
	[...props.results]
		.sort((a, b) => Temporal.PlainDate.compare(b.date, a.date))
		.map((session) => {
			const totalGames = session.wins + session.losses;

			return {
				date: session.date.toString(),
				wins: session.wins,
				losses: session.losses,
				totalGames,
				winRate:
					totalGames === 0
						? "—"
						: `${Math.round((session.wins / totalGames) * 100)}%`,
			};
		})
);

const columns = [
	{
		accessorKey: "date",
		header: "Date",
	},
	{
		accessorKey: "wins",
		header: "Wins",
	},
	{
		accessorKey: "losses",
		header: "Losses",
	},
	{
		accessorKey: "totalGames",
		header: "Games",
	},
	{
		accessorKey: "winRate",
		header: "Win rate",
	},
];
</script>

<template>
	<section>
		<UPageHeader>
			<h2 class="text-xl font-semibold">History</h2>
		</UPageHeader>

		<UTable :columns="columns" :data="rows" />
	</section>
</template>
