<template>
  <!-- Usamos v-if para controlar la visibilidad del div -->
  <div v-if="showDiv" class="  absolute z-20 h-full w-full" style="background-color: rgba(0, 0, 0, 0.5);">
    <div class="z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/4 h-2/4 p-6 rounded-lg shadow-lg bg-white">
      <h2 class="text-2xl font-bold mb-6 text-GMprimary">Registrarse</h2>
      <form @submit.prevent="handleSubmit" class="flex flex-col justify-center h-full">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-GMprimary mb-1">Nombre completo</label>
          <input 
            type="text" 
            id="name" 
            v-model="name" 
            required 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-GMquaternary"
          >
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-GMprimary mb-1">Correo electrónico</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            required 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-GMquaternary"
          >
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-GMprimary mb-1">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            required 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-GMquaternary"
          >
        </div>
        <div class="mb-6">
          <label for="confirmPassword" class="block text-sm font-medium text-GMprimary mb-1">Confirmar contraseña</label>
          <input 
            type="password" 
            id="confirmPassword" 
            v-model="confirmPassword" 
            required 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-GMquaternary"
          >
        </div>
        <button 
          type="submit" 
          class="w-full bg-GMquaternary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300"
        >
          Registrarse
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Variables reactivas para los campos del formulario
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

// Variable reactiva para controlar la visibilidad del primer div
const showDiv = ref(true)

const handleSubmit = () => {
  // Verificación de si las contraseñas coinciden
  if (password.value !== confirmPassword.value) {
    alert('Las contraseñas no coinciden')
    return
  }
  // Validación de campos vacíos
  else if (name.value === "") {
    alert('Por favor, ingrese su nombre')
    return
  }
  else if (email.value === "") {
    alert('Por favor, ingrese su correo electrónico')
    return
  }
  else if (password.value === "") {
    alert('Por favor, ingrese su contraseña')
    return
  }
  else if (confirmPassword.value === "") {
    alert('Por favor, confirme su contraseña')
    return
  }

  // Si todo es correcto, mostramos un mensaje de éxito
  alert('Registrado con éxito')

  // Ocultamos el div de fondo
  showDiv.value = false
}
</script>

<style>
:root {
  --GMprimary: #130F53;
  --GMquaternary: #5BC0BE;
}
</style>
