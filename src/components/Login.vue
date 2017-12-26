<template>
  <section>
    <h1>Login</h1>

    <v-container>
      <v-layout align-center>
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
