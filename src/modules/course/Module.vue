<template>
  <div class="content-wh-100 bg-grey d-flex align-items-center">
    <layout-component></layout-component>
  </div>
</template>

<script>
/* eslint-disable */
import LayoutComponent from "@/components/layout/Layout.vue";

export default {
  name: 'Module',
  components: {LayoutComponent},
};
</script>

<style scoped>
  .content-wh-100 {
    height: 100vh;
    width: 100vw;
  }
</style>
