<template>
  <div>
    <v-row class="mt-6">
      <v-col md="12">
        <v-text-field
          color="primary"
          @keyup.enter.native="login"
          v-model="form.email"
          placeholder="exemplo@exemplo.com"
          dark
        />
      </v-col>
    </v-row>

    <v-row class="mt-3">
      <v-col md="12">
        <v-text-field
          color="primary"
          @keyup.enter.native="login"
          v-model="form.password"
          placeholder="Sua Senha"
          dark
          :name="'password'"
        />
      </v-col>
    </v-row>

    <v-row class="mt-10">
      <v-col class="text-center">
        <v-btn class="text-capitalize" @click="login()" block color="primary">
          Login
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center teal--text text--lighten-3">
        Não possui conta? Experimente Gratis
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      form: {
        username: null,
        password: null,
      },
    };
  },

  methods: {
    login() {
      this.$auth.login(this.form).then(async (response) => {
        await this.$auth.getLoggedUser();
        this.$router.push("/");
      });
    },
  },
};
</script>

<style>
</style>