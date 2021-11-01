<template>
  <div class="slider">
    <div class="slider-container">
      <transition name="slide-fade" mode="out-in">
        <img
          id="current-slider-img"
          :key="currentSliderImageIndex"
          :src="sliderImages[currentSliderImageIndex]"
          alt="slider background"
        />
      </transition>
      <div
        v-if="isMobile"
        class="arrow-container left-arrow"
        @click="changeSlideImage('left')"
      >
        <img src="@/assets/icons/icon-previous.svg" alt="left-arrow" />
      </div>
      <div
        v-if="isMobile"
        class="arrow-container right-arrow"
        @click="changeSlideImage('right')"
      >
        <img src="@/assets/icons/icon-next.svg" alt="left-arrow" />
      </div>
    </div>
    <div v-if="!isMobile" class="thumbnail-container">
      <div class="thumbnail-item">
        <img src="@/assets/images/image-product-1-thumbnail.jpg" alt="shoes" />
      </div>
      <div class="thumbnail-item">
        <img src="@/assets/images/image-product-2-thumbnail.jpg" alt="shoes" />
      </div>
      <div class="thumbnail-item">
        <img src="@/assets/images/image-product-3-thumbnail.jpg" alt="shoes" />
      </div>
      <div class="thumbnail-item">
        <img src="@/assets/images/image-product-4-thumbnail.jpg" alt="shoes" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      sliderImages: [
        require("@/assets/images/image-product-1.jpg"),

        require("@/assets/images/image-product-2.jpg"),

        require("@/assets/images/image-product-3.jpg"),

        require("@/assets/images/image-product-4.jpg")
      ],
      currentSliderImageIndex: 0
    };
  },
  computed: {
    ...mapState(["isMenuOpen", "isCartOpen", "windowWidth"]),
    isMobile() {
      return this.windowWidth < 700;
    }
  },

  methods: {
    changeSlideImage(direction) {
      if (direction === "right") {
        this.currentSliderImageIndex =
          (this.currentSliderImageIndex + 1) % this.sliderImages.length;
      } else {
        if (this.currentSliderImageIndex === 0) {
          this.currentSliderImageIndex = this.sliderImages.length - 1;
        } else {
          this.currentSliderImageIndex -= 1;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles.scss";
.slider-container {
  height: 300px;
  width: 100%;
  position: relative;

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    opacity: 0;
  }

  #current-slider-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.arrow-container {
  position: absolute;

  top: 50%;

  @include flex-mixin(row, center, center);

  background: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  cursor: pointer;
}

.left-arrow {
  left: 10%;
  transform: translate(-50%, -50%);
}
.right-arrow {
  right: 10%;
  transform: translate(50%, -50%);
}

@media screen and (min-width: 700px) {
  .slider {
    flex-basis: 50%;
    /* background: lightcoral; */
  }
  .slider-container {
    width: 445px;
    height: 445px;

    position: unset;
    border-radius: 10px;
    overflow: hidden;
    /* background: lightcoral; */

    .slide-fade-enter-active,
    .slide-fade-leave-active {
      transition: opacity 0.3s ease;
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
      opacity: 0;
    }

    #current-slider-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .thumbnail-container {
    width: 445px;
    margin-top: 2rem;
    .thumbnail-item {
      width: 88px;
      height: 88px;
      border-radius: 10px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    @include flex-mixin(row, space-between, center);
  }
}
</style>
