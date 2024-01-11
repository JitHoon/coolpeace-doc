const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Cool Peace",
  tagline: "사용하기 Cool~한 백오피스",
  favicon: "img/favicon.ico",

  url: "https://cool-peace-dev.vercel.app",
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          blogTitle: "Cool Peace FE",
          blogDescription: "Cool Peace FE 팀 개발 기록",
          blogSidebarCount: "ALL",
          blogSidebarTitle: "Cool Peace FE 개발 기록",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Cool Peace",
        logo: {
          alt: "Cool Peace",
          src: "img/logo.svg",
        },
        items: [
          {
            label: "이용 가이드",
            sidebarId: "guide",
            type: "docSidebar",
            position: "right",
          },
          {
            label: "Team",
            sidebarId: "team",
            type: "docSidebar",
            position: "right",
          },
          { to: "blog", label: "FE Tech Blog", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Contributors",
          },
          {
            title: "Team Cool Peace",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/CoolPeace-yanolza",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cool Peace`,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          name: "keywords",
          content: "쿨피스 X 야놀자",
        },
      ],
    }),
};

module.exports = config;
