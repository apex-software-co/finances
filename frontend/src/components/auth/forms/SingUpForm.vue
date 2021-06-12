<template>
  <div>
    <v-row class="mt-6">
      <v-col md="12">
        <v-text-field
          color="primary"
          @keyup.enter.native="login"
          v-model="form.user_name"
          placeholder="Seu Nome"
          dark
        />
      </v-col>
    </v-row>
    
    <v-row class="mt-6">
      <v-col md="12">
        <v-text-field
          color="primary"
          @keyup.enter.native="login"
          v-model="form.company_name"
          placeholder="Nome da Sua Empresa"
          label="Nome da sua empresa"
          dark
        />
      </v-col>
    </v-row>

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
      <v-col md="6">
        <v-text-field
          color="primary"
          @keyup.enter.native="login"
          v-model="form.password"
          placeholder="Senha"
          dark
          :name="'password'"
        />
      </v-col>
      <v-col md="6">
        <v-text-field
          color="primary"
          @keyup.enter.native="login"
          v-model="form.confirm_password"
          placeholder="Confirme sua Senha"
          dark
          :name="'password'"
        />
      </v-col>
    </v-row>

    <v-row class="mt-10">
      <v-col class="text-center">
        <v-btn class="text-capitalize" @click="signup()" block color="primary">
          Criar Conta
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user_name : null,
        company_name : null,
        email: null,
        password: null,
        password_confirm: null,
      },
    };
  },

  methods: {
    signup() {
      //this.$auth.login(this.form);
      this.$http.store('app/signup', this.form).then(response => {

      })
    },
  },
};
</script>

<style>
</style>