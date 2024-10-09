<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContentComponent'
}
</script>

<style scoped>
.content {
  padding: 2rem;
  flex: 1;
}
</style>