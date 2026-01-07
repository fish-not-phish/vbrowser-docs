---
sidebar_position: 1
---

# Anonymity

Open vBrowser (OvB) is often used in workflows where **anonymity, attribution resistance, and identity separation** are important. However, OvB is **not an anonymity service** and does not claim to provide absolute or guaranteed anonymity.

This document explains **what OvB does and does not provide with respect to anonymity**, and how operators should reason about attribution risk.

---

## Anonymity vs Isolation

OvB focuses on **isolation**, not anonymity.

- **Isolation** prevents untrusted content from executing on the analyst’s endpoint.
- **Anonymity** attempts to prevent identification or correlation of the analyst.

OvB significantly improves isolation and **reduces attribution risk**, but it does not eliminate it.

---

## What OvB Helps Protect

OvB helps protect against:

- Exposure of analyst workstation IP addresses
- Direct fingerprinting of analyst endpoints
- Local browser artifacts (cookies, cache, storage)
- Long-lived browser identifiers

All browsing traffic originates from **cloud infrastructure**, not the analyst’s device.

---

## What OvB Does NOT Guarantee

OvB does **not** guarantee:

- Full anonymity against advanced adversaries
- Protection against traffic correlation
- Resistance to behavioral fingerprinting
- Legal or jurisdictional anonymity
- Identity obfuscation if accounts are used

Operators must assume **some level of attribution risk always exists**.

---

## Browser Fingerprinting Considerations

Even inside OvB, browsers can be fingerprinted based on:

- Browser type and version
- Installed fonts and extensions
- Screen resolution and behavior
- Timing and interaction patterns

Choosing different browsers may change fingerprints, but does not eliminate them.

---

## Infrastructure Attribution

OvB uses shared cloud infrastructure.

Implications:
- Traffic originates from known cloud IP ranges
- Adversaries may recognize cloud providers
- Repeated use of the same region may correlate activity

Using OvB hides personal IPs, but does not make traffic untraceable.

---

## Tor and Privacy-Focused Browsers

OvB supports browsers such as:

- Tor Browser
- Mullvad Browser
- LibreWolf

These browsers provide additional privacy features, but:

- Tor Browser still requires strict OPSEC
- Account logins defeat anonymity
- Browser misuse can negate protections

Privacy tools amplify OvB’s benefits, but do not replace discipline.

---

## Operator Behavior Matters Most

The largest source of attribution risk is **operator behavior**.

Common mistakes include:
- Logging into personal accounts
- Reusing identifiers across investigations
- Uploading identifying files
- Revealing patterns through behavior

OvB cannot protect against these mistakes.

---

## Jurisdiction and Legal Context

Anonymity is affected by:

- Cloud region selection
- Applicable laws and regulations
- Provider policies

Operators are responsible for understanding the legal context of their deployment.

---

## Threat Model Alignment

OvB is effective for:
- Reducing exposure to opportunistic adversaries
- Preventing direct endpoint attribution
- Limiting long-term tracking

OvB is not designed to defeat:
- Nation-state surveillance
- Global traffic analysis
- Advanced correlation attacks

---

## Summary

OvB should be understood as:

- A **browser isolation platform**
- A **risk-reduction tool**
- A way to separate analysts from hostile content

It should not be relied upon as:
- An anonymity guarantee
- An OPSEC substitute
- A privacy panacea

---

## Next Steps

To understand how OvB isolates infrastructure and execution environments:

Continue to **Cloud Isolation**
