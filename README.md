# vBrowser Docs

Documentation site for [vBrowser](https://github.com/fish-not-phish/open-vbrowser), built with [Next.js](https://nextjs.org/) and [Nextra](https://nextra.site/).

## Prerequisites

- Node.js `>=20.0`
- npm

## Local Development

```bash
npm install
npm run dev
```

This starts a local dev server. Most changes are reflected live without restarting.

## Build

```bash
npm run build
```

Generates static content into the `out/` directory, which can be served by any static host.

## Typecheck

```bash
npm run typecheck
```

## Deployment

Pushes to `main` trigger the [GitHub Actions workflow](.github/workflows/deploy.yml), which builds the site and publishes `out/` to the `gh-pages` branch.
