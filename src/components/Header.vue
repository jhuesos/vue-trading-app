<template>
  <div class="container">
    <nav>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/portfolio">Portfolio</router-link></li>
      <li><router-link to="/stocks">Stocks</router-link></li>
    </nav>

    <nav>
      <li><button @click="newDay" class="btn-link">End of Day</button></li>
      <li><button @click="loadPortfolio" class="btn-link" :disabled="!wasPortfolioSaved">Load Portfolio</button></li>
      <li><button @click="savePortfolio" class="btn-link">Save Portfolio</button></li>
      <li>Funds: {{ funds | currency }}</li>
    </nav>
  </div>
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


<style scoped>
.container {
  display: flex;
  padding: 16px 24px;
  justify-content: space-between;
  align-items: end;
  color: white;
  background-color: black;
  border-bottom: 2px solid #ccc;
}

a, .btn-link {
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
}

a.router-link-exact-active {
  text-decoration: underline;
}

a:hover, .btn-link:hover(:not([disabled])) {
  text-decoration: underline;
  cursor: pointer;
}

button[disabled] {
  text-decoration: line-through;
}

.btn-link {
  background-color: transparent;
  border:none;
  padding: 0;
}

li {
  display: inline-block;
  margin-right: 8px;
}

@media (max-width: 480px) {
    .container {
      flex-direction: row;
      padding: 8px 12px;
    }

    li {
      display: block;
    }
}
</style>
