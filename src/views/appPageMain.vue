<script setup>
import AppMainAboutUs from '@/components/mainPage/appMainAboutUs.vue'
import AppMainClients from '@/components/mainPage/appMainClients.vue'
import AppMainFirstContent from '@/components/mainPage/appMainFirstContent.vue'
import AppMainOurWorks from '@/components/mainPage/appMainOurWorks.vue'
import AppMainSecondContent from '@/components/mainPage/appMainSecondContent.vue'
</script>

<template>
	<main class="flex-column">
		<AppMainFirstContent />
		<AppMainSecondContent />
		<AppMainClients />
		<AppMainOurWorks />
		<AppMainAboutUs />
	</main>
</template>

<style lang="scss" scoped></style>
