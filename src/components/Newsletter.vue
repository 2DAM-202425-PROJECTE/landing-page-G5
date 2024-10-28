<template>
    <v-container class="pa-md-16 bg-gradient-to-t from-[#160921] relative to-black" fluid>
      <v-row align="center">
        <v-col
          cols="12"
          lg="6"
        >
          <v-responsive max-width="450">
            <h1 class="text-white font-weight-bold mb-4 text-h5 text-sm-h4">
              Subscribe to our newsletter.
            </h1>
  
            <p class="!text-white text-subtitle-2 text-medium-emphasis mb-6">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.
            </p>
  
            <v-text-field
              
              flat
              placeholder="Enter your email"
              rounded="lg"
              type="email"
              variant="solo-filled"
            >
              <template #append-inner>
                <v-btn
                  class="text-none"
                  color="primary"
                  text="Subscribe"
                  variant="flat"
                />
              </template>
            </v-text-field>
          </v-responsive>
        </v-col>
  
        <v-col
          v-for="item in newsletterItems"
          :key="item.title"
          cols="12"
          lg="3"
          md="6"
        >
          <div>
            <v-avatar
              class="mb-2"
              color="primary"
              :icon="item.icon"
              rounded
            />
  
            <p class="text-white text-body-2 font-weight-bold pb-1">
              {{ item.title }}
            </p>
  
            <p class="text-white text-caption">{{ item.subtitle }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
    const newsletterItems = [
      {
        title: 'Weekly articles',
        subtitle: 'Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis.',
        icon: 'mdi-calendar',
      },
      {
        title: 'No spam',
        subtitle: 'Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.',
        icon: 'mdi-email-off',
      },
    ]
  </script>
  