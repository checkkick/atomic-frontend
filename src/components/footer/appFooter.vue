<script setup>
import appBlockAboutSquare from '@/components/appBlockAboutSquare.vue'
</script>

<template>
	<section class="footer-content flex-row">
		<div class="footer-content__heading flex-column">
			<h1>Напишите нам, <span class="text-gradient">мы ответим быстро</span></h1>
			<div class="footer-content__social flex-column">
				<p>Подпишись на нас</p>
				<div class="footer-content__social__links flex-row">
					<a>in</a>
					<a>fb</a>
					<a>ln</a>
					<a>be</a>
				</div>
			</div>
			<div class="footer-content__addresses flex-column">
				<p>Мы находимся по адресу</p>
				<p class="address">Москва, ул. Тверская</p>
			</div>
		</div>
		<div class="footer-content__works flex-row">
			<app-block-about-square icon="mdi-chat-outline" text="Напишите нам"></app-block-about-square>
			<app-block-about-square
				icon="mdi-phone-outline"
				text="Позвоните нам"></app-block-about-square>
			<app-block-about-square
				icon="mdi-calendar-blank-outline"
				text="Запишитесь на констультацию"></app-block-about-square>
			<app-block-about-square
				icon="mdi-send-outline"
				text="Напишите на почту"></app-block-about-square>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.footer-content {
	background: white;
	color: black;
	border: $border-in-light;
	padding-bottom: $margin-default;
}
.footer-content__heading {
	border: $border-in-light;
	padding-left: $margin-default;
	width: 40%;
	min-width: 25rem;
	justify-content: flex-end;
	gap: 15%;
	padding-bottom: $margin-default;
	flex-grow: 1;
	flex-basis: 50%;
}
.footer-content__works {
	flex-basis: 50%;
	height: 100vh;
	flex-grow: 1;
}
.footer-content__social,
.footer-content__addresses {
	gap: 1rem;
}
.footer-content__social p,
.footer-content__addresses p {
	font-weight: 300;
	font-size: $font-size-small + 3px;
	line-height: 19px;
}
.footer-content__social__links {
	cursor: pointer;
	gap: 1rem;
}
.footer-content__social__links a {
	font-weight: bold;
	font-size: $font-size-medium - 10px;
	line-height: 25px;
}
.footer-content__addresses .address {
	font-weight: bold;
	font-size: $font-size-small + 3px;
	line-height: 19px;
}

@media screen and (max-width: 650px) {
	.footer-content {
		flex-direction: column !important;
	}
	.footer-content__heading {
		border: $border-in-light;
		padding: $margin-default $margin-default-mobile;
		width: 100%;
		min-width: auto;
		justify-content: flex-end;
		gap: 4rem;
		flex-grow: 1;
		flex-basis: auto;
	}
	.footer-content__works {
		flex-basis: auto;
		height: auto;
		flex-grow: 1;
	}
}
</style>
