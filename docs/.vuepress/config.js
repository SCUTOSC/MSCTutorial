module.exports = {
  base: '/',
  title: 'MSC实验教程',
  description: 'Welcome!',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        // linux教案结构
        text: '任务书',
        link: '/tasks/'
      },

    ],
    sidebar: {
      '/tasks/': [
        '',
        '1-ubuntu-install/',
        '2-learn-git-command/',
        '3-write-bubble-sort-on-linux/',
      ],

    }
  },
  plugins: ['@vuepress/nprogress']
}

