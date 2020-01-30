<template>
  <el-menu
    ref="el-menu"
    class="im-menu"
    mode="horizontal"
    :default-active="activeIndex"
    @select="handleSelect">

    <im-menu-item v-for="(menuItem, index) in menuList" :key="index" :menu-item="menuItem" />

  </el-menu>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ImMenuItem from "./ImMenuItem"
  export default {
    name: "im-menu",
    components: { ImMenuItem },
    data() {
      return {
        activeIndex: this.$route.path,
      };
    },
    computed: {
      ...mapGetters('app', ['menuList'])
    },
    methods: {
      handleSelect(index) {
        if (index.startsWith('http')) {
          this.$refs['el-menu'].updateActiveIndex(this.$route.fullPath)
          window.open(index, '_blank')
        } else {
          this.$router.push({
            path: index,
            query: {},
          }).catch(err => err)
        }
      }
    }
  }
</script>
