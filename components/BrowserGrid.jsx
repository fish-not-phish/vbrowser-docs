const BROWSERS = [
  // Browsers
  { slug: 'brave',     name: 'Brave',           category: 'Browser',  desc: 'Privacy-focused Chromium fork' },
  { slug: 'chrome',    name: 'Chrome',           category: 'Browser',  desc: 'Google Chrome' },
  { slug: 'edge',      name: 'Microsoft Edge',   category: 'Browser',  desc: 'Chromium-based Edge' },
  { slug: 'firefox',   name: 'Firefox',          category: 'Browser',  desc: 'Mozilla Firefox' },
  { slug: 'floorp',    name: 'Floorp',           category: 'Browser',  desc: 'Privacy-focused Firefox fork' },
  { slug: 'librewolf', name: 'LibreWolf',        category: 'Browser',  desc: 'Hardened Firefox fork' },
  { slug: 'mullvad',   name: 'Mullvad Browser',  category: 'Browser',  desc: 'Anti-fingerprinting browser' },
  { slug: 'palemoon',  name: 'Pale Moon',        category: 'Browser',  desc: 'Goanna-based Firefox fork' },
  { slug: 'tor',       name: 'Tor Browser',      category: 'Browser',  desc: 'Tor Browser Bundle' },
  { slug: 'vivaldi',   name: 'Vivaldi',          category: 'Browser',  desc: 'Feature-rich Chromium browser' },
  { slug: 'waterfox',  name: 'Waterfox',         category: 'Browser',  desc: 'Firefox fork' },
  { slug: 'zen',       name: 'Zen Browser',      category: 'Browser',  desc: 'Firefox-based browser' },
  // Security
  { slug: 'kali',      name: 'Kali Linux',       category: 'Security', desc: 'Full Kali Linux desktop' },
  // Comms
  { slug: 'telegram',  name: 'Telegram',         category: 'Comms',    desc: 'Telegram Desktop client' },
  // VPN
  { slug: 'pulse',     name: 'Pulse Browser',    category: 'Browser',  desc: 'Chromium-based browser' },
]

const CATEGORY_COLORS = {
  Browser:  { badge: 'rgba(207,114,135,0.15)', text: '#CF7287', border: 'rgba(207,114,135,0.3)' },
  Security: { badge: 'rgba(114,135,207,0.15)', text: '#7287CF', border: 'rgba(114,135,207,0.3)' },
  Comms:    { badge: 'rgba(114,207,135,0.15)', text: '#72CF87', border: 'rgba(114,207,135,0.3)' },
  VPN:      { badge: 'rgba(207,175,114,0.15)', text: '#CFAF72', border: 'rgba(207,175,114,0.3)' },
}

export default function BrowserGrid() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
      gap: '12px',
      margin: '1.5rem 0',
    }}>
      {BROWSERS.map(({ slug, name, category, desc }) => {
        const colors = CATEGORY_COLORS[category]
        return (
          <div key={slug} style={{
            background: '#12121e',
            border: '1px solid rgba(207,114,135,0.15)',
            borderRadius: '8px',
            padding: '16px 12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(207,114,135,0.4)'
            e.currentTarget.style.background = '#1a1a2e'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(207,114,135,0.15)'
            e.currentTarget.style.background = '#12121e'
          }}
          >
            <img
              src={`/img/browsers/${slug}.png`}
              alt={name}
              style={{ width: 48, height: 48, objectFit: 'contain' }}
            />
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#e8b4bf', fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.3 }}>
                {name}
              </div>
              <div style={{ color: '#7a5060', fontSize: '0.75rem', marginTop: 3 }}>
                {desc}
              </div>
            </div>
            <span style={{
              fontSize: '0.7rem',
              padding: '2px 8px',
              borderRadius: '999px',
              background: colors.badge,
              color: colors.text,
              border: `1px solid ${colors.border}`,
              fontWeight: 500,
            }}>
              {category}
            </span>
          </div>
        )
      })}
    </div>
  )
}
