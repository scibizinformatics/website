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
        <b-col id="cta-text" class="text-center">
          <span>SciBiz Informatics</span> is helping shape a better future one venture at a time.
        </b-col>
      </b-row>
    </div>

    <!-- Mission Statement -->
    <div class="mission-statement">
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
        <b-col md="4">
          <div class="service-card">
            <i class="fas fa-cubes service-icon" />
            <h3>Emerging Technologies</h3>
            <p>Leveraging cutting-edge technologies like blockchain, AI, and genomics to create innovative solutions for real-world challenges.</p>
          </div>
        </b-col>
        <b-col md="4">
          <div class="service-card">
            <i class="fas fa-lightbulb service-icon" />
            <h3>Innovation Studio</h3>
            <p>Transforming bold ideas into scalable products through our expert team of innovators and technologists.</p>
          </div>
        </b-col>
        <b-col md="4">
          <div class="service-card">
            <i class="fas fa-rocket service-icon" />
            <h3>Venture Building</h3>
            <p>Building and scaling ventures that empower industries and communities through technology-driven solutions.</p>
          </div>
        </b-col>
      </b-row>
    </section>

    <div class="mt-2 mb-4 text-center">
      <b-button variant="outline-primary" to="/about" size="lg">
        Learn More About Us
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
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
  }
}
</script>

<style scoped>
h1, h2, h3 {
  color: #0044aa;
}

.home {
  padding-top: 30px;
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
  color: #0044aa;
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
</style>
