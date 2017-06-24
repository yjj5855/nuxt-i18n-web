<template>
  <div class="Content">
    <div class="container">
      <h1 class="Content__Title">{{ $t('home.title') }}</h1>
      <p>{{ $t('home.introduction') }}</p>
      <el-button type="primary" :plain="true">提交</el-button>
      <i class="el-icon-fa-address-book"></i>
      <i class="el-icon-iconfont-bianji"></i>
    </div>
    <div>wefwegwegjwejg</div>
    <el-tabs @tab-click="handleTabClick">
      <el-tab-pane label="WEB端" name=""></el-tab-pane>
      <el-tab-pane label="移动端" name="mobile"></el-tab-pane>
    </el-tabs>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
  // develop 修改的
  export default {
    head () {
      return {title: this.$t('home.title')}
    },
    methods: {
      handleTabClick (tab) {
        this.$router.replace()
      }
    }
  }
</script>
