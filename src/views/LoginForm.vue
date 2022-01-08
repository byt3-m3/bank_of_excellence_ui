<template>
  <b-container>
    <b-row>
      <b-col>
        <b-form @submit.stop.prevent>
          <label for="text-username">Username</label>
          <b-form-input v-model="username" type="text" id="text-username"></b-form-input>


          <label for="text-password">Password</label>
          <b-form-input v-model="password" type="password" id="text-password"></b-form-input>
          <b-form-group>

          </b-form-group>
        </b-form>

        <b-button @click="authenticateUser" variant="primary">Login</b-button>
        <b-button variant="primary">Sign Up</b-button>


      </b-col>

    </b-row>


  </b-container>

</template>

<script>
import {authenticateUser} from "../js_code/boe_api_client";

export default {
  name: "LoginForm",
  data() {
    return {
      username: 'cbaxter',
      // password: 'Pimpin@1',
      access_token: null,
      refresh_token: null,
    }
  },
  components: {},
  methods: {
    authenticateUser: function () {


      authenticateUser(
          this.$data.username,
          this.$data.password
      ).then((response) => {
        this.$data.access_token = response.data.AccessToken
        this.$data.refresh_token = response.data.RefreshToken

        alert(`Successfully Logged In`)

      }).catch((error) => {
        alert("Invalid Login Provided")
        console.log(error)
      })



    }
  }
}
</script>

<style scoped>

</style>