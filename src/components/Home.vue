<template>
  <Menu></Menu>
  <Content></Content>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Content from '@/components/Content.vue'

export default {
  components: {
    Menu,
    Content,
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
}
</style>
