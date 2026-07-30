import { useEffect, type ReactElement } from 'react'
import Head from 'next/head'

import { Nunito, Fira_Code, Lora } from 'next/font/google'

import { TooltipProvider } from '@/components/ui/tooltip'
import Header from '@/components/layout/header'
import { navigationData } from '@/assets/data/header'
import HeroSection from '@/components/blocks/hero-section/hero-section'
import Features from '@/components/blocks/features-bento-grid/features-bento-grid'
import { WorksFeaturesData } from '@/assets/data/works-features-section'
import WorksFeaturesSection from '@/components/blocks/works-features-section/works-features-section'
import { useCasesData } from '@/assets/data/use-cases'
import UseCases from '@/components/blocks/use-cases-section/use-cases-section'
import { faqData } from '@/assets/data/faq'
import FAQSection from '@/components/blocks/faq-section/faq-section'
import { ctaStats } from '@/assets/data/cta'
import CTA from '@/components/blocks/cta-section/cta-section'
import Footer from '@/components/layout/footer'

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

const SITE_URL = 'https://github.com/fish-not-phish/open-vbrowser'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      name: 'vBrowser',
      description:
        'Self-hosted browser isolation platform for threat investigation, SOC analysis, and OSINT gathering. Ephemeral browser sessions on AWS ECS Fargate with full traffic logging and file protection.',
      url: SITE_URL,
      inLanguage: 'en-US'
    }
  ]
}

const LandingPage = ({ stars }: { stars: number }) => {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <>
      <Head>
        <title>vBrowser — Self-Hosted Browser Isolation Platform</title>
        <meta
          name='description'
          content='Self-hosted browser isolation platform for threat investigation, SOC analysis, and OSINT gathering. Ephemeral browser sessions on AWS ECS Fargate with full traffic logging and file protection.'
        />
      </Head>
      <div
      className={`${nunito.variable} ${firaCode.variable} ${lora.variable} dark landing-page flex min-h-screen w-full flex-col scroll-smooth bg-background font-sans text-foreground`}
    >
      <TooltipProvider>
        <Header navigationData={navigationData} />

        <main className='flex flex-col *:scroll-mt-16'>
          <HeroSection stars={stars} />
          <Features />
          <WorksFeaturesSection data={WorksFeaturesData} />
          <UseCases tabs={useCasesData} />
          <FAQSection faqs={faqData} />
          <CTA stats={ctaStats} />
          <Footer />
        </main>
      </TooltipProvider>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </div>
    </>
  )
}

export default LandingPage

export async function getStaticProps() {
  let stars = 0

  try {
    const res = await fetch('https://api.github.com/repos/fish-not-phish/open-vbrowser')
    const data = await res.json()
    stars = data.stargazers_count ?? 0
  } catch {
    // GitHub API may rate-limit; fall back to 0
  }

  return {
    props: { stars }
  }
}

// Opt out of the Nextra docs layout entirely — render bare
LandingPage.getLayout = (page: ReactElement) => page
