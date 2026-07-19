import '../styles/globals.css'
import '../styles/landing.css'

export default function App({ Component, pageProps }) {
  // Allow pages to override the layout (e.g. the landing page opts out of Nextra docs layout)
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />)
}
