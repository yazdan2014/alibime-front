require('dotenv').config()

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: 'true',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** server config
   */
  server: {
    port: process.env.SITE_NUXT_PORT,
    host: process.env.SITE_NUXT_HOST,
    // timing: {
    //   total: true,
    // },
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s',
    title: 'علی‌بیمه',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'enamad', content: '320516' },
      {
        hid: 'description',
      name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.11.2/css/all.css',
      },
    ],
    script: [
      {
        src: `${process.env.SITE_ADDRESS}js/core/popper.min.js`,
        body: true,
      },
      {
        src: `${process.env.SITE_ADDRESS}js/core/bootstrap.min.js`,
        body: true,
      },
      {
        src: `${process.env.SITE_ADDRESS}js/plugins/choices.min.js`,
        body: true,
      },
      {
        src: `${process.env.SITE_ADDRESS}js/material-kit-pro.min.js?v=3.0.0`,
        body: true,
      },
      {
        src: `${process.env.SITE_ADDRESS}js/plugins/perfect-scrollbar.min.js`,
        body: true,
      },
      {
        src: `${process.env.SITE_ADDRESS}js/plugins/prism.min.js`,
        body: true,
      },
      {
        src: `${process.env.SITE_ADDRESS}js/plugins/anime.min.js`,
        body: true,
      },
      {
        src: `${process.env.SITE_ADDRESS}js/custom.js`,
        body: true,
      },
      { src: 'https://kit.fontawesome.com/42d5adcbca.js' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/node_modules/bootstrap/dist/css/bootstrap.css',
    '~/assets/css/material-kit-pro.css',
    '~/assets/css/nucleo-icons.css',
    '~/assets/css/nucleo-svg.css',
    // '~/assets/css/material-kit-pro.min.css',
    // '~/assets/scss/material-kit-pro.scss',
  ],

  styleResources: {
    sass: '@/assets/scss/*.sass',
    // scss: '~/assets/scss/material-kit-pro.scss',
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#08bcc0' },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/base',
    '~/plugins/notifier.js',
    '~/plugins/mhandler.js',
    '~/plugins/enums.js',
    '~/plugins/api.js',
    // { src: '~/plugins/jpicker.js', mode: 'client' },
    '~/plugins/pretty.js',
    '~/plugins/misc.js',
    // '~/static/js/core/bootstrap.min.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment',
    '@nuxtjs/dotenv',
    '@alireza-ab/vue-persian-datepicker/nuxt',
    'nuxt-moment-jalaali',
  ],
  moment: {
    defaultLocale: 'fa',
    locales: ['fa'],
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-currency-input/nuxt',
    '@nuxtjs/style-resources',
    'nuxt-material-design-icons',
  ],
  sitemap: {
    hostname: 'https://alibime.co',
    gzip: true,
    exclude: ['/secret', '/admin'],
    routes: [
      '/page/1',
      '/page/2',
      {
        url: '/page/3',
        changefreq: 'daily',
        priority: 1,
        lastmod: '2017-06-30T13:30:00.000Z',
      },
    ],
  },
  bootstrapVue: {
    icons: true,
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: { baseURL: process.env.API_BASE_URL },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
     compact: true,
    },
   },
  /*
   ** env file
   */
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    APP_VERSION: process.env.npm_package_version,
  },
}
