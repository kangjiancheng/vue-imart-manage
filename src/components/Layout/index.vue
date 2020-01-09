<template>
  <div class="app-wrapper">
    <div class="app-header">
      <header-nav />
    </div>

    <div class="app-body">
      <div class="app-sidebar" v-if="!$route.meta.hideAside">
        <aside-nav />
      </div>

      <div class="app-main">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav'
import AsideNav from './components/AsideNav'

export default {
  name: 'Layout',
  components: {
    HeaderNav,
    AsideNav,
  },
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  .app-header {
    position: relative;
    z-index: 1;
    height: 60px;
    box-shadow: 0 1px 4px 0 rgba(0,21,41,0.12);
  }

  .app-body {
    display: flex;
    height: calc(100vh - 60px);

    .app-sidebar {
      display: inline-block;
      flex-basis: auto;
      height: 100%;
      box-shadow: 0 2px 40px 0 rgba(4,4,64,0.04);
    }

    .app-main {
      flex: 1;
      height: 100%;
      overflow: auto;
    }
  }
}

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
