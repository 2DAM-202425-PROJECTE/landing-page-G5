<template>
  <div id="app">
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/about">Acerca de</router-link>
    </nav>
    <router-view></router-view> <!-- Aquí se renderiza la ruta actual -->
  </div>
</template>
