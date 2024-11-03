<template>
  <section class="w-full py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-white text-center mb-12">Lo que dicen nuestros clientes</h2>
      
      <div class="relative max-w-4xl mx-auto">
        <transition name="fade" mode="out-in">
          <div
            :key="currentIndex"
            class="bg-white rounded-lg shadow-lg p-8 text-center"
          >
            <p class="text-xl italic mb-4">{{ testimonials[currentIndex].comment }}</p>
            <div class="flex items-center justify-center">
              <img
                :src="testimonials[currentIndex].avatar"
                :alt="testimonials[currentIndex].name"
                class="w-16 h-16 rounded-full mr-4"
              />
              <div class="text-left">
                <p class="font-semibold">{{ testimonials[currentIndex].name }}</p>
                <p class="text-gray-600">{{ testimonials[currentIndex].position }}</p>
              </div>
            </div>
          </div>
        </transition>
        
        <button
          @click="prevTestimonial"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
        >
          <ChevronLeftIcon class="w-6 h-6 text-gray-600" />
        </button>
        
        <button
          @click="nextTestimonial"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
        >
          <ChevronRightIcon class="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next'

const testimonials = [
  {
    name: "Carlos Rodríguez",
    position: "Propietario de FitLife Gym",
    comment: "Este software ha revolucionado la forma en que administramos nuestro gimnasio. La gestión de clientes es ahora más eficiente que nunca, y hemos visto un aumento significativo en la retención de miembros.",
    avatar: "/placeholder.svg?height=64&width=64"
  },
  {
    name: "Ana Martínez",
    position: "Gerente de Operaciones en PowerFit",
    comment: "La función de gestión de clases es increíble. Nos permite programar, modificar y hacer un seguimiento de todas nuestras clases con facilidad. Nuestros instructores y clientes están encantados con la organización.",
    avatar: "/placeholder.svg?height=64&width=64"
  },
  {
    name: "Javier López",
    position: "Dueño de MuscleTech Gym",
    comment: "El módulo de ventas de suplementos ha sido un game-changer para nosotros. Hemos podido aumentar nuestras ventas en un 30% y mantener un control de inventario preciso. ¡Altamente recomendado!",
    avatar: "/placeholder.svg?height=64&width=64"
  },
  {
    name: "Laura Sánchez",
    position: "Directora de Marketing en FitZone",
    comment: "Las herramientas de análisis y reportes nos han permitido tomar decisiones basadas en datos para mejorar nuestros servicios y aumentar la satisfacción del cliente. Es como tener un consultor de negocios integrado.",
    avatar: "/placeholder.svg?height=64&width=64"
  }
]

const currentIndex = ref(0)

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prevTestimonial = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>