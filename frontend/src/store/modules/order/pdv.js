export default {

  namespaced: true,

  state: () => ({
    baseOrder: {
      operation: 1, // todo ??
      client: null,
      salesman: null, // todo ??
      order_products: [
        /**
         * product 
         * product_variant
         * description
         * quantity
         * discount
         */
      ],
      general_discount: 0,
      notes: null,
    },

    order: {
      operation: 1,
      client: null,
      salesman: null,
      order_products: [],
      general_discount: 0,
      notes: null,
    },

  }),

  getters: {
    // productsTotal: state => {
    //   return (
    //     Math.round(
    //       state.order.order_products.reduce(
    //         (total, row) => total + parseFloat(row.quantity * row.price),
    //         0
    //       ) * 100
    //     ) / 100
    //   );
    // },

    netTotal: state => {
      return (
        Math.round(
          (state.order.order_products.reduce(
            (total, row) => total + parseFloat(row.quantity * row.price),
            0
          )) *
          100
        ) / 100
      );
    },

    // netTotalOnTerms: state => {
    //   return (
    //     Math.round(
    //       (state.order.order_products.reduce(
    //         (total, row) => total + parseFloat(row.quantity * row.company_price_payment_on_terms),
    //         0
    //       ) -
    //         state.order.discount + state.order.addition + state.order.shipping) *
    //       100
    //     ) / 100
    //   );
    // },

    // netTotalImmediate: state => {
    //   return (
    //     Math.round(
    //       (state.order.order_products.reduce(
    //         (total, row) => total + parseFloat(row.quantity * row.company_price_payment_immediate),
    //         0
    //       ) -
    //         state.order.discount + state.order.addition + state.order.shipping) *
    //       100
    //     ) / 100
    //   );
    // },

    // orderBillsTotal: state => {
    //   return (
    //     Math.round(
    //       state.order.order_bills.reduce(
    //         (total, row) => total + parseFloat(row.value),
    //         0
    //       ) * 100
    //     ) / 100
    //   );
    // },
  },


  mutations: {


    addUnregisteredProduct(state, orderProduct) {
      state.order.order_products.push(orderProduct);
    },

    addProduct(state, { product, quantity }) {
      let orderProduct = {
        product_base_id: product.id,
        description: product.description,
        price: product.product_variant[0].product_company[0].company_price,
        company_price_payment_on_terms: product.product_variant[0].product_company[0].company_price_payment_on_terms,
        company_price_payment_immediate: product.product_variant[0].product_company[0].company_price_payment_immediate,
        quantity: quantity
      };

      state.order.order_products.push(orderProduct);
    },

    increaseProduct(state, { product, quantity }) {
      // let productIndex = state.order.order_products
      //   .map(row => row.product_base_id)
      //   .indexOf(product.id);

      // if (productIndex >= 0) {
      //   state.order.order_products[productIndex].quantity = parseFloat(state.order.order_products[productIndex].quantity) + parseFloat(quantity)
      // } else {
      //   this.commit("orderForm/addProduct", { product: product, quantity: quantity });
      // }
    },

    decreaseProduct(state, product) {
      // let productIndex = state.order.order_products
      //   .map(row => row.product_base_id)
      //   .indexOf(product.id);

      // if (productIndex < 0) {
      //   return;
      // }
      // if (state.order.order_products[productIndex].quantity > 1) {
      //   state.order.order_products[productIndex].quantity--;
      // } else {
      //   this.commit("pdv/removeProduct", product);
      // }
    },

    removeProduct(state, product) {
      // let productIndex = state.order.order_products
      //   .map(row => row.product_base_id)
      //   .indexOf(product.id);

      // state.order.order_products.splice(productIndex, 1);
    },

    removeLastProduct(state) {
      myarray[myarray.length - 1];

      state.order.order_products.splice(state.order.order_products.length - 1, 1);
    },

    updateProduct(state, { product, index }) {
      let newArr = JSON.parse(JSON.stringify(state.order.order_products));

      newArr[index] = product;

      state.order.order_products = newArr;
    },


    reset(state) {
      state.id = null
      state.order = JSON.parse(JSON.stringify(state.baseOrder));
    },

    setError(state, error) {
      state.error = error
    }

  },

  actions: {
    // async getOrder({ commit }, id) {
    //   const data = await this.dispatch("order/showOrder", id);

    //   commit("setOrder", data);
    // },

    // async getConditional({ commit }, id) {
    //   const data = await this.dispatch("conditional/showConditional", id);

    //   commit("setConditional", data);
    // },

    // storeOrder({ commit, state, getters }, saveAs) {

    //   if (getters.hasPriceOnTerms) {
    //     let orderProducts = JSON.parse(JSON.stringify(state.order.order_products));

    //     orderProducts = orderProducts.map((row) => {
    //       row.price = (getters.hasPaymentOnTerms) ? row.company_price_payment_on_terms : row.company_price_payment_immediate
    //       return row
    //     })

    //     commit("setOrderProducts", orderProducts);
    //   }

    //   let url = "order/order/" + saveAs;

    //   if (state.id) {
    //     url = url + "/" + state.id;
    //   }

    //   return new Promise((resolve, reject) => {
    //     this.$axios
    //       .$post(url, state.order)
    //       .then(response => {
    //         this.commit("orderForm/orderStored", response);
    //         resolve(response);
    //       })
    //       .catch(error => {
    //         reject(error);
    //       });
    //   });
    // },

    // storeConditional({ commit, state }, saveAs) {
    //   let url = "conditional/emit-conditional";

    //   return new Promise((resolve, reject) => {
    //     this.$axios
    //       .$post(url, state.order)
    //       .then(response => {
    //         //commit("orderStored");
    //         resolve(response);
    //       })
    //       .catch(error => {
    //         commit("app/setRequestError", error, { root: true });
    //         reject(error);
    //       });
    //   });
    // }
  }
}