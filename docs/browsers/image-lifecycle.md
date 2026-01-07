---
sidebar_position: 3
---

# Image Lifecycle

Open vBrowser (OvB) manages browser environments through a **controlled image lifecycle** that governs how browser images are selected, built, distributed, and executed. This lifecycle is designed to ensure repeatability, security, and minimal attack surface.

This document explains the **end-to-end lifecycle of browser images** within OvB.

---

## Lifecycle Overview

Each browser image in OvB follows this lifecycle:

1. Image selection during setup
2. Image build via `containers-updater`
3. Image push to AWS ECR
4. Image registration in ECS
5. Image execution as ephemeral tasks
6. Image destruction at session end

At no point are browser images modified at runtime.

---

## Step 1: Image Selection

Image selection occurs during execution of `setup.sh`.

During this step:

- A default browser set is offered
- Operators may select a custom subset
- Selected images remain in `vbrowsers/`
- Unselected images are moved to `unused/`

Only selected images are considered **approved for execution**.

This enforces explicit operator intent.

---

## Step 2: Image Build

The `containers-updater` service builds browser images locally using Docker.

Characteristics:
- One image per browser
- Deterministic builds
- No runtime dependencies on host state

Build failures stop the lifecycle early and must be resolved before proceeding.

---

## Step 3: Image Push (ECR)

After successful builds:

- Images are tagged consistently
- Images are pushed to AWS ECR
- ECS-compatible image references are created

ECR acts as the **single distribution source** for browser images.

---

## Step 4: ECS Registration

Terraform generates ECS task definitions that reference:

- The ECR image URI
- Required execution roles
- Logging configuration

Each browser has its own task definition.

This ensures:
- Isolation between browsers
- Clear auditability
- Controlled execution permissions

---

## Step 5: Runtime Execution

When a browser session is launched:

- ECS starts a new task
- The browser image is pulled from ECR
- The browser runs inside an isolated container

Runtime characteristics:
- One browser per task
- No shared storage
- No persistent filesystem

---

## Step 6: Session Termination

Browser sessions end when:

- The user closes the session
- An idle timeout is reached
- The task is explicitly stopped

On termination:
- The ECS task is destroyed
- All filesystem and memory state is lost

There is no cleanup phase, destruction is the cleanup.

---

## Image Versioning

OvB does not currently support dynamic image version pinning.

Images are rebuilt during:
- Initial deployment
- Re-deployment after teardown
- Browser configuration changes

Operators should treat images as **deployment-scoped artifacts**.

---

## Security Properties

The image lifecycle enforces:

- No runtime mutation
- No persistence between sessions
- No cross-browser contamination
- No long-lived compromised environments

If a browser image is suspected to be compromised:
- Perform teardown
- Re-run setup

---

## Common Failure Modes

Common lifecycle issues include:

- Build failures due to missing dependencies
- ECR push permission errors
- ECS task start failures
- Stale images after partial teardown

The supported recovery path is always:
- Full teardown
- Clean redeploy

---

## Operator Responsibilities

Operators are responsible for:

- Reviewing browser images
- Limiting enabled browsers
- Monitoring updater logs
- Destroying environments when needed

The lifecycle enforces controls, but does not replace judgment.

---

## Next Steps

To understand how browser sessions use these images:

Continue to **Usage**
