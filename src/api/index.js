import "./mock"
import { initActions } from '@/utils/common'
import test from './actions/test'
import analyze from './actions/analyze'

const actions = {
  test,
  analyze,
}

/**
 * 使用帮助：
 *   this.$_api.test.getUserInfo({ name: 'Tom'}, (err, res) => {
 *     console.log('err: ', err)
 *     if (err) return
 *
 *     // do something
 *     console.log('res: ', res)
 *   })
 */

export default initActions(actions)
