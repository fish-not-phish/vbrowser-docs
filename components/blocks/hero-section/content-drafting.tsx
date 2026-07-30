'use client'

import { Clock8Icon, FileChartPieIcon, LoaderIcon, MessageSquareTextIcon, ThumbsUpIcon, KeyRoundIcon, UsersIcon, MonitorIcon, FileIcon } from 'lucide-react'
import { motion } from 'motion/react'

import { Badge } from '@/components/ui/badge'

import ArrowRight from '@/components/blocks/hero-section/arrow-right'
import WorkflowItem from '@/components/blocks/hero-section/workflow-item'

const ContentDrafting = () => {
  return (
    <div className='flex max-md:flex-col max-md:space-y-8 md:items-start'>
      <WorkflowItem
        type='input'
        icon={<ThumbsUpIcon />}
        title='User Authentication'
        description='Analyst authenticates via OIDC/SSO with MFA.'
        time='0.0 sec'
        className='relative md:mr-4 md:w-70 md:self-end'
      >
        <div className='bg-muted space-y-2.5 rounded-lg px-2.5 py-3'>
          <div className='flex items-center gap-2'>
            <KeyRoundIcon className='size-4.5' />
            <span className='text-muted-foreground text-sm'>OIDC token verified</span>
          </div>
          <div className='flex items-center gap-2'>
            <UsersIcon className='size-4.5' />
            <span className='text-muted-foreground text-sm'>MFA confirmed</span>
          </div>
        </div>

        {/* Arrow for large screens */}
        <motion.svg
          width='137'
          height='223'
          viewBox='0 0 137 223'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='absolute top-9 -right-4 -translate-y-full max-md:hidden'
        >
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              delay: 0.1
            }}
            d='M6 210.038L12 216.038L6 222.038L0 216.038L6 210.038Z'
            fill='color-mix(in oklab,var(--foreground)15%,var(--background))'
            className='dark:fill-[color-mix(in_oklab,var(--foreground)25%,var(--background))]'
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              delay: 0.4
            }}
            d='M6 216.038V27.3579C6 16.3122 14.9543 7.3579 26 7.3579H135.712'
            stroke='color-mix(in oklab,var(--foreground)15%,var(--background))'
            strokeWidth='2'
            className='dark:stroke-[color-mix(in_oklab,var(--foreground)25%,var(--background))]'
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: {
                duration: 0.35,
                ease: 'easeInOut',
                delay: 0.9
              },
              opacity: { duration: 0.1, delay: 0.9 }
            }}
            d='M129.329 1L135.712 7.35817L129.329 13.7158'
            stroke='color-mix(in oklab,var(--foreground)15%,var(--background))'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='dark:stroke-[color-mix(in_oklab,var(--foreground)25%,var(--background))]'
          />
        </motion.svg>
      </WorkflowItem>

      <WorkflowItem
        type='action'
        icon={<FileChartPieIcon />}
        title='Session Provisioned'
        time='75 sec'
        delay={1.2}
        className='relative md:mt-3 md:mr-16'
      >
        <div className='bg-muted rounded-lg px-2.5 py-3'>
          <div className='flex items-center gap-2'>
            <KeyRoundIcon className='size-4.5' />
            <span className='text-muted-foreground text-sm'>Browser image selected</span>
          </div>
        </div>
        <div className='bg-muted space-y-2.5 rounded-lg px-2.5 py-3'>
          <div className='text-muted-foreground flex items-center justify-between gap-2'>
            <Badge variant='outline' className='rounded-sm px-1.5'>
              Applying RBAC rules...
            </Badge>
            <LoaderIcon className='size-4' />
          </div>
          <p className='text-muted-foreground text-sm'>Role-based permissions applied to browser session.</p>
        </div>

        {/* Arrow for large screens */}
        <ArrowRight delay={1.3} className='translate-y-[calc(-50%-1.875rem)]' />
      </WorkflowItem>

      <div className='flex flex-col gap-8 md:gap-6'>
        <WorkflowItem
          type='pending'
          icon={<Clock8Icon />}
          title='Session Active'
          description='Persistent browser session with bookmark and cookie retention.'
          time='6 min'
          delay={2.4}
          className='relative md:w-70'
        >
          <div className='bg-muted rounded-lg px-2.5 py-3'>
            <div className='flex items-center gap-2'>
              <KeyRoundIcon className='size-4.5' />
              <span className='text-muted-foreground text-sm'>Session running</span>
            </div>
          </div>

          {/* Arrow for large screens */}
          <motion.svg
            width='93'
            height='112'
            viewBox='0 0 93 112'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='absolute -bottom-13.5 left-full -translate-x-1.5 max-md:hidden'
          >
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: 2.5
              }}
              d='M6 0L12 6L6 12L0 6L6 0Z'
              fill='color-mix(in oklab,var(--foreground)15%,var(--background))'
              className='dark:fill-[color-mix(in_oklab,var(--foreground)25%,var(--background))]'
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: 2.8
              }}
              d='M6 6H64.792C75.8377 6 84.792 14.9543 84.792 26V110.695'
              stroke='color-mix(in oklab,var(--foreground)15%,var(--background))'
              strokeWidth='2'
              className='dark:stroke-[color-mix(in_oklab,var(--foreground)25%,var(--background))]'
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: {
                  duration: 0.35,
                  ease: 'easeInOut',
                  delay: 3.3
                },
                opacity: { duration: 0.1, delay: 3.3 }
              }}
              d='M91.1494 104.312L84.7912 110.695L78.4336 104.313'
              stroke='color-mix(in oklab,var(--foreground)15%,var(--background))'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='dark:stroke-[color-mix(in_oklab,var(--foreground)25%,var(--background))]'
            />
          </motion.svg>
        </WorkflowItem>

        <WorkflowItem
          type='output'
          icon={<MessageSquareTextIcon />}
          title='Secure Browsing Active'
          description='Session ready with file protection enabled.'
          time='4.1 sec'
          delay={3.6}
          className='md:ml-41 md:w-72.5'
        >
          <div className='bg-muted space-y-2.5 rounded-lg px-2.5 py-3'>
            <div className='flex items-center gap-2'>
            <MonitorIcon className='size-4.5' />
            <span className='text-muted-foreground text-sm'>Active session</span>
          </div>
          <div className='flex items-center gap-2'>
            <FileIcon className='size-4.5 dark:invert' />
            <span className='text-muted-foreground text-sm'>Protected downloads</span>
            </div>
          </div>
        </WorkflowItem>
      </div>
    </div>
  )
}

export default ContentDrafting
