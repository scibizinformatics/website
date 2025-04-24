<template>
  <div id="backdrop">
    <b-container id="main-container">

      <b-navbar toggleable="md" type="light" variant="default" class="main-nav">

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

            <b-nav-item to="/" exact class="nav-link">Home</b-nav-item>
            <b-nav-item to="/about" class="nav-link">About</b-nav-item>
            <!-- <b-nav-item to="/services" class="nav-link">Services</b-nav-item> -->
            <b-nav-item to="/ventures" class="nav-link">Ventures</b-nav-item>
            <!-- <b-nav-item to="/jobs" class="nav-link">Jobs</b-nav-item> -->
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>

      <b-container>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </b-container>
    </b-container>

    <Footer />

    <!-- <div id="email-us" @click="openMessenger" class="float-button">
      <img src="./assets/email_us.png" width="30">
    </div> -->
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
  // methods: {
  //   openMessenger () {
  //     window.open('https://m.me/scibizinformatics', '_blank')
  //   }
  // }
}
</script>

<style lang="css">
#backdrop, html {
  background: #e9e9e9;
}
h1, h2, h3, h4, h5, h6 {
  color: #0044aa !important;
}
#main-container {
  padding-top: 15px;
  width: 90vw;
  padding-bottom: 40px;
  background: white;
}

/* Navigation styles */
.nav-link {
  position: relative;
  color: #808080 !important;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0044aa;
  transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #0044aa !important;
  font-weight: 500;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

/* Email button animations */
.float-button {
  position: fixed;
  right: 10px;
  bottom: 10px;
  padding: 15px;
  background: #f2f2f2;
  border: 4px solid #808080;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: float 3s ease-in-out infinite;
}

.float-button:hover {
  background: #e2e2e2;
  border: 4px solid #0044aa;
  transform: scale(1.1);
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* Page transition animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
