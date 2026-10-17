<script setup lang="ts">
const navigation = [
	{ label: "History", to: "/history" },
	{ label: "Insights", to: "/insights" },
] as const;
</script>

<template>
	<UHeader>
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
				/>
			</nav>
		</template>
	</UHeader>
</template>
