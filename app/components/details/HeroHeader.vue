<script setup lang="ts">
defineProps<{
	title: string;
	image: string;
}>();
</script>

<template>
	<header class="relative h-48 md:h-64 overflow-hidden">
		<img
			:src="image"
			alt="Deck Image"
			:class="[
				'absolute',
				'inset-0',
				'w-full',
				'h-full',
				'object-cover',
				'scale-110',
				'blur-xs',
				'lg:blur-md',
				'opacity-50',
				'lg:left-auto',
				'lg:right-0',
				'lg:w-[66%]',
				'hero-mask',
			]"
		/>

		<div
			class="absolute inset-0 bg-black/30 lg:left-auto lg:right-0 lg:w-[66%] hero-mask"
		/>

		<UContainer class="relative h-full flex items-end pb-8">
			<h1 class="text-4xl font-bold">
				{{ title }}
			</h1>
		</UContainer>
	</header>
</template>

<style scoped>
.hero-mask {
	mask-image: none;
	-webkit-mask-image: none;
}

@media (min-width: 64rem) {
	.hero-mask {
		mask-image: linear-gradient(to left, black 33%, transparent);
		-webkit-mask-image: linear-gradient(to left, black 33%, transparent);
	}
}
</style>
