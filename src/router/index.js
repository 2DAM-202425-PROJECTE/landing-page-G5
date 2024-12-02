import { createRouter, createWebHistory } from 'vue-router';
import SobreNosotros from '../views/SobreNosotros.vue';
import Home from '../views/Home.vue';
import Precio from '../views/Precio.vue';
import Contacto from '../views/Contacto.vue';
import PreguntasFrecuentes from '../views/PreguntasFrecuentes.vue';
import Pago from '../views/Pago.vue';
import Login from '../views/Loginold.vue';
import PagarPersonalizado from '../views/PagarPersonalizado.vue';
import Termpriv from '../views/Termpriv.vue';
import Cookiesterminos from '../views/Cookiesterminos.vue';
import ProfileSetings from '../views/ProfileSetings.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/precio', name: 'Precio', component: Precio },
  { path: '/sobre-nosotros', name: 'SobreNosotros', component: SobreNosotros },
  { path: '/contacto', name: 'Contacto', component: Contacto },
  { path: '/preguntas-frecuentes', name: 'PreguntasFrecuentes', component: PreguntasFrecuentes },
  { path: '/pago/:plan/:precio', name: 'pago', component: Pago , props: true},
  { path: '/login', name: 'Login', component: Login },
  { path: '/plan-personalizado', name: 'plan-personalizado', component: PagarPersonalizado },
  { path: '/politicapriv', name: 'politicapriv', component: Termpriv },
  { path: '/cookiesterminos', name: 'cookiesterminos', component: Cookiesterminos },
  { path: '/profile-settings', name: 'profile-settings', component: ProfileSetings },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});
export default router;
