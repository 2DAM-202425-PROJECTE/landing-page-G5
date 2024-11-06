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

const categories = ['Todas', 'General', 'Cuenta', 'Membresías', 'Soporte']

const faqs = ref([
  { 
    id: 1, 
    question: '¿Cómo puedo crear una cuenta en el software de gestión?', 
    answer: 'Puedes crear una cuenta visitando la página de registro de nuestro software, donde te pediremos tu nombre, correo electrónico y una contraseña segura. Una vez creado tu perfil, podrás gestionar a tus clientes, ver sus planes y mucho más.',
    isOpen: false,
    category: 'Cuenta'
  },
  { 
    id: 2, 
    question: '¿Cómo agrego a un nuevo cliente?', 
    answer: 'Para agregar un nuevo cliente, dirígete a la sección "Clientes" y haz clic en "Agregar nuevo cliente". Luego, completa los datos solicitados como nombre, correo electrónico, tipo de membresía y fecha de inicio.',
    isOpen: false,
    category: 'Membresías'
  },
  { 
    id: 3, 
    question: '¿Puedo gestionar las membresías de mis clientes?', 
    answer: 'Sí, el software te permite gestionar las membresías de tus clientes de manera eficiente. Puedes renovar, cancelar o cambiar el plan de cualquier cliente desde la sección "Membresías" en su perfil.',
    isOpen: false,
    category: 'Membresías'
  },
  { 
    id: 4, 
    question: '¿Cómo gestiono el pago de las membresías?', 
    answer: 'El software permite registrar pagos manualmente o mediante integración con plataformas de pago en línea. Puedes ver el historial de pagos de cada cliente, generar facturas y configurar recordatorios automáticos.',
    isOpen: false,
    category: 'Membresías'
  },
  { 
    id: 5, 
    question: '¿Cómo recupero la contraseña de mi cuenta?', 
    answer: 'Si olvidaste tu contraseña, dirígete a la página de inicio de sesión y haz clic en "¿Olvidaste tu contraseña?". Te enviaremos un enlace para restablecerla a tu correo electrónico.',
    isOpen: false,
    category: 'Cuenta'
  },
  { 
    id: 6, 
    question: '¿Cómo contacto con soporte técnico?', 
    answer: 'Si necesitas ayuda, puedes ponerte en contacto con nuestro soporte técnico a través del formulario de contacto en la sección "Soporte" de la aplicación o enviando un correo electrónico a soporte@gymsoftware.com.',
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
  console.log('Formulario enviado:', { email: contactEmail.value, message: contactMessage.value })
  contactEmail.value = ''
  contactMessage.value = ''
  alert('¡Gracias por tu mensaje! Te responderemos pronto.')
}
</script>

<style scoped>
/* Estilos adicionales */
</style>
