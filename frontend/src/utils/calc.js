import { sum } from "lodash";

export default {

  round(value, decimals = 2) {
    return Number(Math.round(parseFloat(value) + 'e' + decimals) + 'e-' + decimals);
  },

  sum(arr, field) {
    return arr.reduce((sum, row) => sum + parseFloat(row[field]), 0);
  },

};