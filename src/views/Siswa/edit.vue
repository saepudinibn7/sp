<template>
	<div class="container">
		<div class="d-sm-flex align-items-center justify-content-between mb-4">
			<div class="h3 mb-0 text-white">Edit Data Siswa</div>
		</div>
		<div class="row">
			<div class="col-lg-12">
				<div class="card">
					<div class="card-body">
						<FormSiswa></FormSiswa>
						<div class="form-group">
							<button class="btn btn-primary btn-sm ml-1" @click="back">
		                    	Kembali
		                    </button>
		                    <button class="btn btn-primary btn-sm ml-1" @click="save">
		                        <i class="fa fa-save"></i> Simpan
		                    </button>
		                </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import FormSiswa from './FormSiswa'
export default{
	components:{FormSiswa},
	created(){
		this.edit(this.$route.params.id)
	},
	methods:{
		...mapActions({
			edit: 'siswa/EDIT_SISWA',
			save: 'siswa/simpan',
			back: 'siswa/Kembali'
		}),
	}
}
</script>