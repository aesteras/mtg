<script lang="ts" setup>
const { data: decksInfo } = await useAsyncData("decksInfo", () => {
	return queryCollection("decksInfo").order("deckName", "ASC").all();
});

console.log({ decksInfo });
</script>

<template>
	<UContainer>
		<p>This is a body</p>
	</UContainer>
</template>
