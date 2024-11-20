<template>
    <section class="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center bg-gradient-to-t from-[#08201D] to-GMsecondary">
      <div class="container px-4 md:px-6 max-w-6xl mx-auto">
        <div class="flex flex-col items-center justify-center space-y-4 text-center">
          <div class="space-y-2">
            <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Potentes Funcionalidades para la Gestión Moderna de Gimnasios</h2>
            <p class="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Nuestra solución basada en la nube ofrece todo lo que necesitas para optimizar las operaciones de tu gimnasio, mejorar la experiencia de los miembros y potenciar el crecimiento de tu negocio.
            </p>
          </div>
        </div>
        <div class="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8">
          <div v-for="(feature, index) in features" :key="index" class="flex flex-col h-full bg-white/10 backdrop-blur-sm rounded-lg shadow-sm border border-white/20">
            <div class="p-6">
              <div class="flex items-center justify-between">
                <component :is="feature.icon" class="h-8 w-8 text-white" />
                <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  {{ feature.badge }}
                </span>
              </div>
              <h3 class="mt-4 text-lg text-white font-semibold">{{ feature.title }}</h3>
              <p class="mt-2 text-sm text-gray-300">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { Lock, CreditCard, Tag, CalendarDays, Dumbbell, Users, BarChart, Smartphone, ArrowUp } from 'lucide-vue-next'
  
  const features = [
    {
      title: "Gestión de Accesos",
      description: "Controla y supervisa la entrada al gimnasio con facilidad. Integración con varios sistemas de acceso para check-ins sin complicaciones.",
      icon: Lock,
      badge: "Seguridad"
    },
    {
      title: "Procesamiento de Pagos",
      description: "Gestión segura y eficiente de los pagos de los clientes. Soporte para múltiples métodos de pago y facturación automatizada.",
      icon: CreditCard,
      badge: "Finanzas"
    },
    {
      title: "Promociones y Descuentos",
      description: "Crea y gestiona ofertas promocionales. Aplica descuentos fácilmente para atraer nuevos miembros y retener a los actuales.",
      icon: Tag,
      badge: "Marketing"
    },
    {
      title: "Gestión de Suscripciones",
      description: "Planes de suscripción flexibles con renovaciones automáticas. Gestiona el estado de los miembros y envía recordatorios a tiempo.",
      icon: CalendarDays,
      badge: "Membresía"
    },
    {
      title: "Programación de Clases",
      description: "Crea y gestiona clases fácilmente. Permite a los miembros reservar sesiones en línea y realizar seguimiento de la asistencia.",
      icon: Dumbbell,
      badge: "Operaciones"
    },
    {
      title: "Gestión de Clientes",
      description: "Perfiles completos de los miembros con historial de entrenamiento, preferencias y registros de comunicación.",
      icon: Users,
      badge: "CRM"
    },
    {
      title: "Análisis de Rendimiento",
      description: "Obtén información sobre el rendimiento de tu gimnasio con informes detallados sobre membresías, ingresos y popularidad de clases.",
      icon: BarChart,
      badge: "Analíticas"
    },
    {
      title: "Integración con App Móvil",
      description: "Ofrece una app móvil de marca para que los miembros reserven clases, sigan su progreso y accedan a información del gimnasio en cualquier lugar.",
      icon: Smartphone,
      badge: "Móvil"
    },
    {
      title: "Predicion de Ingresos",
      description: "Predice, tus futuros ingresos, analizando las ganancias i perdidas de meses anteriors,.",
      icon: ArrowUp,
      badge: "Móvil"
    }
  ]
  </script>
  