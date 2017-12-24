<template>
  <v-card>
    <header>{{stock.name}} ( <span>Price: {{ stock.price | currency }}</span> <span v-if="stock.quantity != null">| Quantity: {{stock.quantity}}</span>)</header>
    <v-container fluid grid-list-md>
      <v-layout wrap align-center>
        <v-flex xs7>
          <v-text-field
            type="number"
            v-model.number="quantityToOperate"
            @keydown.enter="buy"
            min="0"
            :max="max"
            :disabled="max === 0"
          ></v-text-field>
        </v-flex>

        <v-flex xs5>
          <v-btn @click="buy" :disabled="!valid">{{this.sell ? 'Sell' : 'Buy'}}</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';
import { BUY_STOCK, SELL_STOCK } from '../store/actionTypes';

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
header {
  padding: 8px 8px;
  background: #000;
  font-weight: bold;
}
</style>


