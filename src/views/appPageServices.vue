<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/free-mode'

// import required modules
import { Scrollbar, FreeMode } from 'swiper'

let modules = [Scrollbar, FreeMode]
</script>

<template>
	<main class="services flex-column">
		<div class="services__title">
			<h1>Наши услуги</h1>
			<h1 class="text-gradient">Чем мы занимаемся</h1>
		</div>
		<div class="services__examples">
			<swiper
				:scrollbar="{
					hide: false,
				}"
				:breakpoints="{
					0: {
						slidesPerView: 1,
					},
					650: {
						slidesPerView: 3.5,
					},
				}"
				:space-between="0"
				:modules="modules"
				:free-mode="true"
				class="swiper">
				<swiper-slide class="swiper-slide">
					<div class="swiper-slide__section">
						<img src="@/assets/services-images/service-1.png" alt="service-1" />
						<div class="swiper-slide__section__text">
							<h2>Digital strategy</h2>
							<p>Разрабатываем долгосрочные и краткосрочные стратегические планы.</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="swiper-slide">
					<div class="swiper-slide__section">
						<img src="@/assets/services-images/service-2.png" alt="service-2" />
						<div class="swiper-slide__section__text">
							<h2>Ecom & digital promo</h2>
							<p>Анализируем статистику и разрабатываем стратегию увеличения продаж.</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="swiper-slide">
					<div class="swiper-slide__section">
						<img src="@/assets/services-images/service-3.png" alt="service-3" />
						<div class="swiper-slide__section__text">
							<h2>SMM</h2>
							<p>Используем социальные сети для достижения максимального результата.</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="swiper-slide">
					<div class="swiper-slide__section">
						<img src="@/assets/services-images/service-1.png" alt="service-1" />
						<div class="swiper-slide__section__text">
							<h2>Online events</h2>
							<p>Организовываем онлайн-трансляции, виртуальные конференции и форумы.</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="swiper-slide">
					<div class="swiper-slide__section">
						<img src="@/assets/services-images/service-2.png" alt="service-2" />
						<div class="swiper-slide__section__text">
							<h2>Ecom & digital promo</h2>
							<p>Анализируем статистику и разрабатываем стратегию увеличения продаж.</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="swiper-slide">
					<div class="swiper-slide__section">
						<img src="@/assets/services-images/service-3.png" alt="service-3" />
						<div class="swiper-slide__section__text">
							<h2>SMM</h2>
							<p>Используем социальные сети для достижения максимального результата.</p>
						</div>
					</div>
				</swiper-slide>
			</swiper>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.services {
	color: black;
	padding-top: $margin-default * 3;
	background: white;
}
.services__title {
	padding-left: $margin-default;
}
.services__examples {
	width: 100%;
	margin: $margin-default 0 0 0;
	display: inline-block;
}
.swiper {
	padding-bottom: 6rem;
}
.swiper-slide {
	transition: all 1s;
	cursor: grab;
	border: $border-in-light;
}
.swiper-slide__section {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
.swiper-slide__section img {
	align-self: center;
	width: 100%;
}
.swiper-slide__section__text {
	min-height: 25vh;
	margin: $margin-default;
	font-weight: 300;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	& p {
		font-size: 19px;
		line-height: 120%;
	}
}
.services__examples {
	::v-deep .swiper-scrollbar {
		left: 0;
		bottom: 3rem;
		height: 1px;
		width: 100%;
		background: #c7c7c7;
		border-radius: 0;
	}
}
.services__examples {
	::v-deep .swiper-scrollbar-drag {
		border-radius: 0;
		top: -1px;
		height: 3px;
		background: #3c3c3c;
	}
}

@media screen and (max-width: 650px) {
	.services {
		padding-top: $margin-default * 2;
	}
	.services__title {
		padding-left: $margin-default-mobile;
	}
	.swiper-slide__section__text {
		min-height: auto;
		height: 12rem;
		margin: $margin-default-mobile;
		font-weight: 300;
		gap: 2rem;
		justify-content: center;
	}
}
</style>
