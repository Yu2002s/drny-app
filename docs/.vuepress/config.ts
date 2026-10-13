import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "冬日暖雨App发布中心",
  description: "汇聚冬日暖雨应用程序的最新版本、历史更新、下载地址及使用指南。",

  bundler: viteBundler({
    viteOptions: {
      server: {
        proxy: {
          "/api": {
            target: "http://localhost:8080",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
          },
        },
      },
    },
  }),

  port: 80,

  theme,

  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://images.jdynb.xyz/logo.png",
      },
    ],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
    ],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    // SEO setup using meta tags for basic SEO. Theme-hope also handles this automatically.
    [
      "meta",
      {
        name: "keywords",
        content:
          "冬日暖雨 App, DongYuTVWeb, 软件发布, 版本更新, 官方下载, 历史版本, 公众号, 使用文档",
      },
    ],
    ["meta", { name: "theme-color", content: "#6366f1" }],
  ],
  // Should prefetch, prefetch plugin is enabled in theme
});
