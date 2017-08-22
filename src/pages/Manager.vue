<template lang="jade">
	.container
		.columns
			.column
				.tabs
					ul
						li.is-active
							a(@click="active_tab='products'") Products
						li
							a(@click="active_tab='categories'") Categories
						li
							a(@click="active_tab='properties'") Properties
			.column
				manager__products-items(v-if="active_tab=='products'") 
				manager__products-categories(v-if="active_tab=='categories'")
				manager__products-properties(v-if="active_tab=='properties'")
</template>

<script>

import axios from 'axios';

import {mapGetters} from 'vuex';
import store from '../store/index';
import manager__products_items from '../components/manager/manager__products_items.vue';
import manager__products_categories from '../components/manager/manager__products_categories.vue';
import manager__products_properties from '../components/manager/manager__products_properties.vue';

export default {
	name: 'Manager',
	data(){
		return {
			active_tab: ''
		}
	},
	beforeRouteEnter(to, from, next){
		next((vm) => {
			vm.set_user();
		});
	},
	computed: mapGetters({
		products: 'get_all_products',
		user: 'get_user'
	}),
	methods: {
		set_user(){
			axios.get(`http://localhost:3000/api/manager`, {headers: {'authorization': localStorage.getItem('id_token')}})
			.then((data) => {
				store.commit('SET_USER_DATA', data.data);
			});
		},
		loadImg(path) {
			if (path){
				return require('../assets' + path);
			}
		}
	},
	components: {
		manager__products_items,
		manager__products_categories,
		manager__products_properties
	}
	,
	route:{
		canActivate(){
			return $store.state.user.authUser
		}
	}
}
</script>

<style lang="sass" scoped>

</style>