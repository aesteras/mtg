<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[] = [
	{
		label: "LinkedIn",
		to: "https://linkedin.com/in/aesteras",
		target: "_blank",
	},
	{
		label: "GitHub",
		to: "https://github.com/aesteras",
		target: "_blank",
	},
];
</script>

<template>
	<UFooter>
		<UNavigationMenu :items="items" variant="link" />
	</UFooter>
</template>
