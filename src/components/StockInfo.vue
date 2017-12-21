<template>
  <section class="stock">
    <header>{{stock.name}} ( <span>Price: {{ stock.price | currency }}</span> <span v-if="stock.quantity != null">| Quantity: {{stock.quantity}}</span>)</header>
    <div>
      <input type="number" v-model.number="quantityToOperate" @keydown.enter="buy" min="0" :max="max" :disabled="max === 0">
      <button class="btn btn-primary" @click="buy" :disabled="!valid">{{this.sell ? 'Sell' : 'Buy'}}</button>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import {
  BUY_STOCK,
  SELL_STOCK,
} from '../store/actionTypes';

export default {
  props: {
    stock: {
      type: Object,
    },
    max: {
      type: Number,
    },

    sell: {
      type: Boolean,
      value: false,
    },
  },
  data: () => ({
    quantityToOperate: 0,
  }),
  computed: {
    valid() {
      return this.quantityToOperate > 0;
    },
  },
  watch: {
    max(newValue) {
      if (this.quantityToOperate > newValue) {
        this.quantityToOperate = newValue;
      }
    },
  },
  methods: {
    buy() {
      if (this.quantityToOperate > this.max) {
        return;
      }

      const action = (!this.sell
        ? this.buyStock
        : this.sellStock
      ).bind(this);

      action({
        quantity: this.quantityToOperate,
        name: this.stock.name,
        price: this.stock.price,
      });

      this.quantityToOperate = 0;
    },
    ...mapActions({
      buyStock: BUY_STOCK,
      sellStock: SELL_STOCK,
    }),
  },
};
</script>

<style scoped>
section {
  display: inline-block;
  flex: 1;
  max-width: 300px;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex-basis: 250px;
}

header {
  padding: 8px 16px;
  background: #ccc;
  font-weight: bold;
}

header span {
  font-size: smaller;
}

div {
  padding: 16px;
}

input {
  padding: 4px 8px;
}

input[disabled] {
  background: #eee;
  border: 1px solid #ccc;
}

button {
  padding: 6px;
  border-radius: 0;
  border: 1px solid #999;
  font-weight: bold;
  background-color: #eee;
}

@media (max-width: 480px) {
    section {
      /* padding: 8px; */
      max-width: 480px;
    }
}
</style>


