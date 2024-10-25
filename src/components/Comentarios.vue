<template>
  <v-container class="d-flex mt-16 flex-column align-center justify-center">
    <v-card-title class="text-h4 font-weight-bold mb-5 text-white">Reseñas de nuestro software</v-card-title>

    <v-carousel hide-delimiters height="400">
      <v-carousel-item v-for="(item, index) in items" :key="index">
        <v-row class="justify-center">
          <!-- Mostrar solo 4 tarjetas en el carrusel -->
          <v-col cols="12" md="3" v-if="index >= currentIndex && index < currentIndex + 7">
            <v-card>
              <v-card-item>
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
              </v-card-item>
              <v-card-text>{{ item.text }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <div class="text-center mt-4">
      <v-btn @click="next" color="primary">Siguiente</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Membresías Activas",
          subtitle: "Gestión de Membresías",
          text: "Ofrece un seguimiento detallado de las membresías activas, fechas de inicio y finalización, así como el estado de las renovaciones."
        },
        {
          title: "Gestión de Clases",
          subtitle: "Programación de Clases",
          text: "Mantén a tus miembros informados sobre las clases programadas, sus horarios y las disponibilidades de los instructores."
        },
        {
          title: "Informes de Asistencia",
          subtitle: "Control de Asistencia",
          text: "Genera informes sobre la asistencia de los miembros, identifica tendencias y mejora la retención de usuarios."
        },
        {
          title: "Facturación Automática",
          subtitle: "Manejo de Pagos",
          text: "Automatiza el proceso de facturación y ofrece múltiples opciones de pago a tus miembros."
        },
        {
          title: "Seguimiento de Progreso",
          subtitle: "Análisis de Rendimiento",
          text: "Permite a los miembros rastrear su progreso personal en cuanto a entrenamientos y metas de fitness."
        },
        {
          title: "Reserva de Entrenadores",
          subtitle: "Programación de Citas",
          text: "Facilita la reserva de sesiones con entrenadores personales a través de la aplicación."
        },
        {
          title: "Notificaciones Personalizadas",
          subtitle: "Comunicación Efectiva",
          text: "Envía notificaciones y recordatorios a tus miembros sobre clases, promociones y eventos especiales."
        },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % (this.items.length - 3);
    },
  },
};
</script>

<style scoped>
.text-center {
  margin-top: 20px;
}
</style>
