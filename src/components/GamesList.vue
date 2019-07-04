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

<script>
import axios from 'axios';

export default {
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
      axios.get('http://127.0.0.1:8000/api/juego')
        .then((response) => {
          this.games = response.data;
        })
        .catch(() => {
        });
    },
  },
};
</script>
