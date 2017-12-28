<template>
  <section>
    <h1>Signup</h1>

    <v-container grid-list-lg>
      <v-layout align-center wrap>
        <v-flex xs12 lg8>
          <v-form ref="form" v-model="valid">
            <v-text-field
              label="Name"
              v-model.trim="name"
              required
              autofocus
            ></v-text-field>

            <v-text-field
              label="Email"
              v-model.trim="email"
              required
              type="email"
            ></v-text-field>

            <v-text-field
              label="Age"
              v-model.trim.number="age"
              required
              type="number"
              max="150"
              hint="You must be at least 18 years old"
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

            <v-text-field
              label="Repeat password"
              v-model.trim="repeatPassword"
              required
              type="password"
              :append-icon="e2 ? 'visibility' : 'visibility_off'"
              :append-icon-cb=" () => (e2 = !e2)"
              :type="e2 ? 'password' : 'text'"
              counter
            ></v-text-field>

            <v-checkbox
              label="Do you agree with our fancy rules and conditions?"
              v-model.trim="agreement"
              required
            ></v-checkbox>

            <v-btn @click="submit" :disabled="!valid">Submit</v-btn>

            <v-btn @click="clear">Clear</v-btn>

          </v-form>
        </v-flex>

        <v-flex xs12 lg8>
          <hr>
        </v-flex>

        <v-flex xs12>
          Or if you already have an account, then <v-btn to="/login">Login</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import { SIGN_UP } from '../store/actionTypes';

export default {
  data: () => ({
    valid: false,
    name: 'jaime',
    email: 'jhuesos@gmail.com',
    age: 15,
    password: 123456,
    repeatPassword: 123456,
    agreement: true,
    // Control visibility of password in the password inputs
    e1: true,
    e2: true,
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch(SIGN_UP, {
          name: this.name,
          email: this.email,
          age: this.age,
          password: this.password,
          returnSecureToken: true,
        }).then(() => this.$router.push({ name: 'Home' }));
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>
