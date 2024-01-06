<template>
    <div class="flex flex-wrap justify-evenly">
        <div
        class="flex sm:w-[256px] sm:h-[300px] w-[150px] h-[300px] rounded-xl shadow-lg flex-col bg-[#f1f1f1] mb-6 hover:scale-110 transition ease-in-out duration-300"
        v-for="product in products" :key="product.id">
        <NuxtLink :to="`/catalog/${product.id}`" class="w-full h-full">
            <div :class="`bg-[url('${product.img}')]`" class="w-full h-full bg-cover bg-no-repeat rounded-t-xl"></div>
        </NuxtLink>
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
    </div>
</template>

<script setup lang="ts">

const { data: resp } = await useFetch(`/api/products`);
const products = resp.value
</script>