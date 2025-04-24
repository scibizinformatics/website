<template>
  <div id="footer">
    <b-container>
      <b-row>
        <b-col sm="12" md="5" class="footer-col">
          <img src="../assets/logo.png" height="41">
          <p>
            2nd Floor YVI Center Building-B, Tabuan National Highway,<br>
            Brgy. 77, Fatima Village, Tacloban City,
            <br>6500 Philippines
          </p>
        </b-col>
        <b-col id="social" sm="12" md="3" class="footer-col">
          <h5>Follow Us</h5>
          <a href="https://www.facebook.com/scibizinformatics" target="_blank">
            <img src="../assets/icons/facebook_icon.svg" height="40">
          </a>
          <a href="https://twitter.com/scibizin4matics" target="_blank">
            <img src="../assets/icons/twitter_icon.svg" height="40">
          </a>
          <a href="https://www.linkedin.com/company/scibiz-informatics" target="_blank">
            <img src="../assets/icons/linkedin_icon.svg" height="40">
          </a>
          <a href="https://www.youtube.com/channel/UCxm55y3UaQIVnwtbBRp0dhQ?view_as=subscriber" target="_blank">
            <img src="../assets/icons/youtube_icon.svg" height="40">
          </a>
        </b-col>
        <b-col sm="12" md="4" class="footer-col">
          <h5>Contacts</h5>
          <p>
            Email: <img src="../assets/email.png" id="email-img">
          </p>
        </b-col>
      </b-row>
      <b-row id="copyright">
        <b-col>Copyright &copy; 2015-{{ currentYear }}</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentYear: (new Date()).getFullYear()
    }
  }
}
</script>

<style scoped>
#footer {
  margin-top: 20px;
  width: 100%;
  padding: 20px;
}
#social img {
  margin: 10px;
  -webkit-filter: grayscale(50%);
  filter: grayscale(50%);
}
#social img:hover {
  -webkit-filter: grayscale(0%);
  filter: grayscale(9%);
  border: 2px solid #0044aa;
  border-radius: 50%;
  background: gray;
}
#copyright {
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 14px;
  color: grey;
  text-align: center;
}
.footer-col {
  text-align: center;
}
#email-img {
  margin-top: -2px;
}
</style>
