<template>
  <div class="navbar-wrapper" :class="theme">
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header page-scroll">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <nuxt-link tag="a" class="navbar-brand" to="/">Banbu 班步</nuxt-link>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><nuxt-link tag="a" class="page-scroll" to="/m">移动版</nuxt-link></li>
            <li><nuxt-link tag="a" class="page-scroll" to="/">{{$t('links.link1')}}</nuxt-link></li>
            <li><nuxt-link tag="a" class="page-scroll" to="/">{{$t('links.link2')}}</nuxt-link></li>
            <li><nuxt-link tag="a" class="page-scroll" to="/">{{$t('links.link3')}}</nuxt-link></li>
            <li><nuxt-link tag="a" class="page-scroll" to="/">{{$t('links.link4')}}</nuxt-link></li>
            <li><nuxt-link tag="a" class="page-scroll" to="/">{{$t('links.link5')}}</nuxt-link></li>
            <li><nuxt-link tag="a" class="page-scroll" to="/">{{$t('links.link6')}}</nuxt-link></li>
            <li><nuxt-link tag="a" class="page-scroll" to="/">{{$t('links.link7')}}</nuxt-link></li>
            <li class="navbar-btns hidden-sm">
              <button class="btn btn-ghost">{{$t('links.btn-login')}}</button>
              <button class="btn btn-solid">{{$t('links.btn-signin')}}</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    components: {},
    data () {
      return {
        scrollTop: '',
        theme: 'transparent' // transparent or white
      }
    },
    computed: {
    },
    created () {

    },
    mounted () {
      $(window).on('scroll', this.handleScroll)
    },
    methods: {
      handleScroll (e) {
        this.scrollTop = $(window).scrollTop()
        if (this.scrollTop > 70) {
          this.theme = 'white'
        } else {
          this.theme = 'transparent'
        }
        console.log(this.scrollTop)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import (reference) "~static/css/style";
  @media (min-width: 768px) {
    .container-fluid{
      padding-left: 40px;
      padding-right: 40px;
    }
  }
  .navbar-btns{
    margin-top: 15px;
    margin-left: 50px;

    .btn{
      min-width: 88px;
    }
    .btn + .btn {
      margin-left: 20px;
    }
  }
  .btn-ghost{
    color: #fff;
    background-color: transparent;
    border-color: #fff;
  }
  .btn-solid{
    color: #fff;
    background-color: @navy;
    border-color: @navy;
  }
  .navbar-wrapper.white{
    .navbar {
      background-color: #fff;
    }
    .nav li a {
      color: #676a6c;
    }
    .nav li .btn-ghost{
      color: @navy;
      background-color: #fff;
      border-color: @navy;
    }
  }
</style>