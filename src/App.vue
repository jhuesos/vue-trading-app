<template>
  <div id="app">
    <v-app dark>
      <v-navigation-drawer clipped v-model="drawer" app>
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

      <v-footer app class="pa-3 body-2">
        <span>Funds available: {{ funds | currency }}</span>
        <v-spacer></v-spacer>
        <span>&copy; Jaime Vega</span>
      </v-footer>
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
    drawer: true,
  }),
  created() {
    if (this.$store.getters.portfolioId !== null) {
      this.$store.dispatch(LOAD_PORTFOLIO);
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
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
