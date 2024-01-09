<template>
    
<div
        class="flex sm:w-[256px] sm:h-[300px] w-[150px] h-[300px] rounded-xl shadow-lg flex-col bg-[#f1f1f1] mb-6 hover:scale-110 transition ease-in-out duration-300">
        <NuxtLink :to="`${props.category}/${props.product.name}`" class="w-full h-full">
            <div :class="`bg-[url('${props.product.img}')]`" class="w-full h-full bg-cover bg-no-repeat rounded-t-xl"></div>
        </NuxtLink>
    <div class="flex flex-col bg-white rounded-b-xl p-2">
      <p>{{props.product.name}}</p>
      <div class="flex justify-between">
        <p>{{props.product.price}}$</p>
        <div class="flex">
          <img src="assets/SVG/tabler_git-compare.svg" alt="" />
          <div class="bg-[#01ADFF] rounded-full ml-1 cursor-pointer" @click="addToCart">
            <img src="assets/SVG/tabler_circle-plus.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
const props = defineProps({
  product: { type: Object, required: true },
  category: { type: String, required: true },
});

function addToCart() {

}

</script>
