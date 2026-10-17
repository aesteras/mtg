<script setup lang="ts">
const route = useRoute();
const isMenuOpen = ref(false);

const navigation = [
	{ label: "History", to: "/history" },
	{ label: "Insights", to: "/insights" },
] as const;

function closeMenu() {
	isMenuOpen.value = false;
}
</script>

<template>
	<UHeader v-model:open="isMenuOpen">
		<template #title>
			<img src="/logo.svg" alt="logo" class="h-8 w-auto" />
			<h1>Deck Tracker</h1>
		</template>
		<template #right>
			<UButton
				v-for="item in navigation"
				:key="item.to"
				v-bind="item"
				variant="ghost"
				class="hidden lg:inline-flex"
				:aria-current="route.path === item.to ? 'page' : undefined"
			/>
			<UColorModeButton style="cursor: pointer" />
		</template>
		<template #body>
			<nav class="flex flex-col gap-2" aria-label="Primary navigation">
				<UButton
					v-for="item in navigation"
					:key="item.to"
					v-bind="item"
					variant="ghost"
					class="w-full justify-start"
					:aria-current="route.path === item.to ? 'page' : undefined"
					@click="closeMenu"
				/>
			</nav>
		</template>
	</UHeader>
</template>
