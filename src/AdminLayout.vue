<!-- AdminLayout.vue -->
<template>
<div class="flex w-full min-h-screen overflow-hidden justify-between">
  <div class="w-1/6 flex">
    <SideBar />
  </div>
  <div class="flex-1 flex flex-col">
    <NavBar />
    <div class=" flex-1 m-auto">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script setup>
import SideBar from './components/AdminComponents/SideBar.vue';
import NavBar from './components/AdminComponents/NavBar.vue';
</script>

<style></style>