<template>
  <NuxtLink
    :to="`/store/${props.productCategory.name}`"
    class="w-[573px] h-[344px] mb-3 bg-[url('assets/Intro.jpg')] bg-cover bg-no-repeat rounded-lg text-center shadow-lg"
    :class="`bg-[url('${props.productCategory.img}')]`"
  >
    <div
      class="bg-[#0000006c] w-full h-full flex items-center justify-center rounded-lg"
    >
      <p
        class="text-white text-xl sm:text-4xl uppercase text-center drop-shadow-md font-bold"
      >
        {{ props.productCategory.name }}
      </p>
    </div></NuxtLink
  >
</template>

<script setup lang="ts">

const props = defineProps({
    productCategory: { type: Object, required: true },
});


</script>
