<template lang="jade">
	.container
		.columns
			.column
				span first
				figure.image.is-480x480
					img(:src="loadImg(product.image_path)")
			.column
				.tabs
					ul
						li.is-active
							a(@click="active_tab='detail'") DETAIL
						li
							a(@click="active_tab='review'") REVIEW
						li
							a(@click="active_tab='related'") RELATED
				product_detail(v-if="active_tab=='detail'")
				product_review(v-if="active_tab=='review'")
				product_related(v-if="active_tab=='related'")
</template>

<script>

import axios from 'axios';

import {mapGetters} from 'vuex';
import store from '../store/index';
import product_detail from '../components/product_detail.vue';
import product_review from '../components/product_review.vue';
import product_related from '../components/product_related.vue';

export default {
	name: 'Product',
	data(){
		return {
			active_tab: 'detail'
		}
	},
	beforeRouteEnter(to, from, next){
		next((vm) => {
			vm.set_product(to.params.id_product)
		});
	},
	computed: mapGetters({
		product: 'get_product'
	}),
	methods: {
		set_product(params){
			axios.get(`http://localhost:3000/api/product/${params}`)
			.then((data) => {
				store.commit('LOAD_PRODUCT_INFO', data.data.item[0][0]);
			});
		},
		loadImg(path) {
			if (path){
				return require('../assets' + path);
			}
		}
	},
	components: {
		product_detail,
		product_review,
		product_related
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