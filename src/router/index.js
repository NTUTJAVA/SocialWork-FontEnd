import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/register',
    name: 'retister',
    component: () => import('../components/auth/Register.vue')
  },
  {
    path: '/userinfo/:username?',
    name: 'userinfo',
    component: () => import('../components/auth/UserInfo.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
