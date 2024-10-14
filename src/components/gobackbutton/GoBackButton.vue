<template>
<div>
    <button @click="goBack(length)" class="btn btn-light mr-2 btn-xs"><i class="fa fa-arrow-left" aria-hidden="true"></i>
      Voltar</button>
</div>
</template>

<script>
export default { 
  name: "GoBackButton",
  props: ['length'],
  methods: {
    goBack(length) {
        this.$router.go(length)
    },
  }
}
</script>