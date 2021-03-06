<template>
  <div
    class="slider"
    :class="{ 'slider-open': isSliderOpen }"
    @click="onToggleSlider($event)"
  >
    <div
      v-if="isSliderOpen"
      class="close-container"
      @click="onToggleSlider($event)"
    >
      <img src="@/assets/icons/icon-close-slider.svg" alt="cross close" />
    </div>
    <div class="slider-container">
      <transition name="slide-fade" mode="out-in">
        <img
          id="current-slider-img"
          :key="currentSliderImageIndex"
          :src="sliderImages[currentSliderImageIndex]"
          alt="slider background"
          @click="onToggleSlider($event)"
        />
      </transition>
      <div
        v-if="isMobile || isSliderOpen"
        class="arrow-container left-arrow"
        :class="{ 'left-slider-open': isSliderOpen }"
        @click="changeSlideImage('left', $event)"
      >
        <img src="@/assets/icons/icon-previous.svg" alt="left-arrow" />
      </div>
      <div
        v-if="isMobile || isSliderOpen"
        class="arrow-container right-arrow"
        :class="{ 'right-slider-open': isSliderOpen }"
        @click="changeSlideImage('right', $event)"
      >
        <img src="@/assets/icons/icon-next.svg" alt="left-arrow" />
      </div>
    </div>
    <div v-if="!isMobile" class="thumbnail-container">
      <div
        class="thumbnail-item"
        :class="{ 'selected-thumbnail': isThumbnailSelected(0) }"
        @click="selectSpecificSliderImage(0, $event)"
      >
        <img src="@/assets/images/image-product-1-thumbnail.jpg" alt="shoes" />
      </div>
      <div
        class="thumbnail-item"
        :class="{ 'selected-thumbnail': isThumbnailSelected(1) }"
        @click="selectSpecificSliderImage(1, $event)"
      >
        <img src="@/assets/images/image-product-2-thumbnail.jpg" alt="shoes" />
      </div>
      <div
        class="thumbnail-item"
        :class="{ 'selected-thumbnail': isThumbnailSelected(2) }"
        @click="selectSpecificSliderImage(2, $event)"
      >
        <img src="@/assets/images/image-product-3-thumbnail.jpg" alt="shoes" />
      </div>
      <div
        class="thumbnail-item"
        :class="{ 'selected-thumbnail': isThumbnailSelected(3) }"
        @click="selectSpecificSliderImage(3, $event)"
      >
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
    ...mapState(["isMenuOpen", "isCartOpen", "isSliderOpen", "windowWidth"]),
    isMobile() {
      return this.windowWidth < 900;
    }
  },

  methods: {
    changeSlideImage(direction, event) {
      event.stopPropagation();
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
    },
    onToggleSlider(event) {
      // console.log("event", event);
      event.stopPropagation();
      this.$store.commit("toggleSlider", !this.isSliderOpen);
    },
    selectSpecificSliderImage(index, event) {
      event.stopPropagation();
      this.currentSliderImageIndex = index;
    },
    isThumbnailSelected(thumbnailIndex) {
      if (thumbnailIndex === this.currentSliderImageIndex) {
        return true;
      }
      return false;
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

  &:hover {
    img {
      transition: all 0.3s ease-in-out;
      filter: invert(57%) sepia(20%) saturate(4422%) hue-rotate(347deg)
        brightness(102%) contrast(101%);
    }
  }
}
.right-arrow {
  right: 10%;
  transform: translate(50%, -50%);
  &:hover {
    img {
      transition: all 0.3s ease-in-out;
      filter: invert(57%) sepia(20%) saturate(4422%) hue-rotate(347deg)
        brightness(102%) contrast(101%);
    }
  }
}

.left-slider-open {
  left: 20%;
}

.right-slider-open {
  right: 20%;
}

.selected-thumbnail {
  border: solid 2px #ff7e1b;
  background-color: rgba($color: #fff, $alpha: 0.75);
  img {
    mix-blend-mode: lighten;
  }
}

@media screen and (min-width: 900px) {
  .slider-open {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha: 0.6);
    @include flex-mixin(column, center, center);

    /* .slider-container {
      width: 350px;
      height: 350px;
    } */
  }

  .close-container {
    width: 550px;
    @include flex-mixin(row, flex-end, center);
    margin-bottom: 1.5rem;
    cursor: pointer;

    &:hover {
      filter: brightness(0) saturate(100%) invert(57%) sepia(20%)
        saturate(4422%) hue-rotate(347deg) brightness(102%) contrast(101%);
    }
  }

  .slider {
    flex-basis: 50%;

    /* background: lightcoral; */
  }
  .slider-container {
    transition: all 0.3s ease;
    width: 350px;
    height: 350px;

    position: unset;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
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
    width: 350px;
    margin-top: 2rem;
    .thumbnail-item {
      width: 70px;
      height: 70px;
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      img {
        transition: all 0.3s ease-in-out;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &:hover {
        background-color: rgba($color: #fff, $alpha: 0.35);
        img {
          width: 107%;
          mix-blend-mode: lighten;
        }
      }
    }
    @include flex-mixin(row, space-between, center);
  }
}

@media screen and (min-width: 1400px) {
  .slider-open {
    .slider-container {
      width: 550px;
      height: 550px;
    }
  }

  .close-container {
    width: 550px;
  }

  .slider-container {
    width: 445px;
    height: 445px;
  }

  .thumbnail-container {
    width: 445px;

    .thumbnail-item {
      width: 88px;
      height: 88px;
    }
  }
}
</style>
