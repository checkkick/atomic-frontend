<script setup></script>

<template>
	<main class="our-team flex-column">
		<div class="our-team__title">
			<h2>Наша команда</h2>
		</div>
		<section class="our-team__table flex-row">
			<div class="our-team__table__title">
				<p>Люди, благодаря которым происходит магия</p>
			</div>
			<div class="our-team__table__peoples flex-column">
				<div class="our-team__table__peoples__item flex-row">
					<div class="people flex-column">
						<img src="@/assets/about-us/ivanov.png" alt="ivanov" />
						<h4>Дмитрий Иванов</h4>
						<p class="text-gradient">CEO & founder</p>
					</div>
					<div class="people flex-column">
						<img src="@/assets/about-us/govorova.png" alt="govorova" />
						<h4>Мария Говорова</h4>
						<p class="text-gradient">Арт-директор</p>
					</div>
					<div class="people flex-column">
						<img src="@/assets/about-us/ulyibayev.png" alt="ulyibaev" />
						<h4>Ренат Улыбаев</h4>
						<p class="text-gradient">Директор по маркетингу</p>
					</div>
					<div class="people flex-column">
						<img src="@/assets/about-us/puchkova.png" alt="puchkova" />
						<h4>Елена Пучкова</h4>
						<p class="text-gradient">Ведущий дизайнер</p>
					</div>
					<div class="people flex-column">
						<img src="@/assets/about-us/govorova.png" alt="govorova" />
						<h4>Мария Говорова</h4>
						<p class="text-gradient">Арт-директор</p>
					</div>
					<div class="people flex-column">
						<img src="@/assets/about-us/ivanov.png" alt="ivanov" />
						<h4>Дмитрий Иванов</h4>
						<p class="text-gradient">CEO & founder</p>
					</div>
					<div class="people flex-column">
						<img src="@/assets/about-us/puchkova.png" alt="puchkova" />
						<h4>Елена Пучкова</h4>
						<p class="text-gradient">Ведущий дизайнер</p>
					</div>
					<div class="people flex-column">
						<img src="@/assets/about-us/ulyibayev.png" alt="ulyibaev" />
						<h4>Ренат Улыбаев</h4>
						<p class="text-gradient">Директор по маркетингу</p>
					</div>
				</div>
				<h3>Вакансии</h3>
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
.our-team {
	color: black;
	background: white;
}
.our-team__title {
	border: $border-in-light;
	padding: $margin-default;

	h2 {
		font-weight: normal;
		font-size: 48px;
		line-height: 54px;
	}
}
.our-team__table__title {
	padding: $margin-default;
	border: $border-in-light;
	flex-basis: 30%;

	p {
		font-size: 26px;
		line-height: 120%;
	}
}
.our-team__table__peoples {
	flex-grow: 1;
	flex-basis: 70%;

	h3 {
		border: $border-in-light;
		padding: $margin-default;
		font-weight: normal;
		font-size: 35px;
		line-height: 54px;
	}
}
.our-team__table__peoples__item {
	border: $border-in-light;
	padding: $margin-default;
	justify-content: space-evenly;
	gap: 3rem;

	.people {
		width: auto;
		gap: 1rem;
	}
	.people h4 {
		font-weight: normal;
		font-size: 20px;
		line-height: 120%;
	}
	.people p {
		font-weight: 600;
		font-size: 14px;
		line-height: 120%;
	}
}

@media screen and (max-width: 650px) {
	.our-team__title {
		padding: $margin-default $margin-default-mobile;
	}
	.our-team__table {
		flex-direction: column !important;
	}
	.our-team__table__title {
		padding: $margin-default $margin-default-mobile;
		flex-basis: auto;
	}
	.our-team__table__peoples {
		flex-grow: 1;
		flex-basis: auto;

		h3 {
			border: $border-in-light;
			padding: $margin-default $margin-default-mobile;
		}
	}
	.our-team__table__peoples__item {
		border: $border-in-light;
		padding: $margin-default-mobile;
		justify-content: space-evenly;
		gap: 1rem;

		.people {
			width: 100%;
		}
	}
}
</style>
