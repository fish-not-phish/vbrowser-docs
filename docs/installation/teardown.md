---
sidebar_position: 6
---

# Teardown

Open vBrowser (OvB) provides a controlled and repeatable teardown process to **fully destroy all deployed infrastructure and services**. Teardown is an intentional part of the security and operational lifecycle and should be used regularly.

This document explains **what teardown does**, **when it should be used**, and **what operators should expect**.

---

## Purpose of Teardown

Teardown exists to:

- Remove all cloud infrastructure created by OvB
- Eliminate lingering attack surface
- Prevent unnecessary cloud costs
- Reset environments cleanly
- Support safe redeployment

OvB environments are designed to be **created and destroyed**, not kept indefinitely.

---

## Teardown Script

Teardown is performed using the provided `destroy.sh` script located in the `terraform/` directory.

```bash
cd terraform
./destroy.sh
```

The script requires **no user input** and performs a full teardown automatically.

---

## What the Teardown Removes

The teardown process destroys:

### AWS Resources
- ECS clusters and services
- ECS task definitions
- ECR repositories
- IAM roles and policies created for OvB
- CloudWatch log groups
- Networking resources created by Terraform

### Local Resources
- Docker containers started by OvB
- Docker networks created for OvB
- Docker volumes associated with OvB services

After teardown, no OvB-managed resources should remain.

---

## What the Teardown Does NOT Remove

The teardown process does **not** remove:

- Your AWS account
- Your Cloudflare account or DNS zone
- Your local Docker installation
- Source code or configuration files
- Cloudflare API tokens

These remain under operator control.

---

## When to Use Teardown

Teardown is recommended:

- When infrastructure may be compromised
- Before changing AWS regions
- Before major configuration changes
- To stop incurring cloud costs

---

## Teardown and State Management

Terraform state is used to track all resources.

During teardown:
- Terraform destroys all tracked resources
- State is updated accordingly

:::caution
Do not manually delete AWS resources outside Terraform.
This can lead to orphaned state and cleanup issues.
:::

---

## Common Teardown Issues

Potential issues include:

- Failed resource deletion due to permissions
- Stale Terraform state
- Interrupted destroy operations

Most issues can be resolved by:
- Re-running `destroy.sh`
- Verifying AWS permissions
- Running `terraform destroy -auto-approve` manually

---

## Redeployment After Teardown

After teardown:

- You may safely re-run `setup.sh`
- A fresh environment will be created
- No prior state is reused

Teardown followed by redeploy is the **supported recovery path**.

---

## Security Considerations

Teardown provides:

- Immediate removal of browser execution environments
- Destruction of potentially compromised containers
- Elimination of persistent state

---

## Next Steps

Continue to **Browsers**
