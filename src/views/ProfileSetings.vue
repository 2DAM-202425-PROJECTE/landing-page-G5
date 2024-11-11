<template>
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <header class="bg-white dark:bg-gray-800 shadow-md">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Mi Cuenta</h1>
          <button @click="toggleDarkMode" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
            <SunIcon v-if="darkMode" class="w-6 h-6 text-yellow-400" />
            <MoonIcon v-else class="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </header>
  
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Barra lateral de navegación -->
          <aside class="w-full lg:w-1/4">
            <nav class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sticky top-4">
              <ul class="space-y-2">
                <li v-for="(section, index) in sections" :key="index">
                  <button 
                    @click="activeSection = section.id"
                    class="w-full text-left px-4 py-2 rounded-md transition-colors duration-200 flex items-center"
                    :class="activeSection === section.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'"
                  >
                    <component :is="section.icon" class="w-5 h-5 mr-3" />
                    {{ section.name }}
                  </button>
                </li>
              </ul>
            </nav>
          </aside>
  
          <!-- Contenido principal -->
          <main class="w-full lg:w-3/4">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">{{ activeSection }}</h2>
  
              <!-- Perfil -->
              <section v-if="activeSection === 'Perfil'" class="space-y-6">
                <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div class="relative">
                    <img :src="usuario.avatar" alt="Avatar" class="w-24 h-24 rounded-full object-cover">
                    <button class="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors duration-200">
                      <CameraIcon class="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-white">{{ usuario.nombre }}</h3>
                    <p class="text-gray-600 dark:text-gray-400">{{ usuario.rol }}</p>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="nombre" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre completo</label>
                    <input id="nombre" v-model="usuario.nombre" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input id="email" v-model="usuario.email" type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  </div>
                  <div>
                    <label for="telefono" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Teléfono</label>
                    <input id="telefono" v-model="usuario.telefono" type="tel" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  </div>
                  <div>
                    <label for="ubicacion" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Ubicación</label>
                    <input id="ubicacion" v-model="usuario.ubicacion" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  </div>
                </div>
                <div>
                  <label for="bio" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Biografía</label>
                  <textarea id="bio" v-model="usuario.bio" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
                </div>
                <div>
                  <label for="intereses" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Intereses</label>
                  <div class="mt-2 flex flex-wrap gap-2">
                    <span v-for="(interes, index) in usuario.intereses" :key="index" class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      {{ interes }}
                      <button @click="removeInteres(index)" class="ml-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">&times;</button>
                    </span>
                    <input 
                      v-model="newInteres" 
                      @keyup.enter="addInteres"
                      placeholder="Añadir interés" 
                      class="inline-block px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    >
                  </div>
                </div>
              </section>
  
              <!-- Cuenta -->
              <section v-if="activeSection === 'Cuenta'" class="space-y-6">
                <div>
                  <label for="username" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre de usuario</label>
                  <input id="username" v-model="usuario.username" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                </div>
                <div>
                  <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Contraseña</label>
                  <input id="password" type="password" placeholder="••••••••" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                </div>
                <button @click="showChangePasswordModal = true" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 flex items-center">
                  <LockIcon class="w-4 h-4 mr-2" />
                  Cambiar contraseña
                </button>
                <div>
                  <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Sesiones activas</h3>
                  <ul class="space-y-2">
                    <li v-for="(session, index) in activeSessions" :key="index" class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                      <div class="flex items-center">
                        <DeviceIcon :class="session.deviceIcon" class="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
                        <span class="text-sm text-gray-700 dark:text-gray-300">{{ session.device }} - {{ session.location }}</span>
                      </div>
                      <button v-if="!session.current" @click="closeSession(index)" class="text-red-500 hover:text-red-700 dark:hover:text-red-400">
                        Cerrar sesión
                      </button>
                      <span v-else class="text-green-500 text-sm">Sesión actual</span>
                    </li>
                  </ul>
                </div>
              </section>
  
              <!-- Notificaciones -->
              <section v-if="activeSection === 'Notificaciones'" class="space-y-6">
                <div v-for="(category, categoryName) in notificaciones" :key="categoryName" class="space-y-4">
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white">{{ categoryName }}</h3>
                  <div v-for="(notif, index) in category" :key="index" class="flex items-center justify-between py-2">
                    <div>
                      <p class="text-gray-700 dark:text-gray-300">{{ notif.name }}</p>
                      <p class="text-sm text-gray-500 dark:text-gray-400">{{ notif.description }}</p>
                    </div>
                    <label class="switch">
                      <input type="checkbox" v-model="notif.enabled">
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>
              </section>
  
              <!-- Privacidad -->
              <section v-if="activeSection === 'Privacidad'" class="space-y-6">
                <div>
                  <label for="visibility" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Visibilidad del perfil</label>
                  <select id="visibility" v-model="usuario.visibility" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <option value="public">Público</option>
                    <option value="friends">Solo amigos</option>
                    <option value="private">Privado</option>
                  </select>
                </div>
                <div class="space-y-4">
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Opciones de privacidad</h3>
                  <div v-for="(option, index) in privacyOptions" :key="index" class="flex items-center justify-between">
                    <div>
                      <p class="text-gray-700 dark:text-gray-300">{{ option.name }}</p>
                      <p class="text-sm text-gray-500 dark:text-gray-400">{{ option.description }}</p>
                    </div>
                    <label class="switch">
                      <input type="checkbox" v-model="option.enabled">
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Datos personales</h3>
                  <button @click="showDataExportModal = true" class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200 mr-2">
                    Exportar mis datos
                  </button>
                  <button @click="showDataDeletionModal = true" class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200">
                    Solicitar eliminación de cuenta
                  </button>
                </div>
              </section>
  
              <!-- Botón de guardar cambios -->
              <div class="mt-8">
                <button @click="saveChanges" class="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center">
                  <SaveIcon class="w-5 h-5 mr-2" />
                  Guardar cambios
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
  
      <!-- Modal de cambio de contraseña -->
      <div v-if="showChangePasswordModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-96">
          <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-white">Cambiar contraseña</h3>
          <input type="password" placeholder="Contraseña actual" class="w-full mb-4 px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <input type="password" placeholder="Nueva contraseña" class="w-full mb-4 px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <input type="password" placeholder="Confirmar nueva contraseña" class="w-full mb-4 px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <div class="flex justify-end">
            <button @click="showChangePasswordModal = false" class="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 mr-2">Cancelar</button>
            <button @click="changePassword" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">Cambiar</button>
          </div>
        </div>
      </div>
  
      <!-- Modal de exportación de datos -->
      <div v-if="showDataExportModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-96">
          <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-white">Exportar mis datos</h3>
          <p class="mb-4 text-gray-600 dark:text-gray-400">Se generará un archivo con todos tus datos personales. Este proceso puede tardar unos minutos.</p>
          <div class="flex justify-end">
            <button @click="showDataExportModal = false" class="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 mr-2">Cancelar</button>
            <button @click="exportData" class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200">Exportar</button>
          </div>
        </div>
      </div>
  
      <!-- Modal de eliminación de cuenta -->
      <div v-if="showDataDeletionModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-96">
          <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-white">Eliminar cuenta</h3>
          <p class="mb-4 text-gray-600 dark:text-gray-400">Esta acción es irreversible. Todos tus datos serán eliminados permanentemente.</p>
          <input type="password" placeholder="Ingresa tu contraseña para confirmar" class="w-full mb-4 px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <div class="flex justify-end">
            <button @click="showDataDeletionModal = false" class="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 mr-2">Cancelar</button>
            <button @click="deleteAccount" class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200">Eliminar cuenta</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { UserIcon, LockIcon, BellIcon, ShieldIcon, SunIcon, MoonIcon, CameraIcon, DeviceIcon, SaveIcon } from 'lucide-vue-next'
  
  const activeSection = ref('Perfil')
  const darkMode = ref(false)
  const showChangePasswordModal = ref(false)
  const showDataExportModal = ref(false)
  const showDataDeletionModal = ref(false)
  const newInteres = ref('')
  
  const sections = [
    { id: 'Perfil', name: 'Perfil', icon: UserIcon },
    { id: 'Cuenta', name: 'Cuenta', icon: LockIcon },
    { id: 'Notificaciones', name: 'Notificaciones', icon: BellIcon },
    { id: 'Privacidad', name: 'Privacidad', icon: ShieldIcon },
  ]
  
  const usuario = ref({
    nombre: 'Ana García',
    email: 'ana@example.com',
    telefono: '+34 123 456 789',
    ubicacion: 'Madrid, España',
    bio: 'Diseñadora UX/UI apasionada por crear experiencias digitales intuitivas y atractivas.',
    username: 'ana_garcia',
    rol: 'Diseñadora Senior',
    avatar: 'https://i.pravatar.cc/150?img=47',
    visibility: 'friends',
    intereses: ['Diseño UX', 'Ilustración', 'Fotografía', 'Viajes'],
  })
  
  const notificaciones = ref({
    'Correo electrónico': [
      { name: 'Resumen semanal', description: 'Recibe un resumen de la actividad semanal', enabled: true },
      { name: 'Nuevos mensajes', description: 'Notificaciones de mensajes nuevos', enabled: true },
    ],
    'Notificaciones push': [
      { name: 'Nuevos seguidores', description: 'Cuando alguien te sigue', enabled: true },
      { name: 'Menciones', description: 'Cuando alguien te menciona en un comentario', enabled: true },
    ],
    'Notificaciones en la aplicación': [
      { name: 'Actualizaciones de proyectos', description: 'Cambios en proyectos que sigues', enabled: true },
      { name: 'Nuevos likes', description: 'Cuando alguien le gusta tu contenido', enabled: false },
    ],
  })
  
  const privacyOptions = ref([
    { name: 'Mostrar actividad en línea', description: 'Permite que otros vean cuando estás en línea', enabled: true },
    { name: 'Mostrar última conexión', description: 'Permite que otros vean tu última hora de conexión', enabled: false },
    { name: 'Permitir mensajes de desconocidos', description: 'Recibir mensajes de usuarios que no sigues', enabled: false },
  ])
  
  const activeSessions = ref([
    { device: 'Windows 10 - Chrome', location: 'Madrid, España', deviceIcon: 'laptop', current: true },
    { device: 'iPhone 12 - Safari', location: 'Barcelona, España', deviceIcon: 'smartphone' },
    { device: 'MacBook Pro - Firefox', location: 'Valencia, España', deviceIcon: 'laptop' },
  ])
  
  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
    document.documentElement.classList.toggle('dark', darkMode.value)
  }
  
  const addInteres = () => {
    if (newInteres.value.trim() && !usuario.value.intereses.includes(newInteres.value.trim())) {
      usuario.value.intereses.push(newInteres.value.trim())
      newInteres.value = ''
    }
  }
  
  const removeInteres = (index) => {
    usuario.value.intereses.splice(index, 1)
  }
  
  const saveChanges = () => {
    // Aquí iría la lógica para guardar los cambios
    console.log('Guardando cambios:', usuario.value)
    alert('Cambios guardados con éxito!')
  }
  
  const changePassword = () => {
    // Aquí iría la lógica para cambiar la contraseña
    console.log('Cambiando contraseña')
    showChangePasswordModal.value = false
    alert('Contraseña cambiada con éxito!')
  }
  
  const exportData = () => {
    // Aquí iría la lógica para exportar los datos
    console.log('Exportando datos')
    showDataExportModal.value = false
    alert('Tus datos han sido exportados. Recibirás un email con el archivo en breve.')
  }
  
  const deleteAccount = () => {
    // Aquí iría la lógica para eliminar la cuenta
    console.log('Eliminando cuenta')
    showDataDeletionModal.value = false
    alert('Tu cuenta ha sido programada para eliminación. Recibirás un email de confirmación.')
  }
  
  const closeSession = (index) => {
    // Aquí iría la lógica para cerrar la sesión
    console.log('Cerrando sesión:', activeSessions.value[index])
    activeSessions.value.splice(index, 1)
    alert('Sesión cerrada con éxito')
  }
  </script>
  
  <style scoped>
  /* Estilos para el switch de notificaciones y privacidad */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: #2196F3;
  }
  
  input:checked + .slider:before {
    transform: translateX(26px);
  }
  
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
  
  /* Animaciones */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  section {
    animation: fadeIn 0.3s ease-out forwards;
  }
  
  /* Transiciones */
  .transition-colors {
    transition-property: background-color, border-color, color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }
  </style>