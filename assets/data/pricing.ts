export type PricingPlan = {
  name: string
  description: string
  price: number
  yearlyPrice: number
  currency: string
  period: string
  features: string[]
  buttonText: string
  buttonVariant: 'primary' | 'secondary'
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'For individuals or small teams getting started',
    price: 8,
    yearlyPrice: 5.2,
    currency: '$',
    period: 'month',
    features: [
      'Up to 3 active AI agents',
      '100 automated tasks per month',
      'Workflow designer access',
      'Integration with Slack + Notion',
      'Community support',
      '1 shared workspace',
      'API access'
    ],
    buttonText: 'Purchase plan',
    buttonVariant: 'secondary'
  },
  {
    name: 'Pro',
    description: 'For growing teams ready to automate deeper',
    price: 12,
    yearlyPrice: 7.8,
    currency: '$',
    period: 'month',
    features: [
      'Up to 15 active AI agents',
      '500 automated tasks per month',
      'Workflow designer + AI templates',
      'Integration with Slack, Notion, and GitHub',
      'Priority chat support',
      '5 team workspaces',
      'API + Webhook access'
    ],
    buttonText: 'Purchase plan',
    buttonVariant: 'primary'
  },
  {
    name: 'Enterprise',
    description: 'For large organizations needing scale & control',
    price: 25,
    yearlyPrice: 16.25,
    currency: '$',
    period: 'month',
    features: [
      'Unlimited active AI agents',
      'Unlimited automated tasks',
      'Advanced workflow orchestration',
      'Integration with custom enterprise tools',
      'Dedicated success manager',
      'Unlimited workspaces',
      'Advanced security & compliance'
    ],
    buttonText: 'Purchase plan',
    buttonVariant: 'secondary'
  }
]
