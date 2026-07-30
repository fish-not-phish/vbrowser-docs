'use client'

import { useEffect, useState } from 'react'

import { motion } from 'motion/react'
import {
  ArrowUpRightIcon,
  CheckIcon,
  FileDownIcon,
  Loader2Icon,
  MoreVerticalIcon
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

const browsers = [
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
  }
]

type StepContent = {
  tabId: string
  typedText: string
  connectingLabel: string
  connectingItems: { id: number; text: string }[]
  completeText: string
  completeLabel: string
}

const stepContents: StepContent[] = [
  {
    tabId: 'deploy-session',
    typedText: 'Launch isolated Chrome session for threat investigation',
    connectingLabel: 'Deploying session',
    connectingItems: [
      { id: 1, text: 'Provisioning ECS Fargate container' },
      { id: 2, text: 'Pulling Chrome browser image' },
      { id: 3, text: 'Starting isolated browser process' },
      { id: 4, text: 'Configuring mitmproxy traffic capture' }
    ],
    completeText: 'Session deployed — ready for investigation',
    completeLabel: 'Session Ready'
  },
  {
    tabId: 'investigate',
    typedText: 'Browse suspicious URL and capture session evidence',
    connectingLabel: 'Investigating securely',
    connectingItems: [
      { id: 1, text: 'Navigating to suspicious URL' },
      { id: 2, text: 'Logging network traffic via mitmproxy' },
      { id: 3, text: 'Taking automatic screenshots' },
      { id: 4, text: 'Packaging downloads (AES-256)' }
    ],
    completeText: 'Investigation complete — evidence captured',
    completeLabel: 'Investigation Complete'
  },
  {
    tabId: 'review-evidence',
    typedText: 'Review session evidence and export to case',
    connectingLabel: 'Reviewing evidence',
    connectingItems: [
      { id: 1, text: 'Compiling traffic logs' },
      { id: 2, text: 'Organizing screenshots' },
      { id: 3, text: 'Verifying protected file downloads' },
      { id: 4, text: 'Attaching evidence to case #247' }
    ],
    completeText: 'Evidence exported to case — session destroyed',
    completeLabel: 'Evidence Exported'
  }
]

const STEP_DURATION = 4000

