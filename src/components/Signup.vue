<template>
  <section>
    <h1>Signup</h1>

    <v-container>
      <v-layout align-center>
        <v-flex xs12 lg8>
          <v-form ref="form" v-model="valid">
            <v-text-field
              label="Name"
              v-model="name"
              required
              autofocus
            ></v-text-field>

            <v-text-field
              label="Email"
              v-model="email"
              required
              type="email"
            ></v-text-field>

            <v-text-field
              label="Age"
              v-model.number="age"
              required
              type="number"
              max="150"
              hint="You must be at least 18 years old"
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

            <v-text-field
              label="Repeat password"
              v-model="repeatPassword"
              required
              type="password"
              :append-icon="e2 ? 'visibility' : 'visibility_off'"
              :append-icon-cb=" () => (e2 = !e2)"
              :type="e2 ? 'password' : 'text'"
              counter
            ></v-text-field>

            <v-checkbox
              label="Do you agree with our fancy rules and conditions?"
              v-model="agreement"
              required
            ></v-checkbox>

            <v-btn @click="submit" :disabled="!valid">Submit</v-btn>

            <v-btn @click="clear">Clear</v-btn>

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
    name: '',
    email: '',
    age: '',
    password: '',
    repeatPassword: '',
    agreement: false,
    // Control visibility of password in the password inputs
    e1: true,
    e2: true,
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // console.log('valid!');
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>
