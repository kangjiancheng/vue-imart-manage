import Ajax from '@/utils/ajax'

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
