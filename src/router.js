import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'game-list',
      component() {
        return import(/* webpackChunkName: "about" */ './views/GamesListView.vue');
      },
    },
  ],
});
