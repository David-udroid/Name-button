import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import NewPage from '../newpage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
  {
    path: '/newpage',
    name: 'newpage',
    component: NewPage
  }
],
})

export default router