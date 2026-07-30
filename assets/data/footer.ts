export type FooterLink = {
  title: string
  href: string
}

export type FooterSection = {
  title: string
  links: FooterLink[]
}

export const footerData: FooterSection[] = [
  {
    title: 'Pages',
    links: [
      { title: 'Features', href: '/#features' },
      { title: 'Use cases', href: '/#use-cases' },
      { title: 'How it works', href: '/#works-features' },
      { title: 'FAQ', href: '/#faq' }
    ]
  },
  {
    title: 'Documentation',
    links: [
      { title: 'Introduction', href: '/introduction' },
      { title: 'Getting Started', href: '/getting-started' },
      { title: 'Installation', href: '/installation' },
      { title: 'Browser Images', href: '/browsers' },
      { title: 'Usage', href: '/usage/launching-a-session' },
      { title: 'Security', href: '/security' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { title: 'GitHub', href: 'https://github.com/fish-not-phish/open-vbrowser' },
      { title: 'Issue Tracker', href: 'https://github.com/fish-not-phish/open-vbrowser/issues' },
      { title: 'Releases', href: 'https://github.com/fish-not-phish/open-vbrowser/releases' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { title: 'License', href: 'https://github.com/fish-not-phish/open-vbrowser/blob/main/LICENSE' },
      { title: 'Security Policy', href: 'https://github.com/fish-not-phish/open-vbrowser/security/policy' },
      { title: 'Privacy', href: '#' }
    ]
  }
]
