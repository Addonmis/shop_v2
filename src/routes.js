import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import Product from './pages/Product.vue';
import Login from './pages/Login.vue';
import User from './pages/User.vue';
import Admin from './pages/Admin.vue';
import Manager from './pages/Manager.vue';
import page404 from './pages/error/404.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
    	path: '/',
    	component: Home
    },
    {
      path: `/product/:id_product`,
      component: Product
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/manager',
      component: Manager
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/*',
      component: page404
    }
  ]
})
