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
	position: relative;
	background-image: none;
	z-index: 1;
	cursor: pointer;
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
.block::before {
	position: absolute;
	content: '';
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-image: $linear-gradient;
	z-index: -1;
	transition: opacity 0.5s linear;
	opacity: 0;
}
.block:hover::before {
	opacity: 1;
}
</style>
