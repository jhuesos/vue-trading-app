<template>
  <div id="app">
    <header>
      <nav>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><router-link to="/stocks">Stocks</router-link></li>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.router-link-active {
  font-weight: bold;
}
</style>
