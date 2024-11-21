<template>
    <section class="min-h-screen bg-cover" style="background-image: url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')">
      <div class="flex flex-col min-h-screen bg-black/60">
        <div class="container flex flex-col flex-1 px-6 py-12 mx-auto">
          <div class="flex-1 lg:flex lg:items-start lg:-mx-6">
            <div class="text-white lg:w-1/2 lg:mx-6 animate-fade-in"> <!-- Clase animate-fade-in -->
              <h1 class="text-3xl font-semibold capitalize lg:text-4xl font-poppins mt-12 mb-2">Formulari De Contacte</h1> <!-- Aumentado el margen superior -->
              
              <p class="max-w-xl mt-4 font-poppins"> <!-- Aumenta el marge superior -->
                Tens algun dubte, consulta o suggeriment? Ens encantaria escoltar-te. Omple el formulari amb les teves dades i el teu missatge, i un membre del nostre equip es posarà en contacte amb tu tan aviat com sigui possible per oferir-te l'ajuda que necessitis. Gràcies per confiar en nosaltres!
              </p>
  
              <!-- Secció de Reds Socials -->
            <div class="social-media mt-8">
            <h2 class="text-lg font-semibold font-poppins">Síguenos en redes sociales</h2>
            <div class="icons mt-12 flex justify-start space-x-4"> <!-- AQUI HO AJUSTO-->
            <a
            v-for="(link, index) in socialLinks"
            :key="index"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="icon transition-transform transform hover:scale-110"
            :title="link.name"
            >
            <div class="bg-[#5bc0be] p-4 rounded-full shadow-md hover:shadow-xl transition duration-300 ease-in-out flex items-center justify-center">
            <img :src="link.icon" :alt="link.name" class="w-8 h-8" />
        </div>
        </a>
    </div>
 </div>

              <!-- Fi de la Secció de Reds Socials -->
  
            </div>
  
            <div class="mt-8 lg:w-1/2 lg:mx-6">
              <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                <h1 class="text-xl font-medium text-black dark:text-gray-200">Contactanos</h1>
  
                <p class="mt-2 text-black dark:text-gray-400">
                 Tienes alguna pregunta?
                </p>
  
                <form   action="https://formspree.io/f/xyzypjer"
                method="POST" class="mt-6">
                  <div class="flex-1">
                    <label class="block mb-2 text-sm text-black dark:text-white">Nombre</label>
                    <input type="text" v-model="name" placeholder="Your name" class="block w-full px-5 py-3 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                  </div>
  
                  <div class="flex-1 mt-6">
                    <label class="block mb-2 text-sm text-black dark:text-gray-200">Email</label>
                    <input type="email" v-model="email" placeholder="example@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                  </div>
  
                  <div class="w-full mt-6">
                    <label class="block mb-2 text-sm text-black dark:text-gray-200">Mensaje</label>
                    <textarea name="message" class="block w-full h-32 px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-black focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                  </div>
  
                  <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#5bc0be] rounded-md hover:bg-[#34b9b7] focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
        socialLinks: [
          {
            name: "Facebook",
            url: "https://www.facebook.com/Gymmanager005",
            icon: "https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png",
          },
          {
            name: "Twitter",
            url: "https://x.com/gymmanager005",
            icon: "https://img.icons8.com/ios-filled/50/ffffff/twitter-squared.png",
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/gymmanager5/",
            icon: "https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png",
          },
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/gym-manager-88a537338/",
            icon: "https://img.icons8.com/ios-filled/50/ffffff/linkedin.png",
          },
        ],
      };
    },
    methods: {
      submitForm() {
        alert(`Message from ${this.name} has been sent!`);
        this.name = '';
        this.email = '';
        this.message = '';
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap'); /* Importar font Poppins */
  
  body {
    font-family: 'Poppins', sans-serif; /* Aplicar font Poppins */
  }
  
  .social-media {
    text-align: left; /* Cambiat a esquerra per alinear el text */
    color: white; /* Ajusta el color segon sigi necessari */
  }
  
  .icons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }
  
  .icon {
    transition: transform 0.3s, filter 0.3s;
  }
  
  .icon:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
  }
  
  /* fica mes efectes de sombra i transició */
  .icon:hover .bg {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.3s ease-in-out;
  }
  
  /* Animació de entrada */
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.8s ease forwards; /* afegir la animació al element */
  }
  </style>