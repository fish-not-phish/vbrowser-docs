'use client'

import Autoplay from 'embla-carousel-autoplay'
import { FileTextIcon, CameraIcon, NetworkIcon, ShieldCheckIcon } from 'lucide-react'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

const notifications = [
  {
    icon: NetworkIcon,
    text: 'Traffic logged: GET https://suspicious-domain.com'
  },
  {
    icon: CameraIcon,
    text: 'Screenshot saved: phishing-login-page.png'
  },
  {
    icon: FileTextIcon,
    text: 'Download packaged: invoice.pdf.7z (AES-256)'
  },
  {
    icon: ShieldCheckIcon,
    text: 'Session ended — container destroyed. Evidence attached to case #247.'
  }
]

const RealTime = () => {
  return (
    <Carousel
      opts={{ loop: true, align: 'center' }}
      plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
      orientation='vertical'
      className='w-full'
    >
      <CarouselContent className='h-67 items-start px-6'>
        {[...notifications, ...notifications].map((item, index) => {
          const Icon = item.icon

          return (
            <CarouselItem
              key={index}
              className='my-2.5 flex basis-1/6 items-center gap-4 rounded-xl border px-5 py-3 shadow-lg'
            >
              <Icon className='size-5' />
              <div className='flex flex-1 items-center gap-2'>
                <p className='line-clamp-1 flex-1 text-sm'>{item.text}</p>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <div className='from-background pointer-events-none absolute inset-x-0 top-0 h-[40%] bg-linear-to-b to-transparent' />
      <div className='from-background pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-t to-transparent' />
    </Carousel>
  )
}

export default RealTime
