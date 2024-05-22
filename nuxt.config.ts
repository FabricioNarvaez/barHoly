// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    'assets/css/global.css'
  ],

  app:{
    head: {
      title: 'Bar Restaurant Holy | Bar Restaurante en San Juan',
      meta: [
        { name: 'description', content: 'Descubre nuestro exquisito menú, ambiente acogedor y servicio excepcional. ¡Haz de cada visita una ocasión memorable en el corazón de la ciudad!'},
        { name: 'robots', content: 'index, follow'},
        { name: 'author', content: 'Fabricio Narváez'},
      ]
    }
  },
  modules: ['vue3-carousel-nuxt'],
})