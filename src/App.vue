<script setup>
import axios from 'axios';
import AdminLayout from './AdminLayout.vue';
import WebSiteLayout from './WebSiteLayout.vue';
import { useLayoutStore } from './store/layout';
const layoutStore = useLayoutStore()
const user ='admin'
</script>

<template>
  <div :class="layoutStore.darkMode? 'bg-gray-950': 'bg-white'">
  <div v-if="user=='admin'" class="w-full ">
 <AdminLayout/>
 
  </div>
  <div v-else class="w-full ">
 <WebSiteLayout/>
 
  </div>
</div>
</template>


