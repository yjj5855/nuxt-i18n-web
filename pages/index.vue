<template>
  <div>
    <div id="inSlider" class="carousel carousel-fade" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#inSlider" data-slide-to="0" class="active"></li>
        <li data-target="#inSlider" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <div class="container">
            <div class="carousel-caption">
              <h1>We craft<br/>
                brands, web apps,<br/>
                and user interfaces<br/>
                we are IN+ studio</h1>
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
              <p>
                <a class="btn btn-lg btn-primary" href="#" role="button">READ MORE</a>
                <a class="caption-link" href="#" role="button">Inspinia Theme</a>
              </p>
            </div>
            <div class="carousel-image wow zoomIn">
              <img src="img/laptop.png" alt="laptop"/>
            </div>
          </div>
          <!-- Set background for slide in css -->
          <div class="header-back one"></div>

        </div>
        <div class="item">
          <div class="container">
            <div class="carousel-caption blank">
              <h1>We create meaningful <br/> interfaces that inspire.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
              <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
            </div>
          </div>
          <!-- Set background for slide in css -->
          <div class="header-back two"></div>
        </div>
      </div>
      <a class="left carousel-control" href="#inSlider" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#inSlider" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <section id="features" class="container services">
      <div class="row">
        <div class="col-sm-3">
          <h2>Full responsive</h2>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
          <p><a class="navy-link" href="#" role="button">Details &raquo;</a></p>
        </div>
        <div class="col-sm-3">
          <h2>LESS/SASS Files</h2>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
          <p><a class="navy-link" href="#" role="button">Details &raquo;</a></p>
        </div>
        <div class="col-sm-3">
          <h2>6 Charts Library</h2>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
          <p><a class="navy-link" href="#" role="button">Details &raquo;</a></p>
        </div>
        <div class="col-sm-3">
          <h2>Advanced Forms</h2>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
          <p><a class="navy-link" href="#" role="button">Details &raquo;</a></p>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="less" rel="stylesheet/less">

</style>
<script>
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
    methods: {}
  }
</script>