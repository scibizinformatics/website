<template>
  <div class="about-page">
    <div class="hero-section text-center mb-5">
      <h1 class="display-4">About SciBiz Informatics</h1>
      <div class="hero-divider"></div>
    </div>
    
    <b-row class="mb-5 intro-section">
      <b-col>
        <p class="lead">SciBiz Informatics is an innovation studio and venture builder focused on delivering real-world solutions through emerging technologies. We transform bold ideas into scalable products that empower industries, individuals, and communities—driving the adoption of cutting-edge tools that shape the future.</p>
        <div class="mission-statement text-center my-5">
          <h2 class="display-5">We don't just build software—<br>we build startups.</h2>
        </div>
        <p class="text-center">Founded in 2015 and based in Tacloban City, Philippines, SciBiz began as a custom software development company serving clients worldwide. Today, we've grown into a full-fledged venture studio that creates, builds, and launches tech startups from within.</p>
      </b-col>
    </b-row>

    <div class="section-header">
      <h3>What Sets Us Apart</h3>
      <div class="section-divider"></div>
    </div>
    <b-row class="mb-5">
      <b-col md="4" v-for="(point, index) in differentiators" :key="index">
        <b-card class="h-100 differentiator-card">
          <div class="card-icon">
            <i :class="point.icon"></i>
          </div>
          <b-card-title>{{ point.title }}</b-card-title>
          <b-card-text>{{ point.description }}</b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <div class="section-header">
      <h3>Our Team</h3>
      <div class="section-divider"></div>
    </div>
    <Team class="mb-5" />

    <div class="cta-section text-center mb-5">
      <h2 class="join-us">Join us as we shape the future—<br>one startup at a time.</h2>
    </div>

    <div class="text-center mb-5">
      <b-button variant="outline-primary" size="lg" to="/ventures">Learn More About Our Ventures</b-button>
    </div>
  </div>
</template>

<script>
import Team from '@/components/Team.vue'

export default {
  components: {
    Team
  },
  data() {
    return {
      portfolio: [
        {
          name: 'Paytaca',
          description: 'A crypto super app for peer-to-peer electronic cash'
        },
        {
          name: 'PurelyPeer',
          description: 'A geolocation game that gamifies BCH adoption'
        },
        {
          name: 'WorkHippo',
          description: 'A crypto-native freelancing platform'
        }
      ],
      differentiators: [
        {
          title: "We're founders, not just builders",
          description: 'SciBiz retains equity in the ventures we create.',
          icon: 'fas fa-lightbulb'
        },
        {
          title: 'Shared success model',
          description: 'Our employees hold shares in SciBiz, making them co-owners of every startup we launch.',
          icon: 'fas fa-handshake'
        },
        {
          title: 'Mission-driven',
          description: 'We aim to democratize technology and empower industries through decentralized, open systems.',
          icon: 'fas fa-bullseye'
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
  padding: 40px 0;
}

.hero-divider {
  width: 100px;
  height: 4px;
  background: #0044aa;
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
  background: #0044aa;
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

.card-icon {
  font-size: 2.5rem;
  color: #0044aa;
  margin-bottom: 20px;
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

@media (max-width: 768px) {
  .about-page {
    padding: 20px 15px;
  }
  
  .portfolio-card, .differentiator-card {
    margin-bottom: 15px;
  }
}
</style>
