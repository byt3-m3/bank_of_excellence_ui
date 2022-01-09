<template>

  <b-container>
    <b-row>
      <h3>Family Name: {{ family_name }}</h3>
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
    getFamilyDetails("7ad46d57-2373-4e67-9456-bc2f11e928ba").then((response) => {

      this.$data.user_details = response.data
      this.$data.family_name = response.data.family_name
    })

  }
}
</script>

<style scoped>

</style>