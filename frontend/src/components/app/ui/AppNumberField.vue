<template>
  <v-text-field
    v-model="formatedNumber"
    ref="input"
    type="text"
    v-currency="options"
    v-bind="$attrs"
    @input="handleInput()"
    hide-details="auto"
    dense
    reverse
  />
</template>

<script>
import { setValue, parse } from "vue-currency-input";

export default {
  props: {
    defaultValue: {
      default: 0,
    },
    value: {},
    precision: {
      default: 2,
    },
    allowNegative: {
      default: false,
    },
  },

  data: () => ({
    formatedNumber: 0,
  }),

  computed: {
    options() {
      return {
        locale: "de-DE",
        distractionFree: false,
        "auto-decimal-mode": false,
        currency: null,
        precision: this.precision,
        allowNegative: this.allowNegative,
      };
    },
  },

  watch: {
    value(value) {
      setValue(this.$refs.input, value);
    },
  },

  mounted() {
    setValue(this.$refs.input, this.value);
  },

  methods: {
    handleInput() {
      let unformatedNumber = parse(this.formatedNumber, this.options);

      this.$emit("input", unformatedNumber);
    },
  },
};
</script>
