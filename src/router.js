import LoginForm from "./views/LoginForm";
import RegistrationForm from "./views/RegistrationForm";
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'LoginForm',
            component: LoginForm
        },
        {
            path: '/registration',
            name: 'RegistrationForm',
            component: RegistrationForm
        }
    ]
})