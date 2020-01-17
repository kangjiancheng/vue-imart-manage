const mock = process.env.NODE_ENV === 'development' ? '/mockApi' : ''

export default {
  get: {
    getUserInfo: mock + '/user/userInfo',
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
