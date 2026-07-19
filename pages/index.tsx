import type { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {
  ShieldCheckIcon,
  ServerIcon,
  LayersIcon,
  EyeOffIcon,
  GitForkIcon,
  TerminalIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  LockIcon,
  GlobeIcon,
  BoxIcon,
  ChevronRightIcon,
  StarIcon,
  ZapIcon,
  PlayCircleIcon,
} from 'lucide-react'

import VBrowserLogo from '@/landing/svg/vbrowser-logo'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────────────────────────

type Feature = {
  icon: ReactElement
  title: string
  description: string
  tag?: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const features: Feature[] = [
  {
    icon: <EyeOffIcon className='size-5' />,
    title: 'Zero Persistence',
    description:
      'Every session runs in an ephemeral container. When it exits, all data — cookies, cache, history, credentials — is permanently gone.',
    tag: 'Core',
  },
  {
    icon: <LockIcon className='size-5' />,
    title: 'Network Isolation',
    description:
      'Sessions run on AWS ECS Fargate, completely isolated from your personal infrastructure. No traffic, DNS leaks, or C2 callbacks can reach you — full anonymity.',
    tag: 'Core',
  },
  {
    icon: <LayersIcon className='size-5' />,
    title: '15+ Browser Images',
    description:
      'Brave, Chrome, Firefox, Tor Browser, Kali Linux, Telegram, and more. Each image is purpose-built and regularly updated.',
    tag: 'Browsers',
  },
  {
    icon: <ServerIcon className='size-5' />,
    title: 'Hybrid by Design',
    description:
      'Your control plane — database, Redis, frontend, and API — runs on your infrastructure. Browser sessions are hosted in AWS, keeping your network isolated and anonymous.',
    tag: 'Infra',
  },
  {
    icon: <TerminalIcon className='size-5' />,
    title: 'Rich Tooling',
    description:
      'File downloads, password-protected 7z archives, screenshots, shared cases, workspaces, RBAC user management, notes, and network logging — everything you need for structured investigations.',
    tag: 'Features',
  },
  {
    icon: <GitForkIcon className='size-5' />,
    title: 'Open Source',
    description:
      'MIT licensed with no hidden restrictions. Read the code, extend it, contribute back. No black boxes in your security stack.',
    tag: 'OSS',
  },
]

const stats = [
  { value: '15+', label: 'Browser images' },
  { value: '100%', label: 'Ephemeral sessions' },
  { value: 'MIT', label: 'Open source license' },
  { value: '0', label: 'Data sent externally' },
]

const browsers = [
  { name: 'Brave', color: 'text-orange-400' },
  { name: 'Chrome', color: 'text-blue-400' },
  { name: 'Firefox', color: 'text-orange-500' },
  { name: 'Tor', color: 'text-purple-400' },
  { name: 'Kali', color: 'text-red-400' },
  { name: 'Telegram', color: 'text-sky-400' },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function NavLink({
  href,
  children,
  external,
  className,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
  className?: string
}) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(
        'text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground',
        className
      )}
    >
      {children}
    </Link>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className='inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary/80'>
      {children}
    </span>
  )
}

