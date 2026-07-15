<script lang="ts" setup>
import { useDecksData } from "~/composables/useDecksData";

const decksData = await useDecksData();
</script>

<template>
	<UContainer class="pt-4">
		<div v-if="decksData.length == 0">No data</div>
		<div v-else>
			<DeckGrid />
		</div>
	</UContainer>
</template>
