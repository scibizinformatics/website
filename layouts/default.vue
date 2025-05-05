<template>
  <div class="layout-wrapper">
    <b-navbar toggleable="lg" type="light" variant="light" class="mb-4">
      <div class="content-wrapper d-flex justify-content-between align-items-center">
        <b-navbar-brand class="pt-2" to="/">
          <img src="~/assets/logo.png" alt="SciBiz Informatics Logo" class="logo-img">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav style="height: 100%;" class="ml-auto">
            <b-nav-item to="/" class="text-dark px-2" :active="route.path === '/'">
              Home
            </b-nav-item>
            <b-nav-item to="/about" class="text-dark px-2" :active="route.path.startsWith('/about')">
              About
            </b-nav-item>
            <b-nav-item to="/ventures" class="text-dark px-2" :active="route.path.startsWith('/ventures')">
              Ventures
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>

    <div class="content-wrapper main-content">
      <nuxt />
    </div>

    <footer class="footer mt-5 py-4">
      <div class="content-wrapper">
        <b-row>
          <b-col md="6" class="text-center text-md-left">
            <p class="mb-0">
              &copy; {{ new Date().getFullYear() }} SciBiz Informatics Inc.<br>All rights reserved.
            </p>
          </b-col>
          <b-col md="6" class="text-center text-md-right">
            <p class="mb-0">
              <a href="mailto:info@scibizinformatics.com" class="text-dark">
                <i class="fas fa-envelope" /> info@scibizinformatics.com
              </a>
            </p>
            <div class="social-links mt-2">
              <a href="https://facebook.com/scibizinformatics" target="_blank" class="text-dark mx-2">
                <i class="fab fa-facebook" />
              </a>
              <a href="https://twitter.com/scibizinfo" target="_blank" class="text-dark mx-2">
                <i class="fab fa-twitter" />
              </a>
              <a href="https://linkedin.com/company/scibizinformatics" target="_blank" class="text-dark mx-2">
                <i class="fab fa-linkedin" />
              </a>
            </div>
          </b-col>
        </b-row>
      </div>
    </footer>
  </div>
</template>

<script>
import { useRoute } from '@nuxtjs/composition-api'

export default {
  setup () {
    const route = useRoute()
    return { route }
  }
}
</script>

<style>
.layout-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1 0 auto;
}

.footer {
  flex-shrink: 0;
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
}

.navbar {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background-color: white !important;
  min-height: 60px;
}

.navbar-brand {
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 0;
  height: 40px;
}

.logo-img {
  height: 40px;
  width: auto;
}

.navbar-nav {
  display: flex;
  align-items: center;
  height: 40px;
}

.nav-link {
  font-weight: 500;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  height: 100%;
}

.navbar-light .navbar-nav .nav-link {
  color: #333;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #0044aa;
  border-bottom: 2px solid #5fbcd3;
}

.navbar-light .navbar-nav .nav-link.active {
  color: #0044aa;
  font-weight: 600;
  border-bottom: 2px solid #5fbcd3;
}

.content-wrapper {
  width: 70%;
  margin: 0 auto;
  max-width: 1400px;
}

@media (max-width: 768px) {
  .content-wrapper {
    width: 95%;
  }

  .navbar-light .navbar-nav .nav-link {
    padding: 1rem 0;
  }

  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white !important;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    z-index: 9999;
    border-top: 1px solid #e9ecef;
    height: auto !important;
    max-height: none !important;
  }

  .navbar-collapse.show,
  .navbar-collapse.collapsing {
    background-color: white !important;
    height: auto !important;
    max-height: none !important;
  }

  .navbar-nav {
    width: 100%;
  }
}

.footer a {
  text-decoration: none;
}

.footer a:hover {
  color: #0044aa !important;
}

.social-links a {
  font-size: 1.2rem;
}

.social-links a:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}
</style>
