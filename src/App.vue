<template>
  <v-app>
    <v-content>
      <v-container>
        <GamesList />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import GamesList from './components/GamesList.vue';


export default {
  name: 'app',
  components: {
    GamesList,
  },
};
</script>

<style>
</style>
