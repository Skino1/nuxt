<template>
  <div class="cont w-[1200px] mx-auto py-8">
    <div class="text-center text-4xl uppercase font-bold mb-[85px]">cart</div>
    <div class="flex items-center justify-center mb-20">
      <img src="assets/SVG/tabler_basket.svg" alt="">
      <p class="text-center text-2xl mr-10">No items to view now</p>
      <NuxtLink to="/store" 
        class="flex uppercase bg-[#01ADFF] w-[205px] h-[50px] rounded-3xl items-center justify-center text-white font-bold"
      >
        go to store
      </NuxtLink>
    </div>
    <AdviseCopmonent></AdviseCopmonent>
  </div>
</template>

<script>
import AdviseCopmonent from '@/components/AdviseComponent.vue';



export default {
    components: {
      AdviseCopmonent,
    }
}
</script>