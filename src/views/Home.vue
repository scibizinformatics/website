<template>
  <div class="home">
    <b-carousel
      id="carousel"
      style="text-shadow: 1px 1px 2px #333;"
      indicators
      controls
      background="#ababab"
      :interval="3000"
      img-width="1024"
      img-height="480"
    >

      <b-carousel-slide
        :img-src="require('../assets/sliders/slider_1.png')"
      ></b-carousel-slide>

      <b-carousel-slide
        :img-src="require('../assets/sliders/slider_2.png')"
      ></b-carousel-slide>

     <b-carousel-slide
        :img-src="require('../assets/sliders/slider_3.png')"
      ></b-carousel-slide>

    </b-carousel>

    <div id="call-to-action">
      <b-row style="padding: 10px;">
        <b-col sm="12" md="10" id="cta-text">
          <span>SciBiz Informatics</span> is helping shape a better future a few projects at a time.
        </b-col>
        <b-col sm="12" md="2" style="padding: 10px; text-align: center;">
          <b-button variant="primary" @click="openMessenger">Talk To Us</b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openMessenger () {
      window.open('https://m.me/scibizinformatics', '_blank')
    }
  }
}
</script>

<style scoped>
#carousel h1 {
  color: black;
}
#call-to-action {
  margin-top: 20px;
  background: #f1f1f1;
  border-radius: 5px;
}
#cta-text {
  font-size: 22px;
  padding: 12px 12px 12px 30px;
}
#cta-text span {
  color: #0044aa;
  font-weight: 600;
}
</style>
