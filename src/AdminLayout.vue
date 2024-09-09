<script setup>
import ProductsList from './components/AdminComponents/products/ProductsList.vue';
import SideBar from './components/AdminComponents/SideBar.vue';
import NavBar from './components/AdminComponents/NavBar.vue';


</script>

<template>
    <div class="flex w-full overflow-hidden">
        <div class="w-1/6 ">
            <SideBar/> 

        </div>
        <div class="flex flex-col w-full">
      <NavBar/>
      
      <div class="flex m-auto overflow-auto">
        <ProductsList/>
      </div>
    </div>
    </div>

</template>
<style></style>