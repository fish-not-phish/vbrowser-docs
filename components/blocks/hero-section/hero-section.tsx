'use client'

import { useEffect, useState } from 'react'

import {
  ArrowUpRightIcon,
  ScrollTextIcon,
  ClipboardIcon,
  BookOpenIcon,
  FolderOpenIcon,
  NetworkIcon,
  ShieldAlertIcon,
  EyeIcon,
  LockIcon,
  StarIcon
} from 'lucide-react'

import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatedTooltip } from '@/components/ui/motion-tooltip'
import { BorderBeam } from '@/components/ui/border-beam'
import { PrimaryVBrowserButton, SecondaryVBrowserButton } from '@/components/ui/vbrowser-button'

import LeadQualifier from '@/components/blocks/hero-section/lead-qualifier'
import MeetingPrep from '@/components/blocks/hero-section/meeting-prep'
import FollowUps from '@/components/blocks/hero-section/follow-ups'
import DataSync from '@/components/blocks/hero-section/data-sync'
import Reporting from '@/components/blocks/hero-section/reporting'
import ContentDrafting from '@/components/blocks/hero-section/content-drafting'

import { MotionPreset } from '@/components/ui/motion-preset'

const avatars = [
  {
    image: '/img/browsers/chrome.png',
    fallback: 'CH',
    name: 'Chrome',
    designation: 'Google Chrome'
  },
  {
    image: '/img/browsers/firefox.png',
    fallback: 'FF',
    name: 'Firefox',
    designation: 'Mozilla Firefox'
  },
  {
    image: '/img/browsers/tor.png',
    fallback: 'TB',
    name: 'Tor Browser',
    designation: 'The Onion Router'
  },
  {
    image: '/img/browsers/brave.png',
    fallback: 'BR',
    name: 'Brave',
    designation: 'Brave Browser'
  }
]

const tabs = [
  {
    name: 'Threat Investigation',
    value: 'lead-qualifier',
    icon: ShieldAlertIcon,
    content: <LeadQualifier />
  },
  {
    name: 'Phishing Analysis',
    value: 'meeting-prep',
    icon: NetworkIcon,
    content: <MeetingPrep />
  },
  {
    name: 'OSINT Collection',
    value: 'follow-ups',
    icon: EyeIcon,
    content: <FollowUps />
  },
  {
    name: 'Case Management',
    value: 'data-sync',
    icon: FolderOpenIcon,
    content: <DataSync />
  },
  {
    name: 'Audit & Logs',
    value: 'reporting',
    icon: ScrollTextIcon,
    content: <Reporting />
  },
  {
    name: 'Secure Access',
    value: 'content-drafting',
    icon: LockIcon,
    content: <ContentDrafting />
  }
]

