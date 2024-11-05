<template>
    <div class="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div class="w-full max-w-3xl bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div class="p-8">
          <h1 class="text-4xl font-extrabold text-white mb-8 text-center">Plan Personalizado</h1>
          
          <div class="mb-8">
            <label class="block text-sm font-medium text-gray-400 mb-2">
              Número de cuentas: {{ accountCount }}
            </label>
            <input 
              type="range" 
              v-model="accountCount" 
              min="1" 
              max="100" 
              class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            >
            <div class="flex justify-between text-xs text-gray-500 mt-1">
              <span>1</span>
              <span>50</span>
              <span>100</span>
            </div>
          </div>
  
          <div class="mb-8">
            <h2 class="text-xl font-semibold text-white mb-4">Características adicionales</h2>
            <div class="space-y-2">
              <label v-for="feature in features" :key="feature.id" class="flex items-center">
                <input 
                  type="checkbox" 
                  v-model="feature.selected"
                  class="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-600 focus:ring-blue-500"
                >
                <span class="ml-2 text-gray-300">{{ feature.name }}</span>
              </label>
            </div>
          </div>
  
          <div class="mb-8">
            <h2 class="text-xl font-semibold text-white mb-4">Uso del plan</h2>
            <div class="relative pt-1">
              <div class="flex mb-2 items-center justify-between">
                <div>
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                    {{ usagePercentage }}%
                  </span>
                </div>
              </div>
              <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                <div 
                  :style="{ width: `${usagePercentage}%` }" 
                  class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500 ease-in-out"
                ></div>
              </div>
            </div>
          </div>
  
          <div class="bg-gray-700 rounded-lg p-6 mb-8">
            <h2 class="text-2xl font-semibold text-white mb-4">Resumen del Plan</h2>
            <ul class="text-gray-300 space-y-2">
              <li>Cuentas: {{ accountCount }}</li>
              <li>Características adicionales:
                <ul class="list-disc list-inside ml-4">
                  <li v-for="feature in selectedFeatures" :key="feature.id">
                    {{ feature.name }}
                  </li>
                </ul>
              </li>
              <li>Precio estimado: ${{ estimatedPrice }}</li>
            </ul>
          </div>
  
          <button 
            @click="confirmPlan" 
            class="w-full bg-blue-600 text-white rounded-lg py-3 px-4 font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Confirmar Plan
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const accountCount = ref(10)
  const features = ref([
    { id: 1, name: 'Soporte 24/7', selected: false },
    { id: 2, name: 'Almacenamiento ilimitado', selected: false },
    { id: 3, name: 'Acceso API', selected: false },
    { id: 4, name: 'Integración personalizada', selected: false },
  ])
  
  const usagePercentage = computed(() => {
    return Math.min(Math.round((accountCount.value / 100) * 100), 100)
  })
  
  const selectedFeatures = computed(() => {
    return features.value.filter(feature => feature.selected)
  })
  
  const estimatedPrice = computed(() => {
    let basePrice = accountCount.value * 5
    let additionalFeaturesPrice = selectedFeatures.value.length * 10
    return basePrice + additionalFeaturesPrice
  })
  
  const confirmPlan = () => {
    alert(`Plan confirmado:\n${accountCount.value} cuentas\nCaracterísticas: ${selectedFeatures.value.map(f => f.name).join(', ')}\nPrecio: $${estimatedPrice.value}`)
  }
  </script>