<template>
  <v-app id="inspire">
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>

import AppLayout from '@/layouts/AppLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

export default {
  components : { AppLayout, AuthLayout },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");
/* @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"); */
/* @import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap"); */

* {
  /* font-family: "Quicksand", sans-serif !important; */
  /* font-family: "Source Sans Pro", sans-serif; */
  font-family: "Poppins", sans-serif;
}

/* @font-face {
  font-family: "Quicksand", sans-serif !important;
  src: url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap")
    format("opentype");
} */
</style>