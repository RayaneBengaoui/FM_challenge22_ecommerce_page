<template>
  <div class="menu-container">
    <transition name="component-fade" mode="out-in">
      <Cart v-if="isCartOpen"></Cart>
    </transition>
    <transition name="fade" mode="">
      <div
        v-if="isMenuOpen"
        class="dark-background"
        @click="onToggleMenu()"
      ></div>
    </transition>
    <nav>
      <div class="burger-menu-container">
        <img
          v-if="isMenuOpen"
          src="@/assets/icons/icon-close.svg"
          alt="close"
          @click="onToggleMenu()"
        />
        <img
          v-else
          src="@/assets/icons/icon-menu.svg"
          alt="burger-menu"
          @click="onToggleMenu()"
        />
      </div>
      <div class="list-menu-container" :class="{ 'menu-open': isMenuOpen }">
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="logo-container">
        <img src="@/assets/icons/logo.svg" alt="logo sneakers" />
      </div>
    </nav>
    <div class="user-container">
      <div class="cart-container" @click="onToggleCart()">
        <img src="@/assets/icons/icon-cart-dark.svg" alt="cart" />
      </div>
      <div class="avatar-container">
        <img src="@/assets/images/image-avatar.png" alt="profile avatar" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Cart from "@/components/Cart.vue";

export default {
  components: {
    Cart
  },

  computed: {
    ...mapState(["isMenuOpen", "isCartOpen"])
  },
  methods: {
    onToggleMenu() {
      this.$store.commit("toggleMenu", !this.isMenuOpen);
    },
    onToggleCart() {
      this.$store.commit("toggleCart", !this.isCartOpen);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles.scss";

.menu-container {
  max-height: 68px;
  position: relative;

  @include flex-mixin(row, space-between, center);
  padding: 1.25rem 1.5rem;
}

.dark-background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.8);
  z-index: 1;
}

nav {
  @include flex-mixin(row, space-between, center);
  align-items: center;

  .burger-menu-container {
    margin-right: 1rem;
    min-width: 1rem;
    cursor: pointer;
    z-index: 10;
  }

  .list-menu-container {
    background: white;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    height: 100vh;
    width: 70vw;
    transition: 0.4s ease-in-out;
    transform: translateX(-101%);
    padding: 0rem 1.5rem;
  }

  .menu-open {
    transform: translateX(0);
  }

  ul {
    list-style: none;
    margin-top: 6rem;
    z-index: 10;
  }

  li {
    font-size: 18px;
    font-weight: bold;
    color: #1d2026;
    padding-bottom: 1.25rem;
    cursor: pointer;
  }
}

.user-container {
  @include flex-mixin(row, space-between, center);

  img {
    cursor: pointer;
  }
  .avatar-container {
    margin-left: 1.5rem;
    img {
      max-width: 24px;
    }
  }
}

@media screen and (min-width: 400px) {
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
</style>
