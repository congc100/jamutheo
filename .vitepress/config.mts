import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: '/jamutheo/',
  cleanUrls: true,
  appearance: false,

  lang: 'zh-CN',
  title: "Jamutheo 笔记",
  description: "现代流行爵士和声",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    sidebarMenuLabel: '章节列表',
    returnToTopLabel: '返回顶部',
    outline: {
      label: '本章目录',
      level: 'deep',
    },
    docFooter: {
      prev: '上一章',
      next: '下一章',
    },

    nav: [
      { text: '主页', link: '/' },
      { text: '基本概念', link: '/basic/01-音程' },
      { text: '大调和声', link: '/major/05-自然和弦功能' },
      { text: '补充知识', link: '/misc/09-小调和声' },
    ],

    sidebar: [
      {
        text: '基本概念',
        collapsed: false,
        items: [
          { text: '01-音程', link: '/basic/01-音程' },
          { text: '02-和弦', link: '/basic/02-和弦' },
          { text: '03-扩展音', link: '/basic/03-扩展音' },
          { text: '04-调式音阶', link: '/basic/04-调式音阶' },
        ],
      },
      {
        text: '大调和声',
        collapsed: false,
        items: [
          { text: '05-自然和弦功能', link: '/major/05-自然和弦功能' },
          { text: '06-属和弦功能', link: '/major/06-属和弦功能' },
          { text: '07-相关2级和弦功能', link: '/major/07-相关2级和弦功能' },
          { text: '08-调式转换和弦功能', link: '/major/08-调式转换和弦功能' },
          { text: '09-替代属和弦', link: '/major/09-替代属和弦' },
          { text: '10-减七和弦', link: '/major/10-减七和弦' },
          // { text: '', link: '' },
        ],
      },
      {
        text: '补充知识',
        collapsed: false,
        items: [
          { text: '11-小调和声', link: '/misc/11-小调和声' },
          { text: '12-布鲁斯', link: '/misc/12-布鲁斯' },
          { text: '13-惯用线', link: '/misc/13-惯用线' },
        ],
      },
    ],
  }
})
