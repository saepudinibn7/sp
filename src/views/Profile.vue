<template>
<div class="container">
	<div class="d-sm-flex align-items-center justify-content-between mb-4">
		<div class="h3 mb-0 text-white">Profile</div>
	</div>
  <div class="row">
    <div class="col-lg-12">
			<div class="card mb-3">
				<div class="card-body">
          <div class="row">
            <div class="col-lg-4">
              <div class="profile-main">
                <div class="profil-image">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmxDFRUiaco1JMHG2hu0MsN0qO9YSu1RT-3PVZ_BSYh5bi9iRM" style="width:150px;" alt="">
                </div>
                <div class="profile-information">
                  <h5 class="name">{{user.nama}}</h5>
                  <b>{{user.level}}</b>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-12 ml-auto">
              hello
            </div>
          </div>
				</div>
        <div class="p-3 mx-auto">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" @click.prevent="setActive('home')" :class="{ active: isActive('home') }" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="setActive('profile')" :class="{ active: isActive('profile') }" href="#profile">Profile</a>
            </li>
          </ul>
        </div>
			</div>
		</div>
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="tab-content py-3" id="myTabContent">
              <div class="tab-pane fade" :class="{ 'active show': isActive('home') }" id="home">
                  Home content
              </div>
              <div class="tab-pane fade" :class="{ 'active show': isActive('profile') }" id="profile">Profile content</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
      activeItem: 'home'
    }
  },
  computed:{
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-main{
  display: flex;
  align-items: center;
}
.fade{
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>