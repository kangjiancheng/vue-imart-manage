const isDev = process.env.NODE_ENV === 'development'

export default {
  title: document.title || 'imart-manage', // web title
  isDev,

  // 设置全局url前缀
  proxy: {
    enable: isDev && true,
    current: 'local', // current the global proxy， the baseURLMap key name
    baseURLs: { // url 前缀列表
      local: '/__local__',
      server: '/__server__', // for remote server
      mock: '/__mock__', // for remote mock
      staticMock: '/__staticMock__', // 本地静态mock前缀
    },
    staticMockPrefix: /.*\/__staticMock__/, // mock 正则表达式前缀
  },
}
