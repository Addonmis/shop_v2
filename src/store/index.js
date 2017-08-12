import Vue from 'vue';
import Vuex from 'vuex';

import * as products from './modules/products';
import * as user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		user,
		products
	}
});

export default store;