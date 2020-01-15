/**
 * @description: font-awesome 5 free
 *
 * @see: use docs
 *  https://github.com/FortAwesome/vue-fontawesome
 *
 * @see: icon docs:
 *  en: https://fontawesome.com/
 *  zh: http://fa5.dashgame.com/#/%E5%9B%BE%E6%A0%87
 *
 *  use doc like as:
 *    <font-awesome-icon icon="user-secret" /> //default fas
 *    <font-awesome-icon :icon="['fas', 'user-secret']" />
 *    <font-awesome-icon :icon="['far', 'address-book']" class="address-book" />
 *    <font-awesome-icon :icon="['fab', 'github']" />
 */
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import {
  faUserSecret,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons"    // default fas

import {
  faAddressBook
} from "@fortawesome/free-regular-svg-icons"  // far

import {
  faGithub
} from "@fortawesome/free-brands-svg-icons"   // fab


library.add(
  // fas
  faUserSecret,
  faUserCircle,

  // far
  faAddressBook,

  // fab
  faGithub,
)

export default {
  install (Vue) {
    Vue.component('font-awesome-icon', FontAwesomeIcon)
  }
}
