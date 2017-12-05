<template>
  <section>
    <h2>Trade or View your portfolio</h2>

    <p>You may Save &amp; Load your data</p>
    <p>Click on 'End of Day' to begin a new day</p>
    <hr>
    <h3>Your Funds: {{funds | currency}}</h3>
  </section>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.state.funds;
    },
  },
};
</script>
