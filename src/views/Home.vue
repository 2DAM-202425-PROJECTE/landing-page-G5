<template>

<div class="z-10 bg-gradient-to-b from-[#101212]  to-[#08201D]">
   <div class="hidden md:block absolute top-60 left-16 shadow-md shadow-black">
    <Card></Card>
    </div>
    <div class="hidden md:block absolute top-96 right-32 shadow-md shadow-black">
  <v-card
    class="mx-auto"
    subtitle="La #1 en digitalización de gimnasios"
    width="400"
    color="#5BC0BE"
  >
    <template v-slot:title>
      <span class="text-white font-weight-black">Bienvenido a GYM MANAGER</span>
    </template>

    <v-card-text class="bg-[#0D1917] text-white light pt-4">

        somos líderes en software de gestión para gimnasios, digitalizando tu negocio con soluciones personalizadas que optimizan la gestión de membresías, clases y rendimiento del equipo. Con nuestro enfoque innovador y un soporte excepcional, transformamos la manera en que administras tu gimnasio y te ayudamos a alcanzar el éxito en la era digital.    </v-card-text>
  </v-card>
    </div>
    <section class="relative lg:min-h-[300px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">

        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
            <div class="max-w-xl mx-auto text-center">
                <h1 class="text-4xl font-bold sm:text-6xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white"> Simplifica la administracion de tu gimansio </span>
                </h1>
                <p class="mt-5 text-base text-white sm:text-xl">Potencia tu gimnasio con una administración fácil y eficiente: todo lo que necesitas para gestionar clientes, clases y recursos en un solo lugar.</p>

                <router-link to="/precio" title="" class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-GMquaternary rounded-lg sm:mt-16 hover:bg-GMtertiary focus:bg-blue-700" role="button">
                    Ver planes  
                    <svg class="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </router-link>

              <div class="h-10"></div>
              
            </div>
            
        </div>
        
        
    </section>
