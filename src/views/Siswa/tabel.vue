<template>
<div class="container">
	<div class="d-sm-flex align-items-center justify-content-between mb-4">
		<div class="h3 mb-0 text-white">Pembayaran</div>
	</div>
	<div class="row">
		<div class="col-lg-12">
			<router-link to="/tambah/siswa" class="btn btn-primary ml-1 mb-2">Tambah Data</router-link>
			<div class="card">
				<div class="card-body">
					<div class="card-title">
						<h5>Pembayaran</h5>
					</div>
					<b-table bordered hover :items="items.data" :fields="fields" :filter="filter" responsive>
						<template v-slot:cell(aksi)="data">
				        	<button @click="edit(data.item.id)" class="btn btn-primary btn-sm ml-1">Edit</button>
				        	<button @click="col(data.item.id)" class="btn btn-primary btn-sm ml-1"><i class="far fa-eye"></i></button>
				        	<router-link to="#" class="btn btn-danger btn-sm ml-1"><i class="fas fa-trash"></i></router-link>
				      	</template>
					</b-table>
					    <b-pagination
					      v-model="page"
					      :total-rows="items.total"
					      :per-page="items.per_page"
					    ></b-pagination>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
	data(){
		return{
			filter:null,
			fields: [
	          { key: 'nis', label: 'NIS' },
	          { key: 'nama', label: 'Nama' },
	          { key: 'kelas', label: 'Kelas' },
	          { key: 'alamat', label: 'alamat' },
	          { key: 'photo', label: 'Photo' },
	          { key: 'aksi', label: 'Action' }
        	],
		}
	},
	created(){
		this.get_siswa()
	},
	computed:{
		...mapState({
			items: state => state.pembayaran.siswa,
			total: state => state.pembayaran.perPage,
		}),
		page: {
            get() {
                return this.$store.state.pembayaran.page
            },
            set(val) {
                this.$store.commit('pembayaran/SET_PAGE', val)
                this.get_siswa()
            }
        }
	},
	methods:{
		...mapActions({
			get_siswa: 'pembayaran/GET_SISWA_ALL',
		}),
		col(id){
			this.$router.push({
            	name: 'view_siswa',
            	params: {
                	id: id
            	}
        	})
		},
		edit(id){
			this.$router.push({
            	name: 'edit_siswa',
            	params: {
                	id: id
            	}
        	})
		}
	}
}
</script>


<style>
	.card-hello{
		height:7em;
		background: orange;
	}
	.text-xs{
		font-size: .9rem;
	}
	.info{
		display: flex;
	}
	.card-bottom{
		padding:1.25em;
	}
</style>