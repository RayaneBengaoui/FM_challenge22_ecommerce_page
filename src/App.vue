<template>
  <Home />
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home
  },
  mounted() {
    this.$store.commit("setWindowWidth", document.documentElement.clientWidth);
    window.addEventListener("resize", this.getDimensions);
  },
  unmounted() {
    window.removeEventListener("resize", this.getDimensions);
  },
  methods: {
    getDimensions() {
      this.$store.commit(
        "setWindowWidth",
        document.documentElement.clientWidth
      );
    }
  }
};
</script>

<style lang="scss"></style>
