import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
  ,
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../components/LoginInst.vue')
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import(/* webpackChunkName: "about" */ '../components/PersonalAreaInst.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '../components/Main.vue')
  },
  {
    path: '/personalAdmin',
    name: 'personalAdmin',
    component: () => import(/* webpackChunkName: "about" */ '../components/PersonalAdminInst.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld.vue')
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: () => import(/* webpackChunkName: "about" */ '../components/UsuariosInst.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
