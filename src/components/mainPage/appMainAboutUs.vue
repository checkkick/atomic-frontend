<script setup>
import AppButtonComponent from '@/components/appButtonComponent.vue'
</script>

<template>
	<section class="about-us flex-column">
		<h1 class="about-us__text">О нас в цифрах</h1>
		<div class="about-us__digits flex-row">
			<div class="about-us__digits__content">
				<h2 class="about-us__digits__content__title">601</h2>
				<p>lorem ipsum</p>
			</div>
			<div class="about-us__digits__content">
				<h2 class="about-us__digits__content__title">14</h2>
				<p>lorem ipsum</p>
			</div>
			<div class="about-us__digits__content">
				<h2 class="about-us__digits__content__title">105</h2>
				<p>lorem ipsum</p>
			</div>
		</div>
		<AppButtonComponent style="mix-blend-mode: normal" text="Подробнее" />
	</section>
</template>

<style lang="scss" scoped>
.about-us {
	border: $border-in-dark;
	justify-content: space-evenly;
	align-items: center;
	background: url('@/assets/linear-backgound.png') no-repeat;
	background-size: cover;
	padding: $margin-default 0;
	gap: $margin-default;
}
.about-us__text {
	font-size: $font-size-medium;
	line-height: $line-height-large;
}
.about-us__digits {
	width: 100%;
	justify-content: space-evenly;
	padding: $margin-default 0;
	border-top: 1px solid #d5ace2;
	border-bottom: 1px solid #d5ace2;
}
.about-us__digits__content {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
}
.about-us__digits__content__title {
	font-size: $font-size-large + 60px;
	line-height: $line-height-large;
}
</style>
