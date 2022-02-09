<script setup>
import appButtonComponent from '@/components/appButtonComponent.vue'
</script>

<template>
	<section class="content flex-row">
		<div class="directions flex-column">
			<img class="directions__image" src="@/assets/directions.svg" alt="" />
		</div>
		<div class="services flex-column">
			<h2 class="services__text text-gradient">
				Мы занимаемся комплексным развитием вашего бизнеса онлайн.
			</h2>
			<app-button-component text="Наши услуги"></app-button-component>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.content {
	height: 70vh;
	gap: 10rem;
	border: $border-in-dark;
}
.directions {
	padding-left: $margin-default;
	justify-content: center;
	flex-grow: 1;
	flex-basis: 40%;
}
.directions__image {
	height: 100%;
	width: 80%;
}
.services {
	padding-right: $margin-default;
	justify-content: center;
	flex-grow: 1;
	flex-basis: 40%;
	gap: 4rem;
}
.services__text {
	width: 80%;
	font-weight: normal;
	font-size: 40px;
	line-height: 36px;
	letter-spacing: -0.05em;
}
</style>
