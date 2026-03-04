<script lang="ts" setup>
const { data: deckStats } = await useAsyncData("deckStats", () => {
	return queryCollection("deckStats").order("deckName", "ASC").all();
});

console.log({ deckStats });
</script>

<template>
	<UContainer>
		<p>This is a body</p>
		<div v-if="deckStats == undefined">Undefined</div>
		<div v-else>
			<div v-for="item in deckStats">
				<p>{{item.archidektId}}</p>
				<p>{{item.deckName}}</p>
				<p>{{item.image}}</p>
				<p>{{item.colors}}</p>
				<p>--</p>
			</div>
		</div>
	</UContainer>
</template>
