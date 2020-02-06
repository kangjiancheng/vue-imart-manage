<template>
  <div class="header-view header-nav">
    <div class="header-left">
      <router-link to="/">
        <svg-sprite-icon class="web-logo" icon="im-icon-web-logo" />
        <span class="web-name">Vue Imart Manage</span>
      </router-link>
    </div>

    <div class="header-main">
      <im-menu />
    </div>

    <div class="header-right">
      <a class="docs" :href="docsLink" target="_blank">帮助文档</a>

      <!-- choose language -->
      <el-dropdown class="lang-dropdown hover-effect" trigger="click" @command="setLang">
        <div class="avatar-wrapper">{{ langLabel || 'Languages' }}<i class="el-icon-caret-bottom" /></div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(value, key) in languages" :key="key" :command="key">
            {{ value }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

  </div>
</template>

<script>

import ImMenu from "./ImMenu";
export default {
  name: 'header-nav',
  components: { ImMenu },
  data() {
    return {
      docsLink: '/docs',
      languages: {
        'en-US': 'English',
        'zh-CN': '简体中文',
      },
      langLabel: '',
    }
  },
  created () {
    this.getLang()
  },
  methods: {
    getLang () {
      let lang = localStorage.getItem('lang')
      this.langLabel = this.languages[lang] || ''
    },

    setLang(lang) {
      this.langLabel = this.languages[lang] || ''
      this.$i18n.locale = lang
      localStorage.setItem('lang', lang)
    },
  },
}
</script>

<style lang="scss" scoped>
.header-nav {
  display: flex;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  background-color: white;
}

.header-left {
  margin-right: 20px;
  .web-logo {
    font-size: 32px;
    vertical-align: middle;
  }
  .web-name {
    margin-left: 5px;
    font-size: 16px;
    color: #2d2d2d;
    vertical-align: middle;
  }
}

.header-menu {

}

.header-right {
  margin-left: auto;
  .docs {
    margin-right: 20px;
    font-size: 14px;
  }
  .lang-dropdown {
    &.hover-effect {
      cursor: pointer;
      transition: background 0.3s;
      &:hover {
        background-color: rgba(0, 0, 0, 0.025);
      }
    }
  }
}
</style>
