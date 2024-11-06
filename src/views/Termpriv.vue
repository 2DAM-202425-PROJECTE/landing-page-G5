<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div class="absolute inset-0 bg-pattern opacity-5"></div>
    <div class="max-w-4xl mx-auto relative">
      <div class="bg-white shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm bg-opacity-80">
        <div class="px-8 py-12">
          <h1 class="text-4xl font-extrabold text-center text-gray-900 mb-12">
            Política de Privacidad
          </h1>
          <h2 class="text-2xl font-bold text-center text-indigo-600 mb-8">
            GymManager Pro
          </h2>
         
          <div class="space-y-8">
            <section v-for="(section, index) in privacySections" :key="index"
                     class="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
              <div class="flex items-start">
                <div class="flex-shrink-0 mr-4">
                  <component :is="section.icon" class="h-6 w-6 text-indigo-500" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ section.title }}</h3>
                  <p class="text-gray-600 leading-relaxed">{{ section.content }}</p>
                </div>
              </div>
            </section>
          </div>

          <div class="mt-12 text-center">
            <button @click="printPolicy" class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Imprimir Política de Privacidad
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  ClipboardDocumentIcon, ShieldCheckIcon, LockClosedIcon,
  ShareIcon, UserIcon, DocumentTextIcon, EnvelopeIcon
} from '@heroicons/vue/24/outline'

const privacySections = ref([
  {
    title: "Recopilación de Información",
    content: "GymManager Pro recopila información personal como nombre, correo electrónico, número de teléfono y datos de facturación al registrarte. También recopilamos datos sobre tu uso del gimnasio, incluyendo frecuencia de visitas, clases asistidas y progreso en tus objetivos de fitness.",
    icon: ClipboardDocumentIcon
  },
  {
    title: "Uso de la Información",
    content: "Utilizamos la información recopilada para gestionar tu membresía, personalizar tu experiencia, mejorar nuestros servicios y comunicarnos contigo sobre actualizaciones, ofertas especiales y encuestas de satisfacción.",
    icon: ShieldCheckIcon
  },
  {
    title: "Protección de Datos",
    content: "GymManager Pro implementa robustas medidas de seguridad técnicas y organizativas para proteger tu información personal contra accesos no autorizados, pérdida o alteración.",
    icon: LockClosedIcon
  },
  {
    title: "Compartir Información",
    content: "No vendemos ni alquilamos tu información personal a terceros. Podemos compartir datos anónimos y agregados con socios de confianza para mejorar nuestros servicios.",
    icon: ShareIcon
  },
  {
    title: "Tus Derechos",
    content: "Tienes derecho a acceder, corregir o eliminar tu información personal en cualquier momento. También puedes optar por no recibir comunicaciones de marketing.",
    icon: UserIcon
  },
  {
    title: "Cambios en la Política",
    content: "Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Te notificaremos sobre cambios significativos a través de la aplicación o por correo electrónico.",
    icon: DocumentTextIcon
  },
  {
    title: "Contacto",
    content: "Si tienes preguntas o inquietudes sobre nuestra política de privacidad, por favor contáctanos en privacy@gymmanagerpro.com.",
    icon: EnvelopeIcon
  }
]);

const printPolicy = () => {
  window.print();
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

@media print {
  body * {
    visibility: hidden;
  }
  .max-w-4xl, .max-w-4xl * {
    visibility: visible;
  }
  .max-w-4xl {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: white;
  }
  button, .bg-pattern {
    display: none;
  }
}
</style>