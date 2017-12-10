<template>
  <div class="container">
    <nav>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/portfolio">Portfolio</router-link></li>
      <li><router-link to="/stocks">Stocks</router-link></li>
    </nav>

    <nav>
      <li>Funds: {{ funds | currency }}</li>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.state.portfolio.funds;
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

a {
  color: white;
  font-weight: bold;
  text-decoration: none;
}

a.router-link-exact-active {
  text-decoration: underline;
}

a:hover {
  text-decoration: underline;
}

li {
  display: inline-block;
  margin-right: 8px;
}
</style>
