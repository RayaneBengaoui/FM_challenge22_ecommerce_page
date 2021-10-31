<template>
  <div class="description-container">
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
      <button>
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
    ...mapState(["itemQuantity"])
  },
  methods: {
    onAddItem() {
      this.$store.commit("updateItemQuantity", this.itemQuantity + 1);
    },
    onRemoveItem() {
      this.$store.commit("updateItemQuantity", this.itemQuantity + -1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles.scss";
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

    .discount-price-container {
      @include flex-mixin(row, space-between, center);
      h1 {
        padding-right: 1rem;
      }

      h3 {
        font-size: 16px;
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
      }
      .plus-container {
        cursor: pointer;
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

      p {
        font-size: 16px;
        color: white;
        font-weight: bold;
        padding-left: 1rem;
      }
    }
  }
}
</style>
