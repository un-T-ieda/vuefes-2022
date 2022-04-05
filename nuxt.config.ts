import { defineNuxtConfig } from '@nuxt/bridge'
import { generalOg, twitterOg } from './app/utils/og.constants'
import { conferenceTitle } from './app/utils/constants'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: 'app/',
  router: {
    base: '/2022/',
  },
  target: 'static',
  css: ['~/assets/main.scss'],
  head: {
    title: conferenceTitle,
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      ...generalOg(),
      ...twitterOg(),
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', sizes: '180x180', href: '/icon/apple-touch-icon.png' },
    ],
    htmlAttrs: {
      lang: 'ja',
    },
  },
  serverMiddleware: [{ path: '/api/hello', handler: '~/server/api/hello.ts' }],
  buildModules: ['@nuxtjs/device', '@nuxtjs/svg', '@nuxtjs/tailwindcss'],
  generate: {
    dir: 'dist/2022',
  },
  publicRuntimeConfig: {
    NUXT_KOKURYU_FONT_ID: process.env.NUXT_KOKURYU_FONT_ID,
  },
  build: {
    extractCSS: true,
    publicPath: '/2022/_nuxt',
  },
})
