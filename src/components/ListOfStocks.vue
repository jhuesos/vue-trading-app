<template>
    <v-container grid-list-lg fluid>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="stock in stocks" :key="stock.name" >
          <stock-info :stock="stock" :max="getMax(stock)" :sell="sell"></stock-info>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import StockInfo from './StockInfo';

export default {
  props: ['stocks', 'funds', 'sell'],
  components: {
    StockInfo,
  },
  methods: {
    getMax(stock) {
      if (stock.quantity != null) {
        return stock.quantity;
      }

      return Math.floor(this.funds / stock.price);
    },
  },
};
</script>


