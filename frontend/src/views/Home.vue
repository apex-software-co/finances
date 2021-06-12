<template>
  <div>
    <v-row class="mt-4">
      <v-col cols="12">
        <app-number-field v-model="pv" label="Valor financiado"/>
      </v-col>
      <v-col cols="12">
        <app-number-field v-model="i" label="Taxa"/>
      </v-col>
      <v-col cols="12">
        <app-number-field v-model="n" label="N. Parcelas"/>
      </v-col>
      <!-- <v-col cols="12">
        <app-number-field label="Carência" hint="(opcional)"/>
      </v-col> -->
      <v-col cols="12">
        <v-btn class="text-capitalize" color="primary" block @click="calc()">Calcular</v-btn>
      </v-col>
      <br>
      {{ pmt }}
    </v-row>
  </div>
</template>

<script>
import AppNumberField from '../components/app/ui/AppNumberField.vue';
export default {
  data : () => ({
    i : 0,
    pv : 0,
    n : 1,
    pmt : 0
  }),

  methods : {
    calc () {
      this.pmt = this.calcPmt()
    },

    calcPmt() {
      return this.pv *[(1+this.i) ^ this.n * this.i] / [(1+this.i) ^ this.n - 1]
    }
  }

};
</script>

<style>
</style>
AppNumberField