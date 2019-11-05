import Vue from "vue";
import Vuex from "vuex";
import user from './user'
import pembayaran from './pembayaran'
import ui from './ui'
import siswa from './siswa'
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		user,
		pembayaran,
		ui,
		siswa
  }
});
