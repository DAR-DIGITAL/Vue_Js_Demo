```javascript
<script setup>
import { useLayoutStore } from '../../store/layout';
import { routes } from '../../route/routes';
const layoutStore = useLayoutStore()


</script>
<template>
   <div class="fixed">
        <!-- component -->
<div class="relative flex h-screen flex-col bg-clip-border rounded-xl bg-white text-gray-700 w-full p-4 shadow-xl shadow-blue-gray-900/5">
  <div class="flex justify-center mb-4">
    <a href="https://docs.dar-digital.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://docs.dar-digital.com/wp-content/uploads/2024/02/LOGO-DAR-DIGITAL-latest-version.png" class="h-16" alt="Flowbite Logo" />
  </a>
  </div>
  <nav class="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
    <div v-for="r in routes" :key="r.name" :to="r.path"  role="button" tabindex="0" class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <RouterLink :to="r.path"> {{r.name}}</RouterLink>
     
    </div>
 
  </nav>
</div>

<div class="w-full pt-5 px-4 mb-8 mx-auto ">
    <div class="text-sm text-gray-700 py-1">
        Made with <a class="text-gray-700 font-semibold" href="" target="_blank">DAR DIGITAL</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" class="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
    </div>
</div>
   </div>
</template>
```