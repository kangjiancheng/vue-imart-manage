import "./mock"
import { initActions } from '@/utils/common'
import test from './actions/test'
import chart from './actions/chart'

const actions = {
  test,
  chart,
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
