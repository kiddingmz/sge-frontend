<template>
  <div class="layout">
    <div class="main">
      <Navigation />
      <Content>
        <router-view />
      </Content>
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
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main {
  display: flex;
  flex: 1;
}
</style>
