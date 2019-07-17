<template lang="pug">
  v-container(class="text-xs-center")
    // Condicional para mostrar circulo de carga mientran se obtienen los datos
    v-progress-circular(
      v-if="!chargedGames"
      indeterminate
    )
    v-layout(
      v-else
      row
      wrap
    )
      v-flex(
        v-for="game in games"
        :key="game.id"
        xs12
        sm6
        md4
      )
        v-card
          v-card-text(primary-title)
            h3(class="headline") {{ game.name }}

</template>

<script>
import axios from 'axios';

export default {
  name: 'GamesList',
  data() {
    return {
      games: {},
      chargedGames: false,
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
          this.games = [{id:"0", name:"Datos no disponibles"}]
        })
        .then(() => {
          this.chargedGames = true;
        });
    },
  },
};
</script>
