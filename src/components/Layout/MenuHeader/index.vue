<template>
  <div class="app-view">

    <div class="app-header">
      <header-nav />
    </div>

    <div class="app-main">
      <div class="router-view">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>

  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav'

export default {
  name: 'Layout',
  components: {
    HeaderNav,
  },
}
</script>

<style lang="scss" scoped>
/**
 * 页面框架布局
 */
.app-header {
  position: relative;
  height: 60px;
  box-shadow: 0 1px 4px 0 rgba(0,21,41,0.12);
  z-index: 1;
}

.app-main {
  padding: 20px;
  height: calc(100vh - 60px);
  overflow: auto;
}

.router-view {
  margin: 0 auto;
  max-width: 1200px;
  min-height: 100%;
  background-color: white;
}

/**
 * 路由切换效果
 */
.fade-leave-active,
.fade-enter-active {
  transition: all .5s;
}

.fade-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
