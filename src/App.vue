<template>
  <div id="app">
    <v-app dark>
      <v-navigation-drawer clipped fixed v-model="drawer" app>
        <app-navigation></app-navigation>
      </v-navigation-drawer>

      <app-header @toggle-drawer="drawer = !drawer"></app-header>

      <v-content>
        <v-container fluid>
        <transition name="fade">
          <router-view/>
        </transition>
        </v-container>
      </v-content>

      <v-footer app>FOOTER</v-footer>
    </v-app>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Header from './components/Header';
import { LOAD_PORTFOLIO } from './store/actionTypes';

export default {
  name: 'app',
  components: {
    appNavigation: Navigation,
    appHeader: Header,
  },
  data: () => ({
    drawer: false,
  }),
  created() {
    if (this.$store.getters.portfolioId !== null) {
      this.$store.dispatch(LOAD_PORTFOLIO);
    }
  },
};
</script>

<style>

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}
</style>
