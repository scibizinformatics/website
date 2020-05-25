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
            <!-- <b-nav-item to="/products">Products</b-nav-item>
            <b-nav-item-dropdown right v-if="authenticated">
              <template slot="button-content">
                <em>Username</em>
              </template>
              <b-dropdown-item href="#">Employee</b-dropdown-item>
              <b-dropdown-item href="#">Client</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item v-else to="/login">Login</b-nav-item>
            <b-nav-item href="http://hr.scibizinformatics.com/">Employee Login</b-nav-item> -->
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>

      <b-container>
        <router-view></router-view>
      </b-container>
    </b-container>

    <Footer />

    <div id="email-us" @click="showContactFormModal">
      <img src="./assets/email_us.png" width="30">
    </div>

    <ContactFormModal ref="contactForm" />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import ContactFormModal from '@/components/ContactFormModal.vue'

export default {
  components: {
    ContactFormModal,
    Footer
  },
  data () {
    return {
      authenticated: false
    }
  },
  methods: {
    showContactFormModal () {
      this.$refs.contactForm.showModal()
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
