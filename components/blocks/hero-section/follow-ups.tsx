'use client'

import { BellRingIcon, LoaderIcon, MessageSquareTextIcon, ScanEyeIcon, SearchIcon, CameraIcon, DownloadIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

import ArrowRight from '@/components/blocks/hero-section/arrow-right'
import WorkflowItem from '@/components/blocks/hero-section/workflow-item'

const FollowUps = () => {
  return (
    <div className='flex max-md:flex-col max-md:space-y-8 md:items-center md:space-x-16'>
      <WorkflowItem
        type='input'
        icon={<BellRingIcon />}
        title='Investigation Started'
        description='Analyst begins OSINT gathering session.'
        time='0.0 sec'
        className='relative'
      >
        {/* Arrow for large screens */}
        <ArrowRight delay={0.1} />
      </WorkflowItem>

      <WorkflowItem
        type='action'
        icon={<ScanEyeIcon />}
        title='Intelligence Gathering'
        time='1.6 sec'
        delay={1.2}
        className='relative'
      >
        <div className='bg-muted space-y-2.5 rounded-lg px-2.5 py-3'>
          <div className='flex items-center gap-2'>
            <SearchIcon className='size-4.5' />
            <span className='text-muted-foreground text-sm'>Searching sources</span>
          </div>
          <div className='flex items-center gap-2'>
            <CameraIcon className='size-4.5' />
            <span className='text-muted-foreground text-sm'>Capturing screenshots</span>
          </div>
        </div>
        <div className='bg-muted space-y-2.5 rounded-lg px-2.5 py-3'>
          <div className='text-muted-foreground flex items-center justify-between gap-2'>
            <Badge variant='outline' className='rounded-sm px-1.5'>
              Packaging data...
            </Badge>
            <LoaderIcon className='size-4' />
          </div>
          <p className='text-muted-foreground text-sm'>
            Screenshots and intelligence data packaged for export to the case.
          </p>
        </div>

        {/* Arrow for large screens */}
        <ArrowRight delay={1.3} />
      </WorkflowItem>

      <WorkflowItem
        type='output'
        icon={<MessageSquareTextIcon />}
        title='Findings Exported'
        description='Evidence package ready for the case.'
        time='0.3 sec'
        delay={2.4}
      >
        <div className='bg-muted rounded-lg px-2.5 py-3'>
          <div className='flex items-center gap-2'>
            <DownloadIcon className='size-4.5' />
            <span className='text-muted-foreground text-sm'>Exported to case</span>
          </div>
        </div>
      </WorkflowItem>
    </div>
  )
}

export default FollowUps
