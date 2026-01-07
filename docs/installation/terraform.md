---
sidebar_position: 1
---

# Terraform

Open vBrowser (OvB) uses **Terraform as the sole mechanism** for provisioning and destroying cloud infrastructure. This ensures deployments are reproducible, auditable, and fully reversible.

This page explains **what Terraform provisions**, **how OvB uses it**, and **what operators should understand before applying changes**.

---

## Install Terraform

To run OvB's infrastructure components, you’ll need [Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli). Here's how to install it on a Debian-based Linux system (e.g. Ubuntu):

**1. Update and install prerequisites**
```bash
sudo apt-get update -y && sudo apt-get install -y gnupg software-properties-common
```
**2. Install the HashiCorp GPG Key**
```bash
wget -O- https://apt.releases.hashicorp.com/gpg | \
gpg --dearmor | \
sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg > /dev/null
```
**3. Add the official HashiCorp repository to your linux system.**
```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] \
https://apt.releases.hashicorp.com $(grep -oP '(?<=UBUNTU_CODENAME=).*' /etc/os-release || lsb_release -cs) main" | \
sudo tee /etc/apt/sources.list.d/hashicorp.list
```
**4. Download the package information**
```bash
sudo apt update -y
```
**5. Install Terraform**
```bash
sudo apt-get install -y terraform
```
---

## Why Terraform Is Required

OvB is not a single-container application. It requires coordinated creation of multiple cloud resources that must be:

- Created in a specific order
- Properly permissioned
- Consistently tagged and referenced
- Easily destroyed when no longer needed

Terraform provides:
- Infrastructure as Code (IaC)
- Predictable state management
- One-command teardown
- Reduced configuration drift

Manual provisioning is **not supported**.

---

## What Terraform Provisions

Running Terraform for OvB creates the following categories of resources:

### Compute
- ECS Cluster
- ECS Task Definitions
- ECS Services
- ECS Task Execution Roles

### Container Registry
- ECR repositories for browser images
- ECR repository for backend images

### Identity & Access Management
- IAM roles for ECS tasks
- IAM policies with least-privilege permissions

### Networking
- Subnet selection
- Security group associations
- Internal service connectivity

### Logging
- CloudWatch log groups
- ECS task logging configuration

All resources are scoped to the AWS region you select.

---

## Terraform State

Terraform state tracks:
- Created resources
- Resource dependencies
- Outputs required by runtime services

State is stored **locally by default**.

:::caution
Do not delete or manually edit Terraform state files.
Loss of state may require manual cleanup of AWS resources.
:::

---

## Browser Image Integration

Terraform dynamically configures ECS task definitions based on selected browser images.

During setup:
- Selected browsers are written to `terraform.tfvars`
- Terraform generates task definitions for each browser
- Only approved images are deployable

This prevents accidental execution of unapproved browser containers.

---

## Region Configuration

The AWS region is defined by:

- `AWS_DEFAULT_REGION` (environment variable)
- `aws_region` in `terraform.tfvars`

The setup script ensures both values remain synchronized.

:::important
Changing regions requires a full destroy and redeploy.
Terraform does not migrate resources between regions.
:::

---

## Running Terraform

Terraform is executed automatically by the setup script:

```bash
terraform init
terraform apply -auto-approve
```

Manual execution is supported for advanced operators, but **not required**.

---

## Destroying Infrastructure

Terraform is also responsible for clean teardown.

The destroy process:
- Stops ECS services
- Deregisters task definitions
- Deletes ECR repositories
- Removes IAM roles and policies
- Cleans up logging resources

Destruction is handled via:

```bash
terraform destroy -auto-approve
```

Or by running the provided `destroy.sh` script.

---

## Safe Modification Guidelines

Operators should:

- Avoid editing Terraform files unless necessary
- Never modify generated task definitions manually
- Re-run setup after configuration changes
- Always destroy before major changes

Terraform files are tightly coupled to OvB runtime behavior.

---

## Common Failure Scenarios

Common Terraform-related issues include:

- Insufficient IAM permissions
- Region mismatch
- Stale state files
- Interrupted applies

These issues are typically resolved by:
- Fixing permissions
- Running `terraform init -reconfigure`
- Performing a clean destroy and redeploy

---

## Next Steps

After understanding Terraform’s role, configure your AWS account:

Continue to **AWS Configuration**
