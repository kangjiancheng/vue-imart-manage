<template>
  <div class="aside-nav">
    <el-menu
      ref="el-menu"
      :default-active="$route.path"
      :collapse="isCollapseAside"
      mode="vertical"
      @select="handleSelectMenu">

      <side-menu-item v-for="item in menuList" :key="item.name" :menu-item="item" />

    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SideMenuItem from './SideMenuItem'
import menu from '@/router/menu.json'
export default {
  name: 'aside-nav',
  components: { SideMenuItem },
  data () {
    return {
      menu: menu,
    }
  },
  computed: {
    ...mapGetters('app', [
      'isCollapseAside',
      'menuList',
    ]),
  },
  methods: {
    handleSelectMenu(path) {
      if (path.startsWith('http')) {
        this.$refs['el-menu'].updateActiveIndex(this.$route.fullPath)
        window.open(path, '_blank')
      } else {
        this.$router.push({
          path: path,
          query: {},
        }).catch(err => err)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/base";
.aside-nav {
  height: 100%;
  background-color: #fff;
  overflow: auto;

  .el-menu {
    padding-top: 40px;
    height: 100%;
    border: none;
    &:not(.el-menu--collapse) {
      width: 250px;
      overflow: auto;
    }

    /deep/ .el-menu-item{
      font-size: 16px;
      color: #666;
      border-left: 4px solid transparent;
      &:focus,
      &:hover {
        color: theme-color();
        background-color: theme-color(.1);
      }

      &.is-active {
        color: theme-color();
        border-color: theme-color();
        border-left: 4px solid theme-color();
        background-color: theme-color(.1);
      }
      &.disabled {
        color: #475F7B;
      }
    }
  }
}
</style>
