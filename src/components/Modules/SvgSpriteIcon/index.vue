<template>
  <svg class="im-icon svg-sprite-icon" aria-hidden="true">
    <use :xlink:href="'#' + icon" />
  </svg>
</template>

<script>
  export default {
    name: "svg-sprite-icon",
    props: {
      // symbol icon
      icon: {
        type: String,
        required: true
      }
    },
  }
</script>

<style scoped>

</style>
