import appConfig from '@/app.config'
const mockApi = appConfig.isDev ? '/mockStatic' : ''

export default {
  get: {
    getUserInfo: mockApi + '/user/userInfo',
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
