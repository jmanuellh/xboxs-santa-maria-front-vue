<template lang="pug">
  nav
    v-navigation-drawer(
      fixed
      clipped
      v-model="drawer"
      app
    )
      v-divider
      v-list(
        dense
        class="pt-0"
      )
        v-list-tile(
          v-for="item in items"
          :key="item.title"
          @click=""
        )
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content
            v-list-tile-title(class="subheading") {{ item.title }}
    v-toolbar(
      dense
      fixed
      clipped-left
      app
    )
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      v-toolbar-title Xboxs Santa Maria
</template>

<script>
export default {
  name: 'GamesListView',
  data() {
    return {
      items: [
        { title: 'Juegos disponibles', icon: 'fab fa-xbox' },
      ],
      drawer: Boolean,
    };
  },
};
</script>
