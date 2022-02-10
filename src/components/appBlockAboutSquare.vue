<script setup>
defineProps({
	text: {
		type: String,
		default: '',
	},
	icon: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<div class="block">
		<v-icon class="block__icon"> {{ icon }} </v-icon>
		<p class="block__text">{{ text }}</p>
	</div>
</template>

<style lang="scss" scoped>
.block {
	transition: all 0.5s;
	border: $border-in-light;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;
	height: 50%;
	width: 100%;
	flex-grow: 1;
	flex-basis: 50%;
	gap: 1rem;
}
.block__icon {
	color: black;
}
.block__text {
	font-size: 24px;
	line-height: 26px;
	letter-spacing: -0.05em;
	color: black;
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
