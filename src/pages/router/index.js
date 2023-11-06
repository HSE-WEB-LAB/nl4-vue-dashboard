import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from "../Layout/LayoutView.vue";
import DashboardView from "@/pages/Dashboard/DashboardView.vue";
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
        component: DashboardView,
      },
      {
        path: 'leaderboard',
        name: 'leaderboard',
        component: MockPage,
      },
      {
        path: 'order',
        name: 'order',
        component: MockPage,
      },
      {
        path: 'products',
        name: 'products',
        component: MockPage,
      },
      {
        path: 'sales-report',
        name: 'Sales Report',
        component: MockPage,
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
