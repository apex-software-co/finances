<template>
  <v-text-field
    v-model="text"
    solo
    flat
    background-color="grey lighten-4"
    prepend-inner-icon="mdi-magnify"
    placeholder="Pesquisar..."
    v-debounce:300ms="handleInput"
    debounce-events="input"
    hide-details
    append-icon="mdi-filter-outline"
    :loading="isLoading"
  />
</template>

<script>
export default {
  props : {
    isLoading : {
      default : false
    }
  },

  data : () => ({
    text : null,
    emitedText : null,
  }),

  methods : {
    handleInput() {
      if (this.textRealyChanged()) {
        this.$emit('input', this.text)
      }

      this.emitedText = this.text
    },

    textRealyChanged() {
      return this.text != this.emitedText
    }
  }
};
</script>

<style>
</style>