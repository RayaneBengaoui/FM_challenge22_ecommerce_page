<template>
  <div class="menu-container">
    <nav>
      <div class="burger-menu-container">
        <img src="@/assets/icons/icon-menu.svg" alt="burger-menu" />
      </div>
      <div class="list-menu-container"></div>
      <div class="logo-container">
        <img src="@/assets/icons/logo.svg" alt="logo sneakers" />
      </div>
    </nav>
    <div class="user-container">
      <div class="cart-container">
        <img src="@/assets/icons/icon-cart.svg" alt="cart" />
      </div>
      <div class="avatar-container">
        <img src="@/assets/images/image-avatar.png" alt="profile avatar" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/styles.scss';

.menu-container {
  max-height: 68px;

  @include flex-mixin(row, space-between, center);
  padding: 1.25rem 1.5rem;
  /* background: lightblue; */
}

nav {
  /* background: lightcoral; */
  @include flex-mixin(row, space-between, center);
  align-items: center;

  .burger-menu-container {
    margin-right: 1rem;
  }
}

.user-container {
  @include flex-mixin(row, space-between, center);
  .avatar-container {
    margin-left: 1.5rem;
    img {
      max-width: 24px;
    }
  }
}

@media screen and (min-width: 400px) {
}
</style>
