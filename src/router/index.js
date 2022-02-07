import appPageMain from '@/views/appPageMain.vue'
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
	],
})
