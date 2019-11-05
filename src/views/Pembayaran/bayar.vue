<template>
<div class="container">
	<div class="d-sm-flex align-items-center justify-content-between mb-4">
		<div class="h3 mb-0 text-white">Bayar</div>
	</div>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-body">
					<form>
						<div class="form-group">
							<label for="nama_pembayaran">Nama Siswa</label>
							<input type="text" class="form-control" id="nama_pembayaran" v-model="form.nama_siswa" readonly>
						</div>
						<div class="form-group">
							<label for="nama_pembayaran">Nama Pembayaran</label>
							<input type="text" class="form-control" id="nama_pembayaran" v-model="form.nama_pembayaran" readonly>
						</div>
						<div class="form-group">
							<label for="bayar">Total Bayar</label>
							<input type="text" class="form-control" id="bayar" v-model="form.jumlah_dibayar" placeholder="Masukan Jumlah Yang Akan Dibayar">
						</div>	
						<div class="form-group">
							<label for="sisa">Sisa</label>
							<input type="text" class="form-control" v-model="form.sisa_pembayaran" id="sisa" placeholder="Sisa" readonly>
						</div>
						<div class="form-group">
							<button type="button" @click="$router.go(-1)" class="btn btn-primary mr-1">
								Kembali
							</button>
							<button type="button" class="btn btn-primary" @click="bayars">
								Bayar
							</button>
						</div>			
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'
export default{
	data(){
		return{
			status:''
		}
	},
	created(){
		this.find(this.$route.params.id)
	},
	computed:{
		...mapState({
			form: state => state.pembayaran.bayar,
		})
	},
	methods:{
		...mapActions({
			find: 	'pembayaran/FIND_PEMBAYARAN',
			bayars: 	'pembayaran/BAYAR',
		}),
	}
}
</script>