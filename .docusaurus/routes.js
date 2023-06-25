import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '757'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'c44'),
    exact: true
  },
  {
    path: '/blog/Auto-GPT',
    component: ComponentCreator('/blog/Auto-GPT', '8f0'),
    exact: true
  },
  {
    path: '/blog/claude',
    component: ComponentCreator('/blog/claude', '918'),
    exact: true
  },
  {
    path: '/blog/GFPGAN',
    component: ComponentCreator('/blog/GFPGAN', 'dd8'),
    exact: true
  },
  {
    path: '/blog/GUI-ChatGPT',
    component: ComponentCreator('/blog/GUI-ChatGPT', '988'),
    exact: true
  },
  {
    path: '/blog/Hexo2Docusaurus',
    component: ComponentCreator('/blog/Hexo2Docusaurus', '5a0'),
    exact: true
  },
  {
    path: '/blog/Hexo2DocusaurusBlog',
    component: ComponentCreator('/blog/Hexo2DocusaurusBlog', '68a'),
    exact: true
  },
  {
    path: '/blog/Hugging-Push',
    component: ComponentCreator('/blog/Hugging-Push', 'e7e'),
    exact: true
  },
  {
    path: '/blog/hugginggpt-paper',
    component: ComponentCreator('/blog/hugginggpt-paper', '6d0'),
    exact: true
  },
  {
    path: '/blog/MiniGPT-4',
    component: ComponentCreator('/blog/MiniGPT-4', 'dc8'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '403'),
    exact: true
  },
  {
    path: '/blog/tags/后端云发布的开源小项目',
    component: ComponentCreator('/blog/tags/后端云发布的开源小项目', '192'),
    exact: true
  },
  {
    path: '/blog/tags/通用人工智能',
    component: ComponentCreator('/blog/tags/通用人工智能', '5a2'),
    exact: true
  },
  {
    path: '/blog/tags/cicd',
    component: ComponentCreator('/blog/tags/cicd', '8c1'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'fef'),
    exact: true
  },
  {
    path: '/blog/tags/hexo',
    component: ComponentCreator('/blog/tags/hexo', '229'),
    exact: true
  },
  {
    path: '/blog/voice-assistant',
    component: ComponentCreator('/blog/voice-assistant', '165'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags', '923'),
    exact: true
  },
  {
    path: '/docs/tags/client-go',
    component: ComponentCreator('/docs/tags/client-go', 'ff6'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '676'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd0f'),
    routes: [
      {
        path: '/docs/category/通用人工智能',
        component: ComponentCreator('/docs/category/通用人工智能', '550'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/云原生',
        component: ComponentCreator('/docs/category/云原生', 'a7b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/client-go',
        component: ComponentCreator('/docs/category/client-go', 'e30'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cloud-native/client-go/client-go-01',
        component: ComponentCreator('/docs/cloud-native/client-go/client-go-01', 'd94'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cloud-native/client-go/client-go-02',
        component: ComponentCreator('/docs/cloud-native/client-go/client-go-02', 'b01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cloud-native/client-go/client-go-03',
        component: ComponentCreator('/docs/cloud-native/client-go/client-go-03', '222'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cloud-native/client-go/client-go-04',
        component: ComponentCreator('/docs/cloud-native/client-go/client-go-04', '656'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cloud-native/client-go/client-go-05',
        component: ComponentCreator('/docs/cloud-native/client-go/client-go-05', '4ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cloud-native/client-go/client-go-06',
        component: ComponentCreator('/docs/cloud-native/client-go/client-go-06', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cloud-native/client-go/client-go-07',
        component: ComponentCreator('/docs/cloud-native/client-go/client-go-07', 'e40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cloud-native/client-go/client-go-08',
        component: ComponentCreator('/docs/cloud-native/client-go/client-go-08', '182'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cloud-native/client-go/client-go-09',
        component: ComponentCreator('/docs/cloud-native/client-go/client-go-09', '46c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cloud-native/client-go/client-go-10',
        component: ComponentCreator('/docs/cloud-native/client-go/client-go-10', '07e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/general-ai/gpt4-for-free',
        component: ComponentCreator('/docs/general-ai/gpt4-for-free', '411'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/general-ai/gpt4-microsoft',
        component: ComponentCreator('/docs/general-ai/gpt4-microsoft', 'c57'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/general-ai/gpt4-release',
        component: ComponentCreator('/docs/general-ai/gpt4-release', '519'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/general-ai/poem2picture',
        component: ComponentCreator('/docs/general-ai/poem2picture', 'd04'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/general-ai/poetry',
        component: ComponentCreator('/docs/general-ai/poetry', 'c47'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/general-ai/Stable-Diffusion',
        component: ComponentCreator('/docs/general-ai/Stable-Diffusion', '1de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'eba'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
