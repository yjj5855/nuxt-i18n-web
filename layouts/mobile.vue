<template>
  <div>
    <pc-header></pc-header>
    <nuxt/>
    <m-footer></m-footer>
  </div>
</template>
<style lang="less" rel="stylesheet/less">

</style>
<script>
  export default{
    components: {
      'pc-header': require('~components/pc-header.vue'),
      'm-footer': require('~components/m-footer.vue'),
    },
    data () {
      return {}
    },
    computed: {},
    created () {

    },
    mounted () {

    },
    methods: {}
  }
</script>