export default {
  logo: (
    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.25rem' }}>
      <img src="/img/vbrowser-logo.png" alt="vBrowser" style={{ height: 28 }} />
      vBrowser
    </span>
  ),
  project: {
    link: 'https://github.com/fish-not-phish/open-vbrowser',
  },
  docsRepositoryBase: 'https://github.com/fish-not-phish/vbrowser-docs/blob/main',
  darkMode: false,
  nextThemes: {
    defaultTheme: 'dark',
    forcedTheme: 'dark',
  },
  footer: {
    content: `MIT ${new Date().getFullYear()} © vBrowser`,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="vBrowser Docs" />
      <meta property="og:description" content="Secure & Isolated Virtual Browser documentation" />
      <link rel="icon" href="/img/favicon.ico" />
    </>
  ),
}
