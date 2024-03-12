import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/user/HomeView.vue'
import Profile from '@/views/user/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path: '/profile',
      name: 'profile',
      component: Profile
    },
  ]
})

export default router
