<template>
  <div class="app-view">
    <!--<div class="app-loading"></div>-->

    <div class="app-header">
      <header-nav />
    </div>

    <div class="app-main">
      <transition name="fade" mode="out-in">
        <router-view class="router-view"/>
      </transition>
    </div>

    <div class="app-footer">
      <im-footer></im-footer>
    </div>

  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav'
import ImFooter from "./components/ImFooter"

export default {
  name: 'Layout',
  components: {
    ImFooter,
    HeaderNav,
  },
}
</script>

<style lang="scss" scoped>
/**
 * 页面框架布局
 */
.app-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  box-shadow: 0 1px 4px 0 rgba(0,21,41,0.12);
  z-index: 1;
}

.app-main {
  padding: 80px 20px 0;
  flex: auto;
  > .router-view {
    background-color: white;
    background-clip: content-box;
  }
}

.app-footer {
  padding: 20px 0;
}

/**
 * 路由切换效果
 */
.fade-leave-active,
.fade-enter-active {
  transition: all .5s ease;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}
</style>
