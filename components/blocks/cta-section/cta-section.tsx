import Link from 'next/link'

import { PrimaryOrionButton, SecondaryOrionButton } from '@/components/ui/orion-button'
import { Card, CardContent } from '@/components/ui/card'
import { NumberTicker } from '@/components/ui/number-ticker'
import Grill from '@/assets/svg/grill'

type Stat = {
  number: number
  pointNumber?: number
  suffix: string
  description: string
}

type CTAProps = {
  stats: Stat[]
}

const CTA = ({ stats }: CTAProps) => {
  return (
    <section className='px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl border-x'>
        <div className='grid grid-cols-1 gap-0 md:grid-cols-2'>
          {/* Left Column - Content */}
          <div className='p-4'>
            <Card className='relative z-1 flex h-full items-center justify-center overflow-hidden shadow-none'>
              <CardContent className='lg:px-3.5'>
                <h2 className='mb-4 text-2xl leading-tight font-semibold md:text-3xl lg:text-4xl'>
                  Deploy isolated browser sessions in minutes
                </h2>
                <p className='text-muted-foreground mb-24 text-lg'>
                  Self-host vBrowser in your AWS account and give your team secure, isolated browser environments for
                  threat investigation, phishing analysis, and OSINT gathering. No data leaves your infrastructure.
                </p>
                <div className='flex flex-col gap-3 sm:flex-row sm:gap-4'>
                  <PrimaryOrionButton size='lg' asChild>
                    <Link href='https://github.com/fish-not-phish/open-vbrowser'>Get started</Link>
                  </PrimaryOrionButton>
                  <SecondaryOrionButton size='lg' asChild>
                    <Link href='/introduction'>Read the docs</Link>
                  </SecondaryOrionButton>
                </div>
              </CardContent>
              <div className='absolute top-1/3 right-[-34%] -z-1 rotate-45 max-lg:hidden'>
                <div className='absolute inset-0 shadow-[inset_0px_0px_20px_20px_var(--card)]'></div>
                <Grill className='' />
              </div>
            </Card>
          </div>
          {/* Right Column - Stats */}
          <div className='flex flex-col justify-center max-md:border-t md:border-l'>
            {stats.map((stat, index) => (
              <div key={index} className='space-y-3 border-b px-6 py-6 last:border-b-0 md:py-8'>
                <div className='text-2xl leading-8 font-medium md:text-3xl lg:text-4xl'>
                  <NumberTicker damping={30} stiffness={150} value={stat.number} />
                  {stat.pointNumber !== undefined && (
                    <>
                      .
                      <NumberTicker damping={30} stiffness={150} value={stat.pointNumber} />
                    </>
                  )}
                  {stat.suffix}
                </div>
                <p className='text-muted-foreground text-sm sm:text-base'>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
