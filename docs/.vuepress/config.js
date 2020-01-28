/**
 * https://vuepress.vuejs.org/zh/config/
 */

module.exports = {
  title: 'vue-imart-manage',
  description: 'vue-imart-manage',
  host: '127.0.0.1',
  port: '9090',
  dest: 'public/docs', // build dest directory base current project root
  base: '/docs/',
  // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      {
        text: 'Languages',
        items: [
          { text: '简体中文', link: '/language/chinese/' },
          { text: 'English', link: '/language/english/' }
        ]
      },
      { text: 'GitHub', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '指南',   // 必要的
        children: [
          ['/guide/', '介绍'],
          ['/guide/getting-started', '快速上手'],
        ]
      },
      {
        title: '高级',   // 必要的
        children: [
          ['/guide/reference', '第三方库使用'],
        ]
      },
      ['/guide/other', '其它'],
    ],
    lastUpdated: 'Last Updated', // string | boolean
  },
}