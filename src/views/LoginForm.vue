<template>
  <b-container>
    <b-row>
      <b-col>
        <b-form @submit.stop.prevent>
          <label for="text-username">Username</label>
          <b-form-input v-model="username" type="text" id="text-username"></b-form-input>


          <label for="text-password">Password</label>
          <b-form-input v-on:keyup.enter="authenticateUser" v-model="password" type="password"
                        id="text-password"></b-form-input>
          <b-form-group>

          </b-form-group>
        </b-form>

        <b-button @click="loginUser" variant="primary">Login</b-button>
        <b-button @click="navigateToRegistrationPage" variant="primary">Register</b-button>


      </b-col>

    </b-row>


  </b-container>

</template>

<script>
import {authenticateUser} from "@/js_code/boe_api_client";

export default {
  name: "LoginForm",
  data() {
    return {
      username: null,
      password: null,
      access_token: null,
      refresh_token: null,
    }
  },
  components: {},
  methods: {
    navigateToRegistrationPage: function () {
      this.$router.push("/registration")
    },

    loginUser: async function () {

      try {
        let results = await authenticateUser(
            this.$data.username,
            this.$data.password
        )
        if (results.data.auth_result === true) {
          alert("Successfully Logged-In, Redirecting..")
          console.log(results)
          this.$store.commit('setUserName', this.$data.username)
          this.$store.commit('setUserId', results.data.id)
          this.$router.push("/home")
        }

        if (results.data.auth_result === false) {
          alert("Invalid Password Provided")

        }

      } catch (err) {
        alert("Invalid Username Provided")

      }


    }
  }
}
</script>

<style scoped>

button {
  margin: 5px;
}
</style>