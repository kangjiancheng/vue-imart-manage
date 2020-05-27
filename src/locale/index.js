/**
 * http://kazupon.github.io/vue-i18n/
 */
import Vue from 'vue'
import ElementLocal from 'element-ui/lib/locale'
import VueI18n from 'vue-i18n'
import langList from './lang'

Vue.use(VueI18n)

let lang = localStorage.getItem('lang')  || navigator.language || 'en-US'
localStorage.setItem('lang', lang)

const i18n = new VueI18n({
  locale: lang,
  messages: langList,
  silentTranslationWarn: true,
})

ElementLocal.i18n((key, value) => i18n.t(key, value)) // for compatible element-ui

export default i18n
