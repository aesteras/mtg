<script setup lang="ts">
const { colors } = defineProps<{
	colors: string;
}>();
</script>

<template>
	<div class="flex flex-row">
		<img v-if="colors.includes('w')" src="/Mana_W.png" alt="W" class="size-8 mr-2" />
		<img v-if="colors.includes('u')" src="/Mana_U.png" alt="U" class="size-8 mr-2" />
		<img v-if="colors.includes('b')" src="/Mana_B.png" alt="B" class="size-8 mr-2" />
		<img v-if="colors.includes('r')" src="/Mana_R.png" alt="R" class="size-8 mr-2" />
		<img v-if="colors.includes('g')" src="/Mana_G.png" alt="G" class="size-8 mr-2" />
		<img v-if="colors.includes('c')" src="/Mana_C.png" alt="C" class="size-8 mr-2" />
	</div>
</template>
