<template>
<div class="container">
	<div class="d-sm-flex align-items-center justify-content-between mb-4">
		<div class="h5 mb-0 text-white">Riwayat Pembayaran</div>
	</div>
	<div class="row">
		<div class="col-lg-4 col-md-6">
			<div class="card mb-3">
				<div class="card-body">
					<div class="text-xs">
						<span style="flex:1;">SPP BULAN JULI</span>
						<span>KELAS 7</span>
					</div>
					<div class="info mt-4">
						<div class="text-xs" style="flex:1;"><span>RP. 120.000</span></div>
						<div class="btn btn-sm"><i class="fas fa-check"></i> Lunas </div>
						<button class="btn btn-sm"><i class="fas fa-file-pdf"></i> Kuitansi </button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>


<style>
	.card-hello{
		height:7em;
		background: orange;
	}
	.text-xs{
		display: flex;
		font-size: .9rem;
	}
	.info{
		display: flex;
	}
	.card-bottom{
		padding:1.25em;
	}
</style>