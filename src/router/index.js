import appPageAboutUs from '@/views/appPageAboutUs.vue'
import appPageMain from '@/views/appPageMain.vue'
import appPageServices from '@/views/appPageServices.vue'
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
	mode: 'history',
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Main',
			component: appPageMain,
		},
		{
			path: '/services',
			name: 'Services',
			component: appPageServices,
		},
		{
			path: '/about',
			name: 'AboutUs',
			component: appPageAboutUs,
		},
	],
})
