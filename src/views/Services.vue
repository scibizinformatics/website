<template>
  <b-container>
    <b-row style="margin-top: 20px;">
      <b-col>
        <h2>Services</h2>
      </b-col>
    </b-row>
    <b-row style="margin-top: 20px;">
      <b-col sm="12" md="6">
        <b-card
          class="service-card"
          title="Web Applications"
        >
          <p class="card-text">
            We conceptualize, design, and build web applications of any size or complexity using state-of-the-art languages and frameworks.
          </p>
          <div slot="footer">
            <small class="text-muted">Python, Go, Django/Flask, REST, Celery, Redis, PostgreSQL, Javascript/HTML/CSS</small>
          </div>
        </b-card>
      </b-col>
      <b-col sm="12" md="6">
        <b-card
          class="service-card"
          title="Mobile Applications"
        >
          <p class="card-text">
            We create hybrid and native mobile apps for Android and iOS that can communicate with backend web services thru REST API and websockets.
          </p>
          <div slot="footer">
            <small class="text-muted">Capacitor + Javascript/HTML/CSS, Dart + Flutter, Python, Go</small>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="second-row">
      <b-col sm="12" md="6">
        <b-card
          class="service-card"
          title="Data Analytics"
        >
          <p class="card-text">
            We scrape, parse, and extract data from the web and perform downstream processing and analysis in pipelines that run on elastic infrastructure that can scale on demand.
          </p>
          <div slot="footer">
            <small class="text-muted">Numpy, Pandas, Requests, iPython/Jupyter, Matplotlib, SciKit-Learn</small>
          </div>
        </b-card>
      </b-col>
      <b-col sm="12" md="6">
        <b-card
          class="service-card"
          title="Blockchain & Crypto"
        >
          <p class="card-text">
            We build blockchain applications in Bitcoin Cash, Ethereum, and Binance Smart Chain from simple tokens to full-blown decentralized applications that run on smart contracts.
          </p>
          <div slot="footer">
            <small class="text-muted">Bitcoin Cash, SLP, Ethereum, Solidity, Binance Smart Chain, Tendermint</small>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {}
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
