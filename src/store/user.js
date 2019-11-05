const namespaced = true;
import axios from 'axios';
import router from '../router/index'

const state = {
	authenticated: true,
	data: { username: '', password: '' },
	user: {}
};

const mutations = {
	'auth': (state, payload) => {
		state.authenticated = payload
	},
	'user': (state, payload) => {
		state.user = payload
	}
};

const actions = {
	LOGIN({commit, state, dispatch}) {
		axios.post('http://localhost/apps/api/User/login', {username:state.data.username , password:state.data.password})
		.then((res) => {
			commit('user/auth', true, {root:true})
			localStorage.setItem('token', res.data.token);
			router.push('/home');
			dispatch('GET_USER');
		})
	},
	GET_USER({commit}){
		const token = localStorage.getItem('token')
		axios.get('http://localhost/apps/api/User/get_user',{ headers: { Authorization: token }})
		.then((res) => {
			Object.keys(res.data.user).map((key) => {
				commit('user/user', res.data.user[key], {root:true})
			})
		})
	}
}

const getters = {

};

export default {
	namespaced,
	state,
	mutations,
	actions,
	getters
};
