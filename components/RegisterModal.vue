<template>
  <div
    class="fixed w-[300px] h-[350px] top-[100px] bg-white shadow-xl rounded-3xl " 
  >
      <div class="h-full flex flex-col justify-between p-5">
        <p class=" text-center">Create account</p>
      <input
        class="h-[15%] bg-[#f1f1f1] rounded-xl pl-2 border-2"
        placeholder="Username"
      />
      <input
        class="h-[15%] bg-[#f1f1f1] rounded-xl pl-2 border-2"
        type="email"
        placeholder="Email"
      />
      <input
        class="h-[15%] bg-[#f1f1f1] rounded-xl pl-2 border-2"
        type="password"
        placeholder="Password"
      />
        <input
        class="h-[15%] bg-[#f1f1f1] rounded-xl pl-2 border-2"
        type="password"
        placeholder="Confirm password"
      />
      <button
        class="p-4 bg-[#01ADFF] rounded-3xl uppercase font-bold text-white"
      >
        Create
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentModal = useState('currentModal');

function showLogin() {
  currentModal.value = 'Login';
};
</script>
