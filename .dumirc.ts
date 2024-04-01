import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'dist',
  themeConfig: {
    name: 'tant-tabs',
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/rc-tabs/tant-tabs/',
  hash: true,
  history: {type: 'hash',},
});
