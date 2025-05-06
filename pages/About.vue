<template>
  <div class="about-page">
    <div class="hero-section text-center mb-5" data-aos="fade-down">
      <h1 class="display-4" style="color: #0044aa;">
        About Us
      </h1>
      <div class="hero-divider" />
    </div>

    <b-row class="mb-5 intro-section" data-aos="fade-up">
      <b-col>
        <p class="lead">
          SciBiz Informatics is an innovation studio and venture builder focused on delivering real-world solutions through emerging technologies. We transform bold ideas into scalable products that empower industries, individuals, and communities—driving the adoption of cutting-edge tools that shape the future.
        </p>
        <div class="mission-statement text-center my-5" data-aos="zoom-in" data-aos-delay="200">
          <h2 class="display-5" style="color: #0044aa;">
            We don't just build software—<br>we build startups.
          </h2>
        </div>
        <p class="text-center">
          Founded in 2015 and based in Tacloban City, Philippines, SciBiz began as a custom software development company serving clients worldwide. Today, we've grown into a full-fledged venture studio that creates, builds, and launches tech startups from within.
        </p>
      </b-col>
    </b-row>

    <div class="mission-vision-section mb-5">
      <b-row>
        <b-col md="6" class="mb-4" data-aos="fade-right">
          <div class="mission-card">
            <h3 class="section-title" style="color: #0044aa;">
              Mission
            </h3>
            <p>To build transformative solutions with real-world impact—empowering individuals, businesses, and communities through accessible, tech-driven innovation.</p>
          </div>
        </b-col>
        <b-col md="6" class="mb-4" data-aos="fade-left">
          <div class="vision-card">
            <h3 class="section-title" style="color: #0044aa;">
              Vision
            </h3>
            <p>To become a leading force in tech innovation, shaping a future where emerging technologies are seamlessly woven into everyday life—fostering a more equitable, free, and interconnected global society.</p>
          </div>
        </b-col>
      </b-row>
    </div>

    <div class="section-header" data-aos="fade-up">
      <h3 style="color: #0044aa;">What Sets Us Apart</h3>
      <div class="section-divider" />
    </div>
    <b-row class="mb-5">
      <b-col
        v-for="(point, index) in differentiators"
        :key="index"
        md="4"
        class="differentiator-container"
        :data-aos="index === 0 ? 'fade-right' : index === 1 ? 'fade-up' : 'fade-left'"
        :data-aos-delay="index * 100"
      >
        <b-card class="h-100 differentiator-card">
          <b-card-title>{{ point.title }}</b-card-title>
          <b-card-text>{{ point.description }}</b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <div class="section-header" data-aos="fade-up">
      <h3>Our Team</h3>
      <div class="section-divider" />
    </div>
    <Team class="mb-5" data-aos="fade-up" />

    <div class="cta-section text-center mb-5" data-aos="zoom-in">
      <h2 class="join-us">
        Join us as we shape the future—<br>one venture at a time.
      </h2>
    </div>

    <div class="text-center" data-aos="fade-up">
      <b-button variant="outline-primary" size="lg" to="/ventures">
        Learn More About Our Ventures
      </b-button>
    </div>
  </div>
</template>

<script>
import Team from '@/components/Team.vue'

export default {
  components: {
    Team
  },
  data () {
    return {
      differentiators: [
        {
          title: "We're founders, not just builders",
          description: 'SciBiz maintains significant equity stakes in all our ventures, ensuring long-term alignment of interests and commitment to their success. This founder-first approach means we\'re deeply invested in every project\'s growth and sustainability, not just its initial development.'
        },
        {
          title: 'Shared success model',
          description: 'Our employees hold meaningful equity in SciBiz, creating a powerful alignment of interests across the entire organization. This unique structure ensures that every team member shares in the success of our ventures, fostering a culture of ownership, innovation, and long-term commitment to our collective mission.'
        },
        {
          title: 'Mission-driven',
          description: 'We invest in technologies and ideas we deeply believe in, particularly those that challenge the status quo. Our focus is on bringing innovative, non-mainstream solutions to the forefront, acting as a catalyst for their adoption and integration into everyday life.'
        }
      ]
    }
  },
  head () {
    return {
      title: 'About Us | SciBiz Informatics',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Learn about SciBiz Informatics, an innovation studio and venture builder based in Tacloban City, Philippines. Discover our mission, vision, and what sets us apart in the tech industry.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'About Us | SciBiz Informatics'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Learn about SciBiz Informatics, an innovation studio and venture builder based in Tacloban City, Philippines. Discover our mission, vision, and what sets us apart in the tech industry.'
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
.about-page {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-section {
  position: relative;
  padding: 10px 0;
}

.hero-divider {
  width: 100px;
  height: 4px;
  background: #5fbcd3;
  margin: 20px auto;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-header h3 {
  color: #0044aa;
  font-size: 2rem;
  margin-bottom: 15px;
}

.section-divider {
  width: 60px;
  height: 3px;
  background: #5fbcd3;
  margin: 0 auto;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
}

.mission-statement {
  padding: 30px;
  background: rgba(0, 68, 170, 0.05);
  border-radius: 10px;
  margin: 40px 0;
}

.mission-vision-section {
  padding: 20px;
}

.mission-card, .vision-card {
  background: rgba(0, 68, 170, 0.05);
  padding: 30px;
  border-radius: 10px;
  height: 100%;
  transition: all 0.3s ease;
}

.mission-card:hover, .vision-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
}

.section-title {
  color: #0044aa;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.mission-card p, .vision-card p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
}

.portfolio-card, .differentiator-card {
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  margin-bottom: 20px;
  height: 100%;
  padding: 20px;
  text-align: center;
}

.portfolio-card:hover, .differentiator-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.2);
}

.portfolio-card .card-title {
  color: #0044aa;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.differentiator-card .card-title {
  color: #0044aa;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.join-us {
  color: #0044aa;
  font-weight: 300;
  font-style: italic;
  margin: 2rem 0;
  line-height: 1.4;
}

.cta-section {
  padding: 40px;
  background: rgba(0, 68, 170, 0.05);
  border-radius: 10px;
}

.differentiator-container {
  margin-bottom: 30px;
}

@media screen and (min-width: 768px) {
  .differentiator-container {
    margin-bottom: 0;
  }
}

h1, h2, h3 {
  color: #0044aa;
}

.hero-section h1 {
  color: #0044aa;
}

.mission-statement h2 {
  color: #0044aa;
}

.section-header h3 {
  color: #0044aa;
  font-size: 2rem;
  margin-bottom: 15px;
}

.section-title {
  color: #0044aa;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.portfolio-card .card-title {
  color: #0044aa;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.differentiator-card .card-title {
  color: #0044aa;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.join-us {
  color: #0044aa;
  font-weight: 300;
  font-style: italic;
  margin: 2rem 0;
  line-height: 1.4;
}
</style>
