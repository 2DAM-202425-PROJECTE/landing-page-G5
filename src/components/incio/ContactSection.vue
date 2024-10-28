<template>
    <div class="relative w-full h-screen overflow-hidden"> <!-- Contenedor relativo -->
      <img 
        src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K"  
        alt="Imagen de contacto"
        class="absolute inset-0 z-0 w-full h-full object-cover object-center" 
      />
      
      <section class="flex items-center justify-center bg-gray-100 p-6 relative z-10"> <!-- Contenedor con z-index mayor -->
        <div class="max-w-md text-center">
          <h2 class="text-2xl font-bold mb-4">¿Tienes alguna pregunta?</h2>
          <p class="mb-4">
            Estamos aquí para ayudarte. Si deseas más información, no dudes en contactarnos.
          </p>
          <router-link to="/contacto" class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition">
            Contáctanos
          </router-link>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
  };
  </script>
  
  <style scoped>
  /* Aquí puedes agregar estilos adicionales si es necesario */
  </style>
  