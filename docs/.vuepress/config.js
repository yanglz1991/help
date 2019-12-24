module.exports = {
  title: '大气环境监测数据平台',
  description: '专注环境监测',
  base: '',
  sidebar: 'auto',
  themeConfig: {
    sidebarDepth: 2,
    logo: 'https://www.pku.edu.cn/img/pkulogo_red.png',
    nav: [
      { text: '首页', link: '/' },
      // { text: '在线质控', link: '/content/' },
      { text: '进入平台', link: 'http://39.99.186.208/' },
    ],
    sidebar: {
      '/': [
        'a',
        'b',
      ]
    }
  }
}