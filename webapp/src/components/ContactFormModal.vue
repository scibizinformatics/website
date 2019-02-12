<template>
  <b-modal
    ref="modal"
    title="Contact Form"
    @hidden="cancelContactForm"
    ok-title="Submit"
    @ok="submitContactForm"
    :hide-footer="!showSubmitButton"
  >
    <p v-if="emailSendingSuccess === true" style="font-size: 24px; color: green;">
      Your message has been sent successfully! We will get in touch as soon as possible.
    </p>
    <form v-else @enter.prevent="submitContactForm">
      <b-form-group label="Name:">
        <b-input
          name="name"
          v-model="email.name"
          required
        ></b-input>
      </b-form-group>
      <b-form-group label="Email:">
        <b-input
          name="email"
          type="email"
          v-model="email.email"
          required
        ></b-input>
      </b-form-group>
      <b-form-group label="Message:">
        <b-textarea rows="4"
          name="message"
          v-model="email.message"
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
import axios from 'axios'

export default {
  data () {
    return {
      sitekey: '6Ld27pAUAAAAAGq3D0WIqaZPCjfCi3YUNtx-sVSA',
      showSubmitButton: false,
      email: {},
      emailSendingSuccess: null
    }
  },
  components: { VueRecaptcha },
  methods: {
    showModal () {
      this.$refs.modal.show()
    },
    cancelContactForm () {},
    submitContactForm (event) {
      event.preventDefault()
      let vm = this
      axios.post('/mailer', this.email).then(function (resp) {
        vm.emailSendingSuccess = resp.data.success
        vm.showSubmitButton = false
      })
    },
    onVerify () {
      this.showSubmitButton = true
    },
    onExpire () {}
  }
}
</script>
