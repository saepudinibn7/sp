const namespaced = true;

const state = {
    isActive:false
}

const mutations = {
    sidebar: (state) => {
        state.isActive = !state.isActive
    },
    close: (state) => {
        state.isActive = false
    }
}

const actions = {

}

export default {
    namespaced,
    state,
    mutations,
    actions
}