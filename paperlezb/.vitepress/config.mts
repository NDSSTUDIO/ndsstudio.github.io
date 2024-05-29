import { defineConfig } from 'vitepress';
import timeline from "vitepress-markdown-timeline";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  title: "纸片乐子报",
  description: "纸片乐子报",
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
      { text: '最新一期', link: '/03@纸片乐子报往期内容/2024.5.28.md' }
    ],

    sidebar: [
      {
        text: '乐子报内容',
        items: [
          { text: '最新一期纸片乐子报！', link: '/03@纸片乐子报往期内容/2024.5.28.md' },
          { text: '2024.5.27', link: '/03@纸片乐子报往期内容/2024.5.27' },
          { text: '2024.5.26', link: '/03@纸片乐子报往期内容/2024.5.26' },
        ]
      },
      {
        text: '纸片乐子梗图',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '大头系列', link: '/05@纸片乐子梗图/2024年5月合集.md' },
          { text: '萌新教学系列', link: '/05@纸片乐子梗图/纸片萌新教学系列.md' },
          { text: '纸片乐子人系列', link: '/05@纸片乐子梗图/纸片乐子人系列.md' },


        ]
      },
            {
        text: '前纸片日报内容',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '2024.3.15', link: '/04@前纸片日报内容/01@2024.3.15.md' },
          { text: '2024.3.17', link: '/04@前纸片日报内容/02@2024.3.17.md' },
          { text: '2024.3.18', link: '/04@前纸片日报内容/03@2024.3.18.md' },
          { text: '2024.3.19', link: '/04@前纸片日报内容/04@2024.3.19.md' },
          { text: '2024.3.20', link: '/04@前纸片日报内容/05@2024.3.20.md' },
          { text: '2024.3.22', link: '/04@前纸片日报内容/06@2024.3.22.md' },
          { text: '2024.3.25', link: '/04@前纸片日报内容/07@2024.3.25.md' },
          { text: '2024.3.27', link: '/04@前纸片日报内容/08@2024.3.27.md' },
          { text: '2024.4.05', link: '/04@前纸片日报内容/09@2024.4.05.md' },
          { text: '2024.4.19', link: '/04@前纸片日报内容/10@2024.4.19.md' },
          { text: '[未发布]2024.3.14', link: '/04@前纸片日报内容/10@[未发布]2024.3.14.md' },
          { text: '[未发布]2024.3.16-3.17', link: '/04@前纸片日报内容/11@[未发布]2024.3.16-3.17.md' },
          { text: '[未发布]2024.3.27', link: '/04@前纸片日报内容/12@[未发布]2024.3.27.md' },
          { text: '[未完成]2024.4.18', link: '/04@前纸片日报内容/13@[未完成]2024.4.18.md' },
          { text: '[日报前生]为YuzuCITY制作的装饰报纸', link: '/04@前纸片日报内容/14@[日报前生]为YuzuCITY制作的装饰报纸.md' },


        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NDSSTUDIO/ndsstudio.github.io' }
    ]
  }
})

