import type { SVGAttributes } from 'react'

const VBrowserLogo = ({ className, ...props }: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32' fill='none' className={className} {...props}>
      <image href='/img/vbrowser-logo.png' width='32' height='32' />
    </svg>
  )
}

export default VBrowserLogo