const HeroSection = ({ stars }: { stars: number }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.value || 'lead-qualifier')

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(currentTab => {
        const currentIndex = tabs.findIndex(tab => tab.value === currentTab)
        const nextIndex = (currentIndex + 1) % tabs.length

        return tabs[nextIndex].value
      })
    }, 7000)

    return () => clearInterval(interval)
  }, [activeTab])

  return (
    <section id='home' className='relative -mt-15.75 flex flex-col overflow-hidden pt-15.75'>
      <div className='border-b px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto flex max-w-7xl flex-col gap-6 border-x px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
          <div className='flex flex-col items-center gap-6 text-center'>
            <MotionPreset fade blur transition={{ duration: 0.5 }} className='space-y-4'>
              <Badge variant='outline' className='bg-muted relative gap-2.5 px-1.5 py-1'>
                <span className='bg-primary text-primary-foreground flex h-5.5 items-center rounded-full px-2 py-0.5'>
                  Open Source
                </span>
                <span className='text-muted-foreground text-sm font-normal text-wrap'>Self-hosted browser isolation</span>
                <BorderBeam colorFrom='var(--primary)' colorTo='var(--primary)' size={35} />
              </Badge>

              <h1 className='text-2xl font-semibold sm:text-3xl lg:text-5xl lg:leading-[1.29167]'>
                Investigate threats in
                <br />
                isolated browser sessions
              </h1>

              <p className='text-muted-foreground max-w-3xl text-xl'>
                Launch ephemeral browser environments on AWS ECS Fargate. Capture traffic, screenshots, and files
                securely — all self-hosted in your infrastructure.
              </p>
            </MotionPreset>

            <MotionPreset fade blur delay={0.1} transition={{ duration: 0.5 }}>
              <div className='flex flex-wrap items-center justify-center gap-4'>
                <PrimaryVBrowserButton size='lg' className='rounded-lg max-[425px]:has-[>svg]:px-4' asChild>
                  <Link href='https://github.com/fish-not-phish/open-vbrowser'>
                    <ArrowUpRightIcon />
                    Get Started
                  </Link>
                </PrimaryVBrowserButton>
                <SecondaryVBrowserButton size='lg' className='rounded-lg max-[425px]:has-[>svg]:px-4' asChild>
                  <Link href='/introduction'>
                    <BookOpenIcon />
                    Read Docs
                  </Link>
                </SecondaryVBrowserButton>
              </div>
            </MotionPreset>
          </div>

          <MotionPreset fade blur delay={0.2} transition={{ duration: 0.5 }}>
            <div className='flex w-full items-center justify-center gap-4 max-sm:flex-col sm:gap-7'>
              <div className='flex flex-1 items-center justify-end gap-3'>
                <div className='flex flex-row items-center justify-center'>
                  <AnimatedTooltip
                    items={avatars}
                    className='*:data-[slot=avatar]:border-background -me-3.5 last:me-0 *:data-[slot=avatar]:border-2 *:data-[slot=avatar]:shadow-md *:data-[slot=avatar]:ring-0'
                  />
                </div>
                <div>
                  <span className='text-lg font-medium'>15+</span> <span className='text-muted-foreground'>Browser Images</span>
                </div>
              </div>

              <Separator orientation='vertical' className='data-[orientation=vertical]:h-4 max-sm:hidden' />

              <div className='flex flex-1 items-center gap-3'>
                <Link
                  href='https://github.com/fish-not-phish/open-vbrowser'
                  className='flex items-center gap-1.5'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <StarIcon className='size-4 fill-primary text-primary' />
                  <span className='text-lg font-medium'>{stars}</span>
                  <span className='text-muted-foreground'>stars on GitHub</span>
                </Link>
              </div>
            </div>
          </MotionPreset>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className='block w-full gap-0'>
        <div className='border-b px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-7xl border-x'>
            {/* Tabs List */}
            <ScrollArea className='-m-px'>
              <TabsList className='w-full -space-x-px rounded-none bg-transparent p-0'>
                {tabs.map(({ icon: Icon, name, value }) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    className='border-border text-foreground focus-visible:outline-primary/20 data-[state=active]:border-primary/60! data-[state=active]:bg-muted! h-15 flex-1 cursor-pointer rounded-none px-4 py-2.5 text-base focus-visible:ring-0 focus-visible:outline-[3px] focus-visible:-outline-offset-4 data-[state=active]:z-1'
                  >
                    <Icon />
                    {name}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation='horizontal' className='z-2' />
            </ScrollArea>
          </div>
        </div>

        <div className='px-4 sm:px-6 lg:px-8'>
          <div className='relative mx-auto h-151 max-w-7xl border-x'>
            {/* Background Dots */}
            <div
              className='pointer-events-none absolute inset-0 -z-2'
              style={{
                backgroundImage:
                  'radial-gradient(color-mix(in oklab, var(--primary) 25%, transparent) 2px, transparent 2px)',
                backgroundSize: '20px 20px'
              }}
            />

            {/* Background Gradient Overlay */}
            <div
              className='pointer-events-none absolute inset-0 -z-1 flex items-center justify-center'
              style={{
                backgroundColor: 'var(--background)',
                maskImage: 'radial-gradient(ellipse at center, transparent 20%, black)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black)'
              }}
            />

            <ScrollArea className='h-full *:data-[slot=scroll-area-viewport]:h-full [&>[data-slot=scroll-area-viewport]>div]:h-full'>
              {tabs.map(tab => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className='flex h-full items-center justify-center p-4 sm:p-6 lg:p-8'
                >
                  {tab.content}
                </TabsContent>
              ))}

              <ScrollBar orientation='horizontal' />
            </ScrollArea>
          </div>
        </div>
      </Tabs>
    </section>
  )
}

export default HeroSection
