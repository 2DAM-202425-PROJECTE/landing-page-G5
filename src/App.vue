<template>
  <v-app>
    <div class="bg-primary">
    <Navigator></Navigator>
    <nav class="flex w-full bg-black justify-center">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <v-btn>hola</v-btn> 
    <router-view></router-view>
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
