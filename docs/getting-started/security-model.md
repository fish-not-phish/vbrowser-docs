---
sidebar_position: 4
---

# Security Model

Open vBrowser (OvB) is designed around a **defense-in-depth security model** that prioritizes isolation, ephemerality, and operator control. Rather than attempting to make browsing "safe" on an endpoint, OvB removes the endpoint from the threat path entirely.

This document explains **what OvB protects**, **how those protections are enforced**, and **where responsibility remains with the operator**.

---

## Core Security Goals

OvB is built to achieve the following security objectives:

- Prevent execution of untrusted web content on analyst endpoints
- Reduce analyst attribution and IP exposure
- Limit the blast radius of browser-based compromise
- Ensure compromised sessions are destroyed automatically
- Avoid long-lived sensitive state

OvB assumes that **web content is hostile by default**.

---

## Threat Assumptions

OvB operates under the following assumptions:

- Websites may attempt exploitation via browser vulnerabilities
- Content may include malicious JavaScript, WebAssembly, or file downloads
- Adversaries may fingerprint browsers and infrastructure
- Sessions may be compromised during use
- Infrastructure credentials must be tightly scoped

OvB does **not** assume browsers are secure.

---

## Isolation Layers

OvB enforces isolation across multiple layers.

### Endpoint Isolation

- No browser code runs on the operator workstation
- No plugins, extensions, or scripts execute locally
- Local filesystem and memory are never exposed

Result:
- Drive-by compromise of analyst systems is prevented

---

### Network Isolation

- All browsing traffic originates from cloud infrastructure
- Analyst IP addresses are never exposed to target sites

Result:
- Reduced attribution and targeting of analysts

---

### Session Isolation

- One browser per container
- No shared cookies, cache, or storage
- No session reuse across users or investigations

Result:
- Compromise of one session does not affect others

---

### Infrastructure Isolation

- Browser containers run as short-lived ECS tasks
- IAM permissions are scoped to minimum required access
- No persistent credentials exist inside browser containers

Result:
- Infrastructure compromise has limited impact

---

## Ephemerality by Design

Ephemerality is a core security control in OvB.

- Browser containers are destroyed on exit or idle timeout
- Filesystems are discarded permanently
- Memory state is lost when tasks terminate

There is **no attempt to clean sessions**, they are simply destroyed.

This reduces:
- Forensic residue
- Persistence mechanisms
- Long-term tracking

---

## Backend Trust Model

The vBrowser backend:

- Orchestrates sessions
- Enforces authentication and authorization
- Tracks session lifecycle metadata

It does **not**:
- Execute untrusted web content
- Share browser state
- Inspect page contents

The backend is treated as a control plane, not a data plane.

---

## Cloudflare Security Role

Cloudflare is used as a **protective boundary**, not a trust anchor.

Provides:
- DNS management
- TLS termination
- Origin shielding

Does not provide:
- Anonymity guarantees
- Content inspection
- Browser security

Cloudflare reduces exposure but is not relied upon for isolation.

---

## What OvB Does NOT Protect Against

OvB explicitly does **not** guarantee:

- Full anonymity against nation-state adversaries
- Protection against analyst OPSEC mistakes
- Immunity from browser zero-days
- Safe handling of downloaded files
- Legal or jurisdictional protection

Security is shared between platform and operator.

---

## Operator Responsibilities

Operators are responsible for:

- Avoiding login to personal accounts
- Handling downloaded files safely
- Maintaining strong OPSEC practices
- Monitoring infrastructure access
- Destroying environments when compromised

OvB reduces risk, it does not eliminate it.

---

## Security Boundaries Summary

| Boundary | Protection |
|--------|-----------|
| Endpoint | No local code execution |
| Network | Cloud-origin traffic only |
| Session | One browser per container |
| Infrastructure | IAM-scoped, ephemeral tasks |
| State | No persistence by default |

---

## Next Steps

To understand OvB’s assumptions and limitations in adversarial contexts:

Continue to **Installation**
