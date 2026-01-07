---
sidebar_position: 2
---

# AWS Configuration

Open vBrowser (OvB) relies on AWS to provide **isolated, ephemeral compute infrastructure** for browser execution and supporting services. This document explains how AWS is used, what permissions are required, and how to configure your account safely.

---

## AWS Account Requirements

You must have access to an AWS account capable of creating and managing:

- ECS clusters and services
- ECR repositories
- IAM roles and policies
- Networking resources
- CloudWatch log groups

You may use:
- The AWS root account, or
- An IAM user with sufficient permissions

:::caution
OvB provisions **billable AWS resources**.
You are responsible for all costs incurred.
:::

---

## Recommended IAM Model

For production or long-lived deployments, an **IAM user** is recommended instead of root.

Minimum required capabilities:
- ECS full access (scoped to OvB resources)
- ECR read/write access
- IAM role and policy creation
- CloudWatch logs creation
- EC2 describe permissions (for networking)

Permissions should follow the **principle of least privilege** whenever possible.

---

## Access Key for Root

Go to https://aws.amazon.com/console/ and log in as the root user. 

1. Navigate to `Security Credentials` (top-right dropdown → “Security Credentials”).
2. Scroll down to the Access keys section.
3. Click `Create access key`.
4. Download or copy the credentials safely.

:::caution
You will only see the secret key once. Store it securely.
:::

---

## Region Selection

OvB is deployed into a **single AWS region**.

Considerations when selecting a region:
- Legal jurisdiction
- Latency to target infrastructure
- Cost differences
- Availability of ECS resources

Once deployed, regions **cannot be changed in-place**.

:::caution
Changing regions requires a full destroy and redeploy.
:::

---

## Configure AWS CLI

OvB uses **static AWS access keys** for Terraform and runtime services.

In your terminal, paste the below with the correct values:

```bash
export AWS_ACCESS_KEY_ID=<your-access-key-id>
export AWS_SECRET_ACCESS_KEY=<your-secret-access-key>
export AWS_DEFAULT_REGION=<your-region>
```

:::important
Do not commit AWS credentials to version control.
Rotate keys immediately if exposed.
:::

## Cost Considerations

Typical cost drivers include:

- ECS task runtime
- ECR storage
- CloudWatch logs
- Data transfer

Costs scale with:
- Number of concurrent sessions
- Session duration
- Logging verbosity

Operators should:
- Monitor AWS billing dashboards
- Set budget alerts
- Regularly destroy unused environments

---

## Networking Model

OvB relies on AWS-managed networking primitives.

Characteristics:
- No inbound public access to ECS tasks
- Controlled egress through AWS networking
- Security groups restrict inter-service access

The backend service coordinates all browser execution.

---

## Logging & Visibility

AWS CloudWatch is used for:

- ECS task logs
- Backend application logs
- Error and failure diagnostics

Logs may contain:
- Operational metadata
- Error traces

Logs do **not** contain:
- Browser page contents
- Session keystrokes
- Downloaded data

---

## Security Best Practices

Recommended AWS security practices:

- Use IAM users, not root
- Scope IAM permissions tightly
- Enable MFA on all accounts
- Monitor CloudTrail events
- Rotate credentials regularly

AWS security is foundational to OvB’s security model.

---

## Next Steps

After configuring AWS, set up DNS and origin shielding:

Continue to **Cloudflare Configuration**
