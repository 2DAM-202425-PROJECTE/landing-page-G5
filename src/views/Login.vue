<template>
	<div class="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#5bc0be] via-gray-900 to-green-500 py-16 px-4 sm:px-6 lg:px-8">
		<div class="container" :class="{ 'right-panel-active': isRightPanelActive }">
			<div class="form-container sign-up-container">
			  <form @submit.prevent="handleSignUp">
				<h1 class="text-2xl font-bold mb-4">Crear Cuenta</h1>
				<div class="social-container">
				</div>
				<span class="my-2">o usa tu correo electrónico para registrarte</span>
				<input type="text" placeholder="Nombre" class="input" v-model="name" />
				<input type="email" placeholder="Correo electrónico" class="input" v-model="email" />
				<input type="password" placeholder="Contraseña" class="input" v-model="password" />
				<button class="button mt-4">Registrarse</button>
			  </form>
			</div>
			<div class="form-container sign-in-container">
			  <form @submit.prevent="handleSignIn">
				<h1 class="text-2xl font-bold mb-4">Iniciar Sesión</h1>
				<div class="social-container">
				</div>
				<span class="my-2">o usa tu cuenta</span>
				<input type="email" placeholder="Correo electrónico" class="input" v-model="email" />
				<input type="password" placeholder="Contraseña" class="input" v-model="password" />
				<a href="#" class="my-2">¿Olvidaste tu contraseña?</a>
				<button class="button mt-4">Iniciar Sesión</button>
			  </form>
			</div>
			<div class="overlay-container">
			  <div class="overlay">
				<div class="overlay-panel overlay-left">
				  <h1 class="text-2xl font-bold mb-4">¡Bienvenido de Nuevo!</h1>
				  <p>Para mantenerte conectado, inicia sesión con tu información personal</p>
				  <button class="ghost button mt-4" @click="togglePanel">Iniciar Sesión</button>
				</div>
				<div class="overlay-panel overlay-right">
				  <h1 class="text-2xl font-bold mb-4">¡Hola, Amigo!</h1>
				  <p>Ingresa tus datos personales y comienza tu viaje con nosotros</p>
				  <button class="ghost button mt-4" @click="togglePanel">Registrarse</button>
				</div>
			  </div>
			</div>
			<!-- Alternar en móvil -->
			<div class="mobile-toggle">
			  <button @click="togglePanel" class="button w-full">
				{{ isRightPanelActive ? 'Cambiar a Iniciar Sesión' : 'Cambiar a Registrarse' }}
			  </button>
			</div>
		  </div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isRightPanelActive = ref(false);
const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');

const togglePanel = () => {
	isRightPanelActive.value = !isRightPanelActive.value;
};

// Función para manejar el registro
const handleSignUp = () => {
	// Aquí puedes manejar el registro (ejemplo: API)
	console.log('Registro exitoso:', { name: name.value, email: email.value });
	// Redirigir a la página principal
	router.push('/?success=signup');
};

// Función para manejar el inicio de sesión
const handleSignIn = () => {
	// Aquí puedes manejar el inicio de sesión (ejemplo: API)
	console.log('Inicio de sesión exitoso:', { email: email.value });
	// Redirigir a la página principal
	router.push('/?success=signin');
};
</script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
  
  * {
	box-sizing: border-box;
  }
  
  .container {
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 100%;
	max-width: 100%;
	min-height: 480px;
	font-family: 'Montserrat', sans-serif;
  }
  
  .form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
  }
  
  .sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
  }
  
  .sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
  }
  
  .overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
  }
  
  .overlay {
	background: #FF416C;
	background: linear-gradient(to right, #6F73D2, #5BC0BE);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
  }
  
  .overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
  }
  
  .overlay-left {
	transform: translateX(-20%);
  }
  
  .overlay-right {
	right: 0;
	transform: translateX(0);
  }
  
  button {
	border-radius: 20px;
	border: 1px solid #6F73D2;
	background-color: #6F73D2;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
  }
  
  button:active {
	transform: scale(0.95);
  }
  
  button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
  }
  
  form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
  }
  
  input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
  }
  
  .social-container {
	margin: 20px 0;
  }
  
  .social-container a {
	border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
  }
  
  .mobile-toggle {
	display: none;
  }
  
  @media (min-width: 768px) {
	.container {
	  width: 768px;
	}
  
	.container.right-panel-active .sign-in-container {
	  transform: translateX(100%);
	}
  
	.container.right-panel-active .sign-up-container {
	  transform: translateX(100%);
	  opacity: 1;
	  z-index: 5;
	  animation: show 0.6s;
	}
  
	.container.right-panel-active .overlay-container {
	  transform: translateX(-100%);
	}
  
	.container.right-panel-active .overlay {
	  transform: translateX(50%);
	}
  
	.container.right-panel-active .overlay-left {
	  transform: translateX(0);
	}
  
	.container.right-panel-active .overlay-right {
	  transform: translateX(20%);
	}
  }
  
  @media (max-width: 767px) {
	.container {
	  min-height: auto;
	}
  
	.form-container {
	  position: relative;
	  width: 100%;
	  height: auto;
	  transition: none;
	}
  
	.sign-in-container, .sign-up-container {
	  opacity: 1;
	  z-index: 1;
	}
  
	.overlay-container {
	  display: none;
	}
  
	.mobile-toggle {
	  display: block;
	  padding: 20px;
	}
  
	.sign-up-container {
	  display: none;
	}
  
	.container.right-panel-active .sign-in-container {
	  display: none;
	}
  
	.container.right-panel-active .sign-up-container {
	  display: block;
	}
  }
  
  @keyframes show {
	0%, 49.99% {
	  opacity: 0;
	  z-index: 1;
	}
	
	50%, 100% {
	  opacity: 1;
	  z-index: 5;
	}
  }

  @keyframes gradient {
	0% {
	  background-position: 0% 50%;
	}
	50% {
	  background-position: 100% 50%;
	}
	100% {
	  background-position: 0% 50%;
	}
  }
  
  .bg-gradient-to-br {
	background-size: 200% 200%;
	animation: gradient 15s ease infinite;
  }
  </style>