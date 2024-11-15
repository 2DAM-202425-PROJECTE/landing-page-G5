<template>
  <v-container class="!p-56 bg-gradient-to-t from-black to-[#08201D]  pa-md-16 relative" fluid>
    <v-row align="center">
      <v-col cols="12" lg="6">
        <v-responsive max-width="450">
          <h1 class="text-white font-weight-bold mb-4 text-h5 text-sm-h4">
            Subscribete a nuestra newsletter
          </h1>
  
          <p class="!text-white text-subtitle-2 text-medium-emphasis mb-6">
            Disfruta de contenido exclusivo y actualizaciones semanales.
          </p>
  
          <v-text-field
            v-model="email"
            flat
            placeholder="Enter your email"
            rounded="lg"
            type="email"
            variant="solo-filled"
          >
            <template #append-inner>
              <v-btn
                @click="sendEmail"
                class="text-none"
                color="primary"
                text="Subscribe"
                variant="flat"
              />
            </template>
          </v-text-field>

          <!-- Mostrar el mensaje de éxito o error -->
          <p v-if="message" class="text-white mt-2">{{ message }}</p>

        </v-responsive>
      </v-col>

      <v-col v-for="item in newsletterItems" :key="item.title" cols="12" lg="3" md="6">
        <div>
          <v-avatar class="mb-2" color="primary" :icon="item.icon" rounded />
          <p class="text-white text-body-2 font-weight-bold pb-1">
            {{ item.title }}
          </p>
          <p class="text-white text-caption">{{ item.subtitle }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');   // Campo para capturar el email ingresado
const message = ref(''); // Campo para mostrar mensajes de éxito o error
const newsletterItems = [
  {
    title: 'Artículos semanales',
    subtitle: 'No labore en vano, obteniendo el máximo provecho de nuestros artículos. Sin efectos no deseados ni publicidad excesiva.',
    icon: 'mdi-calendar',
  },
  {
    title: 'Sin spam',
    subtitle: 'Sin correo no deseado, solo contenido relevante. Nos preocupamos por tu tiempo y privacidad.',
    icon: 'mdi-email-off',
  },
];


// Función para enviar el correo
async function sendEmail() {
  try {
    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to: email.value, subject: "Newsletter Subscription", text: "User subscribed to the newsletter." }),
    });

    const data = await response.json();
    if (response.ok) {
      message.value = data.message; // Cambia a message.value
    } else {
      message.value = "Error al enviar el correo"; // Cambia a message.value
    }
  } catch (error) {
    console.error("Error:", error);
    message.value = "Error al enviar el correo"; // Cambia a message.value
  }
}
</script>
