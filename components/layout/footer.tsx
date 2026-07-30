import Link from 'next/link'

import { Separator } from '@/components/ui/separator'

import Logo from '@/components/logo'
import { footerData } from '@/assets/data/footer'

const Footer = () => {
  return (
    <>
      <Separator />

      <footer className='px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl border-x px-4 py-8 sm:px-6 sm:py-16 md:py-24 lg:px-8'>
          <div className='grid grid-flow-row grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5'>
            {footerData.map((section, index) => (
              <div key={index} className='flex flex-col gap-5'>
                <div className='text-lg font-medium'>{section.title}</div>
                <ul className='text-muted-foreground space-y-3'>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className='text-muted-foreground hover:text-foreground transition-colors duration-300'
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className='mx-auto max-w-7xl border-x'>
          <Separator />
          <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 p-4 sm:px-6 lg:px-8'>
            <Link href='/#home'>
              <Logo />
            </Link>
            <p className='text-muted-foreground font-light'>
              {`©${new Date().getFullYear()}`}{' '}
              <Link href='/#home' className='link-animated'>
                vBrowser
              </Link>
              {' — '}
              <Link href='https://github.com/fish-not-phish/open-vbrowser' className='link-animated'>
                Open Source
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
