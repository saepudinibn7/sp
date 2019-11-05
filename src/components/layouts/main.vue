<template>
<div class="main">
	<Sidebar />
	<main class="page-app">
		<div class="header-app">
			<div class="papper-left">
				<button class="btn-sidebar" @click="buka"><i class="fa fa-bars"></i></button>	
			</div>
			<div class="user-right ml-auto">
				<a href="#" @click="dropdown">
					<img src="https://facebook.github.io/react-native/img/tiny_logo.png" />
					<span>{{user.nama}}</span>
				</a>
			</div>
		</div>
		<div class="papper-page">
			<transition name="fade">
				<router-view/>
			</transition>				
		</div>
	</main>
</div>
</template>

<script>
import Sidebar from '@/components/sidebar/index'
import {mapState} from 'vuex'
export default{
	components:{Sidebar},
	data(){
		return{
			show:false
		}
	},
	mounted(){
		document.querySelector('.page-app').addEventListener('mousedown', this.close)
	},
	computed:{
		...mapState({
			'user': state => state.user.user
		})
	},
	methods:{
	    buka(){
	      return this.$store.commit('ui/sidebar');
	    },
	    close() {
			this.$store.commit('ui/close');
		},
		dropdown(){
			this.show = !this.show
		},
	},
}
</script>

<style lang="scss">
body{
	font-size:14px !important;
}
.main{
	display:flex;
	flex:1;
	overflow:hidden;
	background:#F6F8FA;
}

	.page-app{
		position:relative;
		flex:1;
		min-height: 100vh;
		overflow: hidden;
		&::before{
		position: absolute;
		content: '';
		background: #3A43E0;
		height: 30%;
		width: 100%;
		}
	}

	.papper-page{
		position:relative;
		margin-left: 4.5em;
		@media(max-width:991px){
			margin-left: 0em;
		}
	}
	.header-app{
		position:relative;
		height:50px;
		display:flex;
		margin-bottom: 1.5em;
		.user-right{
			display:flex;
			line-height:40px;
			color:white;
			>a {
				display:flex;
				text-decoration: none;
				color:white;
				justify-content: center;
				align-items: center;
				>img{
					width: 25px;
					height: 25px;
					margin-right:5px;
				}
				>span{
					margin-right:5px;
					@media(max-width:991px){
						display:none;
					}
				}
			}
		}
		.btn-sidebar{
			display: inline-block;
			font-weight: 400;
			color: #212529;
			text-align: center;
			vertical-align: middle;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
			background-color: transparent;
			border: 1px solid transparent;
			font-size: 1rem;
			line-height: 1.5;
			outline:none;
			color:white;
			line-height:50px;
			@media(min-width:992px){
				display:none;
			}
		}
	}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  position: absolute;
  left:0;
  right:0;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>