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

<style lang="scss" scoped></style>
