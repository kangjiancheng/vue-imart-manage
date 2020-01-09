/**
 * http://kazupon.github.io/vue-i18n/
 */
import Vue from 'vue'
import locale from 'element-ui/lib/locale'
import VueI18n from 'vue-i18n'
import lang from './lang'

Vue.use(VueI18n)

let curBrowserLang = navigator.language || navigator.userLanguage
if (localStorage.getItem('currentLang')) {
  curBrowserLang = localStorage.getItem('currentLang')
}

localStorage.setItem('currentLang', curBrowserLang)

const i18n = new VueI18n({
  locale: curBrowserLang || 'en-US', // default language
  messages: lang,
  silentTranslationWarn: true,
})

locale.i18n((key, value) => i18n.t(key, value)) // for compatible element-ui

export default i18n
