<script lang="ts" setup>
const { data: decksInfo } = await useAsyncData("decksInfo", () => {
	return queryCollection("decksInfo").order("deckName", "ASC").all();
});

console.log({ decksInfo });
</script>

<template>
	<UContainer>
		<p>This is a body</p>
		<div v-if="decksInfo == undefined">Undefined</div>
		<div v-else>
			<div v-for="item in decksInfo">
				<p>{{item.archidektId}}</p>
				<p>{{item.deckName}}</p>
				<p>{{item.image}}</p>
				<p>{{item.colors}}</p>
				<p>--</p>
			</div>
		</div>
	</UContainer>
</template>
