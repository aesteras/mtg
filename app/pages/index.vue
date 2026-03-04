<script lang="ts" setup>
const { data: deckStats } = await useAsyncData("deckStats", () => {
	return queryCollection("deckStats").order("deckName", "ASC").all();
});
</script>

<template>
	<UContainer>
		<p>This is a body</p>
		<div v-if="deckStats == undefined">Undefined</div>
		<div v-else>
			<div v-for="item in deckStats" :key="item.id">
				<DeckCard :deck-stats="item" />
				<p>--</p>
			</div>
		</div>
	</UContainer>
</template>
