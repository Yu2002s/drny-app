import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  hostname: "https://app.jdynb.xyz", // set proper hostname for seo plugin feature

  author: {
    name: "冬日暖雨",
    url: "https://www.jdynb.xyz",
  },
  logo: "https://images.jdynb.xyz/logo.png",

  repo: "yu2002s/drny-app", // Optional repo link

  docsDir: "docs",

  // 外观：主题色选择器（颜色列表在 styles/config.scss 中定义）+ 全屏按钮
  themeColor: true,
  fullscreen: true,
  print: false,

  // 导航栏：移动端滚动时自动隐藏
  navbarAutoHide: "mobile",
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Repo", "Outlook"],
  },

  locales: {
    "/": {
      // navbar
      navbar: [
        "/",
        "/changelog/",
        "/download/",
        "/faq/",
        "/join/",
        "/webview/",
      ],

      // sidebar
      sidebar: {
        "/changelog/": "structure",
        "/download/": "structure",
        "/faq/": "structure",
        "/join/": "structure",
      },

      displayFooter: true,
      footer: "冬日暖雨 App 发布中心 · 持续更新",
      copyright: "Copyright © 2026 冬日暖雨",

      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  plugins: {
    // Enable features like blog or SEO
    blog: false,

    seo: true, // Generate correct meta-tags, sitemap if hostname set

    // 使用 iconify 图标集，统一图标风格
    icon: {
      assets: "iconify",
    },

    components: {
      components: ["Badge", "VPCard"], // Use built in styling tools
    },
  },
  // built-in markdown enhancements
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    playground: {
      presets: ["ts", "vue"],
    },
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    vPre: true,
    vuePlayground: true,
  },
});
