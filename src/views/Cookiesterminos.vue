<template>
    <div class="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="absolute inset-0 bg-pattern opacity-5"></div>
      <div class="max-w-4xl mx-auto relative">
        <div class="bg-white shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm bg-opacity-80">
          <div class="px-8 py-12">
            <h1 class="text-4xl font-extrabold text-center text-gray-900 mb-12">
              Política de Cookies
            </h1>
            <h2 class="text-2xl font-bold text-center text-teal-600 mb-8">
              GymManager Pro
            </h2>
           
            <div class="space-y-8">
              <section v-for="(section, index) in cookieSections" :key="index"
                       class="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                <div class="flex items-start">
                  <div class="flex-shrink-0 mr-4">
                    <!-- Renderizar el icono dinámicamente -->
                    <component :is="section.icon" class="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ section.title }}</h3>
                    <p class="text-gray-600 leading-relaxed">{{ section.content }}</p>
                  </div>
                </div>
              </section>
            </div>
  
            <div class="mt-12 text-center">
              <button @click="printPolicy"
                      class="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                Imprimir Política de Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Cookie, ShieldCheck, Settings, Sliders, AlertTriangle, Clock, Mail } from 'lucide-vue-next'
  
  const cookieSections = [
    {
      title: "¿Qué son las cookies?",
      content: "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web o utilizas nuestra aplicación GymManager Pro. Estas nos ayudan a proporcionar funcionalidades esenciales y mejorar tu experiencia de usuario.",
      icon: Cookie
    },
    {
      title: "Tipos de cookies que utilizamos",
      content: "Utilizamos cookies esenciales para el funcionamiento básico de la aplicación, cookies de rendimiento para analizar y mejorar nuestros servicios, y cookies de funcionalidad para recordar tus preferencias. No utilizamos cookies de publicidad.",
      icon: Sliders
    },
    {
      title: "Cómo utilizamos las cookies",
      content: "Usamos cookies para mantener tu sesión activa, recordar tus preferencias de entrenamiento, proporcionar funciones personalizadas como recomendaciones de rutinas, y analizar cómo se utiliza nuestra aplicación para mejorarla continuamente.",
      icon: Settings
    },
    {
      title: "Tus opciones respecto a las cookies",
      content: "Puedes gestionar las cookies a través de la configuración de tu navegador o dispositivo. Ten en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad de GymManager Pro.",
      icon: ShieldCheck
    },
    {
      title: "Cookies de terceros",
      content: "Algunas funciones de nuestra aplicación pueden utilizar cookies de terceros, como para la integración con redes sociales o servicios de pago. Estas están sujetas a las políticas de privacidad de sus respectivos proveedores.",
      icon: AlertTriangle
    },
    {
      title: "Actualizaciones de la política",
      content: "Podemos actualizar nuestra política de cookies periódicamente. Te recomendamos revisarla con regularidad para mantenerte informado sobre cómo protegemos tu información.",
      icon: Clock
    },
    {
      title: "Contacto",
      content: "Si tienes preguntas sobre nuestra política de cookies o cómo las utilizamos en GymManager Pro, no dudes en contactarnos en cookies@gymmanagerpro.com.",
      icon: Mail
    }
  ]
  
  const printPolicy = () => {
    window.print()
  }
  </script>
  
  <style scoped>
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
  