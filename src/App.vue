<template>

    <div id="app">

        <img alt="Vue logo" src="./assets/logo.png">
        <FormTextInput></FormTextInput>
    </div>
</template>

<script>


    import {getBoeApiClient} from './js_code/boe_api_client'
    import FormTextInput from "@/components/FormTextInput";

    export default {
        name: 'App',
        components: {
            FormTextInput
        }
    }

    let client = getBoeApiClient()

    client.createNewFamily(
        'baxter_clan',
        'courtney',
        'baxter',
        'cbaxter@gamil.com',
        '1988-09-06T00:00:00'
    )

</script>

<style>


    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }


</style>
