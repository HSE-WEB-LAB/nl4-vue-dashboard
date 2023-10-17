import { createRouter, createWebHistory } from 'vue-router'
import Layout from "../pages/Layout/Layout.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [

    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
