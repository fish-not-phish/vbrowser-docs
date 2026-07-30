export type FAQItem = {
  question: string
  answer: string
}

export const faqData: FAQItem[] = [
  {
    question: 'What is vBrowser?',
    answer:
      'vBrowser is a self-hosted browser isolation platform that spins up ephemeral browser sessions on AWS ECS Fargate. It provides secure, isolated environments for threat investigation, SOC analysis, OSINT gathering, and other security workflows — with full traffic logging, screenshot capture, and file protection built in.'
  },
  {
    question: 'How does browser isolation work?',
    answer:
      'When you launch a session, vBrowser provisions a fresh container on AWS ECS Fargate running your chosen browser image. The browser executes in the container — not on your machine. You interact with it through a web-based viewer. When the session ends, the container is destroyed, ensuring no malware or artifacts reach your endpoint.'
  },
  {
    question: 'What browser images are available?',
    answer:
      'vBrowser ships with 15+ pre-built images including Google Chrome, Mozilla Firefox, Tor Browser, Brave, and Kali Linux with full tooling. You can also build custom images tailored to your team\'s requirements with specific extensions, bookmarks, or tools pre-installed.'
  },
  {
    question: 'How is network traffic logged?',
    answer:
      'Every session routes traffic through a built-in mitmproxy instance that captures all HTTP/HTTPS requests and responses. Logs are stored per session and can be exported in HAR format for analysis or attached to cases as evidence.'
  },
  {
    question: 'Can I download files safely?',
    answer:
      'Yes. Files downloaded during a session are automatically packaged into password-protected 7-Zip archives with AES-256 encryption. The password is documented in the session details, ensuring files are safe to transfer without risk of inadvertent execution.'
  },
  {
    question: 'What authentication methods are supported?',
    answer:
      'vBrowser supports MFA (TOTP), OIDC/SAML SSO (Okta, Azure AD, Google Workspace, Keycloak), and role-based access control (RBAC). You can define custom roles with granular permissions for browser images, session duration, and administrative functions.'
  },
  {
    question: 'Is vBrowser self-hosted?',
    answer:
      'vBrowser uses a hybrid deployment model. The core infrastructure — including the web app, database, and case management — is self-hosted in your AWS account. Browser and application compute is managed by AWS ECS Fargate, which provisions and destroys containers on demand. No data leaves your environment.'
  },
  {
    question: 'What infrastructure do I need?',
    answer:
      'You need an AWS account with ECS Fargate, an Application Load Balancer, and optionally S3 for persistent storage and CloudWatch for logs. You also need a Cloudflare account for DNS management. The minimum deployment runs in a single region with a NAT Gateway. Full deployment requirements are documented in the installation guide.'
  },
  {
    question: 'How does case management work?',
    answer:
      'vBrowser includes a built-in case management system. You can create cases, attach session recordings, screenshots, traffic logs, and notes. Cases can be assigned to team members, tagged, and tracked through custom workflows. All actions are recorded in the audit log for compliance.'
  },
  {
    question: 'Can multiple analysts use vBrowser simultaneously?',
    answer:
      'Yes. vBrowser supports concurrent sessions across multiple users. Workspaces allow you to group sessions and cases by team or project. Each session runs in its own isolated container, so there is no cross-contamination between users.'
  }
]
