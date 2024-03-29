import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'dist',
  themeConfig: {
    name: '@tant-tabs',
  },
  hash: true,
  history: {type: 'hash',},
});
