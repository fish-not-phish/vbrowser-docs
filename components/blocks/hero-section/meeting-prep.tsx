'use client'

import { CheckIcon, MessageSquareTextIcon, PresentationIcon, SearchIcon, MailIcon, NetworkIcon, Link2Icon, FolderIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

import ArrowRight from '@/components/blocks/hero-section/arrow-right'
import WorkflowItem from '@/components/blocks/hero-section/workflow-item'

const MeetingPrep = () => {
  return (
    <div className='flex max-md:flex-col max-md:space-y-8 md:items-center md:space-x-16'>
      <WorkflowItem
        type='input'
        icon={<PresentationIcon />}
        title='Phishing Report'
        description='Suspicious email link flagged for analysis.'
        time='0.0 sec'
        className='relative'
      >
        {/* Arrow for large screens */}
        <ArrowRight delay={0.1} />
      </WorkflowItem>

      <WorkflowItem
        type='action'
        icon={<SearchIcon />}
        title='Safe Detonation'
        time='75 sec'
        delay={1.2}
        className='relative'
      >
        <div className='bg-muted space-y-2.5 rounded-lg px-2.5 py-3'>
          <Badge variant='outline' className='rounded-sm px-1.5'>
            Launching browser...
          </Badge>
          <div className='flex items-center gap-2'>
            <MailIcon className='size-4.5' />
            <span className='text-muted-foreground text-sm'>Opening suspicious link</span>
          </div>
          <div className='flex items-center gap-2'>
            <NetworkIcon className='size-4.5' />
            <span className='text-muted-foreground text-sm'>Capturing traffic</span>
          </div>
          <div className='flex items-center gap-2'>
            <Link2Icon className='size-4.5' />
            <span className='text-muted-foreground text-sm'>Recording redirects</span>
          </div>
        </div>
        <div className='bg-muted space-y-2.5 rounded-lg px-2.5 py-3'>
          <Badge variant='outline' className='rounded-sm px-1.5'>
            Analyzing
          </Badge>
          <div className='text-muted-foreground flex items-center gap-2'>
            <CheckIcon className='size-4' />
            <span className='text-sm'>Extracted domains</span>
          </div>
          <div className='text-muted-foreground flex items-center gap-2'>
            <CheckIcon className='size-4' />
            <span className='text-sm'>Extracted IPs</span>
          </div>
          <div className='text-muted-foreground flex items-center gap-2'>
            <CheckIcon className='size-4' />
            <span className='text-sm'>File hash samples</span>
          </div>
        </div>

        {/* Arrow for large screens */}
        <ArrowRight delay={1.3} />
      </WorkflowItem>

      <WorkflowItem
        type='output'
        icon={<MessageSquareTextIcon />}
        title='IOCs Extracted'
        description='Indicators of compromise logged and categorized.'
        time='0.8 sec'
        delay={2.4}
      >
        <div className='bg-muted rounded-lg px-2.5 py-3'>
          <div className='flex items-center gap-2'>
            <FolderIcon className='size-4.5' />
            <span className='text-muted-foreground text-sm'>Saved to case</span>
          </div>
        </div>
      </WorkflowItem>
    </div>
  )
}

export default MeetingPrep
