<template>
  <div class="cont w-[1200px] mx-auto">
    <div
      class=" bg-[url('assets/banner.png')] bg-no-repeat bg-center h-32 rounded-xl shadow-lg sm:flex hidden items-center justify-center"
    >
      <p class="text-4xl uppercase text-center font-bold ">keyboards</p>
    </div>
    <div class="sm:px-5 sm:my-5 sm:justify-between flex justify-center flex-wrap">
        <div class="flex items-center uppercase ">
        <router-link :to="{name:'store'}" class="hover:underline">store</router-link>
        <p class="text-xl px-2">></p>
        <router-link :to="{name:'catalog'}" class="hover:underline">Keyboards</router-link>
        </div>
        <div class="flex items-center uppercase">
            <p>sort by</p>
            <select class="underline uppercase" name="" id="">
            <option  value="">Relevance</option>
            <option value="">Price higest</option>
            <option value="">price lowest</option>
            </select>
        </div>
    </div>
    <div class="flex">
        <FilterCard class="hidden sm:flex mr-5"></FilterCard>
        <ProductList></ProductList>
    </div>
    <AdviseComponent></AdviseComponent>
  </div>
</template>

<script>
import AdviseComponent from '@/components/AdviseComponent.vue';
import FilterCard from '@/components/FilterCard.vue';
import ProductList from '@/components/ProductList.vue';

export default {
    components: {
        AdviseComponent,
        FilterCard,
        ProductList
    }
}
</script>
