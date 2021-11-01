<template>
  <div class="menu-container">
    <transition name="fade" mode="">
      <div
        v-if="isMenuOpen && isMobile"
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
      <div class="logo-container">
        <img src="@/assets/icons/logo.svg" alt="logo sneakers" />
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
    </nav>
    <div class="user-container">
      <div class="cart-container" @click="onToggleCart()">
        <img src="@/assets/icons/icon-cart-dark.svg" alt="cart" />
        <div class="cart-item-number-container">
          <p>{{ itemCart }}</p>
        </div>
      </div>
      <transition name="component-fade" mode="out-in">
        <Cart v-if="isCartOpen"></Cart>
      </transition>
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
    ...mapState(["isMenuOpen", "isCartOpen", "windowWidth", "itemCart"]),
    isMobile() {
      return this.windowWidth < 900;
    }
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
  transition: all 0.4s ease-in-out;
  border-bottom: solid 0px #e4e9f2;

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

    transform: translateX(-101%);
    padding: 0rem 1.5rem;
    opacity: 0;
  }

  .menu-open {
    transition: 0.4s all ease-in-out;
    transform: translateX(0);
    opacity: 1;
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
    transition: color 0.3s ease;

    &:hover {
      color: #ff7e1b;
    }
  }
}

.cart-container {
  position: relative;
}

.cart-item-number-container {
  pointer-events: none;
  position: absolute;
  width: 19px;
  height: 13px;
  background-color: #ff7e1b;
  top: -25%;
  right: -25%;
  border-radius: 6.5px;
  @include flex-mixin(row, center, center);

  p {
    font-size: 10px;
    color: white;
    font-weight: bold;
  }
}

.user-container {
  @include flex-mixin(row, space-between, center);

  img {
    cursor: pointer;
  }
  .avatar-container {
    transition: all 0.3s ease-in-out;
    margin-left: 1.5rem;
    border-radius: 50%;
    width: 33px;
    height: 33px;
    border: solid 2px transparent;
    overflow: hidden;
    img {
      max-width: 33px;
    }
    &:hover {
      border: solid 2px #ff7e1b;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  z-index: 90;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}

@media screen and (min-width: 900px) {
  .menu-container {
    min-height: 7rem;
    /* max-width: 1440px; */
    @include flex-mixin(row, space-between, center);
    padding: 1.25rem 4rem;
    border-bottom: solid 1px #e4e9f2;
  }

  nav {
    @include flex-mixin(row, space-between, center);
    align-items: center;

    .burger-menu-container {
      display: none;
    }

    .list-menu-container {
      background: unset;
      position: static;
      left: unset;
      top: unset;
      transition: unset;
      height: unset;
      width: unset;
      transform: unset;
      padding: unset;
      transition: 1s all ease-in-out;
      opacity: 1;
    }

    ul {
      margin-top: unset;
      @include flex-mixin(row, space-between, center);
      width: 397px;
      margin-left: 3.5rem;
    }

    li {
      font-size: 15px;
      font-weight: normal;
      color: #69707d;
      padding-bottom: unset;
      position: relative;
      /* 
      &:hover{
        border-bottom:solid 3px #FF7E1B 
      } */
    }

    li:after {
      background: none repeat scroll 0 0 transparent;
      bottom: -48px;

      content: "";
      display: block;
      height: 5px;
      left: 50%;
      position: absolute;
      background: #ff7e1b;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }

    li:hover:after {
      width: 100%;
      left: 0;
    }
  }

  .user-container {
    @include flex-mixin(row, space-between, center);

    img {
      cursor: pointer;
    }
    .avatar-container {
      margin-left: 3rem;

      width: 50px;
      height: 50px;
      img {
        max-width: 50px;
      }
    }
  }
}

@media screen and (min-width: 1440px) {
  .menu-container {
    min-height: 7rem;
    /* max-width: 1440px; */
    @include flex-mixin(row, space-between, center);
    padding: 1.25rem 3rem;
    border-bottom: solid 1px #e4e9f2;
  }
  nav {
    ul {
      margin-top: unset;
      @include flex-mixin(row, space-between, center);
      width: 300px;
      margin-left: 2rem;
    }

    li {
      font-size: 15px;
      font-weight: normal;
      color: #69707d;
      padding-bottom: unset;
    }
  }
}
@media screen and (min-width: 1400px) {
  .menu-container {
    min-height: 7rem;
    max-width: 1440px;
    margin: auto;
    @include flex-mixin(row, space-between, center);
    padding: 1.25rem 10.5rem;
  }
  nav {
    ul {
      margin-top: unset;
      @include flex-mixin(row, space-between, center);
      width: 397px;
      margin-left: 3.5rem;
    }

    li {
      font-size: 15px;
      font-weight: normal;
      color: #69707d;
      padding-bottom: unset;
    }
  }
}
</style>
