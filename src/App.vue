<template>
  <v-app>
    <div class="h-screen bg-GMprimary">
    <Navigator></Navigator>
  </div>
  </v-app>
</template>

<script>
import Navigator from './components/layout/Navigator.vue'; // Colocar la importación aquí, fuera de export default

export default {
  name: 'App',
  components: {
    Navigator,
  },  
};
</script>
