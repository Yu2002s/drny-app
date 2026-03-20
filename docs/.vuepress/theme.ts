import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  hostname: "https://app.jdynb.xyz", // set proper hostname for seo plugin feature

  author: {
    name: "冬日暖雨",
    url: "https://www.jdynb.xyz",
  },
  logo: "https://images.jdynb.xyz/logo.png",

  repo: "yu2002s", // Optional repo link

  docsDir: "docs",

  locales: {
    "/": {
      // navbar
      navbar: ["/", "/changelog/", "/download/", "/faq/", "/join/"],

      // sidebar
      sidebar: {
        "/changelog/": "structure",
        "/download/": "structure",
        "/faq/": "structure",
        "/join/": "structure",
      },

      displayFooter: true,
      footer: "冬日暖雨App发布",
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
