import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import Product from './pages/Product.vue';
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
      path: '/*',
      component: page404
    }
  ]
})
