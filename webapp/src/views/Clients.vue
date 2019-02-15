<template>
  <b-container>
    <b-row style="margin-top: 20px;">
      <b-col>
        <h2>Clients</h2>
      </b-col>
    </b-row>
    <b-row style="margin-top: 20px;" class="portfolio-item">
      <b-col sm="12" md="6">
        <h6><i>E-Tax Consulting Ltd. (United Kingdom)</i></h6>
        <h4>Employee Expense Analysis Software</h4>
        <p>Min-Tax is the only application in the market which helps employers to significantly reduce the time spent analysing employee expenses for UK employement tax purposes whilst also maximising HMRC compliance.</p>
      </b-col>
      <b-col sm="12" md="6">
        <a href="https://www.mintax.co.uk/" target="_blank"><img class="portfolio-img" src="../assets/portfolio/mintax.png" width="100%"></a>
      </b-col>
    </b-row>
    <b-row class="portfolio-item">
      <b-col sm="12" md="6">
        <h6><i>Volentix Labs (Canada)</i></h6>
        <h4>Community Engagement Website</h4>
        <p>Venue is a platform which brings together members of the Volentix community to facilitate distribution of VTX and thus grow the Volentix community.</p>
      </b-col>
      <b-col sm="12" md="6">
        <a href="https://venue.volentix.io/" target="_blank"><img class="portfolio-img" src="../assets/portfolio/venue.png" width="100%"></a>
      </b-col>
    </b-row>
    <b-row class="portfolio-item">
      <b-col sm="12" md="6">
        <h6><i>202works Inc. (United States)</i></h6>
        <h4>Database of Public Policy Experts</h4>
        <p>202works is a talent marketplace where any company can quickly find the right policy advisor, advocate or lawyer for any government issue.</p>
      </b-col>
      <b-col sm="12" md="6">
        <a href="https://202works.com/" target="_blank"><img class="portfolio-img" src="../assets/portfolio/202works.png" width="100%"></a>
      </b-col>
    </b-row>
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
            <footer class="blockquote-footer">{{ testimonial.clientName }}, <cite>{{ testimonial.clientCompany }}</cite></footer>
          </blockquote>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      testimonials: [
        {
          message: 'Reamon did a great job with creating the landing page. The design was very professional and he used his own experience to improve the look based on the mockups provided.',
          clientName: 'Aman Sood',
          clientCompany: 'E-Tax Consulting, Ltd. (United Kingdom)'
        },
        {
          message: 'Reamon did an excellent job on our python and javascript development project. He worked on several open ended problems and consistently provided solutions ahead of schedule. I recommend him without reservation.',
          clientName: 'Jonathan Harsch',
          clientCompany: '202works Inc. (United States)'
        },
        {
          message: 'Jesus understood the requirements of our task and used our feedback to revise his work and provide the solution we wanted. Would happily use again for future jobs.',
          clientName: 'Jeff Ferrra',
          clientCompany: 'Cornick Pty. Ltd. (Australia)'
        },
        {
          message: 'Jessie is a pleasure to work with, produces work before deadlines, and always makes good suggestions about how projects can be improved. He has an insight into electronics (hardware and software) which is invaluable.',
          clientName: 'Paul Wilks',
          clientCompany: 'Jigsaw Controls (United Kingdom)'
        },
        {
          message: "Joemar has done excellent work for us. He has excellent communication and problem solving skills. We were very impressed with his stamina, his ability to deal with tight deadlines and the quality of his work. Joemar doesn't give up until he has found a workable solution. We will definitely work with him again.",
          clientName: 'Sarah Fitzmaurice',
          clientCompany: 'Flight Level Media (Canada)'
        },
        {
          message: 'Joemar did an excellent job of finishing multiple milestones within this project. It was delightful to be working with him and his team. Looking forward to our next engagement.',
          clientName: 'Thomas Zheng',
          clientCompany: 'Luddite Labs (United States)'
        }
      ]
    }
  }
}
</script>

<style scoped>
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
  padding: 40px 10px;
}
.blockquote p {
  font-size: 18px;
  font-style: italic;
}
</style>
