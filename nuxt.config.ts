// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['./assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode'
  ],
  googleFonts: {
    families: {
      Oswald: [400, 700]
    },
    display: 'swap'
  },
  tailwindcss: {
    exposeConfig: true
  }
})