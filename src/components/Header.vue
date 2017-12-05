<template>
    <nav>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/portfolio">Portfolio</router-link></li>
      <li><router-link to="/stocks">Stocks</router-link></li>
    </nav>
</template>

<style scoped>
  nav {
    border-bottom: 2px solid #ccc;
    padding-bottom: 8px;
  }

  li {
    display: inline-block;
    margin-right: 8px;
  }
</style>
