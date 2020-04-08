import Ajax from '@/utils/ajax'
import appConfig from '@/app.config'

export function initActions(actions) {
  let api = {}
  for (let action in actions) {
    api[action] = {}

    for (let method in actions[action]) {
      for (let url in actions[action][method]) {
        api[action][url] = (params, callback) => {
          // api url
          Ajax[Ajax[method] ? method : 'get'](
            actions[action][method][url],
            params,
            callback,
          )
        }
      }
    }
  }
  return api
}


/**
 * 设置单独url的mock前缀
 * @param enableMock - 是否开启static mock
 * @returns {string}
 */
export function singleStaticMock (enableMock) {
  return enableMock ? appConfig.proxy.staticMockPrefix : ''
}

// 获取正则表达式字面量 对应的字符串
export function regExpToRegStr(regexp) {
  return regexp.toString().slice(1, -1)
}
