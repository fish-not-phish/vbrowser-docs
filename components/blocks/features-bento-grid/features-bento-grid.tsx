import SectionHeader from '@/components/blocks/section-header'

import SecureTransparent from '@/components/blocks/features-bento-grid/secure-transparent'
import SmartWorkflow from '@/components/blocks/features-bento-grid/smart-workflow'
import CrossPlatform from '@/components/blocks/features-bento-grid/cross-platform'
import MultiAI from '@/components/blocks/features-bento-grid/multi-ai'
import RealTime from '@/components/blocks/features-bento-grid/real-time'

const BentoGrid = () => {
  return (
    <section id='features'>
      <SectionHeader
        title='Features'
        description='Isolated browser sessions with full traffic logging, screenshot capture, and file protection — all self-hosted in your AWS account.'
      />
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-7xl grid-cols-1 border-x sm:grid-cols-2 lg:grid-cols-3'>
          <div className='flex flex-col gap-8 overflow-hidden py-6 max-sm:border-b'>
            <SecureTransparent />
            <div className='space-y-4 px-4 sm:px-6 lg:px-8'>
              <h3 className='text-xl font-medium'>Secure & Isolated</h3>
              <p className='text-muted-foreground'>
                Every session runs in a disposable container on AWS ECS Fargate. No malware, cookies, or artifacts
                reach your endpoint — the container is destroyed when the session ends.
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-6 overflow-hidden py-6 sm:border-l lg:border-x'>
            <SmartWorkflow />
            <div className='space-y-4 px-8'>
              <h3 className='text-xl font-medium'>Automated Traffic Logging</h3>
              <p className='text-muted-foreground'>
                All HTTP/HTTPS traffic is captured via mitmproxy and stored per session. Export logs in HAR format
                for analysis or attach them directly to cases as evidence.
              </p>
            </div>
          </div>

          <div className='group flex flex-col gap-6 overflow-hidden pb-6 max-lg:order-1 max-lg:border-t sm:max-lg:border-r'>
            <CrossPlatform />
            <div className='space-y-4 px-8'>
              <h3 className='text-xl font-medium'>15+ Browser Images</h3>
              <p className='text-muted-foreground'>
                Choose from Chrome, Firefox, Tor, Brave, Kali Linux, and more — including Terminal, code-server, and
                Ubuntu desktop environments. Each image is pre-configured and ready to launch — or build your own
                custom images with specific tooling.
              </p>
            </div>
          </div>

          <div className='flex flex-col overflow-hidden border-t pb-6 sm:col-span-2 lg:border-r'>
            <MultiAI />
            <div className='space-y-4 px-8'>
              <h3 className='text-xl font-medium'>Case Management & RBAC</h3>
              <p className='text-muted-foreground'>
                Organize sessions, screenshots, and traffic logs into cases. Assign to team members, track status, and
                control access with role-based permissions, MFA, and OIDC/SSO.
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-6 overflow-hidden border-t py-6 max-lg:order-1'>
            <RealTime />
            <div className='space-y-4 px-8'>
              <h3 className='text-xl font-medium'>Real-Time Session Monitoring</h3>
              <p className='text-muted-foreground'>
                Track active sessions, capture screenshots, and access all session activity and file downloads. Receive
                instant updates whenever a case you are tagged in changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BentoGrid
