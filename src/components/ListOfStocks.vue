<template>
    <div class="stocks-container">
      <stock-info v-for="stock in stocks" :key="stock.name" :stock="stock" :max="getMax(stock)" :sell="sell"></stock-info>
    </div>
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

<style scoped>
.stocks-container {
  display: flex;
  justify-content: start;
}

.stock {
  margin-right: 16px;
}
</style>

