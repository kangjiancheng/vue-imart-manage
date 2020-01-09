import $_api from '@/api'

export default {
  namespaced: true,

  state: {
    isCollapseAside: localStorage.getItem('isCollapseAside') === 'true',
    allMenu: [],
  },

  getters: {
    isCollapseAside (state) {
      return state.isCollapseAside
    },
    allMenu (state) {
      return state.allMenu
    },
  },

  mutations: {
    toggleCollapseAside (state) {
      state.isCollapseAside = !state.isCollapseAside
      localStorage.setItem('isCollapseAside', state.isCollapseAside)
    },

    SET_ALL_MENU (state, payload) {
      state.menuList = payload.allMenu
    }
  },

  actions: {
    SET_ALL_MENU ({ commit }, payload) {
      return new Promise(resolve => {
        commit('SET_MENU_LIST', {allMenu: payload.allMenu})
        resolve()
      })
    },
  },
}
