import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/public/Home.vue'
import Login from './pages/public/Login.vue'
import Register from './pages/public/Register.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
