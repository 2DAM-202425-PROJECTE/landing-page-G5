// src/plugins/vuetify.js
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'; // Importa todos los componentes
import * as directives from 'vuetify/directives'; // Importa todas las directivas
import 'vuetify/styles'; // Importa los estilos de Vuetify

const vuetify = createVuetify({
  components, // Registra todos los componentes
  directives,  // Registra todas las directivas
  icons: {
    defaultSet: 'mdi',
    iconfont : 'fa' || 'md',
  },

});

export default vuetify;
