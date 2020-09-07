import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  shoppingCart: [],
};

const getters = {
  shoppingCart: (state) => state.shoppingCart,
};

const mutations = {
  ADD_SHOPPINGCART(state, { product }) {
    console.log("añade 2");
    state.shoppingCart.push(product);
  },
  DELETE_SHOPPINGCART(state, { product }) {
    state.shoppingCart = state.shoppingCart.filter(
      (prod) => prod.name !== product.name
    );
  },
};

const actions = {
  addToCart({ commit, state }, { product }) {
    console.log("añade");
    commit("ADD_SHOPPINGCART", { product });
    window.localStorage.setItem(
      "shoppingCart",
      JSON.stringify(state.bookmarks)
    );
  },
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
export default store;
