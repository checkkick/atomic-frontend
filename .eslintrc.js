module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		'vue/setup-compiler-macros': true,
	},
	extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 13,
		sourceType: 'module',
	},
	plugins: ['vue'],
	rules: {},
}
