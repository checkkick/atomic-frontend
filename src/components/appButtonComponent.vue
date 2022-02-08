<script setup>
defineProps({
	text: {
		type: String,
		default: 'button text',
	},
})
</script>

<template>
	<button class="button">
		<div class="button__content">
			<p class="button__content__text">{{ text }}</p>
			<v-icon class="button__content__icon"> mdi-arrow-right-circle-outline </v-icon>
		</div>
	</button>
</template>

<style lang="scss" scoped>
.button {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	border: 1px solid #ffffff;
	width: fit-content;
	height: 3rem;
	padding: 0 2rem;
	border-radius: 24px;
}
.button__content {
	display: flex;
	align-items: center;
	gap: 1rem;
}
.button__content__icon {
	color: white;
}
</style>
