const isDev = process.env.NODE_ENV === 'development'
export default {
  title: 'imart', // web title
  isDev,
  // app proxy
  proxying: isDev && true,
  proxyKey: 'local', // global proxy
  proxyMap: {  // proxy prefix
    local: '/__local__',
    mock: '/__mock__',
    service: '/__service__',
  },
}
