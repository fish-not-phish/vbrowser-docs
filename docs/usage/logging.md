---
sidebar_position: 8
---

# Logging

Logging in Open vBrowser (OvB) is designed to provide **operational visibility without compromising investigation integrity**. Logs focus on lifecycle events, infrastructure health, and error conditions—not browser content or user activity.

This document explains **what OvB logs**, **where logs live**, and **how operators should use them safely**.

---

## Logging Philosophy

OvB follows a conservative logging philosophy:

- Log what is necessary for operations
- Avoid logging sensitive investigation data
- Prefer metadata over content
- Make logs disposable

Logs are intended for **operators**, not analysts.

---

## What Is Logged

OvB logs include:

- Service startup and shutdown events
- Session lifecycle events (create, terminate, timeout)
- ECS task state changes
- Infrastructure errors
- Authentication and authorization failures

These logs help operators:
- Diagnose failures
- Monitor health
- Audit usage patterns

---

## What Is NOT Logged

OvB explicitly does **not** log:

- Browser page contents
- URLs visited inside sessions
- Keystrokes or form input
- Screenshots or DOM data
- Downloaded file contents

This reduces:
- Data sensitivity
- Legal exposure
- Attribution risk

---

## Logging Components

Logging is produced by multiple components:

### Backend (vBrowser)

Logs include:
- API requests and responses (metadata only)
- Session state transitions
- Idle timeout enforcement
- Error traces

### ECS / Infrastructure

Logs include:
- Task startup and termination
- Resource allocation failures
- Health check events

### containers-updater

Logs include:
- Image build output
- Push status to ECR
- Failure diagnostics

---

## Log Storage Locations

Depending on component, logs are stored in:

- **CloudWatch Logs** (ECS tasks)
- **Docker logs** (local services)
- **Application stdout/stderr**

Log retention is controlled by AWS and Docker defaults.

---

## Enabling Verbose Logging

Verbose logging is controlled via:

```
LOGGER_ENABLED
```

When enabled:
- Additional debug output is emitted
- Troubleshooting is easier
- Log volume increases significantly

:::caution
Verbose logging may expose operational metadata.
Enable only when troubleshooting and disable afterward.
:::

---

## Debug Mode

Django debug mode is controlled via:

```
DEBUG
```

Debug mode:
- Increases error verbosity
- Should **never** be enabled in production
- May expose internal state

DEBUG and LOGGER_ENABLED should not be enabled together in production environments.

---

## Accessing Logs

Operators can access logs via:

- `docker logs <container>` for local services
- AWS CloudWatch console for ECS tasks
- AWS CLI for programmatic access

Example:

```bash
docker logs vbrowser
```

---

## Log Retention and Cleanup

Recommended practices:

- Configure CloudWatch retention policies
- Periodically review and purge logs
- Destroy environments when investigations complete

Logs should not be treated as long-term records.

---

## Security Considerations

Logs may still reveal:

- Timing patterns
- Session volume
- Infrastructure identifiers

Operators should:
- Restrict log access
- Avoid sharing logs externally
- Scrub logs before support requests

---

## Next Steps

To understand how to operate OvB at scale:

Continue to **Security**
