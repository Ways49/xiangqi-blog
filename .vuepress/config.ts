import { defineUserConfig } from 'vuepress'
import { themeConfig } from './config/index'
import { recoTheme } from 'vuepress-theme-reco'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'

export default defineUserConfig({

  // 基础配置
  base: '/',
  debug: false,
  port: 8080,
  head: [
    ['meta', { 'http-equiv': 'expires', content: '0' }],
    ['meta', { 'http-equiv': 'pragram', content: 'no-cache' }],
    ['meta', { 'http-equiv': 'cache-control', content: 'no-cache, no-store, must-revalidate' }],
    ['meta', { name: 'application-name', content: '中国象棋开发' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: '中国象棋开发' }],
    ['link', { rel: 'icon', href: 'favicon.ico' }]
  ],

  // 多语言支持
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '中国象棋开发',
      description: '中国象棋开发',
    }
  },

  // 主题配置
  theme: recoTheme(themeConfig),

  // 插件配置
  plugins: [
    // 图片缩放
    mediumZoomPlugin({
      delay: 500
    }),
    // 站点地图
    sitemapPlugin({
      excludeUrls: ['/404.html'],
      hostname: 'https://www.xiangqi.cn',
    })
  ],

  // Markdown 配置
  markdown: {
    code: {
      lineNumbers: true
    }
  }

})
