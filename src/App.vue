<script setup>
import appBarMenu from '@/components/appBarMenu.vue'
</script>

<template>
	<v-app class="main-app">
		<appBarMenu />
		<router-view />
	</v-app>
</template>

<style lang="scss" scoped>
.main-app {
	color: $font-color;
	background-color: $background-color;
}
</style>
