<template>
  <section>
    <h2>Stock Section</h2>

    <list-of-stocks :stocks="stocks" :funds="funds"></list-of-stocks>
  </section>
</template>

<script>
import ListOfStocks from './ListOfStocks';

export default {
  components: {
    ListOfStocks,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },

    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>


