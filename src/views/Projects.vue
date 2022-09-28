<template>
  <b-container>
    <b-row style="margin-top: 20px;">
      <b-col>
        <h2>Projects</h2>
      </b-col>
    </b-row>
    <b-container>
      <b-row style="margin-top: 20px;" class="featured-row">
        <b-col sm="12" md="3" class="featured">FEATURED PROJECTS</b-col>
      </b-row>
      <b-row class="portfolio-item">
        <b-col sm="12" md="6">
          <h6>
            <i>PurelyPeer.cash</i>
          </h6>
          <h4>Purely Peer</h4>
          <p>PurelyPeer is a geolocation game and a digital wallet that allows anyone to create quests. Quests are composed of BCH cashdrops in accessible locations anywhere on Earth, which may be used as micro-advertisements. This encourages collected BCH cashdrops to be spent in BCH-accepting merchants. The quest creators and cashdrop collectors collectively build a virtual global community in the PurelyPeer metaverse while, at the same time, make a tangible impact in the real world peer-to-peer economy.</p>
        </b-col>
        <b-col sm="12" md="6">
          <a href="https://twitter.com/purelypeer" target="_blank">
            <img class="portfolio-img" src="../assets/portfolio/purelypeer.jpg" width="100%">
          </a>
        </b-col>
      </b-row>
      <b-row class="portfolio-item">
        <b-col sm="12" md="6">
          <h6>
            <i>Paytaca.com</i>
          </h6>
          <h4>Paytaca</h4>
          <p>
            Bitcoin Cash (BCH) is a purely peer-to-peer version of electronic cash that allows online payments to be sent directly from one party to another. It is sound money for the modern world.

            The Paytaca wallet brings this revolutionary cryptocurrency to everyone everywhere. We have the app built for the browser, mobile, and desktop with features that are accessible and easy to use both by beginners and advanced users.

            Paytaca wallet brings the power of BCH to the hands of every user, with their private keys solely under their custody giving them complete control of their own money.
          </p>
        </b-col>
        <b-col sm="12" md="6">
          <a href="https://paytaca.com/" target="_blank">
            <img class="portfolio-img" src="../assets/portfolio/paytaca.jpg" width="100%">
          </a>
        </b-col>
      </b-row>
      <b-row class="portfolio-item">
        <b-col sm="12" md="6">
          <h6>
            <i>Apes.cash</i>
          </h6>
          <h4>Gambling Apes Club NFT</h4>
          <p>A perked up version of Bored Apes in SmartBCH blockchain. Aside from having different traits permutations, we have added unique high quality specials and rares. Ape holders are able to stake to earn a reward token. Both the apes and the reward token enable holders to participate and profit from a soon-to-be released decentralized sports betting platform.</p>
        </b-col>
        <b-col sm="12" md="6">
          <a href="https://apes.cash/" target="_blank">
            <img class="portfolio-img" src="../assets/portfolio/apes_cash.png" width="100%">
          </a>
        </b-col>
      </b-row>
      <b-row class="portfolio-item">
        <b-col sm="12" md="6">
          <h6>
            <i>Spicenft.art</i>
          </h6>
          <h4>Spice NFT</h4>
          <p>Spice token is all about recognition and showing appreciation. Hence, we launched this NFT series to recognize exceptional artistic talents and provide a new venue where their artwork can be appreciated and patronized.</p>
        </b-col>
        <b-col sm="12" md="6">
          <a href="https://spicenft.art/" target="_blank">
            <img class="portfolio-img" src="../assets/portfolio/spice_nft.png" width="100%">
          </a>
        </b-col>
      </b-row>
      <b-row class="portfolio-item">
        <b-col sm="12" md="6">
          <h6>
            <i>SpiceToken.org</i>
          </h6>
          <h4>Spice Token</h4>
          <p>Spice is the hottest appreciation tipping token! When you find social media content that brightens your day, Spice it up.
The Spice Must Flow.</p>
        </b-col>
        <b-col sm="12" md="6">
          <a href="https://spicetoken.org/" target="_blank">
            <img class="portfolio-img" src="../assets/portfolio/spicetoken.png" width="100%">
          </a>
        </b-col>
      </b-row>
      <b-row class="portfolio-item">
        <b-col sm="12" md="6">
          <h6>
            <i>Volentix Labs (Canada)</i>
          </h6>
          <h4>Community Engagement Website</h4>
          <p>Venue is a platform which brings together members of the Volentix community to facilitate distribution of VTX and thus grow the Volentix community.</p>
        </b-col>
        <b-col sm="12" md="6">
          <a href="https://volentix.io/" target="_blank">
            <img class="portfolio-img" src="../assets/portfolio/venue.png" width="100%">
          </a>
        </b-col>
      </b-row>
      <b-row class="portfolio-item">
        <b-col sm="12" md="6">
          <h6>
            <i>202works Inc. (United States)</i>
          </h6>
          <h4>Database of Public Policy Experts</h4>
          <p>202works is a talent marketplace where any company can quickly find the right policy advisor, advocate or lawyer for any government issue.</p>
        </b-col>
        <b-col sm="12" md="6">
          <a href="https://202works.com/" target="_blank">
            <img class="portfolio-img" src="../assets/portfolio/202works.png" width="100%">
          </a>
        </b-col>
      </b-row>
    </b-container>

    <b-row style="margin-top: 40px;">
      <b-col>
        <h2>What Our Clients Say</h2>
      </b-col>
    </b-row>
    <b-row style="margin-top: 20px;" v-for="(testimonial, index) in testimonials" :key="index">
      <b-col>
        <b-card>
          <blockquote class="blockquote">
            <p>"{{ testimonial.message }}"</p>
            <footer class="blockquote-footer">
              {{ testimonial.clientName }},
              <cite>{{ testimonial.clientCompany }}</cite>
            </footer>
          </blockquote>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          message:
            "Reamon did an excellent job on our python and javascript development project. He worked on several open ended problems and consistently provided solutions ahead of schedule. I recommend him without reservation.",
          clientName: "Jonathan Harsch",
          clientCompany: "202works Inc. (United States)"
        },
        {
          message:
            "Jesus understood the requirements of our task and used our feedback to revise his work and provide the solution we wanted. Would happily use again for future jobs.",
          clientName: "Jeff Ferrara",
          clientCompany: "Cornick Pty. Ltd. (Australia)"
        },
        {
          message:
            "Jessie is a pleasure to work with, produces work before deadlines, and always makes good suggestions about how projects can be improved. He has an insight into electronics (hardware and software) which is invaluable.",
          clientName: "Paul Wilks",
          clientCompany: "Jigsaw Controls (United Kingdom)"
        },
        {
          message:
            "Joemar has done excellent work for us. He has excellent communication and problem solving skills. We were very impressed with his stamina, his ability to deal with tight deadlines and the quality of his work. Joemar doesn't give up until he has found a workable solution. We will definitely work with him again.",
          clientName: "Sarah Fitzmaurice",
          clientCompany: "Flight Level Media (Canada)"
        },
        {
          message:
            "Joemar did an excellent job of finishing multiple milestones within this project. It was delightful to be working with him and his team. Looking forward to our next engagement.",
          clientName: "Thomas Zheng",
          clientCompany: "Luddite Labs (United States)"
        }
      ]
    };
  }
};
</script>

<style scoped>
h4 {
  color: #4d6b99 !important;
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
  background: #f2f2f2;
  padding: 35px 10px;
}
.blockquote p {
  font-size: 18px;
  font-style: italic;
}
.featured-row {
  margin-top: 0px;
  background: #f2f2f2;
}
.featured {
  color: white;
  background: lightgray;
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
</style>
