import { ShieldAlertIcon, RadarIcon, EyeIcon } from 'lucide-react'

export const useCasesData = [
  {
    name: 'CTI Teams',
    value: 'cti',
    image: '/images/use-cases/01.webp',
    icon: <ShieldAlertIcon />,
    title: 'CTI teams use vBrowser to investigate threats in isolated environments',
    description:
      'Cyber threat intelligence teams launch ephemeral browser sessions to visit suspicious URLs, detonate exploits, and capture indicators of compromise — all without risking their endpoints. Full traffic logs and screenshots are automatically attached to cases for downstream analysis.',
    link: '#',
    testimonials: [
      {
        id: '1',
        review: 'vBrowser lets us detonate payloads safely. The traffic logs are invaluable for IOC extraction.'
      },
      { id: '2', review: 'We\'ve replaced our fragile VM-based analysis pipeline with vBrowser sessions.' },
      {
        id: '3',
        review: 'Capturing screenshots in isolated sessions saves our analysts hours per investigation.'
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
    name: 'OSINT Investigators',
    value: 'osint',
    image: '/images/use-cases/03.webp',
    icon: <EyeIcon />,
    title: 'OSINT investigators use vBrowser to collect intelligence anonymously',
    description:
      'Open-source intelligence teams use Tor and Brave sessions to gather information without exposing their identity or infrastructure. Persistent sessions preserve bookmarks and cookies across investigations, while screenshots and traffic logs provide a verifiable evidence chain.',
    link: '#',
    testimonials: [
      {
        id: '1',
        review: 'The Tor browser image lets us investigate without burning our own IP addresses.'
      },
      {
        id: '2',
        review: 'Persistent workspaces keep our investigation context organized across sessions.'
      },
      {
        id: '3',
        review: 'Automatic screenshot capture creates a defensible evidence trail for our reports.'
      }
    ]
  }
]
