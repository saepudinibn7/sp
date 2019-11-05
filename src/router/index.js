import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/layouts/main'
import store from '../store/index'
import Landing from '@/components/layouts/landing'
Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'home',
    component: Layout,
    redirect: '/home',
    children:[
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
        meta:{
          requiresLogin:true
        }
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
      },
      {
        path: '/siswa',
        component: () => import('../views/Siswa/index.vue'),
        children:[
          {
            path: '/siswa',
            name:'siswa',
            component: () => import(/* webpackChunkName: "about" */ '../views/Siswa/tabel.vue'),
          },
          {
            path:'/tambah/siswa',
            name:'tambah_siswa',
            component: () => import(/* webpackChunkName: "about" */ '../views/Siswa/add.vue'),
          },
          {
            path:'/edit/siswa/:id',
            name:'edit_siswa',
            component: () => import(/* webpackChunkName: "about" */ '../views/Siswa/edit.vue'),            
          },
          {
            path:'/view/siswa/:id',
            name:'view_siswa',
            component: () => import(/* webpackChunkName: "about" */ '../views/Siswa/view.vue'),   
          }
        ],
        meta:{
          requiresLogin:true
        }
      },
      {
        path:'/pembayaran/bayar/:id',
        component: () => import('../views/Pembayaran/index.vue'),
        children:[
          {
            path:'/pembayaran/bayar/:id',
            name:'bayar',
            component: () => import('../views/Pembayaran/bayar.vue'),
          }
        ]
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    redirect: '/',
    children:[
      {
        path: '/',
        name: 'Page',
        component: () => import(/* webpackChunkName: "about" */ '../views/landing/Home.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin) && store.state.user.authenticated == false) {
        next("/Login")
    } else {
        next()
    }
})

export default router
