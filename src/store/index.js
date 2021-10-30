import { createStore } from "vuex";

export default createStore({
  state: {
    itemQuantity: 0,
    isMenuOpen: false
  },
  mutations: {
    updateItemQuantity(state, newQuantity) {
      state.itemQuantity = newQuantity;
    },
    toggleMenu(state, openMenu) {
      state.isMenuOpen = openMenu;
    }
  },
  actions: {},
  modules: {}
});
