<template>
    
  <div
    class="flex sm:w-[256px] sm:h-[300px] w-[150px] h-[300px] rounded-xl shadow-lg flex-col bg-[url('{{product.img}}')] bg-cover bg-no-repeat justify-end mb-6"
  >
    <div class="flex flex-col bg-white rounded-b-xl p-2">
      <p>{{product.name}}</p>
      <div class="flex justify-between">
        <p>{{product.price}}$</p>
        <div class="flex">
          <img src="assets/SVG/tabler_git-compare.svg" alt="" />
          <div class="bg-[#01ADFF] rounded-full ml-1 cursor-pointer">
            <img src="assets/SVG/tabler_circle-plus.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import products from '~/server/api/products';



</script>
