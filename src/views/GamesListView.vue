<template lang="pug">
  section
    v-container(class="text-xs-center")
      h1(class="display-2") Juegos disponibles
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
