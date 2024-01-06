<template>
  <div
    class="w-[80vw] h-[100vh] fixed bg-white "
    
  >
    <nav class="flex text-center flex-col font-bold text-xl uppercase">
      <NuxtLink
        to="/"
        class="border-[#f1f1f1] py-10 border-2"
        @click="closeModal"
        >KEYLOGO</NuxtLink
      >
      <NuxtLink
        to="/store"
        class="border-[#f1f1f1] py-5 border-2"
        @click="closeModal"
        >store</NuxtLink
      >
      <NuxtLink
        to="/contact"
        class="border-[#f1f1f1] py-5 border-2"
        @click="closeModal"
        >contact</NuxtLink
      >
      <NuxtLink
        to="/support"
        class="border-[#f1f1f1] py-5 border-2"
        @click="closeModal"
        >support</NuxtLink
      >
      <NuxtLink
        to="/cart"
        class="border-[#f1f1f1] py-5 border-2"
        @click="closeModal"
        >cart</NuxtLink
      >
      <div class="flex">
        <p>Profile</p>
        <img src="../assets/userpic.png" alt="" />
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const currentModal = useState("currentModal", () => "none");
const stateModal = useState("closeModal", () => true);

function closeModal() {
    stateModal.value = !stateModal.value;
    currentModal.value = "none";
}
</script>
