<template>
  <div class="cart-component-container">
    <div class="cart-title-container">
      <h1>
        Cart
      </h1>
    </div>
    <div v-if="itemCart > 0" class="article-information-container">
      <div class="information-container">
        <div class="preview-container">
          <img
            src="@/assets/images/image-product-1-thumbnail.jpg"
            alt="preview"
          />
        </div>
        <div class="text-container">
          <p class="article-title">Fall Limited Edition Sneakers</p>
          <p class="article-price">
            {{ "$125.00 x " + itemCart }}
            <span class="calculated-price">{{ totalPrice }}</span>
          </p>
        </div>
        <div class="delete-container" @click="onDeleteItem($event)">
          <img src="@/assets/icons/icon-delete.svg" alt="trash" />
        </div>
      </div>
      <button>
        Checkout
      </button>
    </div>
    <div v-else class="empty-card-container">
      <p>Your card is empty</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["itemCart"]),

    totalPrice: function() {
      return 125 * this.itemCart + ".00";
    }
  },
  methods: {
    onDeleteItem(event) {
      event.stopPropagation();
      this.$store.commit("updateItemCart", 0);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles.scss";
.cart-component-container {
  position: absolute;
  min-height: 256px;
  overflow: hidden;
  top: 110%;
  left: 0;
  right: 0;
  width: 97%;
  margin: auto;
  background: white;
  z-index: 20;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.cart-title-container {
  padding-top: 1rem;
  padding-bottom: 2rem;
  padding-left: 1.5rem;
  border-bottom: 1px solid #e4e9f2;
  h1 {
    font-size: 16px;
    color: #1d2026;
    font-weight: bold;
  }
}

.article-information-container {
  padding: 1.5rem;

  .information-container {
    @include flex-mixin(row, space-between, center);
    margin-bottom: 1.5rem;

    .preview-container {
      width: 50px;
      height: 50px;
      border-radius: 4px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .calculated-price {
      font-size: 16px;
      color: #1d2026;
      font-weight: bold;
    }

    .delete-container {
      cursor: pointer;

      &:hover {
        img {
          transition: all 0.3s ease-in-out;
          filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg)
            saturate(600%) contrast(0.8);
        }
      }
    }
  }

  button {
    cursor: pointer;

    outline: none;
    border: none;
    padding: 1rem 0;
    background: #ff7e1b;
    color: white;
    width: 100%;
    border-radius: 10px;
    font-size: 16px;

    font-weight: bold;

    transition: ease-in-out all 0.3s;

    &:hover {
      background: #ffab6a;
    }
  }
}

.empty-card-container {
  width: 100%;
  height: 188px;
  @include flex-mixin(row, center, center);

  p {
    font-size: 16px;
    font-weight: bold;
  }
}

@media screen and (min-width: 900px) {
  .cart-component-container {
    top: 80%;
    left: unset;
    right: unset;
    width: 360px;
    transform: translateX(-50%);
  }
}
</style>
