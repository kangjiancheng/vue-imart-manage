import Axios from 'axios'
import { Notification } from 'element-ui'
import appConfig from '@/app.config'

function responseSuccess(response, callback) {
  if (response.data && response.data.error === 0) {
    callback(null, response.data.data)
  } else {
    let errorMsg = response.data.msg

    responseFail(errorMsg, callback)
  }
}

function responseFail(error, callback) {
  let errorMsg = '' + error || 'Unknown Error'

  // TODO 设置字体排列
  Notification.error({
    title: 'Error',
    message: errorMsg,
  })

  callback(errorMsg)
}

const $axios = Axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
  // timeout: 200000,
})

const baseURL = appConfig.proxy.enableGlobal ? appConfig.proxy.prefixMap[appConfig.proxy.prefixKey] : ''

export default {
  request(config) {
    return $axios.request(config)
  },
  $http(method, url, params, callback) {
    const config = {
      baseURL,
      url,
      method,
    }

    if (['post', 'put', 'patch'].includes(method)) {
      config.data = params
    } else {
      config.params = params
    }


    this.request(config).then(
      response => responseSuccess(response, callback),
      error => responseFail(error, callback),
    )
  },
  get(url, params, callback) {
    this.$http('get', url, params, callback)
  },
  post(url, params, callback) {
    this.$http('post', url, params, callback)
  },
  put(url, params, callback) {
    this.$http('put', url, params, callback)
  },
  delete(url, params, callback) {
    this.$http('delete', url, params, callback)
  },
}
