// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'assets/css/global.css'
  ],  
  app:{
    head: {
      title: 'Bar Holy',
      meta: [
        { name: 'description', content: 'This is description'}
      ]
    }
  }
})
