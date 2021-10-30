<template>
  <div class="slider-container">
    <img
      id="current-slider-img"
      :src="sliderImages[currentSliderImageIndex]"
      alt="slider background"
    />
    <div class="arrow-container left-arrow" @click="changeSlideImage('left')">
      <img src="@/assets/icons/icon-previous.svg" alt="left-arrow" />
    </div>
    <div class="arrow-container right-arrow" @click="changeSlideImage('right')">
      <img src="@/assets/icons/icon-next.svg" alt="left-arrow" />
    </div>
  </div>
</template>

<script>
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
  background: brown;

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
</style>
