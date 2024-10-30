<template>
  <footer class="bg-[#0B132B] text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Columna 1: Logo y descripción -->
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-[#5BC0BE] animate-pulse">Gym Manager</h2>
          <p class="text-sm text-[#6F73D2]">Ofreciendo soluciones innovadoras desde 2023</p>
        </div>

        <!-- Columna 2: Enlaces rápidos -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-[#5BC0BE]">Enlaces Rápidos</h3>
          <ul class="space-y-2">
            <li v-for="item in quickLinks" :key="item">
              <a 
                href="#" 
                class="text-[#6F73D2] hover:text-[#5BC0BE] transition-colors duration-300"
              >
                {{ item }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Columna 3: Newsletter -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-[#5BC0BE]">Suscríbete a nuestro Newsletter</h3>
          <form @submit.prevent="handleSubmit" class="flex space-x-2">
            <Input
              type="email"
              placeholder="Tu email"
              v-model="email"
              class="bg-[#1C2541] text-white border-[#6F73D2] focus:border-[#5BC0BE]"
              required
            />
            <Button type="submit" class="bg-[#5BC0BE] hover:bg-[#6F73D2] transition-colors duration-300">
              <Send class="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      <!-- Redes sociales -->
      <div class="mt-8 flex justify-center space-x-6">
        <a 
          v-for="(Icon, index) in socialIcons" 
          :key="index" 
          href="#" 
          class="text-[#6F73D2] hover:text-[#5BC0BE] transition-colors duration-300"
        >
          <component :is="Icon" class="h-6 w-6 transform hover:scale-110 transition-transform duration-300" />
        </a>
      </div>

      <!-- Copyright y enlaces legales -->
      <div class="mt-8 text-center text-sm text-[#6F73D2]">
        <p>&copy; {{ currentYear }} Tu Empresa. Todos los derechos reservados.</p>
        <div class="mt-2 space-x-4">
          <div class="flex items-center pb-10">
              <v-dialog max-width="500">
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn
                    class="text-white mt-10"
                    v-bind="activatorProps"
                    color="#5BC0BE"
                    text="Politica de Privacidad"
                    variant="elevated"
                    ></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card title="Requisitos">
                          <v-card-text>
                            <h2 class="font-bold">Estaciones de Trabajo</h2>
                              <ul>
                                <li>Procesador: Mínimo un procesador dual-core (por ejemplo, Intel i3 o equivalente).</li> 
                              </ul>
                          </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn>
                        text="Cerrar"
                        @click="isActive.value = false"
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
            </v-dialog>
          </div>
          <a href="#" class="hover:text-[#5BC0BE] transition-colors duration-300">Política de Privacidad</a>
          <a href="#" class="hover:text-[#5BC0BE] transition-colors duration-300">Términos de Servicio</a>
        </div>
      </div>
    </div>
    
  </footer>
</template>

<script>
import { ref } from 'vue'


export default {
  setup() {
    const email = ref('')
    const quickLinks = ['Inicio', 'Servicios', 'Sobre Nosotros', 'Contacto']
    
    const currentYear = new Date().getFullYear()

    const handleSubmit = () => {
      // Aquí iría la lógica para manejar la suscripción
      console.log('Email submitted:', email.value)
      email.value = ''
    }

    return {
      email,
      quickLinks,
  
      currentYear,
      handleSubmit
    }
  }
}
</script>

<style scoped>
/* Estilos adicionales si es necesario */
footer{
  display: flex;
  flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
</style>