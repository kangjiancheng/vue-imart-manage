import Axios from 'axios'
import { Notification } from 'element-ui'
import appConfig from '@/app.config'

const isDevelopment = process.env.NODE_ENV !== 'production'

function responseSuccess(response, callback) {
  if (response.data && response.data.error === 0) {
    callback(null, response.data.data)
  } else {
    let error_msg = response.data.msg  || 'error'

    Notification({
      type: "error",
      title: 'ERROR',
      message: String(error_msg),
      dangerouslyUseHTMLString: true,
    })
    callback(response || {})
  }
}

function responseFail(error, callback) {
  console.dir(error)
  let errorTitle = ''
  let errorMsg = ''

  if (typeof error.response === 'object') {
    // The request was made and the server responded with a status code
    errorTitle = error.response.status + (error.response.statusText ? (' - ' + error.response.statusText) : '')

    // 500、 405 e.g
    if (typeof error.response.data === 'string') {
      errorMsg = error.response.data
    } else if (typeof error.response.data === 'object' && error.response.data.message) {
      let path = error.response.data.path ? ''+ error.response.data.path+': ' : ''
      errorMsg = path + error.response.data.message
    }
  }
  errorTitle = errorTitle || 'ERROR'
  errorMsg = errorMsg || error.message || 'error'

  Notification({
    type: "error",
    title: String(errorTitle),
    message: String(errorMsg),
    dangerouslyUseHTMLString: true,
  })
  callback(error && error.response || {})
}

const $axios = Axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
  // timeout: 200000,
})

export default {
  request(config) {
    return $axios.request(config)
  },
  $http(method, url, params, config, callback) {
    const _config = {
      url,
      method,
      ...config,
    }

    if (['post', 'put', 'patch'].includes(method)) {
      _config.data = params
    } else {
      _config.params = params
    }


    // 如果url 像： '/__proxy__/api/getTestInfo' 中存在指定代理列表的字符串 '/__proxy__' 时，会忽略全局的代理
    let isSingleProxy = Object.values(appConfig.proxy.baseURLs).some(value => ~_config.url.indexOf(value))
    // 指定全局代理的 baseURL
    if (appConfig.proxy.enable && !isSingleProxy && !_config.baseURL) {
      _config.baseURL = appConfig.proxy.baseURLs[appConfig.proxy.current]
    }

    this.request(_config).then(
      response => responseSuccess(response, callback),
      error => responseFail(error, callback),
    )
  },
  get(url, params, config, callback) {
    this.$http('get', url, params, config, callback)
  },
  post(url, params, config, callback) {
    this.$http('post', url, params, config, callback)
  },
  put(url, params, config, callback) {
    this.$http('put', url, params, config, callback)
  },
  delete(url, params, callback) {
    this.$http('delete', url, params, config, callback)
  },
}
