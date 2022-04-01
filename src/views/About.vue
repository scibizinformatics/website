<template>
  <b-container>
    <b-row style="margin-top: 20px;">
      <b-col>
        <h2>About Us</h2>
      </b-col>
    </b-row>
    <b-row style="margin-top: 20px;">
      <b-col>
        <p>SciBiz Informatics is a software development company founded in 2015 based in Tacloban City, Philippines.</p>
        <p>We build custom software for modern web browsers and mobile devices. We have been building software programs for clients from all over the world (mostly from US, Europe, and Australia).</p>
        <p>Our main technology stack is Python or Go in the backend and Javascript + HTML + CSS on the frontend. We deploy our applications to the cloud using Google Cloud Platform, Amazon Web Services, or DigitalOcean.</p>
        <p>We follow agile methodology and can adopt test-driven development and continuous integration/deployment for large scale projects.</p>
        <p>Our work philosophy is client-centered and goal-driven. We strive to always deeply understand the overall goals of our client for every project we do and focus our efforts on achieving those goals.</p>
      </b-col>
      <b-col md="6">
        <img src="../assets/company_group.png" class="responsive">
      </b-col>
    </b-row>
    <b-row style="margin-top: 20px;">
      <b-col>
        <h3>The Team</h3>
      </b-col>
    </b-row>
    <team style="margin-top: 20px;"/>
  </b-container>
</template>

<script>
import Team from '@/components/Team.vue'

export default {
  components: {
    Team
  }
}
</script>

<style scoped>
.responsive {
  width: 100%;
  height: auto;
}
</style>
