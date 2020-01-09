import Axios from 'axios'
import { Notification } from 'element-ui'

const isDevelopment = process.env.NODE_ENV !== 'production'

export const proxyMap = {
  local: '/proxy_local',
  service: '/proxy_service',
}
const currentProxy = 'local'
export const proxyApi = isDevelopment ? proxyMap[currentProxy] : ''

const $axios = Axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
  // timeout: 200000,
})

// if the server responses success, just deal with the useless data
function responseSuccess(response, callback) {
  if (response.data && (response.data.code < 300 || response.data.code === 304)) {
    callback(null, response.data.data)
  } else {
    let error_msg = response.data.msg

    responseError(error_msg, callback)
  }
}

// the server responses error or network error
function responseError(error, callback) {
  let error_msg = '' + error || 'Unknown Error'
  Notification.error({
    title: 'Error',
    message: error_msg,
  })

  callback(error_msg)
}

export default {
  request(config) {
    return $axios.request(config)
  },
  $http(method, url, params, callback) {
    const config = {
      baseURL: proxyApi,
      url: url,
      method: method,
    }

    if (['post', 'put', 'patch'].includes(method)) {
      config.data = params
    } else {
      config.params = params
    }

    this.request(config).then(
      response => responseSuccess(response, callback),
      error => responseError(error, callback),
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
