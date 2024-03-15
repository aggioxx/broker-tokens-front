import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '@/views/user/ProfileView.vue'
import BuyView from '@/views/user/BuyView.vue'
import SellView from '@/views/user/SellView.vue'
import BankAccView from '@/views/user/BankAccView.vue'
import HomeView from '@/views/user/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: ProfileView
    },
    {
      path: '/comprar',
      name: 'comprar',
      component: BuyView
    },
    {
      path: '/vender',
      name: 'vender',
      component: SellView
    },
    {
      path: '/conta',
      name: 'conta',
      component: BankAccView
    }
  ]
})
export default router
