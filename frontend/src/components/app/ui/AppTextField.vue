<template>
  <v-text-field
    v-bind="$attrs"
    hide-details="auto"
    v-on="$listeners"
    dense
  />
</template>

<script>
export default {};
</script>

<style>
.app-input {
  transform-origin: left;
  transform: scale(0.875);
}
</style>