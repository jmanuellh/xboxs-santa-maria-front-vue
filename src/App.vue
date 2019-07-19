<template>
  <v-app>
    <Navigation />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/views/Navigation.vue';

export default {
  name: 'app',
  components: {
    Navigation,
  },
};
</script>

<style>
</style>
