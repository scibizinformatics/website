<template>
  <div class="ventures-page">
    <div class="hero-section text-center mb-5">
      <h1 class="display-4">
        Our Ventures
      </h1>
      <div class="hero-divider" />
    </div>

    <b-container>
      <b-row style="margin-top: 20px;" class="featured-row">
        <b-col sm="12" md="3" class="featured">
          LAUNCHED VENTURES
        </b-col>
      </b-row>
      <b-row class="portfolio-item">
        <b-col sm="12" md="6">
          <h6>
            <i><a href="https://www.paytaca.com/" target="_blank">Paytaca.com</a></i>
          </h6>
          <h4>Paytaca</h4>
          <p class="company-info">
            Paytaca Inc., Philippines
          </p>
          <p>
            Paytaca is a revolutionary Bitcoin Cash (BCH) wallet that brings the power of peer-to-peer electronic cash to users worldwide. Built on the principles of financial sovereignty and accessibility, Paytaca offers a seamless experience across all platforms - web, mobile, and desktop.

            The wallet is designed with both beginners and advanced users in mind, featuring an intuitive interface that makes cryptocurrency management simple and secure. Users maintain complete control of their funds with full custody of their private keys, ensuring true financial independence.

            Beyond basic transactions, Paytaca enables users to engage with the growing BCH ecosystem, supporting merchant payments, peer-to-peer transfers, and various financial services. By making Bitcoin Cash accessible to everyone, Paytaca is helping to build a more inclusive financial future where users have direct control over their money.
          </p>
        </b-col>
        <b-col sm="12" md="6">
          <a href="https://www.paytaca.com/" target="_blank">
            <img class="portfolio-img" src="~/assets/portfolio/paytaca.jpg" width="100%">
          </a>
        </b-col>
      </b-row>
      <b-row class="portfolio-item">
        <b-col sm="12" md="6">
          <h6>
            <i><a href="https://purelypeer.cash/" target="_blank">PurelyPeer.cash</a></i>
          </h6>
          <h4>Purely Peer</h4>
          <p class="company-info">
            Peer Quest Ventures Ltd., Hong Kong
          </p>
          <p>PurelyPeer is an innovative platform that combines geolocation gaming with digital finance. At its core, it's a digital wallet that enables users to create and participate in location-based quests. These quests involve strategically placed Bitcoin Cash (BCH) cashdrops in real-world locations, creating a unique blend of digital treasure hunting and micro-advertising. The platform fosters a vibrant peer-to-peer economy by encouraging users to spend their collected BCH at participating merchants. Through this gamified approach, PurelyPeer not only builds an engaging virtual community but also drives real-world economic activity, making cryptocurrency more accessible and fun for everyone.</p>
        </b-col>
        <b-col sm="12" md="6">
          <a href="https://purelypeer.cash/" target="_blank">
            <img class="portfolio-img" src="~/assets/portfolio/purelypeer.jpg" width="100%">
          </a>
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <b-row style="margin-top: 50px;" class="featured-row">
        <b-col sm="12" md="3" class="featured">
          PROTOTYPING STAGE
        </b-col>
      </b-row>
      <b-row class="portfolio-item">
        <b-col sm="12" md="6">
          <h6>
            <i><a href="https://workhippo.app/" target="_blank">WorkHippo.app</a></i>
          </h6>
          <h4>WorkHippo</h4>
          <p>WorkHippo is a crypto-native freelancing platform that revolutionizes the way freelancers and clients connect and transact. Built on blockchain technology, it enables secure, transparent, and instant payments in cryptocurrency, eliminating traditional payment barriers and high transaction fees. The platform combines the flexibility of freelance work with the efficiency of blockchain payments, creating a seamless experience for both freelancers and employers in the digital economy.</p>
        </b-col>
        <b-col sm="12" md="6">
          <h6>
            <i><a href="https://thinkerville.education/" target="_blank">ThinkerVille.education</a></i>
          </h6>
          <h4>ThinkerVille</h4>
          <p>ThinkerVille revolutionizes education by connecting teachers and learners through a borderless, blockchain-powered ecosystem. Educators can deliver structured lessons, live tutorials, and hands-on learning experiences, both in-person and online. With blockchain ensuring transparent reviews and cryptocurrency enabling instant global payments, ThinkerVille creates a trusted marketplace where educators earn fairly — and learners gain access to top-quality knowledge from anywhere in the world.</p>
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <b-row style="margin-top: 50px;" class="featured-row">
        <b-col sm="12" md="3" class="featured">
          IDEATION STAGE
        </b-col>
      </b-row>
      <b-row class="portfolio-item">
        <b-col sm="12" md="6">
          <h6>
            <i><a href="https://www.sophrobiome.com" target="_blank">SophroBiome.com</a></i>
          </h6>
          <h4>SophroBiome</h4>
          <p>SophroBiome is a biotechnology venture redefining gut health by restoring the vital symbiosis between humans and their microbiomes—essential to physical, mental, and metabolic well-being. Through personalized diagnostics, digital tracking, and microbiome-based therapeutics, we empower individuals to take control of their health. Powered by a decentralized research platform, SophroBiome brings together patients, scientists, and clinicians in an open, incentivized ecosystem that accelerates discovery through tokenized participation, open data, and transparent governance.</p>
        </b-col>
        <b-col sm="12" md="6">
          <h6>
            <i><a href="https://www.ainomica.net" target="_blank">Ainomica.net</a></i>
          </h6>
          <h4>Ainomica</h4>
          <p>Ainomica is a decentralized coordination layer for AI agents, enabling them to autonomously allocate resources, negotiate tasks, and optimize for maximum output quality at minimal cost. At its core is a robust SDK and software framework that equips intelligent agents with economic reasoning and permissionless payment capabilities via Bitcoin Cash. Built on top of this core infrastructure is a marketplace where agents can discover, contract, and collaborate with one another—creating an open economy for AI agents.</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  head () {
    return {
      title: 'Our Ventures | SciBiz Informatics',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Explore SciBiz Informatics\' portfolio of innovative ventures, from launched products to prototypes in development. Discover how we\'re building the future of technology.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Our Ventures | SciBiz Informatics'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Explore SciBiz Informatics\' portfolio of innovative ventures, from launched products to prototypes in development. Discover how we\'re building the future of technology.'
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
.ventures-page {
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
.portfolio-img {
  transition: border 1s;
  transition: filter 1s;
  transition: -webkit-filter 1s;
}
.portfolio-img:hover {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  border: 1px solid #0044aa;
}
.portfolio-item {
  margin-top: 0px;
  background: rgba(0, 68, 170, 0.05);
  padding: 35px 10px;
}
.featured-row {
  margin-top: 0px;
  background: rgba(0, 68, 170, 0.05);
}
.featured {
  color: white;
  background: #5fbcd3;
  padding: 10px 8px;
  text-align: center;
}
#more-info {
  background: #e2e2e2;
  color: gray;
  border: 0;
  width: 100%;
}
#more-info:hover {
  background: #808080;
  color: white;
}
.company-info {
  color: #666;
  font-style: italic;
  margin-bottom: 1rem;
}
h1, h2, h3, h4 {
  color: #0044aa;
}
h6 a {
  color: inherit;
  text-decoration: none;
}

h6 a:hover {
  color: #0044aa;
  text-decoration: underline;
}
</style>
