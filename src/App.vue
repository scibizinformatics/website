<template>
  <div id="backdrop">
    <b-container id="main-container">

      <b-navbar toggleable="md" type="light" variant="default">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand to="/" v-if="$mq === 'sm'">
          SciBiz Informatics
        </b-navbar-brand>

        <b-navbar-brand to="/" v-else>
          <img id="logo" src="./assets/logo.png" height="41">
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-item to="/" exact>Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/services">Services</b-nav-item>
            <b-nav-item to="/clients">Clients</b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>

      <b-container>
        <router-view></router-view>
      </b-container>
    </b-container>

    <Footer />

    <div id="email-us" @click="openMessenger">
      <img src="./assets/email_us.png" width="30">
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer
  },
  data () {
    return {
      authenticated: false
    }
  },
  methods: {
    openMessenger () {
      window.open('https://m.me/scibizinformatics', '_blank')
    }
  }
}
</script>

<style lang="css">
#backdrop, html {
  background: #e9e9e9;
}
h1, h2, h3, h4, h5, h6 {
  color: #808080 !important;
}
#main-container {
  padding-top: 15px;
  width: 90vw;
  padding-bottom: 40px;
  background: white;
}
a.active {
  color: #0044aa !important;
  font-weight: 450;
}
#email-us {
  position: fixed;
  right: 10px;
  bottom: 10px;
  padding: 10px;
  background: #f2f2f2;
  border: 4px solid #808080;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
}
#email-us:hover {
  background: #e2e2e2;
  border: 4px solid #0044aa;
}
</style>
