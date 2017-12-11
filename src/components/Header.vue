<template>
  <div class="container">
    <nav>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/portfolio">Portfolio</router-link></li>
      <li><router-link to="/stocks">Stocks</router-link></li>
    </nav>

    <nav>
      <li><button @click="newDay" class="btn-link">End of Day</button></li>
      <li><button @click="loadPortfolio" class="btn-link">Load Portfolio</button></li>
      <li><button @click="savePortfolio" class="btn-link">Save Portfolio</button></li>
      <li>Funds: {{ funds | currency }}</li>
    </nav>
  </div>
</template>

<script>
import { NEXT_DAY, SAVE_PORTFOLIO, LOAD_PORTFOLIO } from '../store/mutationTypes';

export default {
  computed: {
    funds() {
      return this.$store.state.portfolio.funds;
    },
  },
  methods: {
    newDay() {
      this.$store.commit(NEXT_DAY);
    },
    savePortfolio() {
      this.$store.dispatch(SAVE_PORTFOLIO);
    },
    loadPortfolio() {
      this.$store.dispatch(LOAD_PORTFOLIO);
    },
  },
};
</script>


<style scoped>
.container {
  background-color: black;
  border-bottom: 2px solid #ccc;
  padding-bottom: 8px;
  display: flex;
  justify-content: space-between;
  padding: 16px 8px;
  color: white;
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

a:hover, .btn-link:hover {
  text-decoration: underline;
  cursor: pointer;
}

.btn-link {
  background-color: transparent;
  border:none;
}

li {
  display: inline-block;
  margin-right: 8px;
}
</style>
