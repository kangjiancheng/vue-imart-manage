import { getStaticMock } from "@/utils/common"
const mockPrefix = getStaticMock(true)

export default {
  get: {
    getUserInfo: mockPrefix + '/api/user/userInfo',
    login: '/api/user/login',
  },
  post: {
    addUserInfo: '/api/user/userInfo',
  },
  put: {
    editUserInfo: '/api/user/userInfo',
  },
  delete: {
    deleteUserInfo: '/api/user/userInfo',
  },
}
