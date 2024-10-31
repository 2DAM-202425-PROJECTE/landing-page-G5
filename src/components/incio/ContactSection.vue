<template>
  <section class=" relative h-[50vh] min-h-[400px] w-full overflow-hidden">
    <div 
      class="blur-sm absolute inset-0 bg-cover bg-center bg-no-repeat" 
      :style="backgroundStyle"
    />
    <div class="absolute inset-0 bg-black/50"></div> <!-- Overlay for better text visibility -->
    <div class="relative flex h-full items-center justify-center">
      <div class="text-center">
        <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Estas listo para comenzar?
        </h2>
        <p class="mb-8 text-lg text-white/90 sm:text-xl">
          Estamos aqui para contestar tus preguntas y ayudarte a comenzar.
        </p>
        <router-link to="/contacto">
        <button class="text-white font-bold px-6 py-3 bg-GMquaternary rounded-md text-primary-foreground hover:bg-primary/90">
          Contactanos
        </button>
      </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactSection',
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: "url('https://media.istockphoto.com/id/1391410249/es/foto/deportes-y-actividades-de-gimnasio.jpg?s=612x612&w=0&k=20&c=UVfqkA8dnim6qFRuSjLE6dQHFt7Tjo-AIkvnNVHNJUs=')",
        backgroundAttachment: "fixed"
      }
    }
  }
})
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
