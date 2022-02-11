<script setup>
import { ref } from 'vue'
import appBlockAboutSquare from '@/components/appBlockAboutSquare.vue'
import { useRouter } from 'vue-router'

const hiddenMenu = ref(false)
const router = useRouter()

function routerPush(path) {
	hiddenMenu.value = false
	router.push(path)
	window.scrollTo(0, 0)
}
</script>

<template>
	<nav class="bar-menu">
		<img class="bar-image" src="@/assets/main-logo.svg" alt="main-logo" @click="routerPush('/')" />
		<v-icon size="3rem" color="white" class="bar-menu__icon" @click="hiddenMenu = !hiddenMenu">
			mdi-menu
		</v-icon>
	</nav>
	<transition name="fade">
		<section v-if="hiddenMenu" class="menu">
			<v-icon size="3rem" class="menu__icon" @click="hiddenMenu = !hiddenMenu"> mdi-close </v-icon>
			<div class="menu__content flex-row">
				<div class="menu__navigation flex-column">
					<p class="menu__navigation__text">Новости</p>
					<p class="menu__navigation__text" @click="routerPush('/about')">О нас</p>
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
						text="Позвоните нам"></app-block-about-square>
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
	left: $margin-default - 5px;
	right: $margin-default;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: $font-color;
	mix-blend-mode: difference;
}
.bar-image {
	cursor: pointer;
	width: 100%;
	max-width: 137px;
	max-height: 35.64px;
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

.menu__icon {
	mix-blend-mode: difference;
	cursor: pointer;
	position: absolute;
	top: $margin-default;
	right: $margin-default;
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
	font-weight: 300;
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
