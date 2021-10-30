import { createStore } from "vuex";

export default createStore({
  state: {
    itemQuantity: 0
  },
  mutations: {
    updateItemQuantity(state, newQuantity) {
      state.itemQuantity = newQuantity;
    }
  },
  actions: {},
  modules: {}
});
