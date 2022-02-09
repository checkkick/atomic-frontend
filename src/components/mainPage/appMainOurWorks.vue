<script setup>
let model = 0
let colors = ['primary', 'secondary', 'yellow darken-2', 'red', 'orange']
</script>

<template>
	<section class="works">
		<div class="works__title">
			<h1 class="works__title__text">Наши работы</h1>
		</div>
		<div class="works__examples">
			<v-carousel v-model="model">
				<v-carousel-item v-for="(color, i) in colors" :key="color">
					<v-sheet :color="color" height="100%" tile>
						<v-row class="fill-height" align="center" justify="center">
							<div class="text-h2">Slide {{ i + 1 }}</div>
						</v-row>
					</v-sheet>
				</v-carousel-item>
			</v-carousel>
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
	border: $border-in-dark;
}
</style>
