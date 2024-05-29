// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';

export default {
  ...DefaultTheme,
  async enhanceApp() {
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d({
        models: [
          {
            path: 'https://raw.githubusercontent.com/oh-my-live2d/live2d-models/main/models/cat-white/model.json'
          }
        ]
      });
    }
  }
};