<template>
  <v-toolbar app clipped-left>
    <v-toolbar-side-icon
      @click.stop="iconClicked"
      class="hidden-lg-and-up"
      v-if="isUserLoggedIn"
    ></v-toolbar-side-icon>

    <v-toolbar-title>Stock App</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat @click="newDay" v-if="isUserLoggedIn">Next Day</v-btn>
    </v-toolbar-items>

    <v-menu bottom left offset-y v-if="isUserLoggedIn">
      <v-btn icon slot="activator" dark>
        <v-icon>more_vert</v-icon>
      </v-btn>

      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon x-large>account_circle</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Jaime Vega</v-list-tile-title>
            <v-list-tile-sub-title>Funds: {{ funds | currency }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-spacer></v-spacer>

      <v-list dense>
        <v-list-tile @click="savePortfolio">
          <v-list-tile-action>
            <v-icon>cloud_upload</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Save</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="loadPortfolio" :disabled="!wasPortfolioSaved">
          <v-list-tile-action>
            <v-icon>cloud_download</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Load</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import { NEXT_DAY, SAVE_PORTFOLIO, LOAD_PORTFOLIO } from '../store/actionTypes';

export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    wasPortfolioSaved() {
      return this.$store.getters.portfolioId !== null;
    },

    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
  },
  methods: {
    iconClicked() {
      this.$emit('toggle-drawer');
    },
    newDay() {
      this.$store.dispatch(NEXT_DAY);
    },
    /* eslint-disable no-alert */
    savePortfolio() {
      if (window.confirm('Do you really want to save?')) {
        this.$store.dispatch(SAVE_PORTFOLIO).then(() => window.alert('Saved!'));
      }
    },
    loadPortfolio() {
      if (!this.wasPortfolioSaved) {
        return;
      }

      if (window.confirm('Do you really want to load?')) {
        this.$store.dispatch(LOAD_PORTFOLIO).then(() => window.alert('Loaded!'));
      }
    },
    /* eslint-enable no-alert */
  },
};
</script>

