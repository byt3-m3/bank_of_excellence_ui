import LoginForm from "./views/LoginForm";
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'LoginForm',
            component: LoginForm
        }
    ]
})