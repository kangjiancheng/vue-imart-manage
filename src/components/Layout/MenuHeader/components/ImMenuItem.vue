<template>
  <el-menu-item
    v-if="!menuItem.children || !menuItem.children.length"
    :index="menuItem.path"
    :disabled="menuItem.disabled">
    <i :class="menuItem.icon" />
    <span slot="title">{{ $t(menuItem.title) }}</span>
  </el-menu-item>


  <el-submenu
    v-else
    class="im-submenu"
    :index="menuItem.name"
    :popper-append-to-body="false">
    <template slot="title">
      <i :class="menuItem.icon" />
      <span>{{ $t(menuItem.title) }}</span>
    </template>

    <im-menu-item v-for="(subMenuItem, index) in menuItem.children" :key="index" :menu-item="subMenuItem" />

  </el-submenu>
</template>

<script>
export default {
  name: "im-menu-item",
  props: {
    menuItem: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      routePath: ''
    }
  }
}
</script>

<style lang="scss">
.im-submenu .el-submenu__title .el-submenu__icon-arrow{
  margin-top: 3px;
}
</style>