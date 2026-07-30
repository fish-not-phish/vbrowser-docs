import {
  GlobeIcon,
  NetworkIcon,
  ShieldAlertIcon,
  TerminalIcon,
  BugIcon,
  ServerIcon
} from 'lucide-react'

import type { Navigation } from '@/components/layout/header-navigation'

export const navigationData: Navigation[] = [
  {
    title: 'Features',
    href: '/#features'
  },
  {
    title: 'Use cases',
    contentClassName: '!w-141 grid-cols-2',
    splitItems: true,
    items: [
      {
        type: 'section',
        title: 'Investigation & Analysis',
        items: [
          {
            title: 'Threat Investigation',
            href: '/#use-cases',
            description: 'Covertly investigate dark web threats over Tor.',
            icon: <ShieldAlertIcon className='size-4' />
          },
          {
            title: 'Phishing Analysis',
            href: '#',
            description: 'Capture network traffic and extract IOCs safely.',
            icon: <NetworkIcon className='size-4' />
          },
          {
            title: 'Malware Detonation',
            href: '#',
            description: 'Detonate samples in Kali or Ubuntu for dynamic and static analysis.',
            icon: <BugIcon className='size-4' />
          }
        ]
      },
      {
        type: 'section',
        title: 'Team & Infrastructure',
        items: [
          {
            title: 'Case Management',
            href: '#',
            description: 'Organize evidence, screenshots, and traffic logs per case.',
            icon: <TerminalIcon className='size-4' />
          },
          {
            title: 'Secure Access',
            href: '#',
            description: 'Persistent sessions with RBAC, MFA, and OIDC/SSO.',
            icon: <ShieldAlertIcon className='size-4' />
          },
          {
            title: 'Self-Hosted Deploy',
            href: '#',
            description: 'Run on AWS ECS Fargate with full data sovereignty.',
            icon: <ServerIcon className='size-4' />
          }
        ]
      }
    ]
  },
  {
    title: 'How it works',
    href: '/#works-features'
  },
  {
    title: 'FAQ',
    href: '/#faq'
  },
  {
    title: 'Docs',
    href: '/introduction'
  },
  {
    title: 'GitHub',
    href: 'https://github.com/fish-not-phish/open-vbrowser'
  }
]
