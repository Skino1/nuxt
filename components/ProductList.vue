<template>
  <div class="flex flex-wrap justify-evenly">
    <ProductCard v-for="p in products" :key="p.id" :product="p" :category="category"></ProductCard>
  </div>
</template>

<script setup >
import ProductCard from "./ProductCard.vue";

const category = useState('currentCategory');
const { data: resp1 } = await useFetch(`/api/products`);
const products = resp1.value;
</script>
