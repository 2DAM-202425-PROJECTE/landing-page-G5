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
                alt="Imagen de fondo"
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
          { title: 'Gestion de clientes', src: 'https://assets.website-files.com/5bee2dee67d34caed2a30658/5bf358d54414ed3e8438857e_Personal%20Trainer%20copy.jpg', flex: 12 },
          { title: 'Organiza tus clases', src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTbaYLbtSPm-iAPCTCM61R73TlVyJsZMWaabOI_r4psT5tMkp3H', flex: 6 },
          { title: 'Administra', src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQjk945kQ5RaOurxuKVq9I3d0N_GS9l8IU3q4PpihpjjLStxKUh', flex: 6 },
        ],
      }),
    }
  </script>