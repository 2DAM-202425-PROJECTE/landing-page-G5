<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-800">Mi Cuenta</h1>
      </div>
    </header>

    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Sidebar Navigation -->
        <aside class="w-full lg:w-1/4">
          <nav class="bg-white rounded-lg shadow-md p-4 sticky top-4">
            <ul class="space-y-2">
              <li v-for="(section, index) in sections" :key="index">
                <button 
                  @click="activeSection = section.id" 
                  class="w-full text-left px-4 py-2 rounded-md flex items-center transition-colors duration-200"
                  :class="activeSection === section.id 
                    ? 'bg-blue-500 text-white' 
                    : 'hover:bg-gray-200 text-gray-700'">
                  <component :is="section.icon" class="w-5 h-5 mr-3" />
                  {{ section.name }}
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <!-- Main Content -->
        <main class="w-full lg:w-3/4">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">
              {{ activeSection }}
            </h2>

            <!-- Profile Section -->
            <section v-if="activeSection === 'Perfil'" class="space-y-6">
              <!-- User Info -->
              <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div class="relative">
                  <img 
                    :src="usuario.avatar" 
                    alt="Avatar" 
                    class="w-24 h-24 rounded-full object-cover">
                    <div class="relative">
                    <input 
                      id="fileInput"
                      type="file" 
                      @change="handleImageChange"
                      class="absolute bottom-0 right-0 opacity-0 w-8 h-8 cursor-pointer"
                    />
                    <button 
                      @click="triggerFileInput"
                      class="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors duration-200">
                      <CameraIcon class="w-4 h-4" />
                    </button>
                  </div>

                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-800">
                    {{ usuario.nombre }}
                  </h3>
                  <p class="text-gray-600">
                    {{ usuario.rol }}
                  </p>
                </div>
              </div>

              <!-- Form Fields -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="field in profileFields" :key="field.id">
                  <label 
                    :for="field.id" 
                    class="block text-sm font-medium text-gray-700">
                    {{ field.label }}
                  </label>
                  <input 
                    :id="field.id" 
                    v-model="usuario[field.model]" 
                    :type="field.type" 
                    class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                </div>
              </div>

              <!-- Bio -->
              <div>
                <label 
                  for="bio" 
                  class="block text-sm font-medium text-gray-700">
                  Biografía
                </label>
                <textarea 
                  id="bio" 
                  v-model="usuario.bio" 
                  rows="4" 
                  class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                </textarea>
              </div>

              <!-- Interests -->
              <div>
                <label 
                  for="intereses" 
                  class="block text-sm font-medium text-gray-700">
                  Intereses
                </label>
                <div class="mt-2 flex flex-wrap gap-2">
                  <span 
                    v-for="(interes, index) in usuario.intereses" 
                    :key="index" 
                    class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                    {{ interes }}
                    <button 
                      @click="removeInteres(index)" 
                      class="ml-1 text-blue-600 hover:text-blue-800">
                      &times;
                    </button>
                  </span>
                  <div class="flex gap-2 mt-2">
                    <input 
                      v-model="newInteres" 
                      placeholder="Añadir interés" 
                      class="inline-block px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </input>
                    <button 
                      @click="addInteres" 
                      class="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors duration-200">
                      Añadir
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <!-- Account Section -->
            <section v-if="activeSection === 'Cuenta'" class="space-y-6">
              <h3 class="text-lg font-semibold text-gray-800">Configuraciones de la cuenta</h3>

                        <!-- Change Password -->
              <div>
                <label for="current-password" class="block text-sm font-medium text-gray-700">
                  Contraseña actual
                </label>
                <input
                  id="current-password"
                  type="password"
                  placeholder="••••••••"
                  class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label for="new-password" class="block text-sm font-medium text-gray-700">
                  Nueva contraseña
                </label>
                <input
                  id="new-password"
                  type="password"
                  placeholder="••••••••"
                  class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>

                      <!-- Deactivate Account -->
                <div>
                  <label for="deactivate" class="block text-sm font-medium text-gray-700">
                    Desactivar cuenta
                  </label>
                  <p class="text-sm text-gray-600 mb-2">
                    Si desactivas tu cuenta, no podrás acceder hasta que la reactives.
                  </p>
                  <button
                    id="deactivate"
                    class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
                  >
                    Desactivar cuenta
                  </button>
                </div>

           </section>

            <!-- Notifications Section -->
            <section v-if="activeSection === 'Notificaciones'" class="space-y-6">
              <h3 class="text-lg font-semibold text-gray-800">Notificaciones</h3>
              <div>
                <label class="flex items-center gap-2">
                  <input type="checkbox" v-model="usuario.notificaciones.email" />
                  Notificaciones por correo electrónico
                </label>
                <label class="flex items-center gap-2 mt-2">
                  <input type="checkbox" v-model="usuario.notificaciones.sms" />
                  Notificaciones por SMS
                </label>
                <label class="flex items-center gap-2 mt-2">
                <input type="checkbox" v-model="usuario.notificaciones.push" />
                Notificaciones push en la aplicación
                </label>
              </div>
            </section>

            <!-- Privacy Section -->
            <section v-if="activeSection === 'Privacidad'" class="space-y-6">
              <h3 class="text-lg font-semibold text-gray-800">Privacidad</h3>
              <p class="text-gray-600">Configura tus preferencias de privacidad.</p>
              <label class="flex items-center gap-2">
                <input type="checkbox" v-model="usuario.privacidad.perfil_publico" />
                Perfil público
              </label>
                <!-- Share Data -->
                <label class="flex items-center gap-2">
                  <input type="checkbox" v-model="usuario.privacidad.compartir_datos" />
                  Compartir datos de actividad con terceros
                </label>

                          <!-- Post Visibility -->
                <div>
                  <label for="post-visibility" class="block text-sm font-medium text-gray-700">
                    Visibilidad de publicaciones
                  </label>
                  <select
                    id="post-visibility"
                    v-model="usuario.privacidad.visibilidad_post"
                    class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    <option value="todos">Visible para todos</option>
                    <option value="amigos">Solo amigos</option>
                    <option value="privado">Solo yo</option>
                  </select>
                </div>





               <!-- Advanced Security -->
               <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Configuración avanzada de seguridad
                  </label>
                  <p class="text-sm text-gray-600 mb-2">
                    Habilita autenticación en dos pasos para mayor seguridad.
                  </p>
                  <button
                    class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                  >
                    Activar autenticación en dos pasos
                  </button>
                </div>


            </section>




            <!-- Save Button -->
            <div class="mt-8">
              <button 
                @click="saveChanges" 
                class="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center">
                <SaveIcon class="w-5 h-5 mr-2" />
                Guardar cambios
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  UserIcon, LockIcon, BellIcon, ShieldIcon, 
  CameraIcon, SaveIcon 
} from 'lucide-vue-next'

