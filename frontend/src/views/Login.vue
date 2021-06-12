<template>
  <div class="d-flex" style="height: 100%">
    <div
      class="d-md-block d-none"
      style="background-color: #65e4ad; width: 60%"
    >
      <v-img
        height="100%"
        src="https://dev.gestaoclick.com.br/wp-content/uploads/background_Programa_Para_Loja_De_Roupas_11_46_08.jpg"
         gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      ></v-img>
      <!-- <div class="container h-100">
        <div class="row justify-center h-100">
          <div class="col-md-12 text-center">
            <div style="margin-top: 100px">
              <h4 class="mb-4 text-muted">
                Gerencie sua empresa de forma simples!
              </h4>
              <img
                class="mb-4"
                width="500px"
                src="https://erp.apexsoftware.com.br/img/apex_1.png"
              />
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <div class="flex-grow-1" style="background-color: #222e3f">
      <v-row class="row justify-center h-100">
        <v-col md="6">
          <div style="margin-top: 80px">
            <!-- <img
                class="mb-4"
                width="150px"
                src="https://erp.apexsoftware.com.br/img/logo_light.svg"
              /> -->
          </div>
          <h1 class="text-center mb-4 teal--text text--lighten-4">
            Bem vindo ;-) !
          </h1>

          
          <v-tabs v-model="tab" class="mt-8" fixed-tabs dark color="primary"  background-color="#222e3f">
            <v-tab class="text-capitalize">Login</v-tab>
            <v-tab class="text-capitalize">Criar conta</v-tab>
          </v-tabs>

          <login-form v-show="tab == 0"/>        
          <sing-up-form v-show="tab == 1"/>  
          
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>

import LoginForm from '@/components/auth/forms/LoginForm.vue';
import SingUpForm from '@/components/auth/forms/SingUpForm.vue';

export default {
  components: { LoginForm, SingUpForm },
  data() {
    return {
      tab : null,
      form: {
        username: null,
        password: null,
      },
    };
  },

  methods: {
    login() {
      this.$auth.login(this.form);
    },
  },
};
</script>

 