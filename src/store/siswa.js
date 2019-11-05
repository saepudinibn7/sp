import axios from 'axios'
import router from '../router/index'
const namespaced = true 

const state = {
	data: {
		nis:'',
		nama:'',
		kelas:'',
		alamat:''
	},
	pembayaran_siswa:Array,
	data_siswa:Object,
    page:''
}

const mutations = {
	data:(state, payload) => {
        state.data = {
            nis: payload.nis,
            nama: payload.nama,
            kelas: payload.kelas,
            alamat: payload.alamat,
        }
	},
	CLEAR_FORM:(state) => {
	     state.data = {
            nis: '',
            nama: '',
            kelas: '',
            alamat: '',
        }		
	},
	pembayaran_siswa:(state, payload) => {
		state.pembayaran_siswa = payload
	},
	data_siswa:(state, payload) => {
		state.data_siswa = payload
	},
    page:(state, payload) => {
        state.page = payload
    }
}

const actions = {
	simpan({state}) {
		console.log(state.data)
	},
	EDIT_SISWA({commit}, id){
        axios.get('http://localhost/apps/api/siswa/get_siswa/' + id).then((res) => {
        	Object.keys(res.data).map((key) => {
            	commit('siswa/data', res.data[key], {root:true})
           	})
        }).catch((e) => {
            router.push('/pembayaran')
        })        
    },
    GET_SISWA({commit}, id) {
        axios.get('http://localhost/apps/api/siswa/get_siswa_by/' + id).then((res) => {
            commit('pembayaran_siswa', res.data)
            Object.keys(res.data).map((key) => {
            	commit('data_siswa', res.data.data[key])
                commit('page', res.data.page)
           	})
        }).catch((e) => {
            router.push('/pembayaran')
        })
    },
    Kembali({commit}){
    	router.go(-1)
    	commit('CLEAR_FORM')
    }
}


export default {
	namespaced,
	state,
	mutations,
	actions
}