const profile_photo = ref('https://cdn-icons-png.flaticon.com/512/149/149071.png')
const activeSection = ref('Perfil')
const newInteres = ref('')
const usuario = ref({
  nombre: 'Florian Cumer',
  email: 'cumer@example.com',
  telefono: '+34 123 456 789',
  ubicacion: 'Madrid, España',
  bio: 'Diseñadora UX/UI apasionada por crear experiencias digitales intuitivas y atractivas.',
  username: 'ana_garcia',
  rol: 'Diseñadora Senior',
  avatar: profile_photo.value,
  intereses: ['Diseño UX', 'Ilustración'],
  notificaciones: {
    email: true,
    sms: false,
  },
  privacidad: {
    perfil_publico: false,
  }
})

const sections = [
  { id: 'Perfil', name: 'Perfil', icon: UserIcon },
  { id: 'Cuenta', name: 'Cuenta', icon: LockIcon },
  { id: 'Notificaciones', name: 'Notificaciones', icon: BellIcon },
  { id: 'Privacidad', name: 'Privacidad', icon: ShieldIcon },
]

const profileFields = [
  { id: 'nombre', label: 'Nombre completo', model: 'nombre', type: 'text' },
  { id: 'email', label: 'Email', model: 'email', type: 'email' },
  { id: 'telefono', label: 'Teléfono', model: 'telefono', type: 'tel' },
  { id: 'ubicacion', label: 'Ubicación', model: 'ubicacion', type: 'text' },
]

const addInteres = () => {
  if (newInteres.value.trim()) {
    usuario.value.intereses.push(newInteres.value.trim())
    newInteres.value = ''
  }
}

const removeInteres = (index) => {
  usuario.value.intereses.splice(index, 1)
}

const saveChanges = () => {
  console.log('Datos guardados:', usuario.value)
  alert('Cambios guardados correctamente.')
}

const handleImageChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onloadend = () => {
      usuario.value.avatar = reader.result
    }
    reader.readAsDataURL(file)
  }
}
function triggerFileInput() {
      const fileInput = document.getElementById('fileInput');
      if (fileInput) {
        fileInput.click(); // Esto abre el selector de archivos
      }
    }
</script>

<style scoped>
/* Minimal custom styles for cleaner visuals */
</style>
