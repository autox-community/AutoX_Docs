import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import { pluginShiki } from '@rspress/plugin-shiki';
import { pluginFontOpenSans } from 'rspress-plugin-font-open-sans';
import readingTime from 'rspress-plugin-reading-time';
import pluginSitemap from 'rspress-plugin-sitemap';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'AutoX 文档',
  icon: '/rspress-icon.png',
  logoText: 'AutoX',
  lang: 'zh',
  locales: [
    {
      lang: 'zh',
      label: '简体中文',
    }
  ],
  logo: {
    light: '/rspress-icon.png',
    dark: '/rspress-icon.png',
  },
  base: '/AutoX_Docs/',
  markdown: {
    showLineNumbers: true,
  },
  search: {
    codeBlocks: true,
  },
  plugins: [
    pluginShiki(), // 会降低编译速度
    pluginFontOpenSans(),
    readingTime({
      defaultLocale: 'zh-CN',
    }),
    pluginSitemap(
      {
        domain: "https://autox-community.github.io",
        defaultChangeFreq: 'weekly',
      }
    )
  ],
  themeConfig: {
    outlineTitle: '内容导航',
    lastUpdated: true,
    lastUpdatedText: '最后更新时间',
    prevPageText: '上一页',
    nextPageText: '下一页',
    searchPlaceholderText: '全文搜索',
    searchNoResultsText: '没有找到',
    searchSuggestedQueryText: '请使用其他关键字重试',
    hideNavbar: 'auto',
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
    sourceCodeText: '源码',
    enableScrollToTop: true,
    // footer: {
    //   message: 'AutoX ❤ Auto.js'
    // },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/autox-community',
      },
    ],
    nav: [
      { text: '主页', 'link': 'overview' }
    ],
    sidebar: {
      "/": [
        { text: '主页', link: 'overview' },
        { text: '关于', link: 'documentation' },
        {
          text: '基础',
          items: [
            { text: '用户界面 - ui', link: 'ui' },
            { text: 'App - app', link: 'app' },
            { text: '设备 - device', link: 'device' },
            { text: '全局变量与函数', link: 'globals' },
            { text: '基于控件的操作', link: 'widgetsBasedAutomation' },
            { text: '基于坐标的操作', link: 'coordinatesBasedAutomation' },
            { text: '按键模拟 - keys', link: 'keys' },
            { text: '文件系统 - files', link: 'files' },
            { text: 'HTTP', link: 'http' },
            { text: 'Websocket', link: 'websocket' },
            { text: '本地存储 - storages', link: 'storages' },
            { text: '控制台 - console', link: 'console' },
            { text: '定时器 - timers', link: 'timers' },
          ]
        },
        {
          text: '高级',
          items: [
            { text: '多线程 - threads', link: 'threads' },
            { text: '对话框 - dialogs', link: 'dialogs' },
            { text: '悬浮窗 - floaty', link: 'floaty' },
            { text: '脚本引擎 - engines', link: 'engines' },
            { text: '画布 - canvas', link: 'canvas' },
            { text: '模块 - modules', link: 'modules' },
            { text: 'OCR 文字识别', link: 'ocr' },
            { text: '图片与颜色 - images', link: 'images' },
            { text: '事件与监听 - events', link: 'events' },
            { text: 'Base64 - base64', link: 'base64' },
            { text: '消息处理 - crypto', link: 'crypto' },
            { text: '压缩与解压 - zips', link: 'zips' },
            { text: '多媒体 - media', link: 'media' },
            { text: '传感器 - sensors', link: 'sensors' },
            { text: '协程 - continuation', link: 'continuation' },
            { text: 'WebView 与 HTML', link: 'webViewAndHtml' },
            { text: '执行命令 - Shell', link: 'shell' },
            { text: '调用 Java', link: 'workWithJava' },
            { text: 'axios', link: 'axios' },
            { text: 'mqtt', link: 'mqtt' },
          ]
        },
        {
          text: 'npm 模块',
          items: [
            { text: 'cheerio', link: 'npm/cheerio' },
            { text: 'buffer', link: 'npm/buffer' },
            { text: 'stream', link: 'npm/stream' },
            { text: 'event-stream', link: 'npm/event-stream' },
            { text: 'events', link: 'npm/events' },
            { text: 'lodash', link: 'npm/lodash' },
            { text: 'rxjs', link: 'npm/rxjs' },
          ]
        },
        { text: '常见问题', link: 'qa' },
      ]
    }
  },
});
