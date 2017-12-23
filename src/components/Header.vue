<template>
  <v-toolbar app>
    <v-toolbar-side-icon @click.stop="iconClicked"></v-toolbar-side-icon>
    <v-toolbar-title>Stock App</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    iconClicked() {
      this.$emit('toggle-drawer');
    },
  },
};
</script>

