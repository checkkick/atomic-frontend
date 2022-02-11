<script setup>
import AppOurTeam from '@/components/aboutUs/appOurTeam.vue'
import AppButtonComponent from '@/components/appButtonComponent.vue'
</script>

<template>
	<main class="about flex-column">
		<section class="about__title flex-column">
			<h1 class="about__title__text">
				Мы создаем проекты, которые <br />
				<span class="text-gradient">говорят на языке своих клиентов.</span>
			</h1>
			<img class="about__title__image" src="@/assets/about-us/about-title.png" alt="about-title" />
			<div class="priorities flex-row">
				<div class="priorities__item flex-column">
					<h2>Наши приоритеты</h2>
				</div>
				<div class="priorities__item flex-column">
					<h3>Любить то, что делаешь</h3>
					<p>Все в нашей команде увлечённыеи влюблённые в свою работу профессионалы.</p>
				</div>
				<div class="priorities__item flex-column">
					<h3>Учиться всегда и везде</h3>
					<p>Мы не стоим на месте и покоряем всё новые и новые вершины.</p>
				</div>
				<div class="priorities__item flex-column">
					<h3>Клиенты для нас — это друзья</h3>
					<p>
						Поддержим во всех начинаниях и стремлениях, внимательно выслушаем и ответим на любой
						вопрос.
					</p>
				</div>
				<div class="priorities__item flex-column">
					<h3>Смотреть в будущее</h3>
					<p>Работая над задачами, используем инновационные методы и создаём актуальные проекты.</p>
				</div>
				<div class="priorities__item flex-column">
					<h3>Делиться опытом</h3>
					<p>
						Мы всегда рады поделиться своей экспертизой в той или иной области и готовы к
						сотрудничеству.
					</p>
				</div>
			</div>
		</section>
		<section class="free-audit flex-column">
			<h2>Ваш бренд уже запущен <br /><span class="text-gradient">в активную работу?</span></h2>
			<AppButtonComponent text="Получите бесплатный аудит" />
		</section>
		<AppOurTeam />
		<section class="about__disclaimer flex-column">
			<h2>Знаем, что делаем и делаем то, что знаем</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>
		</section>
	</main>
</template>

<style lang="scss" scoped>
.about {
	background: $background-color;
	padding-top: $margin-default * 3;
	width: 100%;
	min-height: 60vh;
}
.about__title__text {
	padding-bottom: $margin-default;
	padding-left: $margin-default;
}
.about__title__image {
	background-size: cover;
	border: $border-in-dark;
}
.priorities {
	h2 {
		font-weight: normal;
		font-size: 48px;
		line-height: 54px;
	}
}
.priorities__item {
	border: $border-in-dark;
	padding: $margin-default;
	flex-grow: 1;
	flex-basis: 33%;
	gap: 3rem;

	h3 {
		font-weight: normal;
		font-size: 36px;
		line-height: 110%;
		letter-spacing: -0.05em;
	}

	p {
		font-size: 18px;
		line-height: 120%;
	}
}
.free-audit {
	border: $border-in-dark;
	padding: $margin-default;
	gap: $margin-default;
	align-items: center;

	h2 {
		font-size: 50px;
		line-height: 45px;
		text-align: center;
	}
}
.about__disclaimer {
	padding: $margin-default * 3 $margin-default;
	gap: 2rem;
	background: url('@/assets/about-us/disclaimer.png') no-repeat;
	background-size: cover;

	h2 {
		max-width: 40rem;
		font-weight: normal;
		font-size: 70px;
		line-height: 73px;
		color: #f2f2f2;
	}
	p {
		max-width: 40rem;
		font-size: 23px;
		line-height: 110%;
		color: #f2f2f2;
	}
}
</style>
