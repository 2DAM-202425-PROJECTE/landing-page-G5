<template>
    <div class="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      <!-- Animación de fondo sutil -->
      <div class="absolute inset-0 overflow-hidden">
        <div v-for="i in 50" :key="i"
             class="star"
             :style="{
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
               animationDelay: `${Math.random() * 5}s`
             }">
        </div>
      </div>
  
      <!-- Contenido principal -->
      <div class="relative z-10">
     
   
  
        <main class="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 class="text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#5BC0BE] to-purple-500 animate-pulse">
            Preguntas Frecuentes
          </h1>
          
          <!-- Barra de búsqueda -->
          <div class="mb-8 relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Buscar preguntas..."
              class="w-full px-5 py-3 bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-[#5BC0BE] text-gray-100 placeholder-gray-400 transition duration-300 ease-in-out"
            />
            <SearchIcon class="absolute right-4 top-3 text-gray-400" />
          </div>
  
         
  
          <!-- Lista de categorías -->
          <div class="mb-8 flex flex-wrap justify-center gap-2">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectCategory(category)"
              class="px-4 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out"
              :class="selectedCategory === category ? 'bg-[#5BC0BE] text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'"
            >
              {{ category }}
            </button>
          </div>
  
          <!-- Lista de preguntas -->
          <TransitionGroup
            name="list"
            tag="ul"
            class="space-y-4"
          >
            <li v-for="faq in filteredFaqs" :key="faq.id" class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <button
                @click="toggleFaq(faq.id)"
                class="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#5BC0BE]"
                :aria-expanded="faq.isOpen"
              >
                <span class="font-medium text-left">{{ faq.question }}</span>
                <ChevronDownIcon
                  :class="{'transform rotate-180': faq.isOpen}"
                  class="w-5 h-5 transition-transform duration-300 ease-in-out text-[#5BC0BE]"
                />
              </button>
              <transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <div v-if="faq.isOpen" class="px-6 py-4 bg-gray-700">
                  <p class="text-gray-300">{{ faq.answer }}</p>
                </div>
              </transition>
            </li>
          </TransitionGroup>
  
          <p v-if="filteredFaqs.length === 0" class="text-center text-gray-400 mt-8 animate-bounce">
            No se encontraron preguntas que coincidan con tu búsqueda.
          </p>
  
          <!-- Sección de contacto -->
          <div class="mt-12 bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 class="text-2xl font-bold mb-4 text-center">¿No encontraste lo que buscabas?</h2>
            <p class="text-center mb-6">Contáctanos y estaremos encantados de ayudarte.</p>
            <form @submit.prevent="submitForm" class="space-y-4">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-400 mb-1">Correo electrónico</label>
                <input type="email" id="email" v-model="contactEmail" required
                       class="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5BC0BE] text-gray-100 placeholder-gray-500 transition duration-300 ease-in-out"
                       placeholder="tu@email.com" />
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-400 mb-1">Mensaje</label>
                <textarea id="message" v-model="contactMessage" required rows="4"
                          class="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5BC0BE] text-gray-100 placeholder-gray-500 transition duration-300 ease-in-out"
                          placeholder="Escribe tu pregunta aquí..."></textarea>
              </div>
              <button type="submit"
                      class="w-full bg-[#5BC0BE] hover:bg-green-300 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#5BC0BE] focus:ring-opacity-50">
                Enviar mensaje
              </button>
            </form>
          </div>
        </main>
  
        
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const searchQuery = ref('')
  const selectedCategory = ref('Todas')
  const contactEmail = ref('')
  const contactMessage = ref('')
  
  const categories = ['Todas', 'General', 'Cuenta', 'Producto', 'Soporte']
  
  const faqs = ref([
    { 
      id: 1, 
      question: '¿Qué es Vue.js?', 
      answer: 'Vue.js es un framework progresivo de JavaScript para construir interfaces de usuario. Está diseñado para ser adoptado de forma incremental y puede ser fácilmente integrado con otros proyectos y bibliotecas.',
      isOpen: false,
      category: 'General'
    },
    { 
      id: 2, 
      question: '¿Cómo instalo Vue.js?', 
      answer: 'Puedes instalar Vue.js de varias maneras. La forma más sencilla es incluir el script de Vue directamente en tu HTML. Para proyectos más grandes, se recomienda usar npm o yarn con la Vue CLI.',
      isOpen: false,
      category: 'General'
    },
    { 
      id: 3, 
      question: '¿Qué es el Virtual DOM?', 
      answer: 'El Virtual DOM (DOM virtual) es una representación ligera del DOM real en memoria. Vue.js utiliza esta técnica para realizar operaciones de manera eficiente antes de actualizar el DOM real, lo que mejora el rendimiento de la aplicación.',
      isOpen: false,
      category: 'Producto'
    },
    { 
      id: 4, 
      question: '¿Qué son los componentes en Vue?', 
      answer: 'Los componentes son bloques de construcción reutilizables en Vue.js. Permiten dividir la interfaz de usuario en piezas independientes y reutilizables, cada una con su propia lógica y diseño.',
      isOpen: false,
      category: 'Producto'
    },
    { 
      id: 5, 
      question: '¿Cómo manejo el estado en Vue?', 
      answer: 'Vue ofrece varias formas de manejar el estado. Para componentes individuales, puedes usar la opción data o ref en la Composition API. Para estado global, Vue recomienda usar Pinia o Vuex para aplicaciones más grandes y complejas.',
      isOpen: false,
      category: 'Producto'
    },
    { 
      id: 6, 
      question: '¿Cómo puedo cambiar mi contraseña?', 
      answer: 'Para cambiar tu contraseña, inicia sesión en tu cuenta, ve a la sección de "Configuración de la cuenta" y busca la opción "Cambiar contraseña". Sigue las instrucciones para establecer una nueva contraseña segura.',
      isOpen: false,
      category: 'Cuenta'
    },
    { 
      id: 7, 
      question: '¿Qué hago si olvidé mi contraseña?', 
      answer: 'Si olvidaste tu contraseña, ve a la página de inicio de sesión y haz clic en "¿Olvidaste tu contraseña?". Ingresa tu dirección de correo electrónico y te enviaremos instrucciones para restablecerla.',
      isOpen: false,
      category: 'Cuenta'
    },
    { 
      id: 8, 
      question: '¿Cómo puedo contactar al soporte técnico?', 
      answer: 'Puedes contactar a nuestro equipo de soporte técnico a través del formulario de contacto en nuestro sitio web, enviando un correo electrónico a soporte@ejemplo.com, o llamando a nuestro número de atención al cliente durante horas hábiles.',
      isOpen: false,
      category: 'Soporte'
    }
  ])
  
  const filteredFaqs = computed(() => {
    let filtered = faqs.value
    if (selectedCategory.value !== 'Todas') {
      filtered = filtered.filter(faq => faq.category === selectedCategory.value)
    }
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query)
      )
    }
    return filtered
  })
  
  const toggleFaq = (id) => {
    const faq = faqs.value.find(f => f.id === id)
    if (faq) {
      faq.isOpen = !faq.isOpen
    }
  }
  
  const selectCategory = (category) => {
    selectedCategory.value = category
  }
  
  const submitForm = () => {
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', { email: contactEmail.value, message: contactMessage.value })
    // Reiniciar los campos después del envío
    contactEmail.value = ''
    contactMessage.value = ''
    // Mostrar un mensaje de confirmación (en una aplicación real, usaríamos un sistema de notificaciones)
    alert('¡Gracias por tu mensaje! Te responderemos pronto.')
  }
  </script>
  
  <style scoped>
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  
  .star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    opacity: 0.3;
    animation: twinkle 5s infinite;
  }
  
  @keyframes twinkle {
    0% { opacity: 0.3; }
    50% { opacity: 0.8; }
    100% { opacity: 0.3; }
  }
  </style>