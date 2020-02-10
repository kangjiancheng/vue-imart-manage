export default {
  getUserInfo: {
    rurl: /\/api\/user\/userInfo(\?.*)*/,
    method: 'get',
    data: {
      'data|5-10': [{
        'id|+1': 1,
        'email': '@EMAIL'
      }]
    }
  }
}
