<template>
  <section>
    <h1>Login</h1>

    <v-container grid-list-lg>
      <v-layout align-center wrap>
        <v-flex xs12 lg8>
          <v-form ref="form" v-model="valid">
            <v-text-field
              label="Email"
              v-model.trim="email"
              required
              type="email"
            ></v-text-field>

            <v-text-field
              label="Password"
              v-model.trim="password"
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

        <v-flex xs12 lg8>
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
import { LOG_IN } from '../store/actionTypes';

export default {
  data: () => ({
    valid: false,
    email: 'jhuesos@gmail.com',
    password: '123456',
    // Control visibility of password in the password inputs
    e1: true,
  }),

  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch(LOG_IN, { email: this.email, password: this.password })
          .then(() => this.$router.push({ name: 'Home' }));
      }
    },
  },
};
</script>
