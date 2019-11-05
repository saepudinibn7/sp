<template>
<div class="container">
	<div class="d-sm-flex align-items-center justify-content-between mb-4">
		<div class="h3 mb-0 text-white">{{data.nama_siswa}}</div>
	</div>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-body">
					<div class="card-title">
						<h5>Pembayaran</h5>
					</div>
					<b-table bordered hover :items="items" :fields="fields" responsive>
						<template v-slot:cell(aksi)="data">
							<button class="btn btn-success btn-sm ml-1" @click="bayar(data.item.id_pembayaran)">Bayar</button>
							<button class="btn btn-primary btn-sm ml-1">Riwayat Pembayaran</button>
						</template>
					</b-table>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default{
	data(){
		return{
			fields: [
	          { key: 'nama_pembayaran', label: 'Nama Pembayaran' },
	          { key: 'harga', label: 'Harga' },
	          { key: 'pembayaran_dibuat', label:'Pembayaran Dibuat'},
	          { key: 'dibayar', label:'Dibayar'},
	          { key: 'status', label: 'Status' },
	          { key: 'aksi', label:'Aksi'}
        	],
		}
	},
	mounted(){
		this.GET_SISWA(this.$route.params.id)
	},
	computed:{
		...mapState({
			data: state => state.siswa.data_siswa,
			items: state => state.siswa.pembayaran_siswa
		})
	},
	methods:{
		...mapActions('siswa', ['GET_SISWA']),
		bayar(id){
			this.$router.push({
            	name: 'bayar',
            	params: {
                	id: id
            	}
        	})
		}
	}
}
</script>