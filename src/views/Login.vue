<template>
	<div class="auth-page">
		<div class="row page">
			<div class="col-md-5 mx-auto form">
				<form @submit.prevent="login">
					<div class="form-group">
						<input type="text"  v-model="user.username" class="form-control" placeholder="nama">
					</div>
					<div class="form-group">
						<input type="passowrd" v-model="user.password" class="form-control" placeholder="nama">
					</div>
					<div class="form-group">
						<button class="btn btn-primary btn-block">Login</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default{
	computed:{
		...mapState({
			user: state => state.user.data
		})
	},
	methods:{
		...mapActions({
			login: 'user/LOGIN'
		})
	}
}
</script>

<style>
	.auth-page{
	background-size: cover;
    background-color: #fff;
    min-height: 100vh;
    height: 100%;
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex:1;
	}
	.page{
		width:100%;
	}
	.form{
		display: flex;
    flex-direction: column;
    justify-content: center;
	}
</style>