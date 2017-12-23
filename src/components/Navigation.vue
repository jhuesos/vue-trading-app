<template>
    <v-list>
      <v-list-tile to="/" exact>
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Dashboard</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile to="/portfolio">
        <v-list-tile-action>
          <v-icon>account_balance</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Porfolio</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile to="/stocks">
        <v-list-tile-action>
          <v-icon>assessment</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Stocks</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <!-- <div class="container">
    <nav>
      <li></li>
      <li><router-link to="/portfolio">Portfolio</router-link></li>
      <li><router-link to="/stocks">Stocks</router-link></li>
      <li><router-link to="/stocks">Signup</router-link></li>
    </nav>

    <nav>
      <li><button @click="newDay" class="btn-link">End of Day</button></li>
      <li><button @click="loadPortfolio" class="btn-link" :disabled="!wasPortfolioSaved">Load Portfolio</button></li>
      <li><button @click="savePortfolio" class="btn-link">Save Portfolio</button></li>
      <li>Funds: {{ funds | currency }}</li>
    </nav>
  </div> -->
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
  },
  methods: {
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
