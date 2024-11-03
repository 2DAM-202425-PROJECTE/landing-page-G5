<template>
  <div class="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Fondo con movimiento -->
    <div class="absolute inset-0 z-0">
      <div v-for="i in 50" :key="i">
      </div>
    </div>
    
    <!-- Elementos gráficos adicionales -->
    <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500 to-transparent opacity-20"></div>
    <div class="absolute bottom-0 right-0 w-64 h-64 bg-teal-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
    
    <div class="max-w-3xl mx-auto relative z-10">
      <div class="text-center mb-12">
        <svg class="mx-auto h-20 w-20 text-blue-400 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <h1 class="mt-4 text-4xl font-extrabold text-white animate-fade-in-down">
          Plan {{ props.plan }}
        </h1>
        <p class="mt-2 text-xl text-gray-300">Acceso completo a todos los cursos</p>
      </div>
      
      <form @submit.prevent="procesarPago" class="bg-gray-800 shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
        <!-- Información del Producto -->
        <div class="p-6 bg-gradient-to-r from-blue-600 to-teal-400 text-white relative overflow-hidden">
          <div class="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white opacity-20 rounded-full"></div>
          <h2 class="text-2xl font-semibold mb-4 relative z-10">Plan {{ props.plan }}</h2>
          <ul class="space-y-2 relative z-10">
            <li v-for="(feature, index) in planFeatures" :key="index" class="flex items-center">
              <CheckIcon class="h-5 w-5 mr-2 text-teal-200" />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
<!-- Información Personal -->
        <div class="p-6 border-b border-gray-700">
          <h2 class="text-xl font-semibold text-white mb-4">Información Personal</h2>
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label for="nombre" class="block text-sm font-medium text-gray-300">Nombre</label>
              <input type="text" id="nombre" v-model="formData.nombre" required
                class="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white transition-all duration-300 ease-in-out">
            </div>
            <div>
              <label for="apellido" class="block text-sm font-medium text-gray-300">Apellido</label>
              <input type="text" id="apellido" v-model="formData.apellido" required
                class="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white transition-all duration-300 ease-in-out">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
              <input type="email" id="email" v-model="formData.email" required
                class="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white transition-all duration-300 ease-in-out">
            </div>
            <div>
              <label for="telefono" class="block text-sm font-medium text-gray-300">Teléfono</label>
              <input type="tel" id="telefono" v-model="formData.telefono" required
                class="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white transition-all duration-300 ease-in-out">
            </div>
          </div>
        </div>

        <!-- Detalles de la Tarjeta -->
        <div class="p-6 border-b border-gray-700">
          <h2 class="text-xl font-semibold text-white mb-4">Detalles de Pago</h2>
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div class="sm:col-span-2">
              <label for="numeroTarjeta" class="block text-sm font-medium text-gray-300">Número de Tarjeta</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input type="text" id="numeroTarjeta" v-model="formData.numeroTarjeta" required
                  class="block w-full pr-10 bg-gray-700 border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white transition-all duration-300 ease-in-out"
                  placeholder="1234 5678 9012 3456">
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <CreditCardIcon class="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label for="fechaExpiracion" class="block text-sm font-medium text-gray-300">Fecha de Expiración</label>
              <input type="text" id="fechaExpiracion" v-model="formData.fechaExpiracion" required
                class="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white transition-all duration-300 ease-in-out"
                placeholder="MM/AA">
            </div>
            <div>
              <label for="cvv" class="block text-sm font-medium text-gray-300">CVV</label>
              <input type="text" id="cvv" v-model="formData.cvv" required
                class="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white transition-all duration-300 ease-in-out"
                placeholder="123">
            </div>
          </div>
        </div>
<!-- Resumen de la Compra -->
        <div class="p-6 bg-gray-700">
          <h2 class="text-xl font-semibold text-white mb-4">Resumen de la Compra</h2>
          <div class="space-y-4">
            <div class="flex justify-between">
              <span class="text-gray-300">Plan  </span>
              <span class="font-medium text-white">{{ props.plan }}</span>
            </div>
           
            <div class="flex justify-between text-lg font-semibold">
              <span class="text-white">Total</span>
              <span class="text-white">{{ props.precio }}</span>
            </div>
          </div>
        </div>

        <!-- Botón de Pago -->
        <div class="p-6">
          <button type="submit"
            class="w-full border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 animated-gradient relative overflow-hidden">
            <span class="relative z-10">Pagar €{{ (precio - descuento).toFixed(2) }}</span>
            <div class="absolute inset-0 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-300 animate-gradient-x"></div>
            </div>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const planFeatures = [
  'Acceso ilimitado a todos los cursos',
  'Certificados premium',
  'Soporte prioritario 24/7'
]

const precio = 199.99
const descuento = 20

const formData = ref({
  nombre: '',
  apellido: '',
  email: '',
  telefono: '',
  numeroTarjeta: '',
  fechaExpiracion: '',
  cvv: ''
})

const procesarPago = () => {
  console.log('Procesando pago:', formData.value)
  alert(`¡Pago procesado con éxito! Bienvenido a tu Plan ${props.plan}.`)
}

const props = defineProps(['plan', 'precio']);

</script>

<style scoped>
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.5s ease-out;
}

@keyframes twinkle {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: white;
  border-radius: 50%;
  animation: twinkle 3s infinite;
}

.animated-gradient {
  background: linear-gradient(270deg, #3490dc, #38b2ac);
  background-size: 200% 200%;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes gradient-x {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.animate-gradient-x {
  animation: gradient-x 3s linear infinite;
}

input:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
