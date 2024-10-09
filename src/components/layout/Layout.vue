<template>
  <div class="d-flex full-content">
    <Navigation />
    <div class="content">
      <Content />
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
import Content from '../content/Content.vue'

export default {
  name: 'LayoutComponent',
  components: {
    Navigation,
    Content
  }
}
</script>

<style scoped>
.full-content {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
}

.content {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
  width: 100%;
}
</style>