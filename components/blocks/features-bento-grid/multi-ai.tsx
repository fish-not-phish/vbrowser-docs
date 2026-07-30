'use client'

import { useState } from 'react'

import { useRouter } from 'next/router'

import { CheckIcon, GlobeIcon, RocketIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'

import { Marquee } from '@/components/ui/marquee'

const apps = [
  {
    id: 1,
    src: '/img/browsers/chrome.png',
    name: 'Chrome'
  },
  {
    id: 2,
    src: '/img/browsers/firefox.png',
    name: 'Firefox'
  },
  {
    id: 3,
    src: '/img/browsers/tor.png',
    name: 'Tor Browser'
  },
  {
    id: 4,
    src: '/img/browsers/brave.png',
    name: 'Brave'
  },
  {
    id: 5,
    src: '/img/browsers/kali.png',
    name: 'Kali Linux'
  },
  {
    id: 6,
    src: '/img/browsers/terminal.png',
    name: 'Terminal'
  },
  {
    id: 7,
    src: '/img/browsers/code-server.png',
    name: 'code-server'
  },
  {
    id: 8,
    src: '/img/browsers/ubuntu.png',
    name: 'Ubuntu'
  }
]

const BuildThings = () => {
  const router = useRouter()
  const [inputValue, setInputValue] = useState('')
  const [selectedApp, setSelectedApp] = useState(apps[1])

  return (
    <div className='relative flex min-h-75 items-center justify-center overflow-hidden p-6'>
      <div className='absolute inset-0 flex flex-col justify-between'>
        {/* Row 1 */}
        <Marquee gap={2.75} duration={25} className='[&>div]:running py-0'>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img src='/img/browsers/chrome.png' alt='Chrome' className='w-full' />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img src='/img/browsers/firefox.png' alt='Firefox' className='w-full' />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img src='/img/browsers/tor.png' alt='Tor Browser' className='w-full' />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img src='/img/browsers/brave.png' alt='Brave' className='w-full' />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img src='/img/browsers/edge.png' alt='Edge' className='w-full' />
          </div>
        </Marquee>
        {/* Row 2 */}
        <Marquee gap={2.75} duration={30} reverse className='[&>div]:running py-0'>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img src='/img/browsers/kali.png' alt='Kali Linux' className='w-full' />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img src='/img/browsers/librewolf.png' alt='LibreWolf' className='w-full' />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img src='/img/browsers/waterfox.png' alt='Waterfox' className='w-full' />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img src='/img/browsers/zen.png' alt='Zen Browser' className='w-full' />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img src='/img/browsers/mullvad.png' alt='Mullvad Browser' className='w-full' />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img src='/img/browsers/palemoon.png' alt='Pale Moon' className='w-full' />
          </div>
        </Marquee>
        {/* Row 3 */}
        <Marquee gap={2.75} duration={25} className='[&>div]:running py-0'>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img src='/img/browsers/pulse.png' alt='Pulse Browser' className='w-full' />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img src='/img/browsers/terminal.png' alt='Terminal' className='w-full' />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img src='/img/browsers/code-server.png' alt='code-server' className='w-full' />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img src='/img/browsers/ubuntu.png' alt='Ubuntu' className='w-full' />
          </div>
          <div className='bg-background flex size-15.5 items-center justify-center rounded-full border shadow-sm'>
            <img src='/img/browsers/vivaldi.png' alt='Vivaldi' className='w-full' />
          </div>
        </Marquee>
      </div>
      <div className='group/prompt bg-card relative z-10 w-full max-w-121 rounded-xl border shadow-md'>
        <div className='flex items-center gap-2 p-2'>
          <div className='relative flex-1'>
            <GlobeIcon className='text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2' />
            <Input
              type='url'
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && inputValue.trim() !== '') {
                  router.push('/introduction')
                }
              }}
              placeholder='Enter URL to investigate...'
              aria-label='URL to investigate'
              className='border-0 bg-transparent pl-9 shadow-none focus-visible:ring-0'
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='sm' type='button' className='gap-2'>
                <img src={selectedApp.src} alt={selectedApp.name} className='size-5' />
                <span className='max-xs:hidden'>{selectedApp.name}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-50'>
              {apps.map(app => (
                <DropdownMenuItem key={app.id} onClick={() => setSelectedApp(app)}>
                  <img src={app.src} alt={app.name} className='size-5' />
                  <span>{app.name}</span>
                  {selectedApp.id === app.id && <CheckIcon className='ml-auto size-4' />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            type='button'
            size='sm'
            disabled={inputValue.trim() === ''}
            onClick={() => router.push('/introduction')}
          >
            <RocketIcon />
            <span className='max-xs:hidden'>Launch</span>
          </Button>
        </div>
      </div>

      <div className='from-background pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b to-transparent' />
      <div className='from-background pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l to-transparent' />
      <div className='from-background pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t to-transparent' />
      <div className='from-background pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r to-transparent' />
    </div>
  )
}

export default BuildThings
