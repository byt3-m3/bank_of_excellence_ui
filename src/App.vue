<template>

  <div id="app">
    <b-container>
      <h1>Bank of Excellence Prototype</h1>
      <b-row >
        <b-col id="LINKS">

          <b-link>
            <router-link to="/home">home</router-link>
          </b-link>
          <b-link href="#foo">
            <router-link to="/login">Login</router-link>
          </b-link>
          <b-link>
            <router-link to="/registration">Register</router-link>
          </b-link>

        </b-col>



      </b-row>

      <router-view></router-view>
    </b-container>
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->

    <!--        <LoginForm></LoginForm>-->
  </div>
</template>

<script>


// import {getBoeApiClient} from './js_code/boe_api_client'
// import LoginForm from "./views/LoginForm";

export default {
  name: 'App',
  components: {}
}
//
// let client = getBoeApiClient()
//
// client.createNewFamily(
//     'baxter_clan',
//     'courtney',
//     'baxter',
//     'cbaxter@gamil.com',
//     '1988-09-06T00:00:00'
// )

</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /*margin: 30px;*/
  

}

#LINKS {
  margin: 10px;
  margin-bottom: 25px;
}

a {
  padding-right: 10px;
}

button {
  margin: 5px;
}


</style>
