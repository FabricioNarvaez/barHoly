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
        { name: 'msapplication-TileColor', content: '#ffffff'},
        { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png'},
        { name: 'theme-color', content: '#ffffff'},
        { name: 'google-site-verification', content: 'ys6Smnq5GqG1AeUYMhgMrxG-B6jCt0ltl8M2DgNiby8'}
      ],
      link: [
        { rel: 'canonical', href: "https://www.barrestauranteholy.es/"},
        { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Bebas+Neue&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Raleway:ital,wght@0,100..900;1,100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap'},
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
        { rel: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
        { rel: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/manifest.json' },
      ]
    }
  },
  modules: ['vue3-carousel-nuxt', "@nuxt/image"],
})