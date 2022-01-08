<template>
  <b-container>
    <h3>RegistrationForm</h3>
    <b-row>
      <b-col>
        <b-form @submit.stop.prevent>
          <label for="text-family_name">Family Name</label>
          <b-form-input v-model="family_name" type="text" id="text-family_name"></b-form-input>

          <label for="text-first_name">First Name</label>
          <b-form-input v-model="first_name" type="text" id="text-first_name"></b-form-input>

          <label for="text-last_name">Last Name</label>
          <b-form-input v-model="last_name" type="text" id="text-last_name"></b-form-input>

          <label for="text-desired_username">Desired Username</label>
          <b-form-input v-model="desired_username" type="text" id="text-desired_username"></b-form-input>

          <label for="text-dob">Date of Birth</label>
          <b-form-input v-model="dob" type="date" id="text-dob"></b-form-input>

          <label for="text-email">Email</label>
          <b-form-input v-model="email" type="email" id="text-email"></b-form-input>

          <label for="text-password">Password</label>
          <b-form-input v-model="password" type="password" id="text-password"></b-form-input>
          <b-form-group>

          </b-form-group>
        </b-form>

        <b-button @click="submitFamilyRegistration" variant="primary">Submit Registration</b-button>
        <!--        <b-button @click="navigateToRegistrationPage" variant="primary">Register</b-button>-->


      </b-col>

    </b-row>

  </b-container>

</template>

<script>
export default {
  name: "RegistrationForm",
  data() {
    return {
      family_name: '',
      family_description: '',
      first_name: '',
      last_name: '',
      desired_username: '',
      password: '',
      subscription_type: null,
      email: null,
      dob: null,

    }
  },
  methods: {
    submitFamilyRegistration: function () {
      alert("Received Registration Request")
    }
  }
}
</script>

<style scoped>

</style>