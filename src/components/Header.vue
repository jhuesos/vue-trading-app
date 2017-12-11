<template>
  <div class="container">
    <nav>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/portfolio">Portfolio</router-link></li>
      <li><router-link to="/stocks">Stocks</router-link></li>
    </nav>

    <nav>
      <li><button @click="newDay" class="btn-link">New Day</button></li>
      <li>Funds: {{ funds | currency }}</li>
    </nav>
  </div>
</template>

<script>
import { NEXT_DAY } from '../store/mutation-types';

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
