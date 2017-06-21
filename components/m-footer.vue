<template>
  <section class="mobile-footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingOne">
                <h4 class="panel-title">
                  <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {{$t('footer.collapse1.name')}}
                  </a>
                </h4>
              </div>
              <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                <div class="panel-body">
                  <nuxt-link tag="a" to="">{{$t('footer.collapse1.children[0].name')}}</nuxt-link><br>
                  <nuxt-link tag="a" to="">{{$t('footer.collapse1.children[1].name')}}</nuxt-link><br>
                  <nuxt-link tag="a" to="">{{$t('footer.collapse1.children[2].name')}}</nuxt-link><br>
                  <nuxt-link tag="a" to="">{{$t('footer.collapse1.children[3].name')}}</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingTwo">
                <h4 class="panel-title">
                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    {{$t('footer.collapse2.name')}}
                  </a>
                </h4>
              </div>
              <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div class="panel-body">
                  <nuxt-link tag="a" to="">{{$t('footer.collapse2.children[0].name')}}</nuxt-link><br>
                  <nuxt-link tag="a" to="">{{$t('footer.collapse2.children[1].name')}}</nuxt-link><br>
                  <nuxt-link tag="a" to="">{{$t('footer.collapse2.children[2].name')}}</nuxt-link><br>
                  <nuxt-link tag="a" to="">{{$t('footer.collapse2.children[3].name')}}</nuxt-link>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingThree">
                <h4 class="panel-title">
                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    {{$t('footer.collapse3.name')}}
                  </a>
                </h4>
              </div>
              <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                <div class="panel-body">
                  <nuxt-link tag="a" to="">{{$t('footer.collapse3.children[0].name')}}</nuxt-link><br>
                  <nuxt-link tag="a" to="">{{$t('footer.collapse3.children[1].name')}}</nuxt-link><br>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingFour">
                <h4 class="panel-title">
                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                    {{$t('footer.collapse4.name')}}
                  </a>
                </h4>
              </div>
              <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                <div class="panel-body">
                  <nuxt-link tag="a" to="">{{$t('footer.collapse4.children[0].name')}}</nuxt-link><br>
                  <nuxt-link tag="a" to="">{{$t('footer.collapse4.children[1].name')}}</nuxt-link><br>
                  <nuxt-link tag="a" to="">{{$t('footer.collapse4.children[2].name')}}</nuxt-link><br>
                  <nuxt-link tag="a" to="">{{$t('footer.collapse4.children[3].name')}}</nuxt-link><br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 text-center m-t-lg m-b-lg">
          <button class="btn btn-link" @click="chooseLang('zh')">中文</button>
          <button class="btn btn-link" @click="chooseLang('en')">English</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import {chooseLang} from '../assets/util'
  export default{
    components: {},
    data () {
      return {}
    },
    computed: {},
    created () {

    },
    mounted () {

    },
    methods: {
      chooseLang (command) {
        chooseLang(this, command)
      }
    }
  }
</script>
<style lang="less">
  .mobile-footer{
    margin-top: 20px;


  }
</style>