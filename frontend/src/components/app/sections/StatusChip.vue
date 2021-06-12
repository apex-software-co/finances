<template>
  <v-chip small :color="statuses[value].color">{{
    statuses[value].text
  }}</v-chip>
</template>

<script>
export default {
  props: {
    value: {},
  },

  data: () => ({
    statuses: {
      1: {
        text: "Ativo",
        color: "primary",
      },
      0: {
        text: "Inativo",
        color: "disaled",
      },
    },
  }),
};
</script>

<style>
</style>