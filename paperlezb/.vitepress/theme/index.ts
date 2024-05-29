// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'

import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";

// 只需添加以下一行代码，引入时间线样式
import "vitepress-markdown-timeline/dist/theme/index.css";

export default {
  extends: DefaultTheme,
  ...DefaultTheme,
  enhanceApp(ctx) {
      DefaultTheme.enhanceApp(ctx);
      // ...
    },
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();
        
    // giscus配置
    giscusTalk({
      repo: 'NDSSTUDIO/ndsstudio.github.io', //仓库
      repoId: 'R_kgDOMBN3rw', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDOMBN3r84CfsFx', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
  },
}