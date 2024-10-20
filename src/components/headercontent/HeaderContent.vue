<template>
  <div class="px-1 d-flex align-items-center justify-content-between shadow-sm py-1 barra-vertical">
    <div class="d-flex align-items-center gap-3">
      <GoBackButton length="-1" />
      <h6 class="text-uppercase mb-0">{{ title }}</h6>
    </div>
    <div v-if="show === 'on'" class="a">
      <router-link :to="link" class="btn btn-xs">
        <i class="fa fa-plus" aria-hidden="true"></i>
        <span> Adicionar</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import GoBackButton from "@/components/gobackbutton/GoBackButton.vue";

export default {
  name: "HeaderContent",
  components: {GoBackButton},
  props: ['title', 'link', 'show'],
}
</script>

<style scoped>
  .btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
    background-color: var(--primary);
  }
  .btn:hover {
    background-color: var(--primary-alt);
  }

  i, a{
    color: white;
  }

  i:hover {
    color: white;
  }

  a:hover {
    color: white;
  }

  a {
    border: none;
  }

  i {
    font-size: 0.8rem;
  }

  span{
    font-size: 0.8rem;
  }

  .barra-vertical {
    border-right: 5px solid #4CAF50;
  }


</style>