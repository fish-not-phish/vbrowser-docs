---
sidebar_position: 3
---

# Limitations

Open vBrowser (OvB) is a powerful browser isolation platform, but it is **not a universal security solution**. Understanding its limitations is critical to using it safely, effectively, and responsibly.

This document outlines **technical, operational, and threat-model limitations** that OvB does not attempt to hide or mitigate.

---

## No Absolute Anonymity

OvB does **not** provide guaranteed anonymity.

Limitations include:
- Cloud infrastructure is inherently attributable
- Traffic can be correlated by advanced adversaries
- Browser fingerprinting remains possible
- Behavioral analysis can deanonymize users

OvB reduces risk; it does not eliminate it.

---

## Browser Vulnerabilities Still Apply

OvB does not magically secure browsers.

Limitations:
- Zero-day browser exploits may still execute
- Exploits may compromise the running container
- Malicious JavaScript can still run

OvB assumes browsers can be compromised and relies on **containment and destruction**, not prevention.

---

## OPSEC Is Not Enforced

OvB cannot prevent:

- Logging into personal accounts
- Reusing identifiers
- Uploading identifying files
- Revealing patterns through behavior

Operator mistakes remain the **largest attribution risk**.

---

## File Handling Risks

OvB does not safely process downloaded files.

Limitations:
- Files may contain malware
- Files are not scanned automatically
- Files may be exfiltrated if mishandled

Downloaded files must be treated as hostile and handled outside OvB with appropriate tooling.

---

## Cloud Provider Trust

OvB assumes baseline trust in:

- AWS infrastructure
- Container isolation mechanisms
- Cloud provider security controls

OvB does not defend against:
- Malicious cloud insiders
- Provider-level monitoring
- Legal or jurisdictional access

---

## No Long-Term Persistence

OvB intentionally avoids persistence.

Implications:
- Sessions cannot be resumed
- Files are not retained
- Browser state is lost on termination

This is a feature for security, but a limitation for some workflows.

---

## Not a Sandbox for Malware Execution

OvB is not a full malware sandbox.

Limitations:
- No dynamic analysis tooling
- No syscall tracing
- No memory introspection

Malware analysis should be performed in dedicated sandbox environments.

---

## Not a General-Purpose Desktop

OvB is not designed to replace:

- Analyst workstations
- Virtual desktops
- Persistent VDI environments

Sessions are disposable by design.

---

## Infrastructure Costs

OvB incurs real cloud costs.

Limitations:
- Costs scale with usage
- Long sessions increase spend
- Logging increases storage costs

Cost monitoring is the operator’s responsibility.

---

## Legal and Policy Constraints

OvB does not provide:

- Legal immunity
- Policy compliance guarantees
- Jurisdictional shielding

Operators are responsible for ensuring lawful and ethical use.

:::danger

By using vBrowser, you agree to comply with all applicable local, state, national, and international laws and regulations. Any illegal activity, including but not limited to hacking, fraud, and distribution of illegal content, is strictly prohibited and may result in immediate suspension of your account and reporting to the appropriate authorities.

vBrowser is not responsible for any actions taken by users within the vBrowser environment. Users are solely responsible for their actions and any consequences arising from misuse. vBrowser reserves the right to monitor, review, and remove any content that violates our terms of service.

By creating a session, you acknowledge and agree to these terms. You also acknowledge and agree that you have read the documentation on how to operate vBrowser sessions.

:::

---

## Summary

OvB is most effective when used:

- As a browser isolation tool
- For short-lived investigative sessions
- With disciplined OPSEC practices

It is least effective when treated as:
- An anonymity service
- A malware sandbox
- A persistent desktop environment

---

## Next Steps

To understand how to safely operate within these limits:

Continue to **OPSEC Best Practices**
