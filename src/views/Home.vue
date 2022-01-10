<template>

  <b-container>
    <b-row>
      <h3>Welcome: {{ this.$store.state.userName }}</h3>
    </b-row>
    <b-row>
      <b-col>
        <h2>Home Page</h2>
        <b-row>
          <b-button>
            Add Child
          </b-button>
        </b-row>

      </b-col>
    </b-row>

  </b-container>

</template>

<script>
import {getFamilyDetails} from "@/js_code/boe_api_client";

export default {
  name: "Home",
  data() {
    return {
      user_details: null,
      family_name: null,

    }

  },
  beforeCreate() {
    getFamilyDetails("6e84a48c-890a-4dd1-91db-8db17dd0737d").then((response) => {

      this.$data.user_details = response.data
      this.$data.family_name = response.data.family_name


    })

  }
}
</script>

<style scoped>

</style>