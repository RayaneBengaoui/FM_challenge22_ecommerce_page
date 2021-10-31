import { createStore } from "vuex";

export default createStore({
  state: {
    itemQuantity: 0,
    isMenuOpen: false,
    isCartOpen: false,
    windowWidth: 0
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
    },
    setWindowWidth(state, width) {
      state.windowWidth = width;
    }
  },
  actions: {},
  modules: {}
});