</div>
<div class="overflow-hidden bg-gradient-to-t from-GMsecondary relative to-[#08201D] py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="lg:pr-8 lg:pt-4">

        <div class="lg:max-w-lg">
            
          <h2 class="text-base font-semibold leading-7 text-GMquaternary">Gestiona fácilmente tu gimnasio</h2>
          <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white sm:text-5xl">Todo en un solo lugar</p>
          <p class="mt-6 text-lg leading-8 text-white">Optimiza la gestión de tu gimnasio con un software diseñado para facilitar el manejo de clientes, clases, entrenadores y recursos, permitiéndote dedicar más tiempo a tus miembros.</p>
          <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
            <div class="relative pl-9">
              <dt class="inline font-semibold text-GMquaternary">
                <svg class="absolute left-1 top-1 h-5 w-5 text-GMquaternary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" />
                </svg>
                Registra y gestiona clientes.
              </dt>
              <dd class="inline">Con una base de datos centralizada, organiza y administra fácilmente la información de tus clientes, desde membresías hasta historial de asistencia.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-GMquaternary">
                <svg class="absolute left-1 top-1 h-5 w-5 text-GMquaternary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd" />
                </svg>
                Organiza clases y entrenadores.
              </dt>
              <dd class="inline">Gestiona horarios de clases, asigna entrenadores y permite a los clientes registrarse fácilmente desde una plataforma central.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-GMquaternary">
                <svg class="absolute left-1 top-1 h-5 w-5 text-GMquaternary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                  <path fill-rule="evenodd" d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z" clip-rule="evenodd" />
                </svg>
                Control de inventario y equipos.
              </dt>
              <dd class="inline">Monitorea el estado y disponibilidad de equipos en tiempo real, asegurando que tus recursos estén siempre listos para tus clientes.</dd>
            </div>
          </dl>
        </div>
      </div>
      <img src="https://webnova.com.ar/wp-content/uploads/2017/04/softnova2015.-1200x917.jpg" alt="Product screenshot" class="w-full md:w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[48rem] md:-ml-4 lg:-ml-0" width="2432" height="1442">
    </div>
    <div class="grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-4 sm:px-0">
                    <div class="flex items-center">
                        <svg class="flex-shrink-0" width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="">
                            <path
                                d="M25.1667 14.187H20.3333C17.6637 14.187 15.5 16.3507 15.5 19.0203V19.8258C15.5 19.8258 18.0174 20.6314 22.75 20.6314C27.4826 20.6314 30 19.8258 30 19.8258V19.0203C30 16.3507 27.8363 14.187 25.1667 14.187Z"
                                stroke="#28CC9D"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M18.7227 6.9369C18.7227 4.71276 20.5263 2.90912 22.7504 2.90912C24.9746 2.90912 26.7782 4.71276 26.7782 6.9369C26.7782 9.16104 24.9746 11.7702 22.7504 11.7702C20.5263 11.7702 18.7227 9.16104 18.7227 6.9369Z"
                                stroke="#28CC9D"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M13.2231 15.8512H7.11157C3.73595 15.8512 1 18.5871 1 21.9628V22.9814C1 22.9814 4.18311 24 10.1674 24C16.1516 24 19.3347 22.9814 19.3347 22.9814V21.9628C19.3347 18.5871 16.5988 15.8512 13.2231 15.8512Z"
                                fill="#0B1715"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M5.07422 6.68386C5.07422 3.87152 7.35485 1.59088 10.1672 1.59088C12.9795 1.59088 15.2602 3.87152 15.2602 6.68386C15.2602 9.4962 12.9795 12.7954 10.1672 12.7954C7.35485 12.7954 5.07422 9.4962 5.07422 6.68386Z"
                                fill="#0B1715"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <p class="ml-3 text-sm text-white">600 con nuestro software</p>
                    </div>

                    <div class="flex items-center">
                        <svg class="flex-shrink-0" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.8335 21.9166H3.16683C2.6143 21.9166 2.08439 21.6972 1.69369 21.3065C1.30299 20.9158 1.0835 20.3858 1.0835 19.8333V3.16665C1.0835 2.61411 1.30299 2.08421 1.69369 1.69351C2.08439 1.30281 2.6143 1.08331 3.16683 1.08331H19.8335C20.386 1.08331 20.9159 1.30281 21.3066 1.69351C21.6973 2.08421 21.9168 2.61411 21.9168 3.16665V19.8333C21.9168 20.3858 21.6973 20.9158 21.3066 21.3065C20.9159 21.6972 20.386 21.9166 19.8335 21.9166Z"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path d="M7 12.6667L9.25 15L16 8" stroke="#28CC9D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="ml-3 text-sm text-white">Elige un plan personalizado</p>
                    </div>

                    <div class="flex items-center">
                        <svg class="flex-shrink-0" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 11H3C1.89543 11 1 11.8954 1 13V21C1 22.1046 1.89543 23 3 23H17C18.1046 23 19 22.1046 19 21V13C19 11.8954 18.1046 11 17 11Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 19C11.1046 19 12 18.1046 12 17C12 15.8954 11.1046 15 10 15C8.89543 15 8 15.8954 8 17C8 18.1046 8.89543 19 10 19Z" stroke="#28CC9D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M15 7V6C15.0131 4.68724 14.5042 3.42303 13.5853 2.48539C12.6664 1.54776 11.4128 1.01346 10.1 1H10C8.68724 0.986939 7.42303 1.4958 6.48539 2.41469C5.54776 3.33357 5.01346 4.58724 5 5.9V7"
                                stroke="#28CC9D"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <p class="ml-3 text-sm text-white">pago seguro</p>
                    </div>
                    <div class="flex items-center pb-10">
                        <v-dialog max-width="500">
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn
                    class="text-white mt-10"
                    v-bind="activatorProps"
                    color="#5BC0BE"
                    text="Requisitos"
                    variant="elevated"
                    ></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                <v-card title="Requisitos">
                    <v-card-text>

    <ul>
        <li>Conexion a internet</li>
        <li>Ordenador</li>
        <li>Licencia</li>
    </ul>


        </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                    text="Cerrar"
                    @click="isActive.value = false"
                    ></v-btn>
                </v-card-actions>
                </v-card>
            </template>
            </v-dialog>
                    </div>
                </div>
  </div>
</div>
<FeatureSection></FeatureSection>
<div class="bg-gradient-to-t from-black pt-32 to-[#08201D] relative text-white py-20 px-6 rounded-lg shadow-lg text-center">
    <div>
        <h2 class="text-4xl font-extrabold mb-4">Resuelve tus dudas</h2>
    <p class="mb-6 text-lg md:text-xl">Encuentra respuestas a las preguntas más comunes</p>
    <router-link to="/preguntas-frecuentes" title="" class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-GMquaternary rounded-lg sm:mt-16 hover:bg-GMtertiary focus:bg-blue-700" role="button">
                    Preguntas frecuentes 
                    <svg class="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </router-link>
    </div>

</div>
<ContactSection></ContactSection>

<div class="bg-gradient-to-b from-black to-green-950  flex flex-col items-center justify-center w-full">
  
  <div class="w-full mt-20">
        <Newsletter></Newsletter>
    </div>
    <Comentarios></Comentarios>

</div>
<v-spacer class="h-100"></v-spacer>
</template>


<script setup>
import Card from '../components/Card.vue';
import Comentarios from '../components/Comentarios.vue';
import Newsletter from '../components/Newsletter.vue';
import ContactSection from '../components/incio/ContactSection.vue';
import FeatureSection from '../components/incio/FeatureSection.vue';
</script>
