<template>
  <section class="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
    <!-- Background Image -->
    <div
      class="absolute inset-0 blur-sm bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url('https://img.baba-blog.com/2024/03/dumbbells-in-the-gym-1.jpg?x-oss-process=style%2Ffull')`, backgroundAttachment: 'fixed' }"
    ></div>
    
    <!-- Overlay for better text visibility -->
    <div class="absolute inset-0 bg-black/50"></div>
    
    <!-- Content -->
    <div class="relative flex h-full items-center justify-center">
      <div class="text-center">
        <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          ¿Listo para ponerse en contacto?
        </h2>
        <p class="mb-8 text-lg text-white/90 sm:text-xl">
          Estamos aquí para responder sus preguntas y ayudarlo a tener éxito.
        </p>
        <router-link to="/contacto">
          <button class="bg-GMquaternary text-white text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded">
            Contactanos
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>
