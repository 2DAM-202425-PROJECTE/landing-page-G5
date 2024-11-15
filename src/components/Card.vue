<template>
    <v-card
      class="mx-auto 2xl:w-[500px] md:w-[370px] "
      max-width="500"
      color="#0D1917"
    >
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card>
              <v-img
                :src="card.src"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="130px"
                cover
              >
                <v-card-title class="text-white" v-text="card.title"></v-card-title>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </template>
  <script>
    export default {
      name: 'Card',
      data: () => ({
        cards: [
          { title: 'Gestion de clientes', src: 'https://www.origym.ie/wp-content/uploads/2023/02/Career-Change-to-a-Personal-Trainer.webp', flex: 12 },
          { title: 'Organiza tus clases', src: 'https://cienciasdeportivas.com/wp-content/uploads/clase-de-aerobic.jpg', flex: 6 },
          { title: 'Administra', src: 'https://www.muypymes.com/wp-content/uploads/2018/05/cuentasanuales-infocif.jpg', flex: 6 },
        ],
      }),
    }
  </script>