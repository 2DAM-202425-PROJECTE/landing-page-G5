<!-- src/views/About.vue -->
<template>
    <div class="w-full justify-center flex">
  
      <section class="w-full dark:bg-gray-900" >
        <div class="mx-auto container px-6 py-10">
          <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Nuestro <span class="text-blue-500">Equipo Ejecutivo</span>
          </h1>
  
          <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Una solución de gestión de gimnasios basada en la nube diseñada para adaptarse a cualquier tipo de gimnasio
          </p>
  
          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
            <div class="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#5BC0BE] dark:border-gray-700 dark:hover:border-transparent">
              <div class="flex flex-col sm:-mx-4 sm:flex-row">
                <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Pietro Scorza">
  
                <div class="mt-4 sm:mx-4 sm:mt-0">
                  <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Pietro Scorza</h1>
                  <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Director de Diseño</p>
                </div>
              </div>
  
              <p class="mt-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-300">
                Con amplia experiencia en diseño innovador, Pietro lidera nuestro equipo creativo, garantizando soluciones visuales que reflejan identidad y funcionalidad en cada proyecto.
              </p>
  
              <div class="flex mt-4 -mx-2">
                <a href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Instagram">
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.75 2C5.507 2 3.5 4.007 3.5 6.25V17.75C3.5 19.993 5.507 22 7.75 22H16.25C18.493 22 20.5 19.993 20.5 17.75V6.25C20.5 4.007 18.493 2 16.25 2H7.75ZM12 15.5C9.243 15.5 7 13.257 7 10.5C7 7.743 9.243 5.5 12 5.5C14.757 5.5 17 7.743 17 10.5C17 13.257 14.757 15.5 12 15.5ZM18.5 6.25C18.5 6.804 18.154 7.25 17.75 7.25C17.346 7.25 17 6.804 17 6.25C17 5.696 17.346 5.25 17.75 5.25C18.154 5.25 18.5 5.696 18.5 6.25Z"></path>
                    </svg>
                </a>
                <a href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                        </path>
                    </svg>
                </a>
                </div>
            </div>

            <div class="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#5BC0BE] dark:border-gray-700 dark:hover:border-transparent">
                <div class="flex flex-col sm:-mx-4 sm:flex-row">

                    <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Marc Pallares Pino">

                    <div class="mt-4 sm:mx-4 sm:mt-0">
                        <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Marc Pallarès Pino</h1>

                        <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Desarrollador principal</p>
                    </div>
                </div>

                <p class="mt-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-300">
                    Marc lidera nuestro equipo de desarrollo, implementando soluciones tecnológicas innovadoras y asegurando un rendimiento óptimo en cada proyecto.
                </p>


                <div class="flex mt-4 -mx-2">
                    <a href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Instagram">
                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path 
                                d="M7.75 2C5.507 2 3.5 4.007 3.5 6.25V17.75C3.5 19.993 5.507 22 7.75 22H16.25C18.493 22 20.5 19.993 20.5 17.75V6.25C20.5 4.007 18.493 2 16.25 2H7.75ZM12 15.5C9.243 15.5 7 13.257 7 10.5C7 7.743 9.243 5.5 12 5.5C14.757 5.5 17 7.743 17 10.5C17 13.257 14.757 15.5 12 15.5ZM18.5 6.25C18.5 6.804 18.154 7.25 17.75 7.25C17.346 7.25 17 6.804 17 6.25C17 5.696 17.346 5.25 17.75 5.25C18.154 5.25 18.5 5.696 18.5 6.25Z">
                            </path>
                        </svg>
                    </a>

                    <a href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>

            <div class="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#5BC0BE] dark:border-gray-700 dark:hover:border-transparent">
                <div class="flex flex-col sm:-mx-4 sm:flex-row">
                    <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Nerehei Rodriguez">

                    <div class="mt-4 sm:mx-4 sm:mt-0">
                        <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Nerehei Rodriguez</h1>

                        <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Desarrollador full stack</p>
                    </div>
                </div>

                <p class="mt-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-300">
                    Nerehei es responsable del desarrollo completo de nuestras aplicaciones, integrando tanto el frontend como el backend para ofrecer experiencias robustas y fluidas.
                </p>


                <div class="flex mt-4 -mx-2">
                    <a href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Instagram">
                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path 
                                d="M7.75 2C5.507 2 3.5 4.007 3.5 6.25V17.75C3.5 19.993 5.507 22 7.75 22H16.25C18.493 22 20.5 19.993 20.5 17.75V6.25C20.5 4.007 18.493 2 16.25 2H7.75ZM12 15.5C9.243 15.5 7 13.257 7 10.5C7 7.743 9.243 5.5 12 5.5C14.757 5.5 17 7.743 17 10.5C17 13.257 14.757 15.5 12 15.5ZM18.5 6.25C18.5 6.804 18.154 7.25 17.75 7.25C17.346 7.25 17 6.804 17 6.25C17 5.696 17.346 5.25 17.75 5.25C18.154 5.25 18.5 5.696 18.5 6.25Z">
                            </path>
                        </svg>
                    </a>

                    <a href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>


            <div class="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#5BC0BE] dark:border-gray-700 dark:hover:border-transparent">
                <div class="flex flex-col sm:-mx-4 sm:flex-row">
                    <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Florian Heius">

                    <div class="mt-4 sm:mx-4 sm:mt-0">
                        <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Florian Heius</h1>

                        <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Diseñador principal</p>
                    </div>
                </div>

                <p class="mt-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-300">
                    Florian lidera nuestro enfoque visual, desarrollando diseños impactantes y funcionales que comunican claramente la identidad de cada proyecto.
                </p>


                <div class="flex mt-4 -mx-2">
                    <a href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Instagram">
                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path 
                                d="M7.75 2C5.507 2 3.5 4.007 3.5 6.25V17.75C3.5 19.993 5.507 22 7.75 22H16.25C18.493 22 20.5 19.993 20.5 17.75V6.25C20.5 4.007 18.493 2 16.25 2H7.75ZM12 15.5C9.243 15.5 7 13.257 7 10.5C7 7.743 9.243 5.5 12 5.5C14.757 5.5 17 7.743 17 10.5C17 13.257 14.757 15.5 12 15.5ZM18.5 6.25C18.5 6.804 18.154 7.25 17.75 7.25C17.346 7.25 17 6.804 17 6.25C17 5.696 17.346 5.25 17.75 5.25C18.154 5.25 18.5 5.696 18.5 6.25Z">
                            </path>
                        </svg>
                    </a>

                    <a href="https://github.com/fheius1" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

    </div>
  </template>
  
  <script>
  export default {
    name: 'SobreNosotros',
  };
  </script>
  