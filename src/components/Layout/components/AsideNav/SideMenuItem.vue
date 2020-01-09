<template>
  <el-menu-item :index="routePath" :disabled="menuItem.disabled">
    <i :class="menuItem.icon" />
    <span slot="title">{{ $t(menuItem.title) }}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: 'side-menu-item',
  props: {
    menuItem: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {

    }
  },
  computed: {
    routePath() {
      return this.menuItem.path
    },
  },
}
</script>

<style scoped lang="scss">
.el-menu-item {
  margin-bottom: 15px;
}
</style>
