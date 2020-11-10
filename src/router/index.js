import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/auth/Login.vue')
  },
  {
    path: '/register',
    name: 'retister',
    component: () => import('../components/auth/Register.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
