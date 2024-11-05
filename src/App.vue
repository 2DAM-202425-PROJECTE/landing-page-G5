<template>
  <v-app>

    <div class="h-full bg-GMprimary">

    <Navigator></Navigator>

    <Footer></Footer>
  </div>
  </v-app>
</template>

<script>
import Footer from './components/layout/Footer.vue';
import Navigator from './components/layout/Navigator.vue'; // Colocar la importación aquí, fuera de export default
export default {
  name: 'App',
  components: {
    Navigator,
    Footer,
  },  
};
</script>
