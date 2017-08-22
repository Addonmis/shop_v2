 <template lang="jade">
	span user
</template>

<script>

import axios from 'axios';

import {mapGetters} from 'vuex';
import store from '../store/index';

export default{
	name: 'User',
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
		//products: 'get_all_products',
		user: 'get_user'
	}),
	methods: {
		set_user(){
			axios.get(`http://localhost:3000/api/user`, {headers: {'authorization': localStorage.getItem('id_token')}})
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
		// manager__products_items,
		// manager__products_categories,
		// manager__products_properties
	}
	,
	route:{
		canActivate(){
			return $store.state.user.authUser
		}
	}
}

</script>

<style lang="sass"scoped>
	
</style>