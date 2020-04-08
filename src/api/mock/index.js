/**
 * https://github.com/nuysoft/Mock/wiki
 * http://mockjs.com/examples.html
 */
import Mock from "mockjs"
import appConfig from '@/app.config'
import { regExpToRegStr } from '@/utils/common'

import test from './actions/test'
import chart from './actions/chart'

const mockAction = {
  test,
  chart,
}

// 给url设置mock
Object.values(mockAction).forEach(actionItem => {
  Object.values(actionItem).forEach(mockItem => mock(mockItem))
})

Mock.setup({
  timeout: '500-1000',
})

export function mock ({rurl, method, data, }, success = true) {
  // 给rurl正则地址 添加mock正则前缀
  let url = new RegExp(regExpToRegStr(appConfig.proxy.staticMockPrefix) + regExpToRegStr(rurl))

  const successRes = { error: 0, code: 200, data: 'mock success' }
  const failRes = { error: 1, code: 404, msg: 'mock fail' }
  let result = Object.assign({}, success ? successRes : failRes, data)

  Mock.mock(url, method, result)
}

