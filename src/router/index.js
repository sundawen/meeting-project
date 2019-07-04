import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from '../components/login/LoginComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginComponent
    }
  ]
})
