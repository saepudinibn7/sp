<template>
<div class="container">
	<div class="d-sm-flex align-items-center justify-content-between mb-4">
		<div class="h3 mb-0 text-white">Dashboard</div>
	</div>
	<div class="row">
		<div class="col-lg-12 mb-3">
            <div class="banner">
				<div class="col-lg-2 col-4">
                    <img src="../assets/undraw_welcoming_xvuq.svg" class="img-fluid" alt="">
				</div>
				<div class="col-8">
					<span class="text-white">Selamat Datang Kembali {{user.nama}}</span>
				</div>
            </div>
        </div>
		<div class="col-lg-4">
			<div class="card mb-3">
				<div class="card-body">
					<div class="row no-gutters">
						<div class="col">
							<div class="text-xs">JUMLAH TERLUNASI</div>
							<div class="text-xs">120</div>
						</div>
						<div class="col-auto">
							<i class="fas fa-check"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-4">
			<div class="card mb-3">
				<div class="card-body">
					<div class="row no-gutters">
						<div class="col">
							<div class="text-xs">JUMLAH BELUM TERLUNASI</div>
							<div class="text-xs">120</div>
						</div>
						<div class="col-auto">
							<i class="fas fa-times"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-4">
			<div class="card mb-3">
				<div class="card-body">
					<div class="row no-gutters">
						<div class="col">
							<div class="text-xs">Tunggakan</div>
							<div class="text-xs">120</div>
						</div>
						<div class="col-auto">
							<i class="fas fa-clipboard-list"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-12">
			<div class="text">
				<p class="mb-3" style="flex:1">Transaksi Terakhir</p>
				<router-link to="#" class="ml-auto">Selengkapnya</router-link>
			</div>
			<div class="row mt-2">

			</div>
		</div>
	</div>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default{
	mounted(){
		this.add()
	},
	computed:{
		...mapState({
			last: state => state.pembayaran.last,
			user: state => state.user.user
		})
	},
	methods:{
		...mapActions({
			add: 'pembayaran/GET_LAST_TRANSCTION'
		})
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
	.text{
		display: flex;
	}
	.text a{
		color:#2c3e50;
		text-decoration: none;
	}
	.banner{
    background: #6c63ff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 4px;
    padding: 10px 15px;
	}

	img{
		max-width: 100%;
		height: auto;
	}

	.thumb{
		-webkit-box-flex: 0;
		-ms-flex: 0 0 150px;
		flex: 0 0 150px;
		width: 150px;
		max-width: 150px;
	}
</style>