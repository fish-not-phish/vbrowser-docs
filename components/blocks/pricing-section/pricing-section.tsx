'use client'

import { useState } from 'react'

import SectionHeader from '@/components/blocks/section-header'
import { Badge } from '@/components/ui/badge'
import { PrimaryOrionButton, SecondaryOrionButton } from '@/components/ui/orion-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { NumberTicker } from '@/components/ui/number-ticker'

import { cn } from '@/lib/utils'

import type { PricingPlan } from '@/assets/data/pricing'

type PricingSectionProps = {
  plans: PricingPlan[]
}

const PricingSection = ({ plans }: PricingSectionProps) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <section id='pricing'>
      <SectionHeader title='pricing' description='Flexible plans tailored to automate your workflow effortlessly.' />
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl border-x'>
          <div className='flex flex-col items-center gap-5 px-4 py-8 text-center md:py-16 lg:py-24'>
            <h3 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>Plans that Scale with Your Workflow</h3>
            <p className='text-muted-foreground text-lg'>
              Find the perfect balance of features and scalability for your workflow,
              <br className='hidden lg:block' /> designed to help you work smarter and grow effortlessly.
            </p>

            {/* Billing Toggle */}
            <div className='bg-muted inline-flex items-center gap-1 rounded-md p-1'>
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={cn(
                  'hover:text-foreground flex cursor-pointer items-center gap-1 rounded-sm px-6 py-2 text-sm transition-colors',
                  billingPeriod === 'monthly' ? 'bg-card text-foreground shadow-md' : 'text-muted-foreground'
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={cn(
                  'hover:text-foreground flex cursor-pointer items-center gap-1 rounded-sm px-3 py-2 text-sm transition-colors',
                  billingPeriod === 'yearly' ? 'bg-card text-foreground shadow-md' : 'text-muted-foreground'
                )}
              >
                Yearly
                <Badge variant='destructive' className='rounded-full'>
                  Save 35%
                </Badge>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3'>
            {plans.map((plan, index) => {
              const displayPrice = billingPeriod === 'yearly' ? plan.yearlyPrice : plan.price

              return (
                <Card
                  key={`${plan.name}-${index}`}
                  className='bg-background flex flex-col rounded-none border-0 border-t shadow-none last:border-r-0 md:border-r'
                >
                  <CardHeader className='space-y-4 border-b px-4 pb-6 sm:px-6 lg:px-8'>
                    <div className='space-y-3'>
                      <CardTitle className='text-2xl leading-tight font-semibold lg:text-3xl'>{plan.name}</CardTitle>
                      <CardDescription className='text-muted-foreground'>{plan.description}</CardDescription>
                    </div>
                    <div className='flex items-baseline gap-1'>
                      <span className='text-muted-foreground mb-auto text-lg font-medium'>{plan.currency}</span>
                      <span className='text-5xl font-bold'>
                        <NumberTicker value={Math.floor(displayPrice)} />
                      </span>
                      <span className='text-muted-foreground text-lg'>/{plan.period}</span>
                    </div>
                    {plan.buttonVariant === 'primary' && (
                      <PrimaryOrionButton size='lg' className='cursor-pointer rounded-lg'>
                        {plan.buttonText}
                      </PrimaryOrionButton>
                    )}
                    {plan.buttonVariant === 'secondary' && (
                      <SecondaryOrionButton size='lg' className='cursor-pointer rounded-lg'>
                        {plan.buttonText}
                      </SecondaryOrionButton>
                    )}
                  </CardHeader>

                  <CardContent className='px-8'>
                    <ul className='space-y-4'>
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className='flex gap-2 py-1'>
                          <span className='bg-primary mt-2 size-2 shrink-0 rounded-full' />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
