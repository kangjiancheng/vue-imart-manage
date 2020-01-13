import $_api from '@/api'
import menuList from "@/router/menu"

export default {
  namespaced: true,

  state: {
    isCollapseAside: localStorage.getItem('isCollapseAside') === 'true',
    menuList: menuList,
  },

  getters: {
    isCollapseAside (state) {
      return state.isCollapseAside
    },
    menuList (state) {
      return state.menuList
    },
  },

  mutations: {
    toggleCollapseAside (state) {
      state.isCollapseAside = !state.isCollapseAside
      localStorage.setItem('isCollapseAside', state.isCollapseAside)
    },

    SET_ALL_MENU (state, payload) {
      state.menuList = payload.menuList
    }
  },

  actions: {
    SET_ALL_MENU ({ commit }, payload) {
      return new Promise(resolve => {
        commit('SET_MENU_LIST', {menuList: payload.menuList})
        resolve()
      })
    },
  },
}
