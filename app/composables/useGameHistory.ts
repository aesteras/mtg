import { computed } from "vue";
import { buildGameHistory } from "~/utils/buildGameHistory";
import { useDecksData } from "~/composables/useDecksData";

const HISTORY_LIMIT = 10;

export async function useGameHistory() {
	const decksData = await useDecksData();

	return computed(() => buildGameHistory(decksData.value).slice(0, HISTORY_LIMIT));
}
