<template>
  <Menu></Menu>
  <Content></Content>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Content from "@/components/Content.vue";

export default {
  components: {
    Menu,
    Content
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  font-family: "Kumbh Sans", sans-serif;
}

h3 {
  font-size: 12px;
  font-weight: bold;
  color: #ff7e1b;
}

h1 {
  font-size: 28px;
  font-weight: bold;
  color: #1d2026;
}

p {
  color: #69707d;
}

@media screen and (min-width: 1400px) {
  h3 {
    font-size: 13px;
  }

  h1 {
    font-size: 44px;
  }

  p {
    font-size: 16px;
  }
}
</style>
