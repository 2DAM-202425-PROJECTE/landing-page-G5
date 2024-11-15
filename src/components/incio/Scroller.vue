<template>
  <div class="flex justify-center h-screen overflow-hidden my-[-200px]">
    <div
      ref="containerRef"
      class="w-7/12 overflow-y-scroll scrollbar-hide snap-y snap-mandatory"
      @scroll="handleScroll"
    >
      <div
        v-for="(service, index) in services"
        :key="service.id"
        :class="['h-screen w-full flex items-center justify-center snap-start bg-[#08201D]']"
      >
        <transition name="fade">
          <div
            v-if="index === activeIndex"
            class="max-w-2xl bg-GMquaternary text-white rounded-lg shadow-lg p-8"
          >
            <h2 class="text-4xl font-bold mb-4">{{ service.title }}</h2>
            <p class="text-lg">{{ service.description }}</p>
          </div>
        </transition>
      </div>
    </div>
    <div class="w-5/12 p-6 flex items-center bg-[#08201D]">
      <div class="w-2/3 bg-white rounded-lg shadow-lg p-6 max-h-[80vh] overflow-y-auto">
        <h2 class="text-2xl font-bold mb-4">Índice de Servicios</h2>
        <ul>
          <li
            v-for="(service, index) in services"
            :key="service.id"
            :class="[
              'py-2 cursor-pointer transition-colors duration-200',
              activeIndex === index ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-400'
            ]"
            @click="scrollTo(index)"
          >
            {{ service.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const services = [
  {
    id: 1,
    title: "Gestión de Empleados",
    description: "Administra el personal de tu gimnasio, asigna roles, turnos y evalúa el desempeño de cada empleado.",
    color: "bg-rose-100"
  },
  {
    id: 2,
    title: "Control de Acceso",
    description: "Gestiona el acceso de tus clientes, verifica membresías y controla la entrada al gimnasio en tiempo real.",
    color: "bg-yellow-100"
  },
  {
    id: 3,
    title: "Creación de Clases",
    description: "Crea y organiza clases, establece horarios y permite a los clientes registrarse o unirse según disponibilidad.",
    color: "bg-purple-100"
  },
  {
    id: 4,
    title: "Gestión de Clientes",
    description: "Mantén un registro de tus clientes, sus membresías, historial de pagos y preferencias de entrenamiento.",
    color: "bg-red-100"
  },
  {
    id: 5,
    title: "Creación de Promociones",
    description: "Desarrolla promociones personalizadas para atraer nuevos clientes y recompensar la lealtad de los actuales.",
    color: "bg-green-100"
  },
  {
    id: 6,
    title: "Análisis de Rendimiento",
    description: "Analiza el rendimiento del gimnasio con reportes detallados sobre asistencia, ingresos y tendencias.",
    color: "bg-blue-100"
  }
]

const activeIndex = ref(0)
const containerRef = ref(null)

const handleScroll = () => {
  if (!containerRef.value) return
  const scrollPosition = containerRef.value.scrollTop
  activeIndex.value = Math.round(scrollPosition / window.innerHeight)
}

const scrollTo = (index) => {
  containerRef.value?.scrollTo({
    top: index * window.innerHeight,
    behavior: 'smooth'
  })
}

onMounted(() => {
  if (containerRef.value) {
    containerRef.value.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (containerRef.value) {
    containerRef.value.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
