/**
 * https://github.com/nuysoft/Mock/wiki
 * http://mockjs.com/examples.html
 */
import Mock from "mockjs"
import { regExpToRegStr } from '@/utils/common'

import test from './actions/test'

const mockAction = {
  test,
}

Object.values(mockAction).forEach(actionItem => {
  Object.values(actionItem).forEach(mockItem => mock(mockItem))
})

Mock.setup({
  timeout: '200-500',
})

export function mock ({rurlPrefix, rurl, method, data, }, success = true) {
  const successRes = { error: 0, code: 200, data: 'mock success' }
  const errorRes = { error: 1, code: 404, msg: 'mock fail' }

  const mockPrefix = rurlPrefix ? rurlPrefix : /.*\/mockStatic/
  let url = new RegExp(regExpToRegStr(mockPrefix) + regExpToRegStr(rurl))
  let result = Object.assign({}, success ? successRes : errorRes, data)

  Mock.mock(url, method, result)
}

