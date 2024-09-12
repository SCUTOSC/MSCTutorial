module.exports = {
  base: '/',
  title: 'OSC实验教程',
  description: 'Welcome!',
  head: [
    ['link', { rel: 'icon', href: '/favicon.jpg' }]
  ],
  themeConfig: {
    logo: '/osc_icon.jpg',
    repo: 'scutosc/MSCTutorial',
    editLinks: true,
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkText: '帮助我们改善此页面！',
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
        '1-introduce-to-linux/',
        '2-learn-git/',
        '3-write-bubble-sort-on-linux/',
        '4-learn-markdown/',
      ],

    },
  },
  plugins: ['@vuepress/nprogress', '@vuepress/back-to-top', '@vuepress/plugin-last-updated'],
  markdown: {
    lineNumbers: true
  },

}

