export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SciBiz Informatics | Venture Studio in the Philippines',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'SciBiz Informatics is a leading venture studio in the Philippines. We transform bold ideas into scalable products that empower industries, individuals, and communities through emerging technologies.' },
      { hid: 'keywords', name: 'keywords', content: 'venture studio Philippines, startup studio Philippines, venture builder Philippines, innovation studio Philippines, startup builder Philippines, tech startup Philippines, venture capital Philippines, startup incubator Philippines, blockchain startup Philippines, tech innovation Philippines, Tacloban startup, Philippines venture studio' },
      { name: 'author', content: 'SciBiz Informatics Inc.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'geo.region', content: 'PH' },
      { name: 'geo.placename', content: 'Tacloban City, Philippines' },
      { name: 'geo.position', content: '11.2434;125.0050' },
      { name: 'ICBM', content: '11.2434, 125.0050' },
      // Open Graph
      { hid: 'og:site_name', property: 'og:site_name', content: 'SciBiz Informatics' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
      { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'en_PH' },
      // Twitter Card
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@scibizinfo' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@scibizinfo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' },
      { rel: 'canonical', href: 'https://www.scibizinformatics.com' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/bootstrap-vue.js', mode: 'client' },
    { src: '~/plugins/aos.client.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // SEO modules
    '@nuxtjs/sitemap'
  ],

  // Sitemap configuration
  sitemap: {
    hostname: 'https://www.scibizinformatics.com',
    gzip: true,
    exclude: [
      '/admin/**'
    ],
    defaults: {
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date()
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-recaptcha']
  }
} 