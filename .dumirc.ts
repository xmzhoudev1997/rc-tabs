import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'dist',
  themeConfig: {
    name: 'rc-tabs',
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/rc-tabs/rc-tabs/',
  hash: true,
  history: {type: 'hash',},
});
