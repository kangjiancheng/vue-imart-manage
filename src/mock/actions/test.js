import { mock } from "../index";

const mockList = [
  {
    rurl: /\/user\/userInfo(\?.*)*/,
    method: 'get',
    data: {
      'data|5-10': [{
        'id|+1': 1,
        'email': '@EMAIL'
      }]
    }
  }
]
mockList.forEach(item => mock(item))
