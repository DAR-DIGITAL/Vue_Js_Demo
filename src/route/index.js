// router.js
import { createRouter, createWebHistory } from 'vue-router';
import AdminLayout from '../AdminLayout.vue';
import Dashboard from '../components/AdminComponents/dashboard/index.vue';
import ProductsList from '../components/AdminComponents/products/ProductsList.vue';

const routes = [
  {
    path: '/',
    component: AdminLayout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'products',
        component: ProductsList
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;