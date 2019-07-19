<template lang="pug">
  section
    v-container
      h1(class="display-2 text-xs-center") Juegos disponibles
    GamesList
</template>

<script>
import GamesList from '@/components/GamesList.vue';

export default {
  name: 'GamesListView',
  components: {
    GamesList,
  },
};
</script>
