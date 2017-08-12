import axios from 'axios';

export const state = {
	authUser: false
};

export const getters = {

};

export const mutations = {
	SET_USER: function (state, status) {
		state.authUser = status
	}
};

export const actions = {
	login ({ commit }, { username, password }) {
		return axios.post('http://localhost:3000/api/login', {
			username,
			password
	})
	.then((res) => {
		localStorage.setItem('id_token', res.data);
		commit('SET_USER', true);
	})
	.catch((error) => {
		if (error.response.status === 401) {
			throw new Error('Bad credentials')
		}
	})
	},
	logout ({ commit }) {
		localStorage.removeItem('id_token');
		commit('SET_USER', false);
	}
};