const Workflow = ({
  activeTab,
  setActiveTab,
  setWorkflowProgress,
  initialTabId
}: {
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
  setWorkflowProgress: React.Dispatch<React.SetStateAction<number>>
  initialTabId: string
}) => {
  const [inputValue, setInputValue] = useState('')
  const [selectedBrowser, setSelectedBrowser] = useState(browsers[0])
  const [isLoading, setIsLoading] = useState(false)
  const [showConnecting, setShowConnecting] = useState(false)
  const [showExecutionSummary, setShowExecutionSummary] = useState(false)
  const [currentStepContent, setCurrentStepContent] = useState<StepContent>(stepContents[0])

  const handleStep1 = (cleanup: () => void) => {
    const content = stepContents[0]
    setCurrentStepContent(content)
    setActiveTab(content.tabId)
    setInputValue('')
    setIsLoading(false)
    setShowConnecting(false)
    setShowExecutionSummary(false)

    const characters = content.typedText.split('')
    let currentCharIndex = 0

    const typingInterval = setInterval(() => {
      if (currentCharIndex < characters.length) {
        setInputValue(characters.slice(0, currentCharIndex + 1).join(''))
        currentCharIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, STEP_DURATION / characters.length)

    cleanup()

    return typingInterval
  }

  const handleStep2 = () => {
    const content = stepContents[1]
    setCurrentStepContent(content)
    setActiveTab(content.tabId)
    setInputValue(content.typedText)
    setIsLoading(true)
    setShowConnecting(true)
    setShowExecutionSummary(false)
  }

  const handleStep3 = () => {
    const content = stepContents[2]
    setCurrentStepContent(content)
    setActiveTab(content.tabId)
    setInputValue(content.completeText)
    setIsLoading(false)
    setShowConnecting(false)
    setShowExecutionSummary(true)
  }

  useEffect(() => {
    let activeIntervals: NodeJS.Timeout[] = []
    let currentAnimationFrameId: number | null = null
    let isRunning = false

    const clearAllIntervals = () => {
      activeIntervals.forEach(interval => clearInterval(interval))
      activeIntervals = []

      if (currentAnimationFrameId !== null) {
        cancelAnimationFrame(currentAnimationFrameId)
        currentAnimationFrameId = null
      }
    }

    const getStartingStep = () => {
      if (activeTab === 'investigate') return 2
      if (activeTab === 'review-evidence') return 3

      return 1
    }

    const runWorkflow = (startStep: number = 1) => {
      if (isRunning) return
      isRunning = true

      clearAllIntervals()
      let step = startStep - 1

      const runStep = () => {
        step++

        if (step > 3) {
          setTimeout(() => {
            isRunning = false
            runWorkflow()
          }, 1000)

          return
        }

        let stepInterval: NodeJS.Timeout | undefined

        if (step === 1) {
          stepInterval = handleStep1(clearAllIntervals)
        } else if (step === 2) {
          handleStep2()
        } else if (step === 3) {
          handleStep3()
        }

        if (stepInterval) {
          activeIntervals.push(stepInterval)
        }

        setWorkflowProgress(0)

        const startTime = Date.now()

        const animateProgress = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min((elapsed / STEP_DURATION) * 100, 100)

          setWorkflowProgress(progress)

          if (progress < 100) {
            currentAnimationFrameId = requestAnimationFrame(animateProgress)
          } else {
            currentAnimationFrameId = null
            runStep()
          }
        }

        currentAnimationFrameId = requestAnimationFrame(animateProgress)
      }

      runStep()
    }

    const startingStep = getStartingStep()

    runWorkflow(startingStep)

    return () => {
      clearAllIntervals()
      isRunning = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab])

  return (
    <div
      className={cn(
        'bg-background relative z-1 w-full max-w-99 flex-col rounded-xl shadow-lg',
        showExecutionSummary
          ? 'bg-[color-mix(in_oklab,var(--color-green-600)_30%,var(--card))] dark:bg-[color-mix(in_oklab,var(--color-green-400)_30%,var(--card))]'
          : 'bg-[color-mix(in_oklab,var(--color-sky-600)_30%,var(--card))] dark:bg-[color-mix(in_oklab,var(--color-sky-400)_30%,var(--card))]'
      )}
    >
      {(showConnecting || showExecutionSummary) && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='overflow-hidden'
        >
          <motion.div
            transition={{ duration: 0.5 }}
            className={cn('flex items-center justify-between rounded-t-xl p-3 pb-2')}
          >
            <motion.span
              transition={{ duration: 0.5 }}
              className={cn(
                'text-sm font-medium',
                showExecutionSummary ? 'text-green-600 dark:text-green-400' : 'text-sky-600 dark:text-sky-400'
              )}
            >
              {showExecutionSummary ? currentStepContent.completeLabel : currentStepContent.connectingLabel}
            </motion.span>
            <MoreVerticalIcon
              className={cn(
                'size-4',
                showExecutionSummary ? 'text-green-600 dark:text-green-400' : 'text-sky-600 dark:text-sky-400'
              )}
            />
          </motion.div>
        </motion.div>
      )}
      <div className='bg-card rounded-t-xl border border-b-0! p-4 pb-2.5'>
        <Textarea
          id='works-text-prompt'
          value={inputValue}
          onChange={() => setInputValue(inputValue)}
          placeholder='Describe the session you want to launch...'
          className='bg-card! field-sizing-content min-h-10 w-full resize-none rounded-none border-0 p-0 text-lg! shadow-none focus-visible:ring-0'
        />
      </div>
      <div className='bg-card rounded-b-xl border border-t-0! p-4 pt-0'>
        <div className='flex items-center justify-between gap-4'>
          <div className='flex items-center gap-3'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='sm'>
                  <img src={selectedBrowser.src} alt={selectedBrowser.name} className='size-4.5' />
                  <span>{selectedBrowser.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='start' className='w-50'>
                {browsers.map(browser => (
                  <DropdownMenuItem key={browser.id} onClick={() => setSelectedBrowser(browser)}>
                    <div className='flex items-center gap-2'>
                      <img src={browser.src} alt={browser.name} className='size-4.5' />
                      <span>{browser.name}</span>
                    </div>
                    {selectedBrowser.id === browser.id && <CheckIcon className='ml-auto' />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Button size='icon' className='size-7!' disabled={inputValue.trim() === ''}>
            {showExecutionSummary ? (
              <CheckIcon />
            ) : isLoading ? (
              <Loader2Icon className='animate-spin' />
            ) : (
              <ArrowUpRightIcon />
            )}
            <span className='sr-only'>Launch session</span>
          </Button>
        </div>
        {showConnecting && !showExecutionSummary && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className='mt-6 space-y-3 overflow-hidden'
          >
            {currentStepContent.connectingItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.3 }}
                className='flex items-center gap-2.5 text-sm'
              >
                <CheckIcon className='size-3.5 text-sky-600 dark:text-sky-400' />
                <span className='text-muted-foreground'>
                  {item.id}. {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
        {showExecutionSummary && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className='mt-6'
          >
            <Button variant='ghost' size='sm' className='text-muted-foreground'>
              Export Evidence
              <FileDownIcon className='size-3.5' />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Workflow
