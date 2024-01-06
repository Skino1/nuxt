<template>
          <div class="cont w-[1200px] mx-auto py-8" >
<div class="text-center text-4xl uppercase font-bold mb-[85px]">support</div>
<div class="flex justify-center pb-8">
    <input type="text" placeholder="enter a model" class="w-[60%] bg-[#F1F1F1] rounded-l-xl pl-3">
    <button type="submit" class="bg-[#01ADFF] rounded-r-xl p-3"><img class="filter-white" src="assets/SVG/tabler_search.svg" alt="" width="50" height="50" ></button>
</div>
        <div class="flex flex-wrap justify-evenly pt-5">
            <CardElement></CardElement>
            <CardElement></CardElement>
            <CardElement></CardElement>
        </div>
          </div>
</template>

<script>
import CardElement from "@/components/CardElement.vue";


export default {
    components: {
        CardElement
    }
}
</script>