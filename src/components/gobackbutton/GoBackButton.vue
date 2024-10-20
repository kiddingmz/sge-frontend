<template>
<div>
    <button @click="goBack(length)" class="btn  mr-2 btn-xs"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
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

<style scoped>
  .btn-xs {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
    background-color: var(--primary);
    width: 40px;
  }
  .btn-xs:hover {
    background-color: var(--primary-alt);
  }

  i {
    color: white;
    font-size: 0.8rem;
  }

  i:hover {
    color: white;
  }

  button {
    border: none;
  }

</style>