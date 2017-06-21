<template>
  <div>
    <pc-header></pc-header>
    <nuxt/>
    <pc-footer></pc-footer>
  </div>
</template>
<script>
  export default {
    components: {
      'pc-header': require('~components/pc-header.vue'),
      'pc-footer': require('~components/pc-footer.vue')
    },
    methods: {
      path (url) {
        return (this.$i18n.locale === 'zh' ? url : '/' + this.$i18n.locale + url)
      },
      handleCommand (command) {
        const fullPath = this.$route.fullPath.replace(/^\/[^\/]+/, '')
        switch (command) {
          case 'zh':
            this.$router.push(fullPath ? fullPath : '/')
            break
          default:
            let full = this.$route.fullPath
            let paths = full.match(/^\/[^\/]+/)
            if (paths && paths.length > 0) {
              let path = paths[0].replace(/\//, '')
              if (this.$store.state.locales.indexOf(path) >= 0) {
                this.$router.push(`/${command}${fullPath}`)
              } else {
                this.$router.push(`/${command}${full}`)
              }
            } else {
              this.$router.push(`/${command}${fullPath}`)
            }
            break
        }
      },
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
</style>
