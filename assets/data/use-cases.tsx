import { ShieldAlertIcon, RadarIcon, BugIcon } from 'lucide-react'

export const useCasesData = [
  {
    name: 'CTI Teams',
    value: 'cti',
    image: '/images/use-cases/01.webp',
    icon: <ShieldAlertIcon />,
    title: 'CTI teams use vBrowser to covertly investigate threats on the dark web',
    description:
      'Cyber threat intelligence teams use Tor sessions to covertly access dark web forums, marketplaces, and threat actor infrastructure without exposing their identity or corporate IP. No bookmarks or cookies are saved — every session is ephemeral and destroyed on close. Analysts can install any additional tooling they need, while traffic logs and screenshots are captured automatically for downstream analysis.',
    link: '#',
    testimonials: [
      {
        id: '1',
        review: 'The Tor image lets our team monitor dark web forums covertly — no burned IPs, no leftover cookies.'
      },
      { id: '2', review: 'Knowing nothing persists after close makes dark web recon genuinely safe for our analysts.' },
      {
        id: '3',
        review: 'We install our own analysis tooling on the fly and the traffic logs go straight into our cases.'
      }
    ]
  },
  {
    name: 'SOC Analysts',
    value: 'soc',
    image: '/images/use-cases/02.webp',
    icon: <RadarIcon />,
    title: 'SOC analysts leverage vBrowser for phishing analysis and incident response',
    description:
      'Security operations teams use vBrowser to safely open suspicious links from phishing reports, capture the full request/response chain, and extract IOCs. Sessions are destroyed after analysis, ensuring no malware persists. All evidence is logged and ready for incident reports.',
    link: '#',
    testimonials: [
      { id: '1', review: 'Phishing triage that used to take 30 minutes now takes 5 with vBrowser.' },
      {
        id: '2',
        review: 'The mitmproxy integration gives us full visibility into what a phishing page does behind the scenes.'
      },
      {
        id: '3',
        review: 'No more spinning up disposable VMs — vBrowser handles isolation for us automatically.'
      }
    ]
  },
  {
    name: 'Malware Detonation',
    value: 'malware',
    image: '/images/use-cases/03.webp',
    icon: <BugIcon />,
    title: 'Analysts detonate malware in Kali or Ubuntu for dynamic and static analysis',
    description:
      'Spin up an isolated Kali Linux or Ubuntu desktop to safely detonate suspicious samples. Observe behavior in real time, capture network callbacks, and perform dynamic and static analysis in a disposable container. Analysts can download and install any additional tooling required — debuggers, disassemblers, sandbox agents — without touching corporate endpoints. The container is destroyed when the session ends.',
    link: '#',
    testimonials: [
      {
        id: '1',
        review: 'Detonating samples in a disposable Kali container replaced our entire on-prem sandbox.'
      },
      {
        id: '2',
        review: 'I install whatever reversing tools I need per session and never worry about contaminating my host.'
      },
      {
        id: '3',
        review: 'Dynamic and static analysis side-by-side in one isolated environment — game changer.'
      }
    ]
  }
]
