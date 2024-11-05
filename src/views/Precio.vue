<template>
  <div class="min-h-screen bg-gradient-to-br from-[#5bc0be] via-gray-900 to-green-500 text-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#5bc0be] to-pink-400">Elige tu plan ideal</h1>
      
      <!-- Toggle para cambiar entre mensual y anual -->
      <div class="flex justify-center items-center space-x-4 mb-12">
        <span :class="{ 'text-[#5bc0be]': !isAnnual, 'text-gray-400': isAnnual }">Mensual</span>
        <button 
          @click="toggleBilling"
          class="relative inline-flex items-center h-8 rounded-full w-16 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5bc0be]"
          :class="isAnnual ? 'bg-[#5bc0be]' : 'bg-gray-600'"
        >
          <span 
            class="inline-block w-6 h-6 transform transition-transform duration-300 bg-white rounded-full shadow-lg"
            :class="isAnnual ? 'translate-x-9' : 'translate-x-1'"
          />
        </button>
        <span :class="{ 'text-[#5bc0be]': isAnnual, 'text-gray-400': !isAnnual }">Anual</span>
      </div>

      <!-- Planes -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="plan in plans" :key="plan.name" 
             class="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 flex flex-col">
          <div class="p-6 flex-grow">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-2xl font-bold">{{ plan.name }}</h2>
              <span v-if="plan.badge" class="px-2 py-1 bg-[#5bc0be] text-xs font-semibold rounded-full">{{ plan.badge }}</span>
            </div>
            <p class="text-4xl font-bold mb-4">
              {{ isAnnual ? plan.annualPrice : plan.monthlyPrice }}
              <span class="text-lg font-normal">/{{ isAnnual ? 'año' : 'mes' }}</span>
            </p>
            <p v-if="isAnnual && plan.annualSavings" class="text-green-400 text-sm mb-4">Ahorra {{ plan.annualSavings }} al año</p>
            <p class="text-gray-300 mb-6">{{ plan.description }}</p>
            <ul class="space-y-3 mb-6">
              <li v-for="feature in plan.features" :key="feature" class="flex items-center">
                <CheckIcon class="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
          <div class="p-6 bg-gray-700 bg-opacity-50">
            <button 
              @click="redirectToPayment(plan.name)"
              class="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#5bc0be] to-green-900 hover:from-[#5bc0be] hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5bc0be] transition-colors duration-300"
            >
              {{ plan.name === 'Personalizado' ? 'Contáctanos' : 'Seleccionar plan' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter() // Obtiene la instancia del router
const isAnnual = ref(false)

const plans = [
  {
    name: 'Gratis',
    monthlyPrice: '€0',
    annualPrice: '€0',
    description: 'Perfecto para empezar tu viaje',
    features: ['1 usuario', '1GB de almacenamiento', 'Soporte por email', 'Acceso a funciones básicas'],
    badge: 'Popular'
  },
  {
    name: 'Premium',
    monthlyPrice: '€9.99',
    annualPrice: '€99.99',
    annualSavings: '€19.89',
    description: 'Ideal para profesionales independientes',
    features: ['5 usuarios', '10GB de almacenamiento', 'Soporte prioritario', 'Acceso API', 'Funciones avanzadas', 'Integraciones básicas'],
    badge: 'Mejor valor'
  },
  {
    name: 'Enterprise',
    monthlyPrice: '€49.99',
    annualPrice: '€499.99',
    annualSavings: '€99.89',
    description: 'Potencia para grandes equipos',
    features: ['Usuarios ilimitados', '100GB de almacenamiento', 'Soporte 24/7', 'Acceso API avanzado', 'Todas las funciones', 'Integraciones personalizadas', 'Panel de administración'],
    badge: 'Todo incluido'
  },
  {
    name: 'Personalizado',
    monthlyPrice: 'Contactar',
    annualPrice: 'Contactar',
    description: 'Solución a medida para tu negocio',
    features: ['Todo en Enterprise', 'Infraestructura dedicada', 'Gerente de cuenta personal', 'Personalización completa', 'Soporte VIP', 'Acuerdo de nivel de servicio personalizado'],
    badge: 'A medida'
  }
]

const toggleBilling = () => {
  isAnnual.value = !isAnnual.value
}

const redirectToPayment = (planName) => {
  if (planName === 'Personalizado') {
    router.push('/contacto') 
  } else {
    router.push({ path: `/pago/${planName}/${getPrice(planName)}` });
  }
}

const getPrice = (planName) => {
  return plans.find(plan => plan.name === planName)[isAnnual.value ? 'annualPrice' : 'monthlyPrice']
}

</script>

<style scoped>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-gradient-to-br {
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}
</style>
