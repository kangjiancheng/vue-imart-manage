const isDev = process.env.NODE_ENV === 'development'

export default {
  title: document.title || 'imart-manage', // web title
  isDev,

  // app proxy
  proxy: {
    enableGlobal: isDev && true,  // enable global proxy
    prefixKey: 'local', // current the global proxy， the prefixMap key name
    prefixMap: {
      local: '/__local__',
      mock: '/__mock__', // for remote mock
      server: '/__server__', // for remote server
    }
  },
  // ./api/mock
  staticMock: {
    enable: isDev && true,
    prefix: '/__staticMock__',  // 添加到请求地址中
    regexpPrefix: /.*\/__staticMock__/, // 添加到 mock 地址匹配中
  },
}
