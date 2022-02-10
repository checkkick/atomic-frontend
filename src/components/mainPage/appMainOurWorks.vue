<script setup>
import AppButtonComponent from '@/components/appButtonComponent.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/free-mode'

// import required modules
import { Scrollbar, FreeMode } from 'swiper'

let modules = [Scrollbar, FreeMode]

let slides = [
	{
		text: 'Pringles',
		href: 'red',
	},
	{
		text: 'Arc’teryx',
		href: 'red',
	},
	{
		text: 'Kinder',
		href: '',
	},
	{
		text: 'Pringles',
		href: 'red',
	},
	{
		text: 'Arc’teryx',
		href: 'red',
	},
	{
		text: 'Kinder',
		href: '',
	},
]
</script>

<template>
	<section class="works">
		<div class="works__title">
			<h1 class="works__title__text">Наши работы</h1>
		</div>
		<div class="works__examples">
			<swiper
				:scrollbar="{
					hide: false,
				}"
				:slides-per-view="3"
				:space-between="0"
				:modules="modules"
				:free-mode="true"
				class="swiper">
				<swiper-slide v-for="(item, idx) in slides" :key="idx" class="swiper-slide">
					<div class="swiper-slide__section">
						<h2>{{ item.text }}</h2>
						<AppButtonComponent text="Посмотреть" />
					</div>
				</swiper-slide>
			</swiper>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.works {
	width: 100%;
}
.works__title {
	padding: calc($margin-default + 1rem) $margin-default;
	border: $border-in-dark;
}
.works__title__text {
	font-size: $font-size-large + 10px;
}
.works__examples {
	width: 100%;
	display: inline-block;
	border: $border-in-dark;
}
.swiper-slide {
	transition: all 1s;
	cursor: grab;
	border-right: $border-in-dark;
}
.swiper-slide::before {
	position: absolute;
	content: '';
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: url('@/assets/background-work.svg');
	z-index: -1;
	transition: opacity 0.5s linear;
	opacity: 0;
}
.swiper-slide:hover::before {
	opacity: 1;
}
.swiper-slide__section {
	margin: $margin-default;
	min-height: 40vh;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
}
.works__examples {
	::v-deep .swiper-scrollbar {
		left: 0;
		bottom: 0;
		width: 100%;
		background: #3c3c3c;
		border-radius: 0;
	}
}
.works__examples {
	::v-deep .swiper-scrollbar-drag {
		border-radius: 0;
		background: white;
	}
}
</style>
