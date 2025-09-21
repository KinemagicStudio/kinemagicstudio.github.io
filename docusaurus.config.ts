import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Kinemagic Studio',
  tagline: '映像制作・ライブ配信のための3Dアバター動画撮影ソフトウェア',
  favicon: 'img/kinemagicstudio/KinemagicStudio_Icon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://kinemagicstudio.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KinemagicStudio', // Usually your GitHub org/user name.
  projectName: 'KinemagicStudio', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    localeConfigs: {
      ja: {
        label: '日本語',
      },
      en: {
        label: 'English',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus/docusaurus-social-card.jpg',
    navbar: {
      title: 'Kinemagic Studio',
      // logo: {
      //   alt: 'Kinemagic Studio Logo',
      //   src: 'img/docusaurus/logo.svg',
      // },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'releaseNotesSidebar',
          label: '更新履歴',
          position: 'left',
        },
        {
          to: 'docs/terms-of-use',
          label: '利用規約',
          position: 'left',
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'termsSidebar',
        //   label: '利用規約',
        //   position: 'left',
        // },
        {
          type: 'docSidebar',
          sidebarId: 'licenseInformationSidebar',
          label: 'ライセンス情報',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'YouTube',
              href: 'https://youtube.com/@kinemagicstudio',
            },
            {
              label: 'X',
              href: 'https://twitter.com/kinemagicstudio',
            },
          ],
        },
        {
          title: 'Others',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/KinemagicStudio',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kinemagic Studio. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
