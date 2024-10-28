<!-- src/views/About.vue -->
<template>
  <section class=" min-h-screen bg-gradient-to-b from-[#0B132B] to-[#1C2541] text-white dark:bg-gray-900 py-12">
      <div class="container px-6 mx-auto max-w-4xl">
          <h1 class="text-4xl font-semibold text-[#5BC0BE] text-center mb-8">FAQ's</h1>
  
          <div class="space-y-6">
              <!-- Pregunta 1 -->
              <div class="bg-[#1C2541] rounded-lg shadow-md transition-shadow hover:shadow-lg">
                  <button @click="toggleActive(1)" class="flex items-center justify-between w-full px-6 py-4 focus:outline-none text-white transition-colors rounded-lg">
                      <div class="flex items-center">
                          <svg :class="{ 'rotate-90': active === 1 }" class="transition-transform flex-shrink-0 w-6 h-6 text-[#5BC0BE] transform-gpu duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                          </svg>
                          <h1 class="mx-4 text-xl font-medium">How can I pay for my appointment?</h1>
                      </div>
                  </button>
  
                  <!-- Contenido desplegable -->
                  <div v-show="active === 1" class="mt-2 px-6 pb-4 text-gray-300" :class="active === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95' " style="transition: all 0.3s ease-out;">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.</p>
                  </div>
              </div>
  
              <hr class="border-transparent bg-gradient-to-r from-[#6F73D2] to-[#5BC0BE] h-0.5 mx-4">
  
              <!-- Pregunta 2 -->
              <div class="bg-[#1C2541] rounded-lg shadow-md transition-shadow hover:shadow-lg">
                  <button @click="toggleActive(2)" class="flex items-center justify-between w-full px-6 py-4 focus:outline-none text-white transition-colors rounded-lg">
                      <div class="flex items-center">
                          <svg :class="{ 'rotate-90': active === 2 }" class="transition-transform flex-shrink-0 w-6 h-6 text-[#5BC0BE] transform-gpu duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                          </svg>
                          <h1 class="mx-4 text-xl font-medium">What can I expect at my first consultation?</h1>
                      </div>
                  </button>
  
                  <div v-show="active === 2" class="mt-2 px-6 pb-4 text-gray-300" :class="active === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95' " style="transition: all 0.3s ease-out;">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel architecto veritatis necessitatibus.</p>
                  </div>
              </div>
  
              <hr class="border-transparent bg-gradient-to-r from-[#6F73D2] to-[#5BC0BE] h-0.5 mx-4">
  
              <!-- Pregunta 3 -->
              <div class="bg-[#1C2541] rounded-lg shadow-md transition-shadow hover:shadow-lg">
                  <button @click="toggleActive(3)" class="flex items-center justify-between w-full px-6 py-4 focus:outline-none text-white transition-colors rounded-lg">
                      <div class="flex items-center">
                          <svg :class="{ 'rotate-90': active === 3 }" class="transition-transform flex-shrink-0 w-6 h-6 text-[#5BC0BE] transform-gpu duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                          </svg>
                          <h1 class="mx-4 text-xl font-medium">What are your opening hours?</h1>
                      </div>
                  </button>
  
                  <div v-show="active === 3" class="mt-2 px-6 pb-4 text-gray-300" :class="active === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95' " style="transition: all 0.3s ease-out;">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat dolores natus voluptates accusantium?</p>
                  </div>
              </div>


              <hr class="border-transparent bg-gradient-to-r from-[#6F73D2] to-[#5BC0BE] h-0.5 mx-4">

               <!-- Pregunta 4 -->
               <div class="bg-[#1C2541] rounded-lg shadow-md transition-shadow hover:shadow-lg">
                  <button @click="toggleActive(4)" class="flex items-center justify-between w-full px-6 py-4 focus:outline-none text-white transition-colors rounded-lg">
                      <div class="flex items-center">
                          <svg :class="{ 'rotate-90': active === 4 }" class="transition-transform flex-shrink-0 w-6 h-6 text-[#5BC0BE] transform-gpu duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                          </svg>
                          <h1 class="mx-4 text-xl font-medium">What are your opening hours?</h1>
                      </div>
                  </button>
  
                  <div v-show="active === 4" class="mt-2 px-6 pb-4 text-gray-300" :class="active === 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-95' " style="transition: all 0.3s ease-out;">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat dolores natus voluptates accusantium?</p>
                  </div>
              </div>


               <hr class="border-transparent bg-gradient-to-r from-[#6F73D2] to-[#5BC0BE] h-0.5 mx-4">
               <!-- Pregunta 5 -->
               <div class="bg-[#1C2541] rounded-lg shadow-md transition-shadow hover:shadow-lg">
                  <button @click="toggleActive(5)" class="flex items-center justify-between w-full px-6 py-4 focus:outline-none text-white transition-colors rounded-lg">
                      <div class="flex items-center">
                          <svg :class="{ 'rotate-90': active === 5 }" class="transition-transform flex-shrink-0 w-6 h-6 text-[#5BC0BE] transform-gpu duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                          </svg>
                          <h1 class="mx-4 text-xl font-medium">What are your opening hours?</h1>
                      </div>
                  </button>
  
                  <div v-show="active === 5" class="mt-2 px-6 pb-4 text-gray-300" :class="active === 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-95' " style="transition: all 0.3s ease-out;">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat dolores natus voluptates accusantium?</p>
                  </div>
              </div>
          </div>
      </div>
  </section>
  </template>
  
  <script>
  export default {
    name: 'PreguntasFrecuentes',
    data() {
      return {
        active: null, // Controla cuál pregunta está expandida
      };
    },
    methods: {
      toggleActive(index) {
        this.active = this.active === index ? null : index;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Agregar sombras y transiciones de escala */
  .bg-gradient-to-b {
    background: linear-gradient(to bottom, #0B132B, #1C2541);
  }
  
  .bg-[#1C2541] {
    background-color: #1C2541;
    transition: all 0.3s ease-in-out;
  }
  
  .bg-[#1C2541]:hover {
    background-color: #24335c;
  }
  
  .scale-95 {
    transform: scale(0.95);
  }
  </style>
  