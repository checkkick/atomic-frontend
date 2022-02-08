<script setup>
defineProps({
	text: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<div class="block">
		<h2 class="block__text">{{ text }}</h2>
		<v-icon class="block__icon"> mdi-arrow-right-circle-outline </v-icon>
	</div>
</template>

<style lang="scss" scoped>
.block {
	transition: ease-in-out 1s;
	border: $border-in-dark;
	padding: 2rem;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;
	height: 50%;
	width: 100%;
	flex-grow: 1;
	flex-basis: 50%;
	gap: 1rem;
}
.block__icon {
	color: white;
}
.block__text {
	font-size: 24px;
	line-height: 26px;
	letter-spacing: -0.05em;
	color: white;
}
.block:hover {
	background-color: black;
	color: white;
	cursor: pointer;
	.block__icon,
	.block__text {
		color: white;
	}
	.menu__icon {
		color: white;
	}
}
</style>
