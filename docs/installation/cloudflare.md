---
sidebar_position: 3
---

# Cloudflare Configuration

Open vBrowser (OvB) requires **Cloudflare** to manage DNS records and provide origin shielding for backend services. Cloudflare acts as a protective boundary between the public internet and OvB’s AWS infrastructure.

This document explains **why Cloudflare is required**, **how it is used**, and **how to configure it safely**.

---

## Why Cloudflare Is Required

OvB uses Cloudflare to:

- Manage DNS records dynamically
- Shield AWS infrastructure from direct exposure
- Terminate TLS at the edge
- Reduce attack surface of backend services

Cloudflare is **not optional**. Deployments without Cloudflare are unsupported. However, Cloudflare is free to use.

---

## Cloudflare Account Requirements

You must have:

- A Cloudflare account (free tier is sufficient)
  - Go here: https://dash.cloudflare.com/sign-up to create a new account if you do not have one.
  - Ensure you only select the free-tier.
- A domain added to Cloudflare
- Control over the domain’s DNS
- Ability to create API tokens

Domain nameservers must be delegated to Cloudflare and DNS propagation must be complete before setup.

---

## Required Cloudflare Components

OvB relies on the following Cloudflare features:

- DNS zone management
- API token authentication

No advanced or paid Cloudflare features are required.

---

## Zone ID

Each domain in Cloudflare has a unique **Zone ID**.

To locate it:

1. Log in to the Cloudflare dashboard
2. Select your domain
3. Navigate to the **Overview** page
4. Scroll down and locate **Zone ID** near the bottom right of the webpage.
5. Copy the **Zone ID**

The Zone ID is required during OvB setup.

---

## API Token Configuration

OvB requires a Cloudflare API token with **minimal permissions**.

### Recommended Token Settings

1. Log in to the Cloudflare dashboard
2. On the top right, click your profile icon and select **Profile**.
3. On the left navigation sidebar of the profile webpage, select **API Tokens**.
4. Click **Create Token**.
5. Under **API token templates** select **Use template** for **Edit zone DNS**.

- **Permissions**
  - Zone → DNS → Edit

- **Resources**
  - Include → Specific zone → Your domain

:::caution
Do not use the Global API Key.
It grants full account access and significantly increases risk.
:::

Once created, copy the token securely. It will only be shown once.

---

## How OvB Uses the Cloudflare API

OvB uses the Cloudflare API to:

- Create and update DNS records
- Perform DNS-based certificate validation
- Manage subdomains (e.g., `browser-123456abcdef.vbrowser.io`)

The API is **not** used for:
- Traffic inspection
- Content filtering
- Identity verification

---

## DNS Propagation Considerations

DNS changes may take time to propagate.

Common propagation delays:
- Initial nameserver delegation: minutes to hours
- Record creation: seconds to minutes

If setup fails with DNS-related errors:
- Verify nameservers are correct
- Confirm Zone ID and token permissions
- Wait for propagation and retry

---

## Security Considerations

Cloudflare improves security by:

- Hiding AWS origin IPs
- Absorbing unsolicited traffic
- Reducing direct attack surface

Cloudflare does **not**:
- Guarantee anonymity
- Prevent browser exploitation
- Replace OPSEC practices

It is a defensive layer, not a complete security solution.

---

## Common Misconfigurations

Common Cloudflare issues include:

- Using the Global API key
- Incorrect Zone ID
- DNS not fully propagated
- Insufficient token permissions

These issues typically result in failed setup or certificate errors.

---

## Next Steps

After Cloudflare is configured, deploy OvB services:

Continue to **Environment Variables**
