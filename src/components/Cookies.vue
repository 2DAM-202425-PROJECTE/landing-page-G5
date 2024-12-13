<template>
    <div v-if="!accepted" class="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg z-50">
      <p class="mr-4">
        Este sitio utiliza cookies para mejorar la experiencia del usuario. 
        <a href="/cookiesterminos" target="_blank" class="text-GMquaternary hover:underline">Leer más</a>
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
  export default {
    data() {
      return {
        accepted: false,
      };
    },
    mounted() {
      this.accepted = this.getCookie('cookieConsent') === 'true';
    },
    methods: {
      acceptCookies() {
        document.cookie = "cookieConsent=true; path=/; max-age=" + 60 * 60 * 24 * 30; // 30 días
        this.accepted = true;
      },
      getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  