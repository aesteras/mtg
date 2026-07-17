import type { DeckData } from "~~/types/deckData";
import { calculateStats } from "~/utils/calculateStats";

export async function useDecksData() {
	const state = useState<DeckData[]>("decksData", () => []);

	if (state.value.length === 0) {
		const { data, error } = await useAsyncData("decksData", async () => {
			const [deckInfo, deckResults] = await Promise.all([
				queryCollection("deckInfo").all(),
				queryCollection("deckResults").all(),
			]);

			return calculateStats({
				deckInfo,
				deckResults,
			});
		});

		if (error.value) throw error.value;

		state.value = data.value!;
	}

	return state;
}
