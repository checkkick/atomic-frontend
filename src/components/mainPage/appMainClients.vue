<script setup></script>

<template>
	<section class="clients">
		<div class="clients__title">
			<h1 class="clients__title__text">Наши клиенты</h1>
		</div>
		<div class="clients__logo flex-row">
			<img src="@/assets/client-logo/yandex-taxi.png" alt="yandex-taxi" />
			<img src="@/assets/client-logo/duracell.png" alt="duracell" />
			<img src="@/assets/client-logo/ferrero.png" alt="ferrero" />
			<img src="@/assets/client-logo/kinder.png" alt="kinder" />
		</div>
	</section>
</template>

<style lang="scss" scoped>
.clients {
	width: 100%;
}
.clients__title {
	padding: calc($margin-default + 1rem) $margin-default;
	border: $border-in-dark;
}
.clients__title__text {
	font-size: $font-size-large + 10px;
}
.clients__logo {
	justify-content: space-between;
	padding: $margin-default;
	border: $border-in-dark;
}

@media screen and (max-width: 650px) {
	.clients__title {
		padding: $margin-default $margin-default-mobile;
	}
	.clients__title__text {
		font-size: $font-size-large - 30px;
	}
	.clients__logo {
		flex-direction: column;
		gap: 3rem;
		justify-content: center;
		padding: $margin-default;
	}
}
</style>
