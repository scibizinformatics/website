<template>
  <b-container>
    <b-row style="margin-top: 20px;">
      <b-col>
        <h2>Services</h2>
      </b-col>
    </b-row>
    <b-row style="margin-top: 20px;">
      <b-col>
        <b-card
          class="service-card"
          title="Web Applications"
        >
          <p class="card-text">
            We conceptualize, design, and build web applications of any size or complexity.
          </p>
          <div slot="footer">
            <small class="text-muted">Python, Go, Django/Flask, REST, Celery, Redis, MySQL/PostgreSQL, Javascript/HTML/CSS</small>
          </div>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          class="service-card"
          title="Mobile Applications"
        >
          <p class="card-text">
            We create hybrid and native mobile apps for Android and iOS including the backend API services.
          </p>
          <div slot="footer">
            <small class="text-muted">Cordova + Javascript/HTML/CSS, Dart + Flutter, Python, Go</small>
          </div>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          class="service-card"
          title="Data Analytics"
        >
          <p class="card-text">
            We scrape, parse, and extract data from the web and perform downstream processing and analysis. 
          </p>
          <div slot="footer">
            <small class="text-muted">Numpy, Pandas, Requests, iPython/Jupyter, Matplotlib, SciKit-Learn</small>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="second-row">
      <b-col>
        <b-card
          class="service-card"
          title="Physical Computing"
        >
          <p class="card-text">
            We build interactive physical systems that combine single-board computers, sensors, and software.
          </p>
          <div slot="footer">
            <small class="text-muted">Python, Go, Raspberry Pi, Arduino, Microcontrollers, Sensors, Electronics</small>
          </div>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          class="service-card"
          title="Cloud Computing"
        >
          <p class="card-text">
            We create, manage, and deploy applications to the cloud using Docker and Kubernetes.
          </p>
          <div slot="footer">
            <small class="text-muted">Docker, Kubernetes, Google Cloud Platform, Amazon Web Services, Digital Ocean</small>
          </div>
        </b-card>
      </b-col>
        <b-col>
        <b-card
          class="service-card"
          title="Business Productivity"
        >
          <p class="card-text">
            We setup and manage G Suite accounts for companies and assisting them through training and support.
          </p>
          <div slot="footer">
            <small class="text-muted">Google's G Suite for Business - Gmail, Drive, Docs, Calendar, Hangouts, etc.</small>
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