<template>
  <section>
    <h1>Login</h1>

    <v-container fluid grid-list-lg>
      <v-layout align-center wrap>
        <v-flex xs12 lg8>
          <v-form ref="form" v-model="valid">
            <v-text-field
              label="Email"
              v-model="email"
              required
              type="email"
            ></v-text-field>

            <v-text-field
              label="Password"
              v-model="password"
              required
              type="password"
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
              counter
            ></v-text-field>

            <v-btn @click="login" :disabled="!valid">Login</v-btn>
          </v-form>
        </v-flex>

        <v-flex xs12>
          <hr>
        </v-flex>

        <v-flex xs12>
          Or if you don't already have an account, then <v-btn to="/signup">Signup</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    email: null,
    password: null,
    // Control visibility of password in the password inputs
    e1: true,
  }),

  methods: {
    login() {
      if (this.$refs.form.validate()) {
        console.log(this.email, this.password);
      }
    },
  },
};
</script>
