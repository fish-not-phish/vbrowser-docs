---
sidebar_position: 1
---

# Overview

Open vBrowser (OvB) is a **cloud-native, containerized browser isolation platform** designed to allow analysts, investigators, and security teams to interact with untrusted web content **without exposing their local system, identity, or network**.

OvB was built first and foremost for **cyber threat intelligence (CTI)**, **SOC investigations**, and **high-risk OSINT workflows**, where visiting malicious or adversary-controlled infrastructure is unavoidable, and operational security failures can have real consequences.

---

:::danger

By using vBrowser, you agree to comply with all applicable local, state, national, and international laws and regulations. Any illegal activity, including but not limited to hacking, fraud, and distribution of illegal content, is strictly prohibited and may result in immediate suspension of your account and reporting to the appropriate authorities.

vBrowser is not responsible for any actions taken by users within the vBrowser environment. Users are solely responsible for their actions and any consequences arising from misuse. vBrowser reserves the right to monitor, review, and remove any content that violates our terms of service.

By creating a session, you acknowledge and agree to these terms. You also acknowledge and agree that you have read the documentation on how to operate vBrowser sessions.

:::

## What Problem Does OvB Solve?

Traditional investigation methods often rely on one of the following approaches:

- Browsing directly from an analyst workstation
- Using local virtual machines
- Using disposable VPS instances
- Paying for closed, commercial sandbox services

Each of these approaches introduces tradeoffs in **cost**, **security**, **scalability**, or **operational friction**.

OvB addresses these gaps by providing:

- **Strong isolation** between analyst and target content
- **Ephemeral browser environments** that leave no residue
- **Centralized infrastructure** that is easier to audit and control
- **Low barrier to entry** compared to enterprise sandbox platforms

---

## High-Level Concept

At its core, OvB works by running web browsers **entirely inside isolated containers in the cloud**, while exposing only a controlled, proxied interface to the user.

The analyst never connects directly to the destination website.

Instead:

1. The analyst requests a browser session
2. OvB launches a fresh containerized browser
3. All web traffic originates from cloud infrastructure
4. The session is destroyed when complete or idle

No browsing occurs on the analyst’s local machine.

---

## Architecture at a Glance

**Core components:**

- **Cloudflare**
  - DNS management
  - Shields the true origin infrastructure
  - Prevents direct exposure of AWS resources

- **AWS ECS (Elastic Container Service)**
  - Runs all browser containers
  - Handles scheduling and isolation
  - Scales horizontally as needed

- **Browser Containers**
  - One container per session
  - Fully ephemeral
  - Destroyed after use or idle timeout

- **Django Backend**
  - Session orchestration
  - Authentication and authorization
  - API enforcement and lifecycle management

- **Containers Updater**
  - Builds and pushes browser images
  - Ensures selected browsers are available

---

## Session Lifecycle

Every browser session in OvB follows a predictable, auditable lifecycle:

1. **Session Request**
   - User initiates a browser session
   - API validates authentication and domain integrity

2. **Container Launch**
   - A fresh browser container is started
   - No previous state exists

3. **Active Investigation**
   - All web traffic flows from the cloud
   - The analyst interacts with the browser remotely

4. **Idle or Termination**
   - Session auto-closes after inactivity
   - Or is manually terminated

5. **Destruction**
   - Container is destroyed
   - Filesystem, memory, cookies, and cache are lost permanently

There is **no persistence by default**.

---

## What OvB Is (and Is Not)

### OvB *Is*
- A **browser isolation platform**
- A **cloud-based investigation environment**
- A tool for **reducing analyst exposure**
- A way to **standardize risky workflows**

### OvB *Is Not*
- A VPN replacement
- A malware detonation sandbox
- A silver bullet for OPSEC failures

OvB reduces risk, it does not eliminate it.

---

## Security & Isolation Model (Summary)

OvB enforces isolation across multiple layers:

- **Endpoint Isolation**
  - No untrusted content runs on the analyst’s machine

- **Network Isolation**
  - Target sites only see cloud IPs
  - Analyst IPs are never exposed

- **Session Isolation**
  - One browser per container
  - No shared state between sessions

- **Infrastructure Isolation**
  - Containers are short-lived
  - No long-running browsers

This design significantly reduces:
- Drive-by compromise risk
- Browser exploit impact
- Credential leakage
- Long-term tracking via cookies or storage

---

## Who Should Use OvB?

OvB is designed for users who:

- Perform **high-risk web investigations**
- Need **repeatable, disposable browser environments**
- Want **full control over their infrastructure**
- Cannot justify the cost of enterprise sandbox platforms
- Value transparency over black-box SaaS tools

Common use cases include:
- CTI investigations
- Dark web monitoring
- Phishing analysis
- Malware infrastructure reconnaissance
- OSINT research
- SOC escalation workflows

---

## What You’ll Do Next

Before deploying OvB, you will:

1. Prepare a Linux environment
2. Install Terraform and Docker
3. Configure AWS credentials
4. Configure Cloudflare DNS access
5. Run a guided setup script

The next section walks through **exact prerequisites and requirements**, including what OvB expects from your environment, and why.

Continue to **Prerequisites**
