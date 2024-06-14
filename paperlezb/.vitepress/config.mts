import { defineConfig } from 'vitepress';
import timeline from "vitepress-markdown-timeline";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  title: "物语日报",
  description: "物语日报",
  // base: '/',
  markdown: {
    // 显示行号
    lineNumbers: true,

    // 时间线
    config: (md) => {
      md.use(timeline);
    },
  },

  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '最新一期', link: '/news/' }
    ],

    sidebar: [
      { text: '最新一期', link: '/news/' },
      { text: '加入我们！', link: '/join/' },
      {
        text: '前纸片乐子报内容',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '主页', link: '/papercard/LEZ-NEWS/' },
          {
            text: '乐子报内容',
            items: [
              { text: '2024.6.6', link: '/papercard/LEZ-NEWS/2024.6.6.md' },
              { text: '2024.6.4', link: '/papercard/LEZ-NEWS/2024.6.4.md' },
              { text: '2024.5.29', link: '/papercard/LEZ-NEWS/2024.5.29' },
              { text: '2024.5.28', link: '/papercard/LEZ-NEWS/2024.5.28' },
              { text: '2024.5.27', link: '/papercard/LEZ-NEWS/2024.5.27' },
              { text: '2024.5.26', link: '/papercard/LEZ-NEWS/2024.5.26' },
            ]
          },
            { text: 'FOR YOU', link: '/papercard/FORYOU/' },
            { text: 'PaperCard 史记', link: '/papercard/TOG/' },
          {
            text: '纸片乐子梗图',
            collapsible: true,
            collapsed: true,
            items: [
                 { text: '大头系列', link: '/papercard/GENGTU/2024年5月合集.md' },
                 { text: '萌新教学系列', link: '/papercard/GENGTU/纸片萌新教学系列.md' },
                 { text: '纸片乐子人系列', link: '/papercard/GENGTU/纸片乐子人系列.md' },
            ]
          },
          {
        text: '前纸片日报内容',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '2024.3.15', link: '/papercard/OLD-NEWS/01@2024.3.15.md' },
          { text: '2024.3.17', link: '/papercard/OLD-NEWS/02@2024.3.17.md' },
          { text: '2024.3.18', link: '/papercard/OLD-NEWS/03@2024.3.18.md' },
          { text: '2024.3.19', link: '/papercard/OLD-NEWS/04@2024.3.19.md' },
          { text: '2024.3.20', link: '/papercard/OLD-NEWS/05@2024.3.20.md' },
          { text: '2024.3.22', link: '/papercard/OLD-NEWS/06@2024.3.22.md' },
          { text: '2024.3.25', link: '/papercard/OLD-NEWS/07@2024.3.25.md' },
          { text: '2024.3.27', link: '/papercard/OLD-NEWS/08@2024.3.27.md' },
          { text: '2024.4.05', link: '/papercard/OLD-NEWS/09@2024.4.05.md' },
          { text: '2024.4.19', link: '/papercard/OLD-NEWS/10@2024.4.19.md' },
          { text: '[未发布]2024.3.14', link: '/papercard/OLD-NEWS/10@[未发布]2024.3.14.md' },
          { text: '[未发布]2024.3.16-3.17', link: '/papercard/OLD-NEWS/11@[未发布]2024.3.16-3.17.md' },
          { text: '[未发布]2024.3.27', link: '/papercard/OLD-NEWS/12@[未发布]2024.3.27.md' },
          { text: '[未完成]2024.4.18', link: '/papercard/OLD-NEWS/13@[未完成]2024.4.18.md' },
          { text: '[日报前生]为YuzuCITY制作的装饰报纸', link: '/papercard/OLD-NEWS/14@[日报前生]为YuzuCITY制作的装饰报纸.md' },
        ]
      }
            ]
          }
        ]
      },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NDSSTUDIO/ndsstudio.github.io' }
    ]
  }
)

