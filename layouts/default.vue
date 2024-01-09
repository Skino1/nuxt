<template>
  <Modal></Modal>
  <div class="flex flex-col h-screen justify-between" :class="[stateModal == true ? '' : 'overflow-hidden']">
    <header>
      <div class="cont w-[1200px] mx-auto py-8" id="header">
        <div
          class="flex items-center flex-row justify-between font-bold text-xl uppercase"
        >
          <NuxtLink to="/">KEYLOGO</NuxtLink>
          <nav class="md:flex items-center hidden">
            <NuxtLink to="/store" class="pr-10">store</NuxtLink>
            <NuxtLink to="/contact" class="pr-10">contact</NuxtLink>
            <NuxtLink to="/support" class="pr-10">support</NuxtLink>
            <NuxtLink to="/cart" class="pr-10">cart</NuxtLink>
            <div
              class="flex items-center border-black border-2 hover:bg-[#f1f1f1] transition-colors rounded-3xl" @click="showLogin"
            >
              <p class="mx-3">Profile</p>
            </div>
          </nav>
          <button class="md:hidden block">
            <img
              src="assets/SVG/tabler_menu-2.svg"
              alt=""
              width="30"
              height="30"
              @click="showMenu"
            />
          </button>
        </div>
      </div>
    </header>
    <div class=""><slot></slot></div>

    <footer class="bg-[#454545] hidden sm:block">
      <div
        class="w-[1200px] cont flex h-[60px] items-center mx-auto justify-between"
      >
        <button class="uppercase text-[#969696] flex-1 text-left">
          <a class="scroll-smooth" href="#header">back to top</a>
        </button>
        <p
          class="flex font-bold uppercase text-white text-2xl flex-2 text-center"
        >
          Keylogo
        </p>

        <p class="uppercase text-[#969696] flex-1 text-right">
          2023 All Rights Reserved
        </p>
      </div>
    </footer>
  </div>
  </template>
    
<script setup lang="ts">

const currentModal = useState('currentModal');
const stateModal = useState('closeModal')
// const positionLoginButton = loginButton.getBoundingClientRect()

function showMenu() {
  currentModal.value = 'menu';
  console.log(currentModal.value);
  stateModal.value = !stateModal.value;
  
};
function showLogin() {
  currentModal.value = 'login';
  console.log(currentModal.value);
  stateModal.value = !stateModal.value;
};

function posModal() {
  
}

</script>
