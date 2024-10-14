<template>
  <div class="d-flex align-items-center justify-content-between">
    <div>
      <h1>{{ title }}</h1>
      <GoBackButton length="-1" />
    </div>
    <div>
      <button type="button" class="btn btn-outline-success">
        <i class="fa fa-plus" aria-hidden="true"></i>
        Adicionar
      </button>
    </div>
  </div>
</template>

<script>
import GoBackButton from "@/components/gobackbutton/GoBackButton.vue";

export default {
  name: "HeaderContent",
  components: {GoBackButton},
  props: ['title'],
  methods: {
    goBack(length) {
        this.$router.go(length)
    },
  }
}
</script>