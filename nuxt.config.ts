// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
  css: ['bootstrap/dist/css/bootstrap.min.css'], // add
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
