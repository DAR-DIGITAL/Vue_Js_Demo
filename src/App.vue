<script setup>
import axios from 'axios';
import AdminLayout from './AdminLayout.vue';
import WebSiteLayout from './WebSiteLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { useLayoutStore } from './store/layout';

const layoutStore = useLayoutStore();
const user = 'admin'; // Change this value based on your authentication logic




</script>

<template>
  <div :class="layoutStore.darkMode ? 'bg-gray-950' : 'bg-white'">
    <!-- <AdminLayout /> -->
    <router-view></router-view>

  </div>
</template>