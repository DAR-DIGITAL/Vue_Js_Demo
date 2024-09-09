<script setup>
import axios from 'axios';
import AdminLayout from './AdminLayout.vue';
import WebSiteLayout from './WebSiteLayout.vue';
const user =''
</script>

<template>
  <div v-if="user=='admin'" class="w-full ">
 <AdminLayout/>
 
  </div>
  <div v-else class="w-full ">
 <WebSiteLayout/>
 
  </div>
</template>


