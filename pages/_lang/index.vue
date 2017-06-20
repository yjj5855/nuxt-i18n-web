<template>
  <div class="Content">
    <div class="container">
      <h1 class="Content__Title">{{ $t('home.title') }}</h1>
      <p>{{ $t('home.introduction') }}</p>
      <el-button type="primary" :plain="true">提交</el-button>
      <i class="el-icon-fa-address-book"></i>
      <i class="el-icon-iconfont-bianji"></i>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return { title: this.$t('home.title') }
  }
}
</script>
