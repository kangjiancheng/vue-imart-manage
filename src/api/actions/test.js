import appConfig from '@/app.config'
const mockApi = appConfig.isDev && false ? '/mockStatic' : ''

export default {
  get: {
    getUserInfo: mockApi + '/user/userInfo1',
    login: '/user/login',
  },
  post: {
    addUserInfo: '/user/userInfo',
  },
  put: {
    editUserInfo: '/user/userInfo',
  },
  delete: {
    deleteUserInfo: '/user/userInfo',
  },
}
