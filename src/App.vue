<template>
  <div id="app">
    <app-header></app-header>

    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    appHeader: Header,
  },
  created() {
    if (store.state.portfolio.id !== null) {
      store.dispatch(LOAD_PORTFOLIO);
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  padding: 24px;
}

.router-link-active {
  font-weight: bold;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}
</style>
