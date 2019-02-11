<template>
  <b-modal
    ref="modal"
    title="Contact Form"
    @hidden="cancelContactForm"
    :hide-footer="!showSubmitButton"
  >
    <form @enter.prevent="submitContactForm">
      <b-form-group label="Name:">
        <b-input
          name="name"
          required
        ></b-input>
      </b-form-group>
      <b-form-group label="Email:">
        <b-input
          name="email"
          required
        ></b-input>
      </b-form-group>
      <b-form-group label="Message:">
        <b-textarea rows="4"
          name="message"
          required
        ></b-textarea>
      </b-form-group>
      <vue-recaptcha
        @verify="onVerify"
        @expired="onExpire"
        :sitekey="sitekey">
      </vue-recaptcha>
    </form>
  </b-modal>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'

export default {
  data () {
    return {
      sitekey: '6LfqrpAUAAAAAPM-GM4fgU1-DyZrm4Dg_wEOqI-d',
      showSubmitButton: false
    }
  },
  components: { VueRecaptcha },
  methods: {
    showModal () {
      this.$refs.modal.show()
    },
    cancelContactForm () {},
    submitContactForm () {},
    onVerify () {
      this.showSubmitButton = true
    },
    onExpire () {}
  }
}
</script>
