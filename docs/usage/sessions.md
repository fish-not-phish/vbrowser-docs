---
sidebar_position: 1
---

# Sessions

A **session** in Open vBrowser (OvB) represents a single, isolated browser execution environment. Sessions are the core runtime unit of OvB and are designed to be **ephemeral, disposable, and isolated by default**.

This document explains how sessions work, how they are created and destroyed, and how operators should interact with them safely.

---

## What Is a Session?

A session is:

- One browser
- Running in one container
- As one ECS task
- With no shared state

Each session is completely independent from all others.

There is no concept of:
- Session reuse
- Session persistence
- Shared browser state

---

## Session Lifecycle Overview

Each session follows a strict lifecycle:

1. Session request
2. ECS task creation
3. Browser execution
4. User interaction
5. Idle timeout or termination
6. Task destruction

Once destroyed, a session **cannot be recovered**.

---

## Session Creation

Sessions are created when:

- A user requests a new browser instance
- The backend authorizes the request
- A matching browser image exists

During creation:
- A new ECS task is launched
- A fresh browser container starts
- No previous data is present

Session creation always results in a **clean environment**.

---

## Active Session Behavior

While a session is active:

- All browsing occurs inside the container
- All network traffic originates from AWS
- The operator interacts remotely
- The browser behaves like a normal desktop browser

However:
- Downloads are ephemeral
- Files are lost on termination
- Session data is not retained

---

## Idle Timeout

Sessions are automatically terminated after a period of inactivity.

Idle timeout behavior:
- Configured via `DEFAULT_IDLE_THRESHOLD`
- Measured in minutes
- Applies per session

When the threshold is reached:
- The ECS task is stopped
- The container is destroyed
- All session state is lost

Idle timeouts prevent:
- Forgotten active sessions
- Unnecessary cloud cost
- Extended attack surface

---

## Manual Session Termination

Sessions may be terminated manually by:

- User action
- Infrastructure teardown

Manual termination has the same effect as timeout:
- Immediate task destruction
- No cleanup or persistence

---

## Session Isolation Guarantees

OvB enforces the following isolation guarantees:

- One session per container
- No shared filesystem
- No shared memory
- No shared network namespace
- No shared credentials

Compromise of one session does **not** affect others.

---

## Session Failure Scenarios

Sessions may fail due to:

- Browser crashes
- ECS resource exhaustion
- Image startup errors
- Infrastructure interruption

In all cases:
- The failed session is destroyed
- No recovery is attempted
- A new session must be created

Failure is treated as containment.

---

## Security Considerations

Sessions are designed under the assumption that:

- Browsers may be compromised
- Web content is hostile
- Exploits may execute

Security is enforced by:
- Ephemerality
- Isolation
- Automated destruction

Operators must still:
- Avoid logging into personal accounts
- Handle files safely
- Maintain OPSEC discipline

---

## Monitoring Sessions

Session behavior can be observed via:

- Backend logs
- ECS task status
- CloudWatch logs

Logs include:
- Lifecycle events
- Errors
- Timing metadata

Logs do **not** include:
- Page content
- Keystrokes
- Browser history

---

## Scaling Sessions

OvB supports multiple concurrent sessions but only 1 concurrent session per user.

Concurrency is limited by:
- AWS ECS quotas
- Available compute resources
- Cost considerations

Scaling behavior is automatic but bounded by AWS limits.

---

## Best Practices

Recommended session practices:

- Keep sessions short-lived
- Destroy sessions after use

Sessions are tools, not workstations.

---

## Next Steps

To understand how sessions interact with the API:

Continue to **Clipboard**
