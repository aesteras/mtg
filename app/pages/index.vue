<script lang="ts" setup>
const { data: decksInfo } = await useAsyncData("authors", () => {
	return queryCollection("decksInfo").order("name", "DESC").all();
});

console.log({ decksInfo });
</script>

<template>
	<UContainer>
		<p>This is a body</p>
	</UContainer>
</template>
