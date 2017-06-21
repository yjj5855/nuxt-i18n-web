module.exports = {
  build: {
    vendor: ['axios', 'vue-i18n'],
    externals: {
      jquery: 'window.$'
    }
  },
  router: {
    middleware: 'i18n'
  },
  plugins: [
    // Will inject the plugin in the $root app and also in the context as `i18n`
    { src: '~plugins/i18n.js', injectAs: 'i18n' }
  ],
  loading: { color: '#1ab394' },
  head: {
    title: '班步官网',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: 'js/jquery-2.1.1.js' },
      { src: 'js/bootstrap.min.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'css/animate.min.css' },
      { rel: 'stylesheet', href: 'font-awesome/css/font-awesome.min.css' }
    ]
  },
  css: [
    '~static/css/style.less'
  ]
}