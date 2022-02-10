<script setup>
import { ref } from 'vue'
import appBlockAboutSquare from '@/components/appBlockAboutSquare.vue'

const hiddenMenu = ref(false)
</script>

<template>
	<img class="bar-image" src="@/assets/main-logo.svg" alt="main-logo" />
	<nav class="bar-menu">
		<div class="margin-left-default bar-logo">
			<h2 class="logo-text">ATOMIC</h2>
		</div>
		<v-icon size="3rem" color="white" class="bar-menu__icon" @click="hiddenMenu = !hiddenMenu">
			mdi-menu
		</v-icon>
	</nav>
	<transition name="fade">
		<section v-if="hiddenMenu" class="menu">
			<div class="menu__content flex-row">
				<div class="menu__navigation flex-column">
					<p class="menu__navigation__text">Новости</p>
					<p class="menu__navigation__text">Клиенты</p>
					<p class="menu__navigation__text">Кейсы</p>
					<p class="menu__navigation__text">Вакансии</p>
					<p class="menu__navigation__text">Контакты</p>
				</div>
				<div class="menu__about flex-row">
					<app-block-about-square
						icon="mdi-chat-outline"
						text="Напишите нам"></app-block-about-square>
					<app-block-about-square
						icon="mdi-phone-outline"
						text="Позвоните нам"
						@close="hiddenMenu = !hiddenMenu"></app-block-about-square>
					<app-block-about-square
						icon="mdi-calendar-blank-outline"
						text="Запишитесь на констультацию"></app-block-about-square>
					<app-block-about-square
						icon="mdi-send-outline"
						text="Напишите на почту"></app-block-about-square>
				</div>
			</div>
		</section>
	</transition>
</template>

<style lang="scss" scoped>
.bar-menu {
	z-index: 2;
	top: $margin-default;
	left: 3rem;
	right: $margin-default;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: $font-color;
	mix-blend-mode: difference;
}
.bar-logo {
	isolation: isolate;
	display: flex;
	align-items: center;
}
.bar-image {
	position: fixed;
	top: $margin-default;
	left: $margin-default;
	z-index: 2;
	width: 3rem;
	height: 3rem;
}
.logo-text {
	margin-left: 1rem;
	font-weight: bold;
}
.bar-menu__icon {
	cursor: pointer;
	background-color: transparent;
}
.fade-enter-active {
	animation: fade-in 0.5s;
}
.fade-leave-active {
	animation: fade-in 0.5s reverse;
}
@keyframes fade-in {
	0% {
		transform: translateY(-50%);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
}
.menu {
	z-index: 2;
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: white;
}
.menu__content {
	height: 100%;
}
.menu__navigation {
	border-right: $border-in-light;
	width: 40%;
	min-width: 25rem;
	margin-left: $margin-default;
	height: 100%;
	gap: 1rem;
	flex-grow: 1;
	justify-content: center;
}
.menu__navigation__text {
	transition: all 0.5s;
	font-weight: lighter;
	font-size: 80px;
	line-height: 90px;
	color: #000000;
}
.menu__navigation__text:hover {
	cursor: pointer;
	background: $linear-gradient;
	background-clip: text;
	-webkit-text-fill-color: transparent;
}
.menu__about {
	flex-basis: 50%;
	height: 100vh;
	flex-grow: 1;
}
</style>
