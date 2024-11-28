<template>
  <div v-if="!accepted" class="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg z-50">
    <p class="mr-4">
      Este sitio utiliza cookies para mejorar la experiencia del usuario. 
      <a href="/politica-cookies" target="_blank" class="text-GMquaternary hover:underline">Leer más</a>
    </p>
    <button 
      @click="acceptCookies" 
      class="bg-GMquaternary text-white px-4 py-2 rounded transition"
    >
      Aceptar
    </button>
  </div>
</template>

<script>
import Cookies from 'js-cookie'; // Importa la librería

export default {
  data() {
    return {
      accepted: false,
    };
  },
  mounted() {
    this.accepted = Cookies.get('cookieConsent') === 'true'; // Obtiene la cookie usando js-cookie
  },
  methods: {
    acceptCookies() {
      Cookies.set('cookieConsent', 'true', { expires: 30, path: '/' }); // Configura la cookie con js-cookie
      this.accepted = true;
    }
  }
};
</script>

<style scoped>
</style>
