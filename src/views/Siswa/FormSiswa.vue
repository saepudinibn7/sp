<template>
	<div>
		<div class="form-group">
			<label for="nis">NIS</label>
			<input type="number" class="form-control" v-model="data.nis" id="nis" placeholder="Masukan NIS">
		</div>
		<div class="form-group">
			<label for="Nama">Nama</label>
			<input type="text" class="form-control" v-model="data.nama" id="Nama" placeholder="Masukan Nama">
		</div>
		<div class="form-group">
			<label for="Kelas">Kelas</label>
			<input type="number" class="form-control" v-model="data.kelas"  id="Kelas" placeholder="Masukan Kelas">
		</div>
		<div class="form-group">
			<label for="Alamat">Alamat</label>
			<input type="text" class="form-control" v-model="data.alamat" id="Alamat" placeholder="Masukan Alamat">
		</div>
	</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default{
	computed:{
		...mapState({
			data: state => state.siswa.data
		})
	},
}
</script>