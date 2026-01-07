---
sidebar_position: 2
---

# Cloud Isolation

Open vBrowser (OvB) relies on **cloud-based isolation** to separate analysts from hostile web content. Instead of attempting to secure browsers on endpoints, OvB moves browser execution into controlled, disposable cloud environments.

This document explains **how cloud isolation works in OvB**, **what boundaries exist**, and **what risks remain**.

---

## Isolation by Architecture

OvB enforces isolation at the architectural level.

Key principles:
- Browsers never run on analyst endpoints
- All execution occurs in cloud containers
- Analysts interact remotely with browser output
- Containers are destroyed after use

Isolation is structural, not policy-based.

---

## Execution Environment

Each browser session runs as:

- A dedicated ECS task
- A single container
- A single browser process

There is no multi-tenancy within a session.

This ensures:
- No shared memory
- No shared filesystem
- No shared process space

---

## Network Isolation

Network isolation is enforced through:

- AWS VPC networking
- Security group rules
- No inbound access to browser containers
- Controlled egress paths

Browser containers cannot accept inbound connections from the internet.

All user interaction flows through the OvB control plane.

---

## Identity Isolation

Isolation also applies to identity and credentials:

- No long-lived credentials inside browser containers
- No access to AWS APIs from browser sessions
- No access to backend secrets

Browser containers operate with **minimal privileges**.

---

## Storage Isolation

Browser sessions use:

- Ephemeral container filesystems
- No persistent volumes
- No shared storage

When a session ends:
- Filesystem state is discarded
- Downloaded files are lost
- Cache and cookies are destroyed

Persistence is intentionally avoided.

---

## Failure Containment

OvB assumes browser compromise is possible.

If a browser is compromised:
- The compromise is contained to that container
- The container is destroyed on termination
- No lateral movement is possible

Containment is achieved through destruction, not remediation.

---

## Cloud Provider Trust Model

OvB assumes a baseline level of trust in:

- AWS infrastructure
- ECS container isolation
- Cloud provider security controls

OvB does not attempt to:
- Harden the cloud provider itself
- Defend against malicious cloud insiders
- Prevent provider-level observation

---

## Limits of Cloud Isolation

Cloud isolation does **not** protect against:

- Traffic correlation by advanced adversaries
- Browser fingerprinting
- Behavioral identification
- OPSEC mistakes

Isolation reduces exposure but does not eliminate risk.

---

## Comparison to Local Sandboxing

Compared to local sandboxes, cloud isolation:

Advantages:
- No endpoint exposure
- Easier teardown
- Better attribution separation

Tradeoffs:
- Cloud costs
- Latency
- Provider dependency

OvB is optimized for **security-first investigations**, not offline use.

---

## Operational Responsibilities

Operators must:

- Select appropriate regions
- Monitor infrastructure health
- Tear down environments when idle
- Avoid unnecessary persistence

Isolation is strongest when environments are short-lived.

---

## Summary

Cloud isolation in OvB provides:

- Structural separation between analyst and content
- Strong containment for compromised browsers
- Predictable, repeatable security boundaries

It is a foundational control, not a complete security solution.

---

## Next Steps

To understand how operator behavior affects isolation effectiveness:

Continue to **Limitations**
