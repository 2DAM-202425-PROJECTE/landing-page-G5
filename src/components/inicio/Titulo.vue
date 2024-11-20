<template>
  <div class="bg-transparent flex items-center justify-center">
    <transition appear name="fade-up">
      <h1 class="text-animated text-4xl md:text-6xl font-bold text-center px-4">
        Simplifica la administración de tu gimnasio
      </h1>
    </transition>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
})
</script>

<style scoped>
.text-animated {
  background: linear-gradient(
    to right,
    #6F73D2,
    #6F73D2,
    #5BC0BE,
    #5BC0BE,
    #6F73D2
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow-animation 8s linear infinite;
  background-size: 400% 100%;
}

@keyframes rainbow-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 400% 0;
  }
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.5s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>