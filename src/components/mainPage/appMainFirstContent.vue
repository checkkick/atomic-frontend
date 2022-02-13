<script setup>
import appButtonComponent from '@/components/appButtonComponent.vue'
import appMainBlockSquare from '@/components/mainPage/appMainBlockSquare.vue'
</script>

<template>
	<section class="main-content flex-row">
		<div class="main-content__heading flex-column">
			<h1>Мы помогаем брендам <span class="text-gradient">быть еще круче.</span></h1>
			<app-button-component text="Наша презентация"></app-button-component>
		</div>
		<div class="main-content__works flex-row">
			<app-main-block-square text="Ecom & digital promo"></app-main-block-square>
			<app-main-block-square text="SMM"></app-main-block-square>
			<app-main-block-square text="Digital-strategy"></app-main-block-square>
			<app-main-block-square text="Online events"></app-main-block-square>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.main-content {
	height: 100vh;
}
.main-content__heading {
	border: $border-in-dark;
	padding-left: $margin-default;
	width: 40%;
	min-width: 25rem;
	justify-content: center;
	gap: 4rem;
	flex-grow: 1;
	flex-basis: 50%;
}
.main-content__works {
	flex-basis: 50%;
	height: 100vh;
	flex-grow: 1;
}

@media screen and (max-width: 650px) {
	.main-content {
		height: 100vh;
		flex-direction: column;
	}
	.main-content__heading {
		padding: 50% $margin-default-mobile $margin-default $margin-default-mobile;
		width: 100%;
		min-width: auto;
	}
	.main-content__works {
		flex-basis: 50%;
		height: auto;
		flex-grow: 1;
	}
}
</style>
