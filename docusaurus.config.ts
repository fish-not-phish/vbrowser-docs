import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'vBrowser',
  tagline: 'vBrowser – Secure & Isolated Virtual Browser',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.vbrowser.io',
  baseUrl: '/',

  organizationName: 'fishnotphish', 
  projectName: 'vbrowser-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'description',
        content:
          'vBrowser provides disposable, isolated browser sessions for malware analysis, OSINT, phishing investigation, and secure web access.',
      },
      {
        name: 'keywords',
        content:
          'virtual browser, isolated browser, disposable browser, sandbox browser, secure browsing, malware analysis, phishing analysis, OSINT, cybersecurity tools',
      },
      { name: 'robots', content: 'index, follow' },

      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'vBrowser' },
      {
        property: 'og:title',
        content: 'vBrowser – Secure & Isolated Virtual Browser',
      },
      {
        property: 'og:description',
        content:
          'Launch disposable browser sessions for security research, malware analysis, and safe web interaction.',
      },
      {
        property: 'og:image',
        content: 'https://docs.vbrowser.io/img/social-card.png',
      },

      // Twitter / X
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@vbrowser_io' },
      {
        name: 'twitter:title',
        content: 'vBrowser – Secure & Isolated Virtual Browser',
      },
      {
        name: 'twitter:description',
        content:
          'Disposable browser environments built for cybersecurity professionals.',
      },
      {
        name: 'twitter:image',
        content: 'https://docs.vbrowser.io/img/social-card.png',
      },
    ],

    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'canonical',
          href: 'https://docs.vbrowser.io/',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'dns-prefetch',
          href: 'https://fonts.googleapis.com',
        },
      },
      {
        tagName: 'script',
        attributes: {
          type: 'application/ld+json',
        },
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'vBrowser',
          operatingSystem: 'Linux',
          applicationCategory: 'SecurityApplication',
          description:
            'Disposable, isolated browser sessions for malware analysis, OSINT, and secure browsing.',
          url: 'https://docs.vbrowser.io',
          openSource: true,
          sameAs: [
            'https://github.com/fish-not-phish/open-vbrowser',
            'https://x.com/vbrowser_io',
          ],
          publisher: {
            '@type': 'Organization',
            name: 'vBrowser',
            url: 'https://vbrowser.io',
          },
        }),
      },
    ],
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'vBrowser',
      logo: {
        alt: 'vBrowser Logo',
        src: 'img/vbrowser-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
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
              label: 'Docs',
              to: '/docs/getting-started/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'X',
              href: 'https://x.com/vbrowser_io',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/fish-not-phish/open-vbrowser',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} vBrowser. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
