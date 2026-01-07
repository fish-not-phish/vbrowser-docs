---
sidebar_position: 2
---

# Prerequisites

Before deploying Open vBrowser (OvB), ensure that your environment meets **all required technical, operational, and account prerequisites**. OvB provisions real cloud infrastructure and is not a lightweight local-only application.

This section is intentionally explicit to prevent partial, unstable, or insecure deployments.

---

## Supported Operating Systems & Architecture

OvB has been **fully tested only on Linux (amd64)**.

| Architecture | Platform | Supported | Notes |
|-------------|----------|-----------|------|
| amd64 | Linux | ✅ Yes | Fully tested and supported |
| amd64 | Windows | ⚠️ Likely | Not tested; WSL2 may work |
| aarch64 | Linux | ⚠️ Likely | Not tested |
| arm64 | Linux | ⚠️ Likely | Not tested |

:::caution
All documentation assumes a **Linux amd64 environment**.  
Running OvB on unsupported platforms may require troubleshooting not covered in the documentation.
:::

---

## Required Local Software

The following software **must be installed on the machine where OvB is deployed**.

### Required
- Docker
- Docker Compose
- Terraform
- Git
- Bash-compatible shell

---

## Docker Requirements

OvB relies on Docker for both **local orchestration** and **cloud image builds**.

Minimum requirements:
- Docker Engine **24+**
- Docker Compose **v2+**
- Ability to build Docker images locally
- Ability to push Docker images to AWS ECR

Verify Docker is installed and functioning:

```bash
docker version
docker compose version
```

---

## Terraform Requirements

Terraform is used to provision **all OvB infrastructure**.

Minimum version:
- **Terraform ≥ 1.5**

Verify installation:

```bash
terraform version
```

Terraform must be able to:
- Authenticate to AWS
- Create and destroy infrastructure
- Manage ECS, ECR, IAM, networking, and CloudWatch logs

---

## Required Cloud Accounts

### AWS Account

You must have access to an AWS account with permissions to create and manage:

- ECS clusters and services
- ECR repositories
- IAM roles and policies
- Networking resources
- CloudWatch log groups

You may use:
- The AWS root account **or**
- An IAM user with sufficient permissions

:::caution
OvB provisions **billable AWS resources**.  
You are responsible for all costs incurred.
:::

---

### Cloudflare Account

OvB **requires Cloudflare** for DNS management and origin shielding.

Requirements:
- A Cloudflare account (free tier is sufficient)
- A domain added to Cloudflare
- Ability to create API tokens
- Ability to edit DNS records for the domain

Cloudflare is used to:
- Dynamically manage DNS records
- Shield the AWS origin infrastructure
- Reduce the exposed attack surface

OvB **does not support deployments without Cloudflare**.

---

## Domain Requirements

You must own and control a domain name.

Example:

```text
vbrowser.io
```

Requirements:
- Domain must be delegated to Cloudflare nameservers
- DNS propagation must be complete
- You must know the Cloudflare **Zone ID**

The domain will be used for:
- API access
- Browser access
- TLS certificate issuance
- API integrity verification

---

## Network & Firewall Considerations

Ensure the deployment host can:

- Reach AWS APIs
- Reach Cloudflare APIs
- Pull base Docker images
- Push images to AWS ECR

Outbound HTTPS (TCP/443) must be allowed.

---

## Operational Expectations

Before proceeding, ensure you are comfortable with:

- Managing cloud infrastructure
- Monitoring AWS costs
- Reading Docker and ECS logs
- Destroying and recreating environments when needed

OvB is designed for **operators and security teams**, not as a plug-and-play desktop application.

---

## Next Steps

Once all prerequisites are satisfied, proceed to the installation steps:

Continue to **Architecture**
