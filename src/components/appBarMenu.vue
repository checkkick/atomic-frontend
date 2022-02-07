<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const group = ref(null)
</script>

<template>
	<v-app-bar absolute height="150" color="transparent" class="bar-menu">
		<v-toolbar-title>
			<h2 class="margin-left-default logo-text text-gradient">ATOMIC</h2>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-app-bar-nav-icon
			size="3rem"
			class="bar-menu__icon"
			@click="drawer = !drawer"></v-app-bar-nav-icon>
	</v-app-bar>

	<v-navigation-drawer v-model="drawer" absolute temporary>
		<v-list nav dense>
			<v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
				<v-list-item>
					<v-list-item-icon>
						<v-icon>mdi-home</v-icon>
					</v-list-item-icon>
					<v-list-item-title>Home</v-list-item-title>
				</v-list-item>

				<v-list-item>
					<v-list-item-icon>
						<v-icon>mdi-account</v-icon>
					</v-list-item-icon>
					<v-list-item-title>Account</v-list-item-title>
				</v-list-item>
			</v-list-item-group>
		</v-list>
	</v-navigation-drawer>
</template>

<style lang="scss" scoped>
.bar-menu {
	color: $font-color;
}
.logo-text {
	font-weight: bold;
}
.bar-menu__icon {
	margin-right: $margin-default;
	background-color: transparent;
}
.v-btn--variant-contained {
	color: white;
}
</style>
