<template>
  <section>
    <h2>Portfolio Section</h2>

    <div v-if="portfolio.length">
      <list-of-stocks :stocks="portfolio" sell></list-of-stocks>
    </div>
    <div v-else>
      Portfolio is Empty. <router-link to="/stocks">Buy something...</router-link>
    </div>

    <hr>
    <span class="total">Total value: {{total | currency}}</span>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import ListOfStocks from './ListOfStocks';

export default {
  components: {
    ListOfStocks,
  },
  computed: {
    ...mapGetters([
      'portfolio',
      'total',
    ]),
  },
};
</script>

<style scoped>
  hr {
    margin: 16px 0;
  }

  .total {
    font-weight: bold;
  }
</style>


