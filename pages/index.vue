<template>
  <div class="home">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title" data-aos="fade-up" data-aos-duration="800">
          From Bold Ideas into<br>Scalable Ventures
        </h1>
        <p class="hero-subtitle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          We build, launch, scale, and succeed.
        </p>
        <div class="hero-ctas" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <b-button variant="primary" size="lg" to="/ventures" class="mr-3">
            Explore Ventures
          </b-button>
          <b-button variant="outline-primary" size="lg" to="/about">
            Learn More
          </b-button>
        </div>

        <div class="hero-stats" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
          <div class="stat-item">
            <div class="stat-number">2015</div>
            <div class="stat-label">Founded</div>
          </div>
          <div class="stat-divider" />
          <div class="stat-item">
            <div class="stat-number">6+</div>
            <div class="stat-label">Ventures Built</div>
          </div>
          <div class="stat-divider" />
          <div class="stat-item">
            <div class="stat-number">₱50M+</div>
            <div class="stat-label">Raised</div>
          </div>
        </div>
      </div>
</section>

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
  padding-top: 0;
  position: relative;
}

.hero-section {
  background: #fff;
  padding: 100px 20px 80px;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #0044aa;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #495057;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
}

.hero-ctas {
  margin-bottom: 3rem;
}

.hero-ctas .btn {
  padding: 0.75rem 2rem;
  font-weight: 500;
  min-width: 160px;
}

.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #5fbcd3;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #0044aa;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: #dee2e6;
}

.mission-statement {
  padding: 60px 0 80px;
  background-color: #f8f9fa;
}

.mission-text {
  font-size: 1.25rem;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

section {
  padding: 60px 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

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

.card-container {
  margin-bottom: 30px;
}

@media screen and (min-width: 768px) {
  .card-container {
    margin-bottom: 0;
  }
}

@media screen and (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }

  .stat-divider {
    width: 40px;
    height: 1px;
  }

  .stat-number {
    font-size: 2rem;
  }

  .hero-ctas .btn {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
  }

  .hero-ctas .mr-3 {
    margin-right: 0 !important;
  }
}
</style>
