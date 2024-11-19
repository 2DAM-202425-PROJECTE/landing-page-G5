<template>
  <footer class="bg-background border-t">
    <div class="container px-6 py-12 mx-auto">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        <div class="sm:col-span-2">
          <h1 class="max-w-lg text-xl font-semibold tracking-tight text-primary xl:text-2xl">Suscribete para recibir las actualizaciones</h1>

          <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
            <input type="text" class="px-4 py-2 text-primary bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Email" />
            <button type="button" class="w-full px-6 py-2 text-white bg-primary rounded-md md:w-auto md:mx-4 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Subscrirse
            </button>
          </div>
        </div>

        <div>
          <p class="font-semibold text-primary">Links</p>

          <div class="flex flex-col items-start mt-5 space-y-2">
            <a href="/" class="text-muted-foreground transition-colors duration-300 hover:text-primary">Inicio</a>
            <a href="/sobre-nosotros" class="text-muted-foreground transition-colors duration-300 hover:text-primary">Sobre Nosotros</a>
            <a href="/precio" class="text-muted-foreground transition-colors duration-300 hover:text-primary">Precio</a>
            <a href="/contacto" class="text-muted-foreground transition-colors duration-300 hover:text-primary">Contacto</a>
          </div>
        </div>

        <div>
          <p class="font-semibold text-primary">Resources</p>

          <div class="flex flex-col items-start mt-5 space-y-2">
            <a href="/preguntas-frecuentes" class="text-muted-foreground transition-colors duration-300 hover:text-primary">FAQ</a>
            <a href="/politicapriv" class="text-muted-foreground transition-colors duration-300 hover:text-primary">Politica de privacidad</a>
            <a href="/cookiesterminos" class="text-muted-foreground transition-colors duration-300 hover:text-primary">Terminos de Cookies</a>
          </div>
        </div>
      </div>

      <hr class="my-6 border-muted h-px" />

      <div class="flex flex-col items-center justify-between sm:flex-row">
        <a href="/">
          <span class="sr-only">Your Company</span>
          <svg class="h-8 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>

        <p class="mt-4 text-sm text-muted-foreground sm:mt-0">© {{ currentYear }} Your Company. All rights reserved.</p>

        <div class="flex mt-4 space-x-4 sm:mt-0">
          <a v-for="(icon, index) in socialIcons" :key="index" :href="icon.href" class="text-muted-foreground hover:text-primary">
            <span class="sr-only">{{ icon.name }}</span>
            <component :is="icon.component" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())

const socialIcons = ref([
  { name: 'Facebook', href: 'https://www.facebook.com/gymmanager', component: Facebook },
  { name: 'Twitter', href: 'https://x.com/gymmanager005', component: Twitter },
  { name: 'Instagram', href: 'https://www.instagram.com/gymmanager', component: Instagram },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/gymmanager', component: Linkedin },
  { name: 'GitHub', href: 'https://github.com/2DAM-202425-PROJECTE/landing-page-G5', component: Github },
])
</script>