import { createStore } from "vuex";

export default createStore({
  state: {
    itemQuantity: 0,
    isMenuOpen: false,
    isCartOpen: false
  },
  mutations: {
    updateItemQuantity(state, newQuantity) {
      state.itemQuantity = newQuantity;
    },
    toggleMenu(state, openMenu) {
      state.isMenuOpen = openMenu;
      if (openMenu && state.isCartOpen) {
        state.isCartOpen = false;
      }
    },
    toggleCart(state, openCart) {
      state.isCartOpen = openCart;
    }
  },
  actions: {},
  modules: {}
});
