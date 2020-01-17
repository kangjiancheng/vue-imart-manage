/**
 * https://github.com/nuysoft/Mock/wiki
 */
import Mock from "mockjs"
import { regExpToRegStr } from '@/utils/common'

import './actions/test'

Mock.setup({
  timeout: '200-500',
})

export function mock ({rurl, method, data }, success = true) {
  const successRes = { error: 0, code: 200, data: 'mock success' }
  const errorRes = { error: 1, code: 404, msg: 'mock fail' }

  let result = Object.assign({}, success ? successRes : errorRes, data)

  Mock.mock(rurl, method, result)
}



