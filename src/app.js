import Vue from 'vue';
import App from './App.vue';
import {sync} from 'vuex-router-sync';
import axios from 'axios';
import store from './store/index';

import router from './routes.js';

sync(store, router);

axios.defaults.headers.common['authorization'] = localStorage.getItem('id_token');

const jwt = localStorage.getItem('id_token');
if (jwt){
	store.commit('SET_USER', true);
} else{
	store.commit('SET_USER', false);
}

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
