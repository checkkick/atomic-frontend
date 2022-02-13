<script setup>
import appButtonComponent from '@/components/appButtonComponent.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function routerPush() {
	router.push('/services')
	window.scrollTo(0, 0)
}
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
			<app-button-component text="Наши услуги" @click="routerPush()"></app-button-component>
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
	max-height: 80%;
	max-width: 80%;
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

@media screen and (max-width: 650px) {
	.content {
		flex-direction: column;
		height: auto;
		gap: 1rem;
		padding-bottom: 2rem;
	}
	.services {
		padding: 0 $margin-default-mobile;
		flex-basis: 100%;
		gap: 2rem;
	}
	.services__text {
		width: 100%;
		font-weight: normal;
		font-size: 40px;
		line-height: 43px;
	}
}
</style>
