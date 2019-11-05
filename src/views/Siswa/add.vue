<template>
	<div class="container">
		<div class="d-sm-flex align-items-center justify-content-between mb-4">
			<div class="h3 mb-0 text-white">Tambah Data Siswa</div>
		</div>
		<div class="row">
			<div class="col-lg-12">
				<div class="card">
					<div class="card-body">
						<FormSiswa></FormSiswa>
						<div class="form-group">
		                    <button class="btn btn-primary btn-sm btn-flat" @click.prevent="simpan">
		                        <i class="fa fa-save"></i> Add New
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
	methods:{
		...mapActions({
			simpan: 'siswa/simpan'
		})
	}
}
</script>