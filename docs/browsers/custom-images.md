---
sidebar_position: 2
---

# Custom Browser Images

Open vBrowser (OvB) currently ships with a curated set of **pre-built browser images** designed to balance security, stability, and investigative capability.

At this time, **custom browser images are not supported**.

---

## Current Status

OvB treats browser images as **trusted execution templates** that are:

- Built once and run many times
- Carefully reviewed and approved
- Immutable at runtime
- Closely tied to OvB’s security and lifecycle model

Because browser images define the **entire investigation surface**, allowing arbitrary custom images introduces significant operational and security risk. For this reason, OvB does not yet support user-defined custom images.

---

## Requesting a Custom Image

If you require a browser image that is not currently available (for example, a hardened profile, specialized OSINT tooling, or a niche browser), please open an issue on GitHub.

👉 **Submit a request here:**  
https://github.com/fish-not-phish/open-vbrowser/issues

When submitting a request, please include:
- The browser or tooling required
- Intended use case (e.g. OSINT, malware analysis, enterprise testing)
- Any special configuration or hardening requirements
- Why an existing image is insufficient

This helps ensure new images are evaluated, built, and maintained safely.

---

## Roadmap Note

Support for custom images may be introduced in a future release once:
- A formal review and approval workflow exists
- Clear guardrails can be enforced consistently

Until then, all browser images must be sourced from the official OvB image set.

---

## Next Steps

To learn more about how existing images are built, versioned, and deployed, continue to **Image Lifecycle**.
