<template>
  <div>
    <template v-if="selectedValue">
      <app-text-field
        :label="label"
        :value="selectedValue.name"
        readonly
        @click="open()"
        prepend-inner-icon="mdi-magnify"
        @keypress="open()"
      />
    </template>
    <template v-else>
      <div id="acc" @click.stop="open()">
        <app-text-field
          :label="label"
          readonly
          @click="open()"
          prepend-inner-icon="mdi-magnify"
        />
      </div>
    </template>

    <v-dialog
      v-model="dialog"
      max-width="600px"
      scrollable
      :fullscreen="$vuetify.breakpoint.xsOnly"
    >
      <v-card>
        <v-card-title>
          <div class="d-flex justify-space-between" style="width: 100%">
            <div>
              <span>Selecionar {{ label }}</span>
            </div>
          </div>
        </v-card-title>
        <v-card-subtitle>
          <v-text-field
            :loading="isLoading"
            class="mt-4"
            v-model="searchForm.searchText"
            autofocus
            solo
            flat
            background-color="grey lighten-4"
            prepend-inner-icon="mdi-magnify"
            placeholder="Pesquisar..."
            hide-details
            v-debounce:300ms="search"
          />
        </v-card-subtitle>
        <v-card-text>
          <v-list>
            <template v-for="(row, index) in searchResults.data">
              <v-list-item :key="index" @click="setSelectedValue(row)">
                <v-list-item-content>
                  <v-list-item-title>{{ getItemText(row) }} </v-list-item-title>
                  <!-- <v-list-item-title v-text="row.name"></v-list-item-title>

                  <v-list-item-title v-text="row.code"></v-list-item-title> -->
                </v-list-item-content>
                <v-list-item-icon>
                </v-list-item-icon>
              </v-list-item>
              <v-divider :key="'div' + index" />
            </template>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="text-capitalize" text @click="dialog = false"
            >Voltar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {

  props: {
    label : {},
    value: {},
    url : {},
    itemText : {},
    resultParser : {}
  },

  data: () => ({
    searchResults: {
      data: [],
    },

    selectedValue: {
      name: null,
    },

    dialog: false,

    isLoading: false,

    searchForm: {
      searchText: null,
    },
  }),

  watch: {
    value() {
      this.selectedValue = this.value;
    },
  },

  created() {
    this.selectedValue = this.value;
  },

  methods: {
    async open() {
      await this.search();

      this.dialog = true;
    },

    async search() {
      this.isLoading = true;

      await this.$http
        .index(this.url, this.searchForm)
        .then((response) => {
          this.searchResults = response;
        });

      this.isLoading = false;
    },

    getItemText(row) {
      if (typeof this.itemText == 'function') {
        return  this.itemText(row)
      } else {
        return row[this.itemText]
      }
    },

    setSelectedValue(selectedValue) {
      this.selectedValue = selectedValue;

      this.$emit("input", selectedValue);

      this.dialog = false;
    },

    clear() {
      this.selectedValue = null;
    },
  },
};
</script>
