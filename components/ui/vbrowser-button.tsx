'use client'

import * as React from 'react'

import type { VariantProps } from 'class-variance-authority'

import { Button, type buttonVariants } from '@/components/ui/button'

import { cn } from '@/lib/utils'

interface VBrowserButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: VariantProps<typeof buttonVariants>['size']
  children: React.ReactNode
  className?: string
  asChild?: boolean
}

const PrimaryVBrowserButton = React.forwardRef<HTMLButtonElement, VBrowserButtonProps>(
  function PrimaryVBrowserButton({ children, size, asChild = false, className, ...props }, ref) {
    return (
      <Button
        ref={ref}
        size={size}
        asChild={asChild}
        className={cn(
          'hover:bg-primary border-0 shadow-[inset_0_2px_3px_0_var(--primary),inset_2px_-4px_4px_0_rgba(0,0,0,0.25),inset_-2px_4px_4px_0_rgba(255,255,255,0.35)] transition-shadow duration-300 hover:shadow-[inset_0_0_0_0_var(--primary),inset_1px_-1.5px_2px_0_rgba(0,0,0,0.25),inset_-1px_1.5px_2px_0_rgba(255,255,255,0.35)]',
          size === 'lg' && 'text-base has-[>svg]:px-6',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    )
  }
)

const SecondaryVBrowserButton = React.forwardRef<HTMLButtonElement, VBrowserButtonProps>(
  function SecondaryVBrowserButton({ children, size, asChild = false, className, ...props }, ref) {
    return (
      <Button
        ref={ref}
        variant='secondary'
        size={size}
        asChild={asChild}
        className={cn(
          'hover:bg-secondary bg-secondary text-secondary-foreground border-0 shadow-[inset_0_2px_3px_0_var(--secondary),inset_2px_-4px_4px_0_rgba(0,0,0,0.25),inset_-2px_4px_4px_0_rgba(255,255,255,0.35)] transition-shadow duration-300 hover:shadow-[inset_0_0_0_0_var(--secondary),inset_1px_-1.5px_2px_0_rgba(0,0,0,0.25),inset_-1px_1.5px_2px_0_rgba(255,255,255,0.35)]',
          size === 'lg' && 'text-base has-[>svg]:px-6',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    )
  }
)

export { PrimaryVBrowserButton, SecondaryVBrowserButton, type VBrowserButtonProps }
