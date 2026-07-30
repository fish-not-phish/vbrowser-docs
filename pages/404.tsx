import { useEffect, type ReactElement } from 'react'

import { Nunito, Fira_Code, Lora } from 'next/font/google'

import Link from 'next/link'

import { TooltipProvider } from '@/components/ui/tooltip'
import Header from '@/components/layout/header'
import { navigationData } from '@/assets/data/header'
import Footer from '@/components/layout/footer'
import { PrimaryVBrowserButton } from '@/components/ui/vbrowser-button'

const nunito = Nunito({
  variable: '--font-nunito-sans',
  subsets: ['latin']
})

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin']
})

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin']
})

const NotFoundPage = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div
      className={`${nunito.variable} ${firaCode.variable} ${lora.variable} dark flex min-h-screen w-full flex-col scroll-smooth bg-background text-foreground`}
    >
      <TooltipProvider>
        <Header navigationData={navigationData} />

        <main className='flex flex-1 flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8'>
          <div className='mx-auto flex max-w-2xl flex-col items-center text-center'>
            <p
              className='text-[clamp(5rem,18vw,12rem)] font-bold leading-none tracking-tighter text-transparent bg-clip-text'
              style={{
                backgroundImage: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                WebkitBackgroundClip: 'text'
              }}
            >
              404
            </p>

            <h1 className='mt-6 text-2xl font-semibold tracking-tight sm:text-3xl'>
              This page took a wrong turn
            </h1>

            <p className='text-muted-foreground mt-4 max-w-md text-base font-light sm:text-lg'>
              The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you
              back on track.
            </p>

            <div className='mt-10 flex flex-wrap items-center justify-center gap-4'>
              <PrimaryVBrowserButton size='lg' asChild>
                <Link href='/#home'>Back to home</Link>
              </PrimaryVBrowserButton>

              <Link
                href='/introduction'
                className='text-muted-foreground hover:text-foreground link-animated font-light transition-colors duration-300'
              >
                Read the docs
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </TooltipProvider>
    </div>
  )
}

export default NotFoundPage

// Opt out of the Nextra docs layout entirely — render bare
NotFoundPage.getLayout = (page: ReactElement) => page
