---
sidebar_position: 3
---

# Architecture

Open vBrowser (OvB) is built as a **cloud-native, container-first platform** that combines local orchestration, automated infrastructure provisioning, and ephemeral browser workloads. Its architecture is designed to maximize isolation, repeatability, and operator control while minimizing long-lived state.

This document explains how OvB works **end-to-end**, from setup to runtime.

---

## High-Level Architecture Diagram

![OvB Architecture Diagram](./assets/diagram-transparent-dark.png)

---

## High-Level Components

OvB consists of five primary architectural layers:

1. **Local Orchestration Layer**
2. **Infrastructure Provisioning Layer**
3. **Image Management Layer**
4. **Application Runtime Layer**
5. **Browser Execution Layer**

Each layer has a single responsibility and minimal trust in the others.

---

## Local Orchestration Layer

The entry point for OvB is the `setup.sh` script, executed from the `terraform/` directory.

Responsibilities:
- Browser image selection
- Environment variable collection
- Secure secret generation
- Terraform configuration patching
- Docker image builds
- Service startup

The setup script is **idempotent by design** and may be safely re-run after teardown.

---

## Browser Image Selection Flow

OvB treats browsers as **pluggable execution units**.

During setup:

- A default browser set is offered (`chrome`, `mullvad`, `tor`)
- Operators may select a custom subset
- Unused browser directories are moved to `unused/`
- Selected browser directories remain in `vbrowsers/`

This mechanism ensures:
- Only explicitly approved browsers are built
- Reduced image build time
- Smaller ECR footprint

The selected browser list is written into `terraform.tfvars` as `docker_images`.

---

## Infrastructure Provisioning Layer

Terraform is used to provision **all cloud infrastructure**.

Provisioned resources include:
- ECS cluster
- ECS task definitions
- ECS services
- ECR repositories
- IAM roles and policies
- Networking primitives
- CloudWatch log groups

Terraform is executed automatically:

```bash
terraform init
terraform apply -auto-approve
```

Region selection is derived from `AWS_DEFAULT_REGION` and propagated consistently across all Terraform modules.

---

## Environment Propagation Model

All configuration is consolidated into a single `.env` file generated during setup.

The `.env` file is copied into:
- `django/`
- `docker/containers-update/`
- `docker/vbrowser-stack/`

This ensures:
- Configuration consistency
- Single source of truth
- Predictable runtime behavior

No service maintains its own independent configuration store.

---

## Image Management Layer (containers-updater)

The `containers-updater` service is responsible for:

- Building browser Docker images
- Tagging images deterministically
- Pushing images to AWS ECR
- Preparing images for ECS consumption

This process runs **once per deployment**.

Operators must wait for the updater to complete before starting browser sessions.

---

## Application Runtime Layer (vBrowser Backend)

The `vbrowser` service is a Django-based backend that provides:

- API endpoints
- Session lifecycle management
- Authentication and authorization
- Idle timeout enforcement
- ECS task orchestration

It depends on:
- PostgreSQL (persistent state)
- Redis (ephemeral coordination)

The backend does **not** execute browsers directly.

---

## Browser Execution Layer

Each browser session is executed as:

- A dedicated ECS task
- A single browser per container
- An isolated filesystem
- No shared state between sessions

Characteristics:
- Fully ephemeral
- Destroyed on termination or idle timeout
- No persistence of cookies, cache, or files

Browser containers are read-only consumers of browser images.

---

## Data Flow Summary

1. Operator runs `setup.sh`
2. Infrastructure is provisioned via Terraform
3. Browser images are built and pushed
4. Backend services are started via Docker Compose
5. Browser sessions are launched on-demand in ECS
6. Sessions terminate and are destroyed automatically

At no point does untrusted content reach the operator’s local system.

---

## Trust & Isolation Boundaries

OvB enforces strict boundaries:

- Local host never executes browser code
- Backend does not share browser state
- Browsers do not share storage
- Infrastructure access is IAM-scoped

Each layer assumes the others may fail and limits blast radius accordingly.

---

## Design Principles

OvB is built around the following principles:

- **Ephemeral by default**
- **Explicit operator control**
- **Minimal long-lived state**
- **Infrastructure as code**
- **Fail-safe teardown**

These principles guide all architectural decisions.

---

## Next Steps

To understand OvB’s security guarantees in depth:

Continue to **Security Model**
