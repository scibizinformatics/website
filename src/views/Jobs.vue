<template>
  <b-container>
    <b-row style="margin-top: 20px;">
      <b-col>
        <h2>Jobs</h2>
      </b-col>
    </b-row>
    <b-row style="margin-top: 20px;">
      <b-col sm="12" md="6">
        <b-card
          class="service-card"
          title="Backend Web Developer"
        >
          <strong>Requirements:</strong>
          <ul class="card-text">
            <li>At least 1 year experience in a programming job or internship</li>
            <li>Experience in building web application backends using Python/Django stack</li>
            <li>Experience in database schema and API design</li>
            <li>Familiarity with background task queue a plus</li>
          </ul>
        </b-card>
      </b-col>
      <b-col sm="12" md="6">
        <b-card
          class="service-card"
          title="Frontend Web Developer"
        >
          <strong>Requirements:</strong>
          <ul class="card-text">
            <li>At least 1 year experience in a programming job or internship</li>
            <li>Experience in building web application frontends using Javascript frameworks, specially VueJS</li>
            <li>Familiarity with HTML/CSS frameworks</li>
            <li>Familiarity with mobile app development a plus</li>
          </ul>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="second-row">
      <b-col sm="12" md="6">
        <b-card
          class="service-card"
          title="Game Developer"
        >
          <strong>Requirements:</strong>
          <ul class="card-text">
            <li>At least 1 year experience in game development programming</li>
            <li>Experience in building mobile and/or web-based games using Unity or HTML5 frameworks</li>
            <li>Familiarity with blockchain and NFT a plus</li>
          </ul>
        </b-card>
      </b-col>
      <b-col sm="12" md="6">
        <b-card
          class="service-card"
          title="Product Development Officer"
        >
          <strong>Requirements:</strong>
          <ul class="card-text">
            <li>At least 1 year experience in product development or related role</li>
            <li>Experience in spearheading end-to-end product development</li>
            <li>Familiarity with IT product development a plus</li>
          </ul>
        </b-card>
      </b-col>
    </b-row>
    <b-row style="margin-top: 15px;">
      <b-col>
        <div style="margin-top: 15px;">
          <button class="btn-primary" @click="applyNow">Apply Now</button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>

export default {

  methods: {
    applyNow() {
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSehwXis4Zs8w3zZO-bcvHo3Sn4MVcVrcWymcIYFN8TNoZYZbA/viewform?usp=sf_link";
    }
  },

};
</script>

<style scoped>
h4 {
  color: #0044aa !important;
}
.second-row {
  margin-top: 20px;
}
@media screen and (max-width: 600px) {
  .service-card {
    margin-bottom: 20px;
  }
  .second-row {
    margin-top: 0px;
  }
}
</style>
