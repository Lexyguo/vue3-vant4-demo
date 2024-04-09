import { resolve } from 'node:path'
import process from 'node:process'
import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import AutoImport from 'unplugin-auto-import/vite'
import Sitemap from 'vite-plugin-sitemap'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    base: env.VITE_APP_PUBLIC_PATH,
    plugins: [
      // https://github.com/posva/unplugin-vue-router
      VueRouter({
        extensions: ['.vue'],
        routesFolder: 'src/pages',
        dts: 'src/typed-router.d.ts',
      }),
      vue(),

      // https://github.com/jbaubree/vite-plugin-sitemap
      Sitemap(),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        extensions: ['vue'],
        resolvers: [VantResolver()],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: 'src/components.d.ts',
      }),
      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        include: [
          /\.[tj]sx?$/,
          /\.vue$/,
          /\.vue\?vue/,
        ],
        imports: [
          'vue',
          'vitest',
          '@vueuse/core',
          VueRouterAutoImports,
          {
            'vue-router/auto': ['useLink'],
          },
        ],
        dts: 'src/auto-imports.d.ts',
        dirs: [
          'src/composables',
        ],
      }),

      legacy({
        targets: ['defaults', 'not IE 11'],
      }),

    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '~': resolve(__dirname, 'src/assets'),
      },
    },
    server: {
      port: 3000,
    },
    build: {
      cssCodeSplit: false,
      chunkSizeWarningLimit: 2048,
    },
  }
}
