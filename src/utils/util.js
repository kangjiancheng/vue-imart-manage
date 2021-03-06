import Ajax from '@/utils/ajax'

export function initActions(actions) {
  let api = {}
  for (let action in actions) {
    api[action] = {}

    for (let method in actions[action]) {
      for (let url in actions[action][method]) {
        api[action][url] = (params, config = {}, callback) => {
          if (typeof config === "function") {
            callback = config
            config = {}
          }
          // api url
          Ajax[Ajax[method] ? method : 'get'](
            actions[action][method][url],
            params,
            config,
            callback,
          )
        }
      }
    }
  }
  return api
}

// 获取正则表达式字面量 对应的字符串
export function regExpToRegStr(regexp) {
  return regexp.toString().slice(1, -1)
}

/**
 * @return {string}
 */
export function transferBigIntToString (value = '') {
  return String(BigInt(value))
}
