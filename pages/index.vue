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
        :img-src="require('~/assets/sliders/slider_1.png')"
      />

      <b-carousel-slide
        :img-src="require('~/assets/sliders/slider_2.png')"
      />

      <b-carousel-slide
        :img-src="require('~/assets/sliders/slider_3.png')"
      />
    </b-carousel>

    <div id="call-to-action">
      <b-row style="padding: 20px;">
        <b-col id="cta-text" sm="12" md="9">
          <span>SciBiz Informatics</span> is helping shape a better future one venture at a time.
        </b-col>
        <b-col sm="12" md="3" style="padding: 10px; text-align: center;">
          <b-button variant="outline-primary" to="/about">
            Learn More About Us
          </b-button>
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
  },
  head () {
    return {
      title: 'SciBiz Informatics | Innovation Studio & Venture Builder',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'SciBiz Informatics is an innovation studio and venture builder focused on delivering real-world solutions through emerging technologies. We transform bold ideas into scalable products.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'SciBiz Informatics | Innovation Studio & Venture Builder'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'SciBiz Informatics is an innovation studio and venture builder focused on delivering real-world solutions through emerging technologies. We transform bold ideas into scalable products.'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  padding-top: 20px;
}
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
