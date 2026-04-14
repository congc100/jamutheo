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
    outline: {
      label: "目录"
    },
    docFooter: {
      prev: false,
      next: false,
    },

    nav: [
      { text: '主页', link: '/' },
      { text: '基本概念', link: '/basic/01-音程' },
      { text: '大调音阶', link: '/major/major' },
      { text: '小调音阶', link: '/minor/minor' },
    ],

    sidebar: {
      '/basic/': [
        {
          text: '基本概念',
          items: [
            { text: '01-音程', link: '/basic/01-音程' },
            { text: '02-和弦', link: '/basic/02-和弦' },
            { text: '03-调式转换', link: '/basic/03-调式转换' },
            { text: '04-中古调式', link: '/basic/04-中古调式' },
          ]
        }
      ],
      '/major/': [
        {
          text: '大调音阶',
          items: [
            { text: 'major', link: '/major/major' },
            { text: 'Runtime API Examples', link: '/major/api-examples' },
          ]
        }
      ],
      '/minor/': [
        {
          text: '小调音阶',
          items: [
            { text: 'minor', link: '/minor/minor' },
            { text: 'Markdown Examples', link: '/minor/markdown-examples' },
          ]
        }
      ],
    },
  }
})
