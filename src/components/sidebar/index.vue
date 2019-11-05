<template>
	<div class="sidebar-app" :class="{ show: open }">
		<ul class="sidebar-menu">
			<li>
				<router-link to="/home">
					<i class="fa fa-home"></i>
					<span>Home</span>
				</router-link>
			</li>
            <li>
				<router-link to="/profile">
					<i class="fa fa-user"></i>
					<span>Profile</span>
				</router-link>
			</li>
            <li>
				<router-link to="#">
					<i class="fa fa-key"></i>
					<span>Master</span>
				</router-link>
                <ul class="menu-nested">
                    <li class="list-nested">
                        <router-link to="/siswa">
                            Siswa
                        </router-link>
                    </li>
                </ul>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	computed:{
		open(){return this.$store.state.ui.isActive}
	},
}
</script>
<style lang="scss">
.sidebar-app{
    position:fixed;
    width:4.5em;
    background: #08B681;
    min-height: 100%;
    display: flex;
    z-index:999;
    white-space: nowrap;
    flex-direction:column;
    font-size:1em;
    @media(max-width:991px){
        margin-left:-5em;
        transition: all .5s ease-in-out;
    }
    .sidebar-menu{
        position: relative;
        padding:0px;
        flex: 1;
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        margin: 0px;
        >li{
            position: relative;
            list-style:none;
            margin:0px;
            padding:0px;
            >a{
                color: #fff;
                display: block;
                text-align: center;
                line-height: 50px;
                white-space: nowrap;
                font-size:1rem;
                >span{
                    position:absolute;
                    z-index: 999;
                    top:0;
                    /*background: #00a65a;*/
                    background: #08B681;
                    text-align:justify;
                    text-indent: 20px;
                    font-size:14px;
                    color:white;
                    display: none;
                }
                i{
                    color:white;
                    width: 4em;
                }
			}
			.menu-nested{
                display: none;
                list-style: none;
                padding: 0;
                margin: 0;
                padding-left: 0px;
                text-overflow: ellipsis; 
                .list-nested{
                    margin:0px;
                    padding:0px;  
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    a{
                        display: block;
                        background: #00a65a;
                        color:white;
                        text-overflow: ellipsis; 
                        line-height:35px;
                        text-indent:20px;
                        font-size:14px;
                        text-decoration: none;
                    }     
                }
            }
		}
	}
}

.sidebar-menu>li:hover>a>span{
    display: block !important;
    position: absolute;
    width: 230px !important;
    left: 4.5em;
    text-overflow: ellipsis; 
}
.sidebar-menu>li:hover>a{
    background: #00a65a;
}
.sidebar-menu>li:not(a):hover .menu-nested{
    display: block !important;
    position: absolute;
    width: 230px !important;
    left: 4.5em;
    text-overflow: ellipsis; 
}
.show{
	@media(max-width:991px){
		margin-left:0em;
	}
}
</style>