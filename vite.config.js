import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
import path from 'path'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslintPlugin(),
		// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
		vuetify({
			autoImport: true,
		}),
	],
	define: { 'process.env': {} },
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	/* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ]
  },
  */
})
