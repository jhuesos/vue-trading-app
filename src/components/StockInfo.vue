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
import { mapMutations } from 'vuex';
import {
  ADD_TO_PORTFOLIO,
  REMOVE_FROM_PORTFOLIO,
} from '../store/mutation-types';

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

      const mutation = (!this.sell
        ? this.addToPortfolio
        : this.removeFromPortfolio
      ).bind(this);

      mutation({
        quantity: this.quantityToOperate,
        name: this.stock.name,
        price: this.stock.price,
      });

      this.quantityToOperate = 0;
    },
    ...mapMutations({
      addToPortfolio: ADD_TO_PORTFOLIO,
      removeFromPortfolio: REMOVE_FROM_PORTFOLIO,
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
</style>


