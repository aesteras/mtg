<template>
	<UHeader>
		<template #title>
			<img src="/logo.svg" alt="logo" class="h-8 w-auto" />
			<h1>Deck Tracker</h1>
		</template>
		<template #right>
			<UButton to="/insights" variant="ghost" label="Insights" />
			<UColorModeButton style="cursor: pointer" />
		</template>
	</UHeader>
</template>
