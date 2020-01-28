import { getStaticMock } from "@/utils/common";
const mockPrefix = getStaticMock(true)

export default {
  get: {
    getUserInfo: mockPrefix + '/user/userInfo',
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
