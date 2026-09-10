import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import NewPage from '../newpage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/newpage',
    name: 'newpage',
    component: NewPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router