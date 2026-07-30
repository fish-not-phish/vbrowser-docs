import { RocketIcon, MousePointerClickIcon, FileSearchIcon } from 'lucide-react'

export const WorksFeaturesData = [
  {
    id: 'deploy-session',
    icon: <RocketIcon />,
    title: 'Deploy a session',
    description:
      'Choose from 15+ pre-built browser images — Chrome, Firefox, Tor, Brave, Kali Linux — and vBrowser provisions a fresh, isolated container on AWS ECS Fargate in seconds.'
  },
  {
    id: 'investigate',
    icon: <MousePointerClickIcon />,
    title: 'Investigate securely',
    description:
      'Browse, interact, and collect intelligence in the isolated environment. All network traffic is captured via mitmproxy, screenshots are taken automatically, and downloads are protected with AES-256 encryption.'
  },
  {
    id: 'review-evidence',
    icon: <FileSearchIcon />,
    title: 'Review & export evidence',
    description:
      'When the session ends, the container is destroyed. Traffic logs, screenshots, and protected files are attached to the case — ready for export, sharing, or compliance archival.'
  }
]
