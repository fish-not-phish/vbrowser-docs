'use client'

import { useEffect, useState } from 'react'

import { LogInIcon } from 'lucide-react'

import Link from 'next/link'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { SecondaryOrionButton } from '@/components/ui/orion-button'

import { HeaderNavigation, HeaderNavigationSmallScreen, type Navigation } from '@/components/layout/header-navigation'

import Logo from '@/components/logo'

import { cn } from '@/lib/utils'

type HeaderProps = {
  navigationData: Navigation[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-16 w-full border-b px-4 transition-all duration-300 sm:px-6 lg:px-8',
        {
          'bg-card/75 shadow-xl backdrop-blur': isScrolled
        },
        className
      )}
    >
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-4 border-x px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <Link href='/#home'>
          <Logo />
        </Link>

        {/* Navigation */}
        <HeaderNavigation
          navigationData={navigationData}
          navigationClassName='[&_[data-slot="navigation-menu-list"]]:gap-1'
        />

        {/* Actions */}
        <div className='flex items-center gap-3'>
          <SecondaryOrionButton size='lg' className='max-sm:hidden' asChild>
            <Link href='https://github.com/fish-not-phish/open-vbrowser'>Star on GitHub</Link>
          </SecondaryOrionButton>

          <Tooltip>
            <TooltipTrigger asChild>
              <SecondaryOrionButton size='icon-lg' className='sm:hidden' asChild>
                <Link href='https://github.com/fish-not-phish/open-vbrowser'>
                  <LogInIcon />
                  <span className='sr-only'>GitHub</span>
                </Link>
              </SecondaryOrionButton>
            </TooltipTrigger>
            <TooltipContent>GitHub</TooltipContent>
          </Tooltip>

          <HeaderNavigationSmallScreen navigationData={navigationData} />
        </div>
      </div>
    </header>
  )
}

export default Header
