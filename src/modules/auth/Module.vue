<template>
  <div class="content-wh-100 bg-grey d-flex align-items-center">
    <router-view />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Module',
};
</script>

<style scoped>

  .content-wh-100 {
    height: 100vh;
    width: 100vw;
    background-color: white;
  }
</style>
