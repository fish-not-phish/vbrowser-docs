'use client'

import { BellRingIcon, FileChartPieIcon, LoaderIcon, MessageSquareTextIcon, ScrollTextIcon, ShieldCheckIcon, ArchiveIcon, BellIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

import ArrowRight from '@/components/blocks/hero-section/arrow-right'
import WorkflowItem from '@/components/blocks/hero-section/workflow-item'

const Reporting = () => {
  return (
    <div className='flex max-md:flex-col max-md:space-y-8 md:items-center md:space-x-16'>
      <WorkflowItem
        type='input'
        icon={<BellRingIcon />}
        title='Scheduled Report'
        description='Weekly audit report generation triggered.'
        time='0.0 sec'
        className='relative'
      >
        {/* Arrow for large screens */}
        <ArrowRight delay={0.1} />
      </WorkflowItem>

      <WorkflowItem
        type='action'
        icon={<FileChartPieIcon />}
        title='Activity Aggregation'
        time='18 sec'
        delay={1.2}
        hideProxy
        className='relative'
      >
        <div className='bg-muted space-y-2.5 rounded-lg px-2.5 py-3'>
          <div className='flex items-center gap-2'>
            <ScrollTextIcon className='size-4.5' />
            <span className='text-muted-foreground text-sm'>Compiling session logs</span>
          </div>
          <div className='flex items-center gap-2'>
            <ShieldCheckIcon className='size-4.5' />
            <span className='text-muted-foreground text-sm'>Aggregating user actions</span>
          </div>
        </div>
        <div className='bg-muted space-y-2.5 rounded-lg px-2.5 py-3'>
          <div className='text-muted-foreground flex items-center justify-between gap-2'>
            <Badge variant='outline' className='rounded-sm px-1.5'>
              Generating report...
            </Badge>
            <LoaderIcon className='size-4' />
          </div>
          <p className='text-muted-foreground text-sm'>
            Session activity, access records, and audit trail compiled into report.
          </p>
        </div>

        {/* Arrow for large screens */}
        <ArrowRight delay={1.3} />
      </WorkflowItem>

      <WorkflowItem
        type='output'
        icon={<MessageSquareTextIcon />}
        title='Audit Report Ready'
        description='Compliance report with full audit trail.'
        time='1.1 sec'
        delay={2.4}
        className='md:w-72.5'
      >
        <div className='bg-muted space-y-2.5 rounded-lg px-2.5 py-3'>
          <div className='flex items-center gap-2'>
            <ArchiveIcon className='size-4.5' />
            <span className='text-muted-foreground text-sm'>Report archived</span>
          </div>
          <div className='flex items-center gap-2'>
            <BellIcon className='size-4.5' />
            <span className='text-muted-foreground text-sm'>Team notified</span>
          </div>
        </div>
      </WorkflowItem>
    </div>
  )
}

export default Reporting
