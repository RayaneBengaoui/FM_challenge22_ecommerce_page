<template>
  <div class="content-container">
    <Slider></Slider>
    <Description></Description>
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import Description from "@/components/Description.vue";

export default {
  components: {
    Slider,
    Description
  }
};
</script>

<style lang="scss" scoped>
.content-container {
  transition: all 0.4s ease;
}
@media screen and (min-width: 700px) {
  .content-container {
    display: flex;
    padding: 3rem 4rem;
  }
}
@media screen and (min-width: 1400px) {
  .content-container {
    display: flex;
    max-width: 1440px;
    margin: auto;
    padding: 5.5rem 13.25rem;
  }
}
</style>
