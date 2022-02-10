<script setup>
import AppBarMenu from '@/components/barMenu/appBarMenu.vue'
import AppFooter from '@/components/footer/appFooter.vue'
</script>

<template>
	<v-app class="main-app">
		<AppBarMenu />
		<router-view />
		<AppFooter />
	</v-app>
</template>

<style lang="scss" scoped>
.main-app {
	font-family: 'Raleway', sans-serif;
	color: $font-color;
	background-color: $background-color;
}
</style>
