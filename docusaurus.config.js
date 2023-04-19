// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '后端云',
  tagline: 'Dinosaurs are cool',
  favicon: 'https://avatars.githubusercontent.com/u/15382060?v=4',

  // Set the production url of your site here
  url: 'https://www.backendcloud.cn/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'backendcloud', // Usually your GitHub org/user name.
  projectName: '后端云', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/backendcloud/docusaurus/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/backendcloud/docusaurus/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '后端云',
        logo: {
          alt: 'My Site Logo',
          src: 'https://avatars.githubusercontent.com/u/15382060?v=4',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '知识库',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/backendcloud/backendcloud.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '站内导航：',
            items: [
              {
                label: '知识库',
                to: '/docs/intro',
              },
              {
                label: '博客',
                to: '/blog',
              },
            ],
          },
          // {
          //   title: '自媒体',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: '更多站外资源：',
            items: [
              {
                label: '存档的hexo博客（2023年04月17日之前的博客文章）',
                href: 'https://www.backendcloud.cn/2023/04/17/Hexo2Docusaurus/',
              },
              {
                label: 'GitHub（后端云网址里的所有示例代码的相关仓库）',
                href: 'https://github.com/backendcloud',
              },
              {
                label: 'GitHub（后端云网站的代码仓库）',
                href: 'https://github.com/backendcloud.github.io',
              },
              {
                label: 'GitHub（KubeFusion项目仓库）',
                href: 'https://github.com/kubefusion',
              },
              {
                label: 'GitHub（通用人工智能和自动化相结合的项目仓库）',
                href: 'https://github.com/AutoGeneralAI',
              },
              {
                label: 'GitHub（其他代码仓库）',
                href: 'https://github.com/c-hanwei',
              },
            ],
          },
        ],
        copyright: `苏ICP备15031601-2号 Copyright © ${new Date().getFullYear()} 后端云`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
