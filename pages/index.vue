<template>
  <div class="home">
    <div class="carousel-wrapper">
      <div class="carousel-progress-bar">
        <div class="carousel-progress-fill" :style="{ width: progressPercent + '%' }" />
      </div>
      <b-carousel
        id="carousel"
        ref="carousel"
        v-model="currentSlide"
        style="text-shadow: 1px 1px 2px #333;"
        indicators
        controls
        background="#ababab"
        :interval="0"
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          :img-src="require('~/assets/sliders/venture-transformation-pipeline.png')"
        />

        <b-carousel-slide
          :img-src="require('~/assets/sliders/tech-constellation.png')"
        />

        <b-carousel-slide
          :img-src="require('~/assets/sliders/shared-success-model.png')"
        />
      </b-carousel>

      <div class="carousel-pause-btn">
        <b-button
          variant="light"
          size="sm"
          @click="toggleCarouselPause"
        >
          <i :class="isCarouselPaused ? 'fas fa-play' : 'fas fa-pause'" />
          {{ isCarouselPaused ? 'Play' : 'Pause' }}
        </b-button>
      </div>
    </div>

    <div v-if="!isCarouselLoaded" class="loader-container">
      <div class="spinner" />
    </div>

    <div v-if="isCarouselLoaded">
      <div id="call-to-action" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
        <b-row style="padding: 20px;">
          <b-col id="cta-text" class="text-center">
            <span>SciBiz Informatics</span> is powering ventures that build a better future.
          </b-col>
        </b-row>
      </div>

      <!-- Mission Statement -->
      <div class="mission-statement" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
        <b-row>
          <b-col md="12" class="text-center">
            <h2 class="section-title">
              Our Mission
            </h2>
            <p class="mission-text">
              We transform bold ideas into scalable products that empower industries, individuals, and communities—driving the adoption of cutting-edge tools that shape the future.
            </p>
          </b-col>
        </b-row>
      </div>

      <!-- Services Section -->
      <section class="services-section">
        <b-row>
          <b-col
            md="4"
            class="card-container"
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <div class="service-card">
              <i class="fas fa-cubes service-icon" />
              <h3>Emerging Technologies</h3>
              <p>Leveraging cutting-edge technologies like blockchain, AI, and genomics to create innovative solutions for real-world challenges.</p>
            </div>
          </b-col>
          <b-col
            md="4"
            class="card-container"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <div class="service-card">
              <i class="fas fa-lightbulb service-icon" />
              <h3>Innovation Studio</h3>
              <p>Transforming bold ideas into scalable products through our highly skilled, adaptable, and challenge-driven product development team.</p>
            </div>
          </b-col>
          <b-col
            md="4"
            class="card-container"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <div class="service-card">
              <i class="fas fa-rocket service-icon" />
              <h3>Venture Building</h3>
              <p>Building and scaling ventures that empower industries and communities through technology-driven solutions.</p>
            </div>
          </b-col>
        </b-row>
      </section>

      <div class="mt-2 mb-4 text-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false">
        <b-button variant="outline-primary" to="/about" size="lg">
          Learn More About Us
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCarouselLoaded: false,
      isCarouselPaused: false,
      currentSlide: 0,
      slideCount: 3,
      slideDuration: 6000,
      progressPercent: 0,
      lastTimestamp: null,
      animationFrameId: null
    }
  },
  head () {
    return {
      title: 'SciBiz Informatics | Innovation Studio & Venture Builder',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'SciBiz Informatics is an innovation studio and venture builder focused on delivering real-world solutions through emerging technologies. We transform bold ideas into scalable products that empower industries, individuals, and communities.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'SciBiz Informatics | Innovation Studio & Venture Builder'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'SciBiz Informatics is an innovation studio and venture builder focused on delivering real-world solutions through emerging technologies. We transform bold ideas into scalable products that empower industries, individuals, and communities.'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        }
      ]
    }
  },
  mounted () {
    // Set carousel as loaded after a short delay to ensure images are loaded
    setTimeout(() => {
      this.isCarouselLoaded = true
    }, 1000)
    this.startProgressLoop()
  },
  beforeDestroy () {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId)
    }
  },
  methods: {
    startProgressLoop () {
      this.lastTimestamp = performance.now()
      this.animationFrameId = requestAnimationFrame(this.updateProgress)
    },
    updateProgress (timestamp) {
      if (!this.isCarouselPaused) {
        const elapsed = timestamp - this.lastTimestamp
        this.progressPercent += (elapsed / this.slideDuration) * 100
        if (this.progressPercent >= 100) {
          this.progressPercent = 0
          this.currentSlide = (this.currentSlide + 1) % this.slideCount
        }
      }
      this.lastTimestamp = timestamp
      this.animationFrameId = requestAnimationFrame(this.updateProgress)
    },
    toggleCarouselPause () {
      this.isCarouselPaused = !this.isCarouselPaused
      if (!this.isCarouselPaused) {
        this.progressPercent = 0
        this.currentSlide = (this.currentSlide + 1) % this.slideCount
      }
    }
  }
}
</script>

<style scoped>
::v-deep .carousel-indicators li {
  width: 12px !important;
  height: 12px !important;
  border-radius: 50% !important;
  background-color: #0044aa !important;
  opacity: 0.5 !important;
  border: 2px solid #fff !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) !important;
  margin: 0 5px !important;
}

::v-deep .carousel-indicators .active {
  opacity: 1 !important;
  background-color: #0044aa !important;
  transform: scale(1.2);
}

h1, h2, h3 {
  color: #0044aa;
}

.home {
  padding-top: 30px;
  position: relative;
}

.carousel-wrapper {
  position: relative;
}

.carousel-progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 15;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}

.carousel-progress-fill {
  height: 100%;
  background-color: #0044aa;
  transition: width 0.05s linear;
}

.carousel-pause-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 20;
}

.carousel-pause-btn .btn {
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.carousel-pause-btn .btn:hover {
  opacity: 1;
}

#carousel {
  border: 2px solid rgba(0, 68, 170, 0.2);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 68, 170, 0.1);
  overflow: visible;
  position: relative;
}

#carousel .carousel-control-prev,
#carousel .carousel-control-next,
#carousel .carousel-indicators {
  z-index: 11;
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
  padding: 20px;
}

#cta-text span {
  color: #0044aa;
  font-weight: 600;
}

/* Mission Statement */
.mission-statement {
  padding: 60px 0;
  background-color: #f8f9fa;
}

.mission-text {
  font-size: 1.25rem;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

/* New Sections Styling */
section {
  padding: 60px 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

/* Services Section */
.service-card {
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  font-size: 2.5rem;
  color: #5fbcd3;
  margin-bottom: 20px;
}

.service-card h3 {
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.service-card p {
  color: #666;
  line-height: 1.6;
}

/* Ventures Section */
.ventures-section {
  background-color: #f8f9fa;
}

.venture-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  height: 100%;
}

.venture-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.venture-content {
  padding: 20px;
  text-align: center;
}

.venture-content h3 {
  color: #333;
  margin-bottom: 15px;
}

/* Contact Section */
.contact-section {
  background: linear-gradient(rgba(0, 68, 170, 0.9), rgba(0, 68, 170, 0.9));
  color: white;
}

.contact-section .section-title {
  color: white;
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
}

.contact-email {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

.contact-email:hover {
  color: #f1f1f1;
  text-decoration: none;
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #0044aa;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.card-container {
  margin-bottom: 30px;
}

@media screen and (min-width: 768px) {
  .card-container {
    margin-bottom: 0;
  }
}
</style>
