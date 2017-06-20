<template>
  <div class="Content">
    <div class="container">
      <h1 class="Content__Title">{{ $t('about.title') }}</h1>
      <p>{{ $t('about.introduction') }}</p>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleTabClick">
      <el-tab-pane label="公司简介" name="/about"></el-tab-pane>
      <el-tab-pane label="发展历程" name="/dasf"></el-tab-pane>
      <el-tab-pane label="团队介绍" name="/dawqsf"></el-tab-pane>
      <el-tab-pane label="加入班步" name="/dfds"></el-tab-pane>
      <el-tab-pane label="联系我们" name="/about/contactus"></el-tab-pane>
    </el-tabs>
    <nuxt-child></nuxt-child>
  </div>
</template>
<style lang="less">

</style>
<script>
  export default {
    components: {},
    head () {
      return {title: this.$t('about.title')}
    },
    data () {
      return {
        activeName: '/about'
      }
    },
    methods: {
      handleTabClick (tab) {
        if (this.$i18n.locale === 'zh') {
          this.$router.replace(tab.name)
        } else {
          this.$router.replace(`/${this.$i18n.locale}${tab.name}`)
        }
      }
    }
  }
</script>
