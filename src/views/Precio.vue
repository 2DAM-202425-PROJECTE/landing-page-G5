<template>
  <div class="z-10 min-h-screen bg-0B132B flex flex-col items-center justify-center">
    <div class="container px-6 py-8 mx-auto">
      <h1 class="text-3xl font-semibold text-center text-white capitalize lg:text-4xl">Plan de precios</h1>
      <p class="max-w-2xl mx-auto mt-4 text-center text-gray-300">
        Elige el plan que mejor se adapte a tus necesidades. Cambia entre mensual y anual para ver los precios actualizados.
      </p>

      <!-- Toggle Monthly/Yearly -->
      <div class="flex justify-center mt-6">
        <button
          id="toggle-monthly"
          ref="toggleMonthly"
          :class="{
            'bg-6F73D2 text-white shadow-lg transform transition duration-200 scale-105': isMonthly,
            'bg-gray-200 text-1C2541 shadow transition duration-200 hover:bg-5BC0BE': !isMonthly
          }"
          class="mx-2 px-6 py-2 rounded-md focus:outline-none"
          @click="showMonthlyPrices"
        >
          Mensual
        </button>
        <button
          id="toggle-yearly"
          ref="toggleYearly"
          :class="{
            'bg-6F73D2 text-white shadow-lg transform transition duration-200 scale-105': !isMonthly,
            'bg-gray-200 text-1C2541 shadow transition duration-200 hover:bg-5BC0BE': isMonthly
          }"
          class="mx-2 px-6 py-2 rounded-md focus:outline-none"
          @click="showYearlyPrices"
        >
          Anual
        </button>
      </div>

      <!-- Pricing Plans -->
      <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
        <!-- Free Plan -->
        <div class="w-full p-8 space-y-8 text-center border border-5BC0BE rounded-lg shadow-lg bg-1C2541 text-white transition-transform transform hover:scale-105">
          <img src="/src/assets/icons/etiquetagratuita.png" alt="Gratuito" class="mx-auto w-16 h-16 mb-4" />
          <p class="font-medium uppercase text-5BC0BE">Gratuito</p>
          <h2 class="text-4xl font-semibold uppercase">€0</h2>
          <p class="font-medium">Ilimitado</p>
          <ul class="text-left">
            <li>✔ Acceso limitado a funcionalidades básicas</li>
            <li>✖ Soporte técnico</li>
            <li>✖ Funciones avanzadas</li>
          </ul>
          <button @click="pagar('Gratuito', 0)" class="w-full px-4 py-2 mt-10 tracking-wide text-1C2541 capitalize bg-5BC0BE rounded-md hover:bg-6F73D2 focus:outline-none transform transition duration-200 hover:scale-105">
            Empezar
          </button>
        </div>

        <!-- Premium Plan -->
        <div class="shadow-xl shadow-black relative top-[-15px] w-full p-8 space-y-8 text-center border border-5BC0BE rounded-lg shadow-lg bg-6F73D2 text-white transition-transform transform hover:scale-105">
          <img src="/src/assets/icons/calidad.png" alt="Premium" class="mx-auto w-16 h-16 mb-4" />
          <p class="font-medium uppercase">Premium</p>
          <h2 class="text-5xl font-bold uppercase">
            <span v-if="isMonthly">€{{ premiumMonthlyPrice }}</span>
            <span v-else>€{{ premiumYearlyPrice }}</span>
          </h2>
          <p class="font-medium">{{ isMonthly ? 'Por mes' : 'Por año' }}</p>
          <ul class="text-left">
            <li>✔ Acceso completo a todas las funcionalidades</li>
            <li>✔ Soporte técnico prioritario</li>
            <li>✖ Funciones avanzadas premium</li>
          </ul>
          <button @click="pagar('Premium', isMonthly ? premiumMonthlyPrice : premiumYearlyPrice)" class="w-full px-4 py-2 mt-10 tracking-wide text-6F73D2 capitalize bg-white rounded-md hover:bg-gray-200 focus:outline-none transform transition duration-200 hover:scale-105">
            Empezar
          </button>
        </div>

        <!-- Enterprise Plan -->
        <div class="w-full p-8 space-y-8 text-center border border-5BC0BE rounded-lg shadow-lg bg-1C2541 text-white transition-transform transform hover:scale-105">
          <img src="/src/assets/icons/enterprise.png" alt="Enterprise" class="mx-auto w-16 h-16 mb-4" />
          <p class="font-medium uppercase text-5BC0BE">Enterprise</p>
          <h2 class="text-4xl font-semibold uppercase">
            <span v-if="isMonthly">€{{ enterpriseMonthlyPrice }}</span>
            <span v-else>€{{ enterpriseYearlyPrice }}</span>
          </h2>
          <p class="font-medium">{{ isMonthly ? 'Por mes' : 'Por año' }}</p>
          <ul class="text-left">
            <li>✔ Acceso a todas las funciones premium</li>
            <li>✔ Soporte técnico 24/7</li>
            <li>✔ Consultoría personalizada</li>
          </ul>
          <button @click="pagar('Enterprise', isMonthly ? enterpriseMonthlyPrice : enterpriseYearlyPrice)" class="w-full px-4 py-2 mt-10 tracking-wide text-1C2541 capitalize bg-5BC0BE rounded-md hover:bg-6F73D2 focus:outline-none transform transition duration-200 hover:scale-105">
            Empezar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Precio',
  data() {
    return {
      isMonthly: true,
      premiumMonthlyPrice: 40,
      enterpriseMonthlyPrice: 100,
    };
  },
  computed: {
    premiumYearlyPrice() {
      return this.premiumMonthlyPrice * 11;
    },
    enterpriseYearlyPrice() {
      return this.enterpriseMonthlyPrice * 11;
    }
  },
  methods: {
    pagar(plan, price) {
      const planString = `${plan} ${price}`; 
      this.$router.push({ name: 'pago', query: { plan: planString } }); 
    },
    showMonthlyPrices() {
      this.isMonthly = true;
    },
    showYearlyPrices() {
      this.isMonthly = false;
    }
  }
};
</script>

<style scoped>
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
