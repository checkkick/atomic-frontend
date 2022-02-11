<script setup>
let peoples = [
	{
		name: 'Дмитрий Иванов',
		text: 'CEO & founder',
		image: './src/assets/about-us/ivanov.png',
	},
	{
		name: 'Мария Говорова',
		text: 'Арт-директор',
		image: './src/assets/about-us/govorova.png',
	},
	{
		name: 'Ренат Улыбаев',
		text: 'Директор по маркетингу',
		image: './src/assets/about-us/ulyibayev.png',
	},
	{
		name: 'Елена Пучкова',
		text: 'Ведущий дизайнер',
		image: './src/assets/about-us/puchkova.png',
	},
	{
		name: 'Мария Говорова',
		text: 'Арт-директор',
		image: './src/assets/about-us/govorova.png',
	},
	{
		name: 'Дмитрий Иванов',
		text: 'CEO & founder',
		image: './src/assets/about-us/ivanov.png',
	},
	{
		name: 'Елена Пучкова',
		text: 'Ведущий дизайнер',
		image: './src/assets/about-us/puchkova.png',
	},
	{
		name: 'Ренат Улыбаев',
		text: 'Директор по маркетингу',
		image: './src/assets/about-us/ulyibayev.png',
	},
]
</script>

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
					<div v-for="(item, idx) in peoples" :key="idx" class="people flex-column">
						<img :src="item.image" alt="" />
						<h4>{{ item.name }}</h4>
						<p class="text-gradient">{{ item.text }}</p>
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
</style>
