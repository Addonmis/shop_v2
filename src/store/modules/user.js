import axios from 'axios';

export const state = {
	authUser: false,
	userRole: null,
	user: {}
};

export const getters = {
	get_user: (state) => state.user
};

export const mutations = {
	SET_USER: function (state, {status, user_role}) {
		state.authUser = status;
		state.userRole = user_role;
	},
	SET_USER_DATA: function(state, data){
		state.user = data;
	}
};

export const actions = {
	login ({ commit }, { username, password }) {
		return axios.post('http://localhost:3000/api/login', {
			username,
			password
	})
	.then((res) => {
		const role = parseInt(res.data.user_role, 10);
		localStorage.setItem('id_token', res.data.token);
		commit('SET_USER', {status: true, user_role: role});
		return "Access";
	})
	.catch((error) => {
		throw new Error(error.response.data.message);
	})
	},
	registration({ commit }, { username, password }){
		return axios.post('http://localhost:3000/api/signup', {
			username,
			password
		})
		.then((res) => {
			const role = parseInt(res.data.user_role, 10);
			localStorage.setItem('id_token', res.data.token);
			commit('SET_USER', {status: true, user_role: role});
		})
		.catch((error) => {
			throw new Error(error.response.data.message)
		})
	},
	logout ({ commit }) {
		localStorage.removeItem('id_token');
		commit('SET_USER', false);
	}
};