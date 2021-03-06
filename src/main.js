import Vue from 'vue'

import App from './App.vue'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from './router'
import store from "@/store";

require('dotenv').config();

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)

Vue.config.productionTip = false

//


new Vue({
    el: '#app',
    store: store,
    render: h => h(App),
    router
}).$mount('#app')
