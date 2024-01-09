<template>
  <div
    class="fixed w-[300px] h-[250px]  bg-white shadow-xl rounded-3xl "
    
  >
    <div class="h-[100%] flex flex-col justify-between p-5">
      <input
        class="h-[25%] bg-[#f1f1f1] rounded-xl pl-2 border-2"
        type="email"
        placeholder="Email"
        
      />
      <input
        class="h-[25%] bg-[#f1f1f1] rounded-xl pl-2 border-2"
        type="password"
        placeholder="Password"
        
      />
      <div class="text-center">
        Has no account?
        <span class="underline uppercase cursor-pointer" @click="showRegister"
          >Create</span
        >
      </div>
      <button
        class="p-4 bg-[#01ADFF] rounded-3xl uppercase font-bold text-white"
      >
        login
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentModal = useState('currentModal');

function showRegister() {
  currentModal.value = 'register';
};
</script>
