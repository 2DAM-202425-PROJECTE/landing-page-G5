<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" color="primary" disable-resize-watcher>
      <v-list nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :active="i === 0"
        >
          <router-link
            :to="item.route"
            :class="{ 'active-btn': $route.path === item.route }"
          >
            {{ item.text }}
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dark class="px-md-4">
      <template #prepend>
        <v-app-bar-nav-icon
          color="black"
          v-if="$vuetify.display.smAndDown"
          @click="drawer = !drawer"
        />
      </template>

      <v-img class="me-sm-8" max-width="40" src="/src/assets/icons/logo.png" />

      <template v-if="$vuetify.display.mdAndUp">
        <v-btn 
          v-for="(item, i) in items"
          :key="i"
          slim
          class="me-2 text-none"
          @click="$router.push(item.route)"
          :class="{ 'active-btn': $route.path === item.route }"
        >
          {{ item.text }}
        </v-btn>
      </template>
      

      <v-spacer />

      <template #append>
        <v-btn class="ms-1" color="medium-emphasis" icon="mdi-bell-outline" />
        <v-btn class="ms-1" icon>
          <v-avatar class="border-2 border-slate-100" image="/src/assets/icons/profile.jpg" />
          <v-menu activator="parent" origin="top">
            <v-list>
              <v-list-item @click="$router.push('/login')" link title="Registrate" />
              <v-list-item link title="Cerrar Sesion" />
              <v-list-item @click="$router.push('/profile-settings')"link title="Configurazacion" />
            </v-list>
          </v-menu>
        </v-btn>
      </template>
    </v-app-bar>

    <v-main height="h-full">
      <router-view />
      <Cookies></Cookies>
    </v-main>
  </v-layout>
</template>

<script setup>
import { shallowRef } from 'vue'
import Cookies from '../Cookies.vue';

const drawer = shallowRef(false)

const items = [
  { text: 'Inicio', route: '/' },
  { text: 'Precio', route: '/precio' },
  { text: 'Sobre Nosotros', route: '/sobre-nosotros' },
  { text: 'Contacto', route: '/contacto' },
  { text: 'Preguntas frecuentes', route: '/preguntas-frecuentes' },
]

</script>

<style scoped>
.active-btn {
  background-color: #5BC0BE; /* Cambia este color para tu diseño */
  color: white;
}
</style>
