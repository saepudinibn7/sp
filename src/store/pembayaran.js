import axios from 'axios'
import router from '../router/index'
import Vue from 'vue'
const namespaced = true

const state = {
    pembayaran:Array,
    siswa:[],
    pembayaran_siswa:Array,
    bayar:{
        nama_pembayaran:'',
        id_pembayaran:'',
        sisa_pembayaran:'',
        terbayar:'',
        jumlah_dibayar:'',
        nama_siswa:''
    },
    total:'',
    page:1,
}

const mutations = {
    pembayaran: (state, payload) => {
        state.pembayaran = payload
    },
    siswa: (state, payload) => {
        state.siswa = payload
    },
    pembayaran_siswa: (state, payload) => {
        state.pembayaran_siswa = payload
    },
    bayar:(state, payload) => {
        state.bayar = {
            nama_pembayaran: payload.nama_pembayaran,
            id_pembayaran: payload.id_pembayaran,
            sisa_pembayaran: payload.sisa_pembayaran,
            jumlah_dibayar: '',
            nama_siswa:payload.nama
        }
    },
    bayars:(state, payload)=>{
        state.bayar = {
            nama_pembayaran: payload.nama_pembayaran,
            id_pembayaran: payload.id_pembayaran,
            sisa_pembayaran: payload.jumlah_dibayar - payload.sisa_pembayaran,
            jumlah_dibayar: payload.jumlah_dibayar,
            nama_siswa:payload.nama_siswa
        }
        if(state.bayar.sisa_pembayaran = "0"){
            Vue.set(state.bayar, 'status','Lunas')
        }else{
            Vue.set(state.bayar, 'status','Belum Lunas')
        }
    },
    page:(state, payload) => {
        state.page = payload
    },
    total:(state, payload) => {
        state.total = payload
    },
    SET_PAGE(state, payload) {
        state.page = payload
    },
}

const actions = {
    GET_PEMBAYARAN_ALL ({commit}) {
        axios.get(`http://localhost/apps/api/pembayaran/get_pembayaran_all/`)
        .then((res) => {
            commit('pembayaran/pembayaran', res.data, {root:true})
        })
    },
    GET_SISWA_ALL ({commit,}) {
        return new Promise((resolve, reject) => {
            axios.get(`http://localhost/apps/api/siswa/get_siswa_all/${state.page}`)
            .then((res) => {
                commit('pembayaran/siswa', res.data, {root:true})
                resolve(res.data)
            })
        })
    },
    FIND_PEMBAYARAN ({commit, dispatch}, id){
        axios.get('http://localhost/apps/api/pembayaran/find_by/' +  id)
        .then((res) => {
            dispatch('GET_PEMBAYARAN', id)
        }).catch((e) => {
            router.replace('/siswa')
        })
    },
    GET_PEMBAYARAN({commit}, id){
        axios.get('http://localhost/apps/api/Pembayaran/get_pembayaran/' + id).then((res) => {
            Object.keys(res.data).map((key) => {
                commit('bayar', res.data[key])
            })
            console.log(res.data)
        })
    },
    BAYAR({state, getters, dispatch, commit}){
        commit('bayars', getters.bayar)
        dispatch('KIRIM_PEMBAYARAN')
    },
    KIRIM_PEMBAYARAN({state}){
        axios.post('http://localhost/apps/api/Pembayaran/bayar/' + state.bayar.id_pembayaran, state.bayar).then((res) => {
            console.log(res.data)
        })
    }
}

const getters = {
    bayar: (state) => {
        return state.bayar
    },
}

export default {
	namespaced,
	state,
	mutations,
	actions,
    getters
};
