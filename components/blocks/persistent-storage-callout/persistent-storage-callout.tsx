import Link from 'next/link'
import { ArrowRightIcon, DatabaseIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

const PersistentStorageCallout = () => {
  return (
    <section className='border-t px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl border-x'>
        <div className='flex flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-12 lg:px-8 lg:py-16'>
          <div className='flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-7'>
            <div className='text-primary flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 [&>svg]:size-6'>
              <DatabaseIcon />
            </div>
            <div className='max-w-2xl space-y-3'>
              <span className='text-primary text-sm font-medium tracking-wider uppercase'>Optional add-on</span>
              <h3 className='text-2xl font-medium md:text-3xl lg:text-4xl'>
                Persistent storage, scoped to each workspace
              </h3>
              <p className='text-muted-foreground text-lg'>
                Sessions stay ephemeral by default — but when files need to survive, flip on persistent storage. Files
                saved during a session are backed by S3 and remain available to every future session in the same
                workspace. Each workspace gets its own isolated access point, so data never crosses workspace boundaries.
              </p>
            </div>
          </div>
          <Button variant='link' className='group shrink-0 self-start sm:self-auto' asChild>
            <Link href='/usage/persistent-storage'>
              Learn more
              <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PersistentStorageCallout
