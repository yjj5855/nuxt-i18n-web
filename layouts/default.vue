<template>
  <div>
    <header class="Header">
      <div class="container">
        <h1 class="Header__Title">Nuxt i18n</h1>
        <nav class="Header__Menu">
          <nuxt-link class="Header__Link" :to="path('/')" exact>
            {{ $t('links.home') }}
          </nuxt-link>
          <nuxt-link class="Header__Link" :to="path('/about')" exact>
            {{ $t('links.about') }}
          </nuxt-link>
          <el-dropdown @command="handleCommand">
            <span class="el-button el-button--text">
              {{$i18n.locale}} <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="item in $store.state.locales" :key="item" :command="item">{{item}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!--<nuxt-link class="Header__Link" v-if="$i18n.locale === 'zh'" :to="`/fr` + $route.fullPath" active-class="none" exact>-->
            <!--{{ $t('links.french') }}-->
          <!--</nuxt-link>-->
          <!--<nuxt-link class="Header__Link" v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>-->
            <!--{{ $t('links.english') }}-->
          <!--</nuxt-link>-->
        </nav>
      </div>
    </header>
    <nuxt/>
  </div>
</template>

<script>
export default {
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

<style>
*, *:before, *:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html, body {
  background-color: #fff;
  color: #2e2f30;
  letter-spacing: 0.5px;
  font-size: 18px;
  font-family: "Source Sans Pro", Arial, sans-serif;
  height: 100vh;
  margin: 0;
}
.container {
  width: 75%;
  margin: 0 auto;
}
.container:after {
  content: "";
  display: table;
  clear: both;
}
.Header {
  color: #fff;
  height: 80px;
  line-height: 80px;
  background-color: #2e2f30;
}
.Header__Title {
  float: left;
  font-weight: 300;
  font-size: 30px;
}
.Header__Menu {
  float: right;
}
.Header__Link {
  font-size: 16px;
  color: #fff;
  border: 1px solid #fff;
  padding: 7px 12px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 5px;
  margin-left: 10px;
}
.Header__Link:hover {
  color: #2e2f30;
  background-color: #fff;
}
.nuxt-link-active {
  color: cyan;
}
.Content {
  padding: 50px 0;
  text-align: center;
}
.Content__Title {
  font-weight: 300;
  padding-bottom: 30px;
}
</style>
