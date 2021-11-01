<template>
  <div
    class="description-container"
    :class="{ 'description-hide': isSliderOpen }"
  >
    <div class="text-container">
      <h3 class="company-title">SNEAKER COMPANY</h3>
      <h1 class="item-title">Fall Limited Edition Sneakers</h1>
      <p class="item-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
    </div>
    <div class="price-container">
      <div class="discount-price-container">
        <h1>$125.00</h1>
        <h3>50%</h3>
      </div>
      <div class="price-pre-discount-container">
        <p>$250.00</p>
      </div>
    </div>
    <div class="cart-modifier-container">
      <div class="item-quantity-container">
        <div class="minus-container" @click="onRemoveItem()">
          <img src="@/assets/icons/icon-minus.svg" alt="minus" />
        </div>
        <div class="quantity">
          <p>{{ itemQuantity }}</p>
        </div>
        <div class="plus-container" @click="onAddItem()">
          <img src="@/assets/icons/icon-plus.svg" alt="plus" />
        </div>
      </div>
      <button @click="onAddToCart()">
        <img src="@/assets/icons/icon-cart.svg" alt="cart" />
        <p>Add to cart</p>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["itemQuantity", "isSliderOpen"])
  },
  methods: {
    onAddItem() {
      this.$store.commit("updateItemQuantity", this.itemQuantity + 1);
    },
    onRemoveItem() {
      this.$store.commit("updateItemQuantity", this.itemQuantity + -1);
    },
    onAddToCart() {
      this.$store.commit("updateItemCart", this.itemQuantity);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles.scss";

.description-hide {
  visibility: hidden;
}

.description-container {
  padding: 1.5rem;

  .company-title {
    padding-bottom: 1rem;
    letter-spacing: 1.85px;
  }

  .item-title {
    padding-bottom: 1rem;
  }

  .item-description {
    font-size: 15px;

    line-height: 1.6;
    padding-bottom: 1.5rem;
  }

  .price-container {
    @include flex-mixin(row, space-between, center);
    padding-bottom: 0.5rem;
    .discount-price-container {
      @include flex-mixin(row, space-between, center);

      h3 {
        background-color: #ffeee2;
        padding: 0.2rem 0.5rem;
        border-radius: 6px;
        font-size: 16px;
        font-weight: bold;
        margin-left: 1.5rem;
      }
    }

    .price-pre-discount-container {
      p {
        color: #b6bcc8;
        font-weight: bold;
      }
    }
  }

  .cart-modifier-container {
    padding-top: 1.5rem;
    .item-quantity-container {
      @include flex-mixin(row, space-between, center);
      padding: 0rem 1.5rem;
      p {
        color: #1d2026;
        font-size: 16px;
        font-weight: bold;
      }

      .minus-container {
        padding-bottom: 0.8rem;
        cursor: pointer;
        &:hover {
          img {
            filter: brightness(0) saturate(100%) invert(92%) sepia(8%)
              saturate(7311%) hue-rotate(311deg) brightness(101%) contrast(102%);
          }
        }
      }
      .plus-container {
        cursor: pointer;
        &:hover {
          img {
            filter: brightness(0) saturate(100%) invert(92%) sepia(8%)
              saturate(7311%) hue-rotate(311deg) brightness(101%) contrast(102%);
          }
        }
      }
    }

    button {
      @include flex-mixin(row, center, center);
      cursor: pointer;
      margin-top: 1rem;
      outline: none;
      border: none;
      padding: 1rem 0;
      background: #ff7e1b;
      color: white;
      width: 100%;
      border-radius: 10px;
      transition: ease-in-out all 0.3s;

      p {
        font-size: 16px;
        color: white;
        font-weight: bold;
        padding-left: 1rem;
      }

      &:hover {
        background: #ffab6a;
      }
    }
  }
}
@media screen and (min-width: 900px) {
  .description-container {
    flex-basis: 50%;
  }
}

@media screen and (min-width: 1400px) {
  .description-container {
    padding: unset;
    padding-left: 5rem;

    .company-title {
      padding-top: 4rem;
      padding-bottom: 1.5rem;
    }

    .item-title {
      padding-bottom: 2rem;
    }

    .item-description {
      font-size: 16px;
    }

    .price-container {
      @include flex-mixin(column, space-between, flex-start);

      .discount-price-container {
        @include flex-mixin(row, space-between, center);
        h1 {
          font-size: 28px;
          padding-right: 1rem;
        }

        h3 {
          font-size: 16px;
          margin-left: 0.5rem;
        }
      }

      .price-pre-discount-container {
        p {
          font-weight: bold;
          text-decoration-line: line-through;
        }
      }
    }

    .cart-modifier-container {
      @include flex-mixin(row, space-between, center);
      .item-quantity-container {
        flex-basis: 36.5%;
      }

      button {
        flex-basis: 63.5%;
      }
    }
  }
}
</style>
