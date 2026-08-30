export default defineNuxtConfig({
  app: {
    head: {
      // eg: '%s | Moonhea的微博',
      // titleTemplate: '%s | Moonhea的微博',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Nuxt.js project' }
      ],
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: '/css/font-Noto-Sans-SC.css' },
        { rel: 'stylesheet', href: '/css/style.css?2021-11-16' },
        { rel: 'stylesheet', href: '/font-awesome/css/font-awesome.min.css'},
      ],
      script: [
        { src: '/js/statcounter.js?2022-01-29'},
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2790001673900763',
          'crossorigin': 'anonymous',
          'async':true
        }
      ]
    },
  },
  //if you will deploy in <username>.github.io/<my-project>
  //then base should be set to "/<my-project>/"
  router: {
    base: '/'
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxtjs/eslint-module',
    '@nuxtjs/html-validator',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  content: {
    markdown: {
      prism: {//need to create folder and import manually
        theme: 'prism-themes/themes/prism-ghcolors.css'
      }
    }
  },
  server: {
    port: 3000, // default: 3000
    host: 'localhost', // default: localhost
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
})