<template>
            <div class="flex flex-wrap items-center justify-evenly" v-for="p in productCategory">
                <ProductCategoryCard :productCategory="p"></ProductCategoryCard>
        </div>
</template>

<script setup lang="ts">
import ProductCategoryCard from './ProductCategoryCard.vue';
const { data: resp } = await useFetch(`/api/productType`);
const productCategory = resp.value
</script>