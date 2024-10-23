import { createApp } from 'vue';
import 'vuetify/styles';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Asegúrate de que la ruta sea correcta
import router from './router'; // Importar el router
import './style.css';
import '@mdi/font/css/materialdesignicons.css';


const app = createApp(App);

app.use(router);  // Integrar el router
app.use(vuetify); // Integrar Vuetify
app.mount('#app');
