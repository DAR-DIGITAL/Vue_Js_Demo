<script setup>
import { onMounted } from 'vue';
import ProductsList from './components/AdminComponents/products/ProductsList.vue';
import SideBar from './components/AdminComponents/SideBar.vue';
import NavBar from './components/AdminComponents/NavBar.vue';
import { useLayoutStore } from './store/layout';

import Dashboard from './components/AdminComponents/dashboard/index.vue';
import { useAuthStore } from './store/auth';
import Login from './components/AdminComponents/login.vue';
const authStore = useAuthStore()
const layoutStore = useLayoutStore()
onMounted(() => {
  authStore.verifyToken()
})
</script>

<template>
  <div class="flex w-full min-h-screen overflow-hidden" v-if="authStore.token">
    <div class="w-1/6 flex">
      <SideBar />

    </div>
    <div class="flex flex-col  w-full">
      <NavBar />
      <div class="flex " v-if="layoutStore.currentRoute === '/dashboard'">
        <Dashboard />
      </div>
      <div class="flex m-auto overflow-auto" v-if="layoutStore.currentRoute === '/products'">
        <ProductsList />
      </div>
      <div class="flex m-auto " v-if="layoutStore.currentRoute === '/users'">
        <h1 class="text-black">users</h1>
      </div>
    </div>
  </div>
  <div v-else>
    <Login />
  </div>
</template>
<style></style>