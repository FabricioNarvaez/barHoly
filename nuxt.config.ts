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
        { name: 'author', content: 'Fabricio Narváez'}
      ],
      link: [
        { rel: 'canonical', href: "https://www.barrestauranteholy.es/"},
        { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Bebas+Neue&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Raleway:ital,wght@0,100..900;1,100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap'}
      ]
    }
  },
  modules: ['vue3-carousel-nuxt'],
})