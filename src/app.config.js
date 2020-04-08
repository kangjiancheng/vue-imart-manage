const isDev = process.env.NODE_ENV === 'development'

export default {
  title: document.title || 'imart-manage', // web title
  isDev,

  // app proxy
  proxy: {
    enable: isDev && true,  // enable global proxy
    current: 'local', // current the global proxy， the baseURLMap key name
    baseURLs: {
      local: '/__local__',
      server: '/__server__', // for remote server
      mock: '/__mock__', // for remote mock
      staticMock: '/__staticMock__',
    }
  },

  // 开启静态mock: ./api/mock
  staticMock: {
    enable: true,
    prefix: '/__staticMock__',  // api接口地址关键字
    regexpPrefix: /.*\/__staticMock__/, // mock正则表达式前缀
  },
}
