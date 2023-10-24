import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from "../pages/Layout/LayoutView.vue";
import MockPage from "@/pages/Mock/MockPage.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: LayoutView,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: MockPage,
      },
      {
        path: 'leaderboard',
        name: 'leaderboard',
        component: LayoutView,
      },
      {
        path: 'order',
        name: 'order',
        component: LayoutView,
      },
      {
        path: 'products',
        name: 'products',
        component: LayoutView,
      },
      {
        path: 'sales-report',
        name: 'Sales Report',
        component: LayoutView,
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
//Leaderboard, order, Products, Sales Report
export default router
