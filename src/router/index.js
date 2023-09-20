import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue')
    },
    {
      path: '/eventos',
      name: 'eventos',
      component: () => import('../views/EventosView.vue')
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: () => import('../views/CarritoView.vue')
    },
    {
      path: '/platillo',
      name: 'platillo',
      component: () => import('../views/PlatilloView.vue')
    },
    {
      path: '/compra',
      name: 'compra',
      component: () => import('../views/CompraView.vue')
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: () => import('../views/PerfilView.vue')
    }
    // {
    //   path: '/menu/:platillo',
    //   name: 'platillo',
    //   component: () => import('../views/PlatilloView.vue'),
    // }
  ]
})

export default router
