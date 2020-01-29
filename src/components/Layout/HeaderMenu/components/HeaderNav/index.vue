<template>
  <div class="header-view header-nav">
    <!-- toggle aside nav -->
    <hamburger/>

    <div class="header-logo">
      <router-link to="/">
        <svg-sprite-icon class="web-logo" icon="im-icon-web-logo" />
      </router-link>
    </div>

    <div class="header-right">
      <a class="docs" href="/docs" target="_blank">文档</a>

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
import Hamburger from './Hamburger'

export default {
  name: 'header-nav',
  components: {
    Hamburger,
  },
  data() {
    return {
      siteTitle: 'TRON FACTORY',

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
  height: 100%;
  background-color: white;

  .header-logo {
    .web-logo {
      font-size: 40px;
    }
  }

  .header-right {
    margin: 0 64px 0 auto;
    .docs {
      margin-right: 20px;
      color: font-color();
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
}
</style>
