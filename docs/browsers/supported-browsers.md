---
sidebar_position: 1
---

# Supported Browsers

Open vBrowser (OvB) supports multiple browser environments, each packaged as an isolated container image. Browsers are treated as **explicitly approved execution environments** and must be selected during setup.

This document describes **which browsers are available**, **their intended use cases**, and **security considerations** for each.

---

## Browser Selection Model

- Browsers are selected during `setup.sh`
- Only selected browser images are built
- Unselected browsers are excluded entirely
- Each browser runs in its own ephemeral container

---

## Default Browser Set

By default, OvB enables the following browsers:

- **Chrome**
- **Mullvad Browser**
- **Tor Browser**

These defaults cover the majority of CTI and OSINT use cases.

---

## Supported Browsers/Applications

Below is the full list of application images included in the OvB repository.

### Brave (`brave`)
![brave](./assets/brave.png)

**Use cases**
- Privacy-focused web browsing
- Ad/tracker blocking behavior
- Comparing privacy features against Chromium/Firefox

**Notes**
- Chromium-based with built-in shields
- Distinct fingerprint from stock Chrome
- May alter site behavior due to blocking

---

### Chrome (`chrome`)
![chrome](./assets/chrome.png)

**Use cases**
- General web browsing
- Phishing analysis

**Notes**
- Widely fingerprinted
- Highest compatibility
- Suitable for baseline analysis

---

### Chromium (`chromium`)
![chromium](./assets/chromium.png)

**Use cases**
- Open-source Chromium testing
- Comparing behavior against Chrome

**Notes**
- Fewer proprietary components
- Slightly different fingerprinting
- Common base for many browsers

---

### Discord (`discord`)
![discord](./assets/discord.png)

**Use cases**
- Investigate malware delivery via chat links/files
- Social engineering investigations
- Community and threat actor monitoring

**Notes**
- Electron-based (Chromium engine)
- Distinct application fingerprint

---

### Falkon (`falkon`)
![falkon](./assets/falkon.png)

**Use cases**
- Lightweight browsing
- QtWebEngine testing

**Notes**
- Smaller user base
- Less common fingerprint
- Limited extension ecosystem

---

### Firefox (`firefox`)
![firefox](./assets/firefox.png)

**Use cases**
- Gecko-based engine testing
- Cross-browser behavior comparison
- Exploit surface differentiation

**Notes**
- Distinct rendering engine
- Strong developer tooling
- Different fingerprint than Chromium

---

### Kali (`kali`)
![kali](./assets/kali.png)

**Use cases**
- Security research browsing
- Testing attacker tooling portals
- Access to terminal
- Red-team / blue-team workflows

**Notes**
- Typically Firefox ESR–based
- Environment fingerprint differs from consumer systems
- Not intended for stealth browsing

---

### LibreWolf (`librewolf`)
![librewolf](./assets/librewolf.png)

**Use cases**
- Privacy-hardened Firefox workflows
- Anti-tracking and fingerprinting research

**Notes**
- Aggressive privacy defaults
- Telemetry removed
- May break some sites

---

### Microsoft Edge (`edge`)
![edge](./assets/edge.png)

**Use cases**
- Enterprise web testing
- Microsoft ecosystem targeting
- Corporate phishing simulations

**Notes**
- Chromium-based
- Common in corporate environments
- Distinct enterprise policies

---

### Mullvad Browser (`mullvad`)
![mullvad](./assets/mullvad.png)

**Use cases**
- Privacy-preserving OSINT
- Anti-tracking investigations
- Better at bypassing Cloudflare managed challenges

**Notes**
- Strong fingerprint resistance
- Designed to be used with VPNs
- Not anonymity by itself

---

### Pale Moon (`palemoon`)
![palemoon](./assets/palemoon.png)

**Use cases**
- Legacy web compatibility testing
- Older Gecko-based behavior analysis

**Notes**
- Limited modern support
- Distinct and uncommon attack surface

---

### Pulse (`pulse`)
![pulse](./assets/pulse.png)

**Use cases**
- Experimental or niche privacy browsing
- Behavior comparison against mainstream browsers

**Notes**
- Small user base
- Distinct fingerprint
- Limited documentation and extensions

---

### SeaMonkey (`seamonkey`)
![seamonkey](./assets/seamonkey.png)

**Use cases**
- Legacy Gecko suite testing
- Historical compatibility analysis

**Notes**
- Very niche
- Rarely used in modern investigations
- Includes mail and composer components

---

### Signal (`signal`)
![signal](./assets/signal.png)

**Use cases**
- Secure messaging investigations
- Malware or phishing link analysis in chats

**Notes**
- Electron-based (Chromium engine)
- End-to-end encrypted
- Not a web browser

---

### Slack (`slack`)
![slack](./assets/slack.png)

**Use cases**
- Enterprise collaboration investigations
- Malware or phishing link analysis in workspaces

**Notes**
- Electron-based (Chromium engine)
- Corporate-focused environment
- Distinct application fingerprint

---

### Telegram (`telegram`)
![telegram](./assets/telegram.png)

**Use cases**
- Threat actor channel monitoring
- Malware and phishing distribution analysis

**Notes**
- Desktop client is not browser-based
- Common for illicit content distribution
- Large attack surface via files and links

---

### Tor Browser (`tor`)
![tor](./assets/tor.png)

**Use cases**
- Dark web investigations
- Onion service access

**Notes**
- Routes traffic through Tor
- Strong anonymity properties
- Requires strict OPSEC discipline

---

### Ungoogled Chromium (`ungoogled`)
![ungoogled](./assets/ungoogled.png)

**Use cases**
- Minimal Chromium builds
- Tracking behavior comparison

**Notes**
- Google services removed
- Less common fingerprint
- Manual extension management

---

### Waterfox (`waterfox`)
![waterfox](./assets/waterfox.png)

**Use cases**
- Legacy Firefox behavior testing
- Extended-support add-on analysis

**Notes**
- Niche use cases
- Larger fingerprint surface
- Mix of modern and legacy features

---

### Zen (`zen`)
![zen](./assets/zen.png)

**Use cases**
- Experimental or privacy-oriented browsing
- UI/UX and behavior comparison

**Notes**
- Small user base
- Distinct fingerprint
- Rapidly evolving feature set

---

### Zoom (`zoom`)
![zoom](./assets/zoom.png)

**Use cases**
- Malware or phishing delivery via meeting links
- Enterprise social engineering scenarios

**Notes**
- Electron-based desktop application
- Not a web browser
- Widely deployed in corporate environments

---

## Non-Browser Applications

OvB includes containers for select non-browser tools.

Examples:
- Slack
- Discord
- Kali (entire Operating System)
- Telegram
- Signal
- Zoom

These are intended for **controlled access to communication platforms** during investigations.

:::caution
Using authenticated accounts inside these containers carries attribution risk.
Use with extreme caution.
:::

---

## Security Considerations

All browsers:
- Run in isolated containers
- Are destroyed after session termination
- Do not persist state between sessions

However:
- Browsers can still be fingerprinted
- Zero-days may still execute (on cloud browser infrastructure, not the local machine)
- OPSEC mistakes remain possible

Browser choice should align with investigation goals.

---

## Adding or Removing Browsers

Browsers are enabled or disabled by:

- Selecting them during `setup.sh`
- Re-running setup after teardown

Dynamic runtime changes are **not supported**.

---

## Next Steps

Continue to **Custom Browser Images**
