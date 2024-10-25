<template>
  <div class="min-h-screen bg-0B132B flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
    <div class="container max-w-lg lg:max-w-3xl mx-auto bg-1C2541 rounded-lg shadow-lg p-8 md:p-12">
      <h1 class="text-4xl font-bold text-center text-5BC0BE mb-6">Información de Pago</h1>
      <p class="mt-2 text-center text-gray-300 mb-8">Completa la información para procesar tu pago de manera segura.</p>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Nombre Completo -->
          <div class="relative">
            <input
              type="text"
              id="name"
              v-model="formData.name"
              required
              class="w-full px-4 py-2 text-white bg-transparent border-b border-gray-600 focus:outline-none focus:border-5BC0BE placeholder-gray-400 transition"
              placeholder="Nombre Completo"
            />
            <span class="absolute top-0 left-0 mt-2 ml-[-6px] text-gray-400">👤</span>
          </div>
          <!-- Correo Electrónico -->
          <div class="relative">
            <input
              type="email"
              id="email"
              v-model="formData.email"
              required
              class="w-full px-4 py-2 text-white bg-transparent border-b border-gray-600 focus:outline-none focus:border-5BC0BE placeholder-gray-400 transition"
              placeholder="Correo Electrónico"
            />
            <span class="absolute top-0 left-0 mt-2 ml-[-6px] text-gray-400">📧</span>
          </div>
        </div>

        <!-- Dirección -->
        <div class="relative">
          <input
            type="text"
            id="address"
            v-model="formData.address"
            required
            class="w-full px-4 py-2 text-white bg-transparent border-b border-gray-600 focus:outline-none focus:border-5BC0BE placeholder-gray-400 transition"
            placeholder="Dirección"
          />
          <span class="absolute top-0 left-0 mt-2 ml-[-6px] text-gray-400">🏠</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Número de Tarjeta -->
          <div class="relative">
            <input
              type="text"
              id="cardNumber"
              v-model="formData.cardNumber"
              required
              class="w-full px-4 py-2 text-white bg-transparent border-b border-gray-600 focus:outline-none focus:border-5BC0BE placeholder-gray-400 transition"
              placeholder="Número de Tarjeta"
            />
            <span class="absolute top-0 left-0 mt-2 ml-[-6px] text-gray-400">💳</span>
          </div>
          <!-- Fecha de Expiración -->
          <div class="relative">
            <input
              type="text"
              id="expiryDate"
              v-model="formData.expiryDate"
              required
              class="w-full px-4 py-2 text-white bg-transparent border-b border-gray-600 focus:outline-none focus:border-5BC0BE placeholder-gray-400 transition"
              placeholder="MM/AA"
            />
            <span class="absolute top-0 left-0 mt-2 ml-[-6px] text-gray-400">📅</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- CVV -->
          <div class="relative">
            <input
              type="text"
              id="cvv"
              v-model="formData.cvv"
              required
              class="w-full px-4 py-2 text-white bg-transparent border-b border-gray-600 focus:outline-none focus:border-5BC0BE placeholder-gray-400 transition"
              placeholder="CVV"
            />
            <span class="absolute top-0 left-0 mt-2 ml-[-6px]e text-gray-400">🔒</span>
          </div>
          <!-- Tipo de Pago -->
          <div class="relative">
            <select
              id="paymentType"
              v-model="formData.paymentType"
              required
              class="w-full px-4 py-2 text-white bg-transparent border-b border-gray-600 focus:outline-none focus:border-5BC0BE placeholder-gray-400 transition"
            >
              <option value="credit">Tarjeta de Crédito</option>
              <option value="debit">Tarjeta de Débito</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="w-full px-4 py-2 text-white bg-5BC0BE rounded-md shadow-md hover:bg-6F73D2 transition duration-200"
          >
            Procesar Pago
          </button>
        </div>
      </form>

      <!-- Resumen de la Orden -->
      <div class="mt-8 p-4 bg-1C2541 rounded-md border border-gray-600 shadow-lg">
        <h2 class="text-lg font-semibold text-5BC0BE">Resumen de tu Pedido</h2>
        <p class="text-gray-300">Plan Seleccionado: <strong>{{ plan.split(" ")[0] }}</strong></p>
        <p class="text-gray-300">Precio: <strong>€{{ 
          plan.split(" ")[1]    
        }}</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    plan() {
      return this.$route.query.plan; // Obtén el plan de la query
    } 
  }, 
  name: 'Pago',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        address: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        paymentType: 'credit'
      },
      premiumPrice: 40, // Precio del plan premium
    };
  },
  
  methods: {
    handleSubmit() {
      // Aquí puedes manejar el envío del formulario
      console.log('Datos de pago:', this.formData);
      alert('Pago procesado con éxito!');
      // Resetear el formulario
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        address: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        paymentType: 'credit'
      };
    }
  }
};
</script>

<style scoped>
/* Estilos personalizados */
.bg-1C2541 {
  background-color: #1C2541;
}
.bg-0B132B {
  background-color: #0B132B;
}
.bg-6F73D2 {
  background-color: #6F73D2;
}
.bg-5BC0BE {
  background-color: #5BC0BE;
}
.text-1C2541 {
  color: #1C2541;
}
.text-5BC0BE {
  color: #5BC0BE;
}
</style>