// Fake terminal / session preview shown in the hero
function HeroVisual() {
  return (
    <div className='relative w-full max-w-2xl mx-auto'>
      {/* Glow behind the card */}
      <div className='absolute inset-0 -z-10 rounded-2xl bg-primary/10 blur-3xl' />

      {/* Main card */}
      <div className='overflow-hidden rounded-xl border border-border bg-card shadow-2xl'>
        {/* Window chrome */}
        <div className='flex items-center gap-2 border-b border-border bg-muted/20 px-4 py-3'>
          <span className='size-3 rounded-full bg-destructive/50' />
          <span className='size-3 rounded-full bg-primary/30' />
          <span className='size-3 rounded-full bg-primary/15' />
          <div className='ml-3 flex flex-1 items-center gap-2 rounded-md border border-border/60 bg-background/60 px-3 py-1'>
            <LockIcon className='size-3 text-primary/60' />
            <span className='font-mono text-xs text-muted-foreground'>isolated-session://browser-a3f7c9</span>
          </div>
          <div className='ml-2 flex items-center gap-1.5 rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1'>
            <span className='size-1.5 animate-pulse rounded-full bg-primary' />
            <span className='text-[10px] font-semibold text-primary'>ISOLATED</span>
          </div>
        </div>

        {/* Body: split view */}
        <div className='grid grid-cols-2 divide-x divide-border'>
          {/* Left: session info */}
          <div className='space-y-4 p-5'>
            <p className='text-[10px] font-semibold uppercase tracking-widest text-muted-foreground'>Session Info</p>
            <div className='space-y-2.5'>
              {[
                { label: 'Image', value: 'vbrowser/tor:latest' },
                { label: 'Network', value: 'vpc-0a3f7c9' },
                { label: 'Ephemeral', value: 'true' },
                { label: 'Status', value: 'active', highlight: true },
              ].map(({ label, value, highlight }) => (
                <div key={label} className='flex items-center justify-between'>
                  <span className='text-xs text-muted-foreground'>{label}</span>
                  <span className={cn('font-mono text-xs', highlight ? 'text-primary font-semibold' : 'text-foreground/70')}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: terminal output */}
          <div className='bg-background/50 p-4 font-mono text-[11px] leading-5'>
            <p className='text-muted-foreground/60 mb-2 text-[10px] uppercase tracking-widest'>Container log</p>
            <p className='text-muted-foreground'>Initializing container...</p>
            <p className='text-muted-foreground'>Setting up network interfaces...</p>
            <p className='text-muted-foreground'>Configuring proxy...</p>
            <p className='text-green-500/70'>✓ Container ready</p>
            <p className='text-muted-foreground'>Launching Tor Browser...</p>
            <p className='text-green-500/70'>✓ Session active</p>
            <p className='mt-2 flex items-center gap-1.5'>
              <span className='inline-block h-3 w-px animate-pulse bg-primary' />
            </p>
          </div>
        </div>

        {/* Footer: browser row */}
        <div className='border-t border-border bg-muted/10 px-5 py-3'>
          <div className='flex items-center gap-1.5'>
            <span className='mr-2 text-[10px] uppercase tracking-widest text-muted-foreground/60'>Available</span>
            {browsers.map((b) => (
              <span
                key={b.name}
                className={cn(
                  'rounded border border-border/60 bg-background/60 px-2 py-0.5 text-[10px] font-medium',
                  b.color
                )}
              >
                {b.name}
              </span>
            ))}
            <span className='text-[10px] text-muted-foreground/50'>+9 more</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div className='dark min-h-screen text-foreground antialiased selection:bg-primary/20' style={{ backgroundColor: '#181828' }}>
      <div className='flex justify-center'>
        <Head>
          <title>vBrowser — Self-Hosted Browser Isolation</title>
          <meta
            name='description'
            content='Open vBrowser (OvB) is a self-hosted browser isolation platform built for CTI investigations and security operations. Zero persistence, 15+ browser images, MIT licensed.'
          />
          <meta property='og:title' content='vBrowser — Self-Hosted Browser Isolation' />
          <meta
            property='og:description'
            content='Self-hosted browser isolation for CTI and security ops. Zero persistence, 15+ browser images, MIT licensed.'
          />
          <link rel='icon' href='/img/favicon.ico' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        </Head>
      </div>

      {/* ── Header ───────────────────────────────────────────────────────────── */}
      <header className='sticky top-0 z-50 h-16 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl'>
        <div className='mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6'>
          <Link href='/' className='flex items-center gap-2.5 shrink-0'>
            <VBrowserLogo className='size-7' />
            <span className='text-base font-semibold tracking-tight'>vBrowser</span>
          </Link>

          <nav className='hidden items-center gap-7 md:flex'>
            <NavLink href='#features'>Features</NavLink>
            <NavLink href='#how-it-works'>How it works</NavLink>
            <NavLink href='/introduction'>Docs</NavLink>
            <NavLink href='https://github.com/fish-not-phish/open-vbrowser' external>
              GitHub
            </NavLink>
          </nav>

          <div className='flex items-center gap-2.5'>
            <NavLink
              href='/introduction'
              className='hidden rounded-lg border border-border/80 px-4 py-1.5 text-sm font-medium text-foreground hover:bg-accent hover:text-foreground sm:block'
            >
              Docs
            </NavLink>
            <Link
              href='https://github.com/fish-not-phish/open-vbrowser'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1.5 rounded-lg bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85'
            >
              <StarIcon className='size-3.5' />
              Star on GitHub
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────────────── */}
        <section className='relative overflow-hidden'>
          {/* Subtle grid background */}
          <div
            className='pointer-events-none absolute inset-0 -z-10'
            style={{
              backgroundImage: `
                linear-gradient(to bottom, transparent 0%, oklch(0.09 0.01 280) 85%),
                radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.63 0.10 349 / 0.12) 0%, transparent 70%)
              `,
            }}
          />
          {/* Very subtle dot grid */}
          <div
            className='pointer-events-none absolute inset-0 -z-10 opacity-30'
            style={{
              backgroundImage: 'radial-gradient(circle, oklch(0.63 0.10 349 / 0.25) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className='mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6 sm:pt-28'>
            {/* Top badge */}
            <div className='mb-6 flex justify-center'>
              <Link
                href='https://github.com/fish-not-phish/open-vbrowser'
                target='_blank'
                rel='noopener noreferrer'
                className='group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-1.5 text-xs font-medium text-primary transition-colors hover:border-primary/50 hover:bg-primary/12'
              >
                <ZapIcon className='size-3' />
                MIT Licensed · Open Source · Self-Hosted
                <ChevronRightIcon className='size-3 transition-transform group-hover:translate-x-0.5' />
              </Link>
            </div>

            {/* Headline */}
            <h1 className='text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.75rem] lg:leading-[1.1]'>
              Browse the threat surface.{' '}
              <br className='hidden sm:block' />
              <span
                style={{
                  background: 'linear-gradient(135deg, oklch(0.75 0.12 349) 0%, oklch(0.55 0.10 349) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              > 
                Leave no trace.
              </span>
            </h1>

            {/* Subheadline */}
            <p className='mt-6 text-center text-base text-muted-foreground sm:text-lg leading-relaxed'>
              vBrowser is a self-hosted browser isolation platform for CTI analysts and security teams. 
              Ephemeral containers, network isolation, and 15+ browser images — all on your infrastructure.
            </p>

            {/* CTAs */}
            <div className='mt-10 flex flex-wrap items-center justify-center gap-3'>
              <Link
                href='https://github.com/fish-not-phish/open-vbrowser'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:opacity-90 hover:shadow-primary/30'
              >
                View on GitHub
                <ExternalLinkIcon className='size-4' />
              </Link>
              <Link
                href='/introduction'
                className='inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent'
              >
                Read the docs
                <ArrowRightIcon className='size-4' />
              </Link>
              <Link
                href='/usage/launching-a-session'
                className='inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/8 px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/12'
              >
                <PlayCircleIcon className='size-4' />
                Watch a session
              </Link>
            </div>

            {/* Hero visual */}
            <div className='mt-16'>
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* ── Stats bar ────────────────────────────────────────────────────────── */}
        <div className='border-y border-border/60 bg-card/40'>
          <div className='mx-auto max-w-6xl px-4 sm:px-6'>
            <div className='grid grid-cols-2 divide-x divide-border/60 sm:grid-cols-4'>
              {stats.map(({ value, label }) => (
                <div key={label} className='px-6 py-6 text-center'>
                  <p className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl'>{value}</p>
                  <p className='mt-1 text-xs text-muted-foreground'>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Features ─────────────────────────────────────────────────────────── */}
        <section id='features' className='scroll-mt-20 mx-auto max-w-6xl px-4 py-24 sm:px-6'>
          {/* Section label */}
          <div className='mb-12'>
            <p className='text-xs font-semibold uppercase tracking-widest text-primary mb-2'>Features</p>
            <div className='flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
              <h2 className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl'>
                Built for operational security
              </h2>
              <p className='max-w-sm text-sm text-muted-foreground'>
                Every decision in vBrowser is driven by one constraint: analysts must be able to
                investigate anything without risk.
              </p>
            </div>
          </div>

          {/* Feature grid */}
          <div className='grid gap-px border border-border/60 bg-border/60 rounded-xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3'>
            {features.map((f) => (
              <div key={f.title} className='group relative bg-card px-6 py-7 transition-colors hover:bg-accent/30'>
                <div className='mb-4 flex items-start justify-between'>
                  <div className='flex size-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary'>
                    {f.icon}
                  </div>
                  {f.tag && <Tag>{f.tag}</Tag>}
                </div>
                <h3 className='mb-2 text-sm font-semibold text-foreground'>{f.title}</h3>
                <p className='text-sm leading-relaxed text-muted-foreground'>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────────────────────────── */}
        <section id='how-it-works' className='scroll-mt-20 border-t border-border/60 bg-card/30'>
          <div className='mx-auto max-w-6xl px-4 py-24 sm:px-6'>
            <div className='mb-12'>
              <p className='text-xs font-semibold uppercase tracking-widest text-primary mb-2'>How it works</p>
              <h2 className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl'>
                Up and running in minutes
              </h2>
            </div>

            <div className='grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-start'>
              {/* Left: steps */}
              <div className='space-y-0'>
                {[
                  {
                    n: '01',
                    title: 'Download & prepare',
                    body: 'Clone the repository and run `terraform/setup.sh`. The guided installer walks through ports, auth, TLS, and AWS credentials — no manual config needed.',
                  },
                  {
                    n: '02',
                    title: 'Deploy the stack',
                    body: 'The script provisions your self-hosted control plane (frontend, API, Redis, Postgres) and configures AWS ECS Fargate for browser sessions. Everything is automated.',
                  },
                  {
                    n: '03',
                    title: 'Launch an isolated session',
                    body: 'Pick a browser image from the UI. A fresh session spins up on AWS Fargate — your network stays untouched. When the session ends, everything is wiped.',
                  },
                ].map(({ n, title, body }, i, arr) => (
                  <div key={n} className='flex gap-5'>
                    <div className='flex flex-col items-center'>
                      <div className='flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-xs font-bold text-primary'>
                        {n}
                      </div>
                      {i < arr.length - 1 && (
                        <div className='mt-2 w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent' style={{ minHeight: 48 }} />
                      )}
                    </div>
                    <div className={cn('pb-10', i === arr.length - 1 && 'pb-0')}>
                      <h3 className='text-sm font-semibold text-foreground mb-1.5'>{title}</h3>
                      <p className='text-sm leading-relaxed text-muted-foreground'>{body}</p>
                    </div>
                  </div>
                ))}

                <div className='mt-2 ml-14'>
                  <Link
                    href='/getting-started/quickstart'
                    className='inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80'
                  >
                    Full quickstart guide
                    <ArrowRightIcon className='size-4' />
                  </Link>
                </div>
              </div>

              {/* Right: two-panel code block */}
              <div className='overflow-hidden rounded-xl border border-border bg-card shadow-xl'>
                {/* Tab bar */}
                

                {/* Code */}
                <pre className='overflow-x-auto p-6 text-[12px] leading-[1.7] text-foreground/80 font-mono'>{`# 1. Clone the repository
git clone https://github.com/fish-not-phish/open-vbrowser
cd open-vbrowser

# 2. Run the guided installer
./terraform/setup.sh

# 3. Follow the prompts — it handles
#    everything else automatically`}</pre>

                {/* Status footer */}
                <div className='flex items-center justify-between border-t border-border bg-muted/20 px-6 py-4'>
                  <div className='flex items-center gap-2'>
                    <span className='size-2 rounded-full bg-green-500/70' />
                    <span className='text-xs text-muted-foreground'>Control plane healthy</span>
                  </div>
                  <div className='flex items-center gap-3 text-[10px] text-muted-foreground/60 font-mono'>
                    <span>self-hosted</span>
                    <span>aws fargate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Use cases ────────────────────────────────────────────────────────── */}
        <section className='mx-auto max-w-6xl px-4 py-24 sm:px-6'>
          <div className='mb-10'>
            <p className='text-xs font-semibold uppercase tracking-widest text-primary mb-2'>Use Cases</p>
            <h2 className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl'>
              Who uses vBrowser
            </h2>
          </div>

          <div className='grid gap-4 sm:grid-cols-3'>
            {[
              {
                icon: <GlobeIcon className='size-5' />,
                title: 'CTI Analysts',
                body: 'Visit threat actor infrastructure, dark web forums, and malicious domains without exposing your real IP, identity, or internal network.',
              },
              {
                icon: <ShieldCheckIcon className='size-5' />,
                title: 'SOC & IR Teams',
                body: 'Safely open phishing URLs, inspect suspicious attachments, and investigate active threats in an air-gapped browser session.',
              },
              {
                icon: <BoxIcon className='size-5' />,
                title: 'OSINT Researchers',
                body: 'Conduct open-source investigations from isolated, ephemeral sessions. Switch browser personas and maintain operational security.',
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className='rounded-xl border border-border bg-card p-6 space-y-4'>
                <div className='flex size-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary'>
                  {icon}
                </div>
                <div>
                  <h3 className='text-sm font-semibold text-foreground mb-2'>{title}</h3>
                  <p className='text-sm leading-relaxed text-muted-foreground'>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────────── */}
        <section className='border-t border-border/60'>
          <div className='relative mx-auto max-w-6xl overflow-hidden px-4 py-24 sm:px-6'>
            {/* Background glow */}
            <div
              className='pointer-events-none absolute inset-0 -z-10'
              style={{
                background:
                  'radial-gradient(ellipse 60% 80% at 50% 100%, oklch(0.63 0.10 349 / 0.08) 0%, transparent 70%)',
              }}
            />

            <div className='text-center'>
              <h2 className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl'>
                Isolate your investigations today
              </h2>
              <p className='mt-6 text-center text-sm text-muted-foreground sm:text-base leading-relaxed'>
                Free, open source, and fully under your control. Deploy in minutes on any Linux host.
                No accounts, no cloud, no compromises.
              </p>
              <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
                <Link
                  href='https://github.com/fish-not-phish/open-vbrowser'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:opacity-90'
                >
                  Get Started — It&apos;s Free
                  <ExternalLinkIcon className='size-4' />
                </Link>
                <Link
                  href='/introduction'
                  className='inline-flex items-center gap-2 rounded-lg border border-border bg-card px-7 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent'
                >
                  Read the docs
                  <ArrowRightIcon className='size-4' />
                </Link>
              </div>

              {/* Small trust line */}
              <div className='mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground/70'>
                <span className='flex items-center gap-1.5'><LockIcon className='size-3' /> Zero external data</span>
                <span className='flex items-center gap-1.5'><ServerIcon className='size-3' /> Your infrastructure</span>
                <span className='flex items-center gap-1.5'><GitForkIcon className='size-3' /> MIT licensed</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer className='border-t border-border/60'>
        <div className='mx-auto max-w-6xl px-4 py-8 sm:px-6'>
          <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
            <Link href='/' className='flex items-center gap-2 shrink-0'>
              <VBrowserLogo className='size-5' />
              <span className='text-sm font-semibold'>vBrowser</span>
            </Link>

            <nav className='flex flex-wrap items-center justify-center gap-5'>
            <NavLink href='/introduction'>Docs</NavLink>
              <NavLink href='#features'>Features</NavLink>
              <NavLink href='https://github.com/fish-not-phish/open-vbrowser' external>
                GitHub
              </NavLink>
              <NavLink href='https://github.com/fish-not-phish/open-vbrowser/issues' external>
                Issues
              </NavLink>
              <NavLink href='https://github.com/fish-not-phish/open-vbrowser/blob/main/LICENSE' external>
                License
              </NavLink>
            </nav>

            <p className='shrink-0 text-xs text-muted-foreground'>
              MIT {new Date().getFullYear()} © vBrowser
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Opt out of the Nextra docs layout entirely — render bare
LandingPage.getLayout = (page: ReactElement) => page
