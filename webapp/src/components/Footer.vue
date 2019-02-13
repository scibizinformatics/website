<template>
  <div id="footer">
    <b-container>
      <b-row>
        <b-col sm="12" md="4" class="footer-col">
          <img src="../assets/logo.png" height="41">
          <p>
            2/F CFI Building, Maharlika Highway<br>
            Brgy. Guindapunan, Palo, Leyte<br>
            6501 Philippines
          </p>
        </b-col>
        <b-col sm="12" md="4" class="footer-col">
          <h5>Contacts</h5>
          <p>
            Email: info@scibizinformatics.com<br>
            Landline: (053) 888-2766 (PLDT)<br>
            Mobile: (+63) 999 229 7420 (Smart)
          </p>
        </b-col>
        <b-col id="social" sm="12" md="4" class="footer-col">
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
</style>
