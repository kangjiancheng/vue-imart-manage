import { mock } from "../index";

mock({
  rurl: /\/user\/userInfo(\?.*)*/,
  method: 'get',
  data: {
    'data|5-10': [{
      'id|+1': 1,
      'email': '@EMAIL'
    }]
  }
})
