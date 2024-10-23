import { createRouter, createWebHistory } from 'vue-router';
import SobreNosotros from '../views/SobreNosotros.vue';
import Home from '../views/Home.vue';
import Precio from '../views/Precio.vue';
import Contacto from '../views/Contacto.vue';
import PreguntasFrecuentes from '../views/PreguntasFrecuentes.vue';
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/precio', name: 'Precio', component: Precio },
  { path: '/sobre-nosotros', name: 'SobreNosotros', component: SobreNosotros },
  { path: '/contacto', name: 'Contacto', component: Contacto },
  { path: '/preguntas-frecuentes', name: 'PreguntasFrecuentes', component: PreguntasFrecuentes },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
