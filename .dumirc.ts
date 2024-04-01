import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'tant-tabs',
  themeConfig: {
    name: 'tant-tabs',
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/rc-tabs/tant-tabs/',
  hash: true,
  history: {type: 'hash',},
  styles: ['https://td-fe.github.io/figma-tokens/variables.css'],
});
