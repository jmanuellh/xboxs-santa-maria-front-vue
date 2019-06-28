<template>
<div>
  <div
    v-for="game in games"
    :key="game.id"
  >
    {{ game.name }}
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  name: 'GamesList',
  data() {
    return {
      games: {},
    };
  },
  mounted() {
    this.getGames();
  },
  methods: {
    getGames() {
      this.message = 'Hol';
      axios.get('http://127.0.0.1:8000/api/juego')
        .then((response) => {
          this.games = response.data;
        })
        .catch(() => {
        });
    },
  },
});
</script>
