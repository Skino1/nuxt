<template>
  <Transition
    enter-active-class="transition duration-300 ease-in"
    leave-active-class=" transition duration-300 ease-out"
    enter-from-class=" opacity-0"
    leave-to-class=" opacity-0"
  >
    <ModalBackdrop v-show="currentModal !== 'none'" @click="closeModal">
    </ModalBackdrop>
  </Transition>
  <Transition
    leave-active-class="-translate-y-full transition duration-100"
    enter-active-class="translate-y-0 transition duration-100"
    enter-from-class=" opacity-0"
    leave-to-class=" opacity-0"
  >
    <LoginModal v-if="currentModal == 'login'"></LoginModal>
  </Transition>
  <RegisterModal v-if="currentModal == 'register'"></RegisterModal>
  <Transition
    leave-active-class="-translate-x-full transition duration-100"
    enter-active-class="translate-x-0 transition duration-100"
  >
    <MobileMenu v-if="currentModal == 'menu'"></MobileMenu>
  </Transition>
</template>
<script setup lang="ts">
import type { MobileMenu } from "#build/components";
import type { LoginModal } from "#build/components";
import type { RegisterModal } from "#build/components";

const currentModal = useState("currentModal", () => "none");
const stateModal = useState("closeModal", () => true);

function closeModal() {
  stateModal.value = !stateModal.value;
  currentModal.value = "none";
}
</script>
