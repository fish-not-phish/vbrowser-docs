---
sidebar_position: 6
---

# Idle Timeouts

Idle timeouts in Open vBrowser (OvB) are a **core safety and cost-control mechanism**. They ensure that browser sessions do not remain active indefinitely when not in use, reducing attack surface and preventing unnecessary cloud spend.

This document explains **how idle timeouts work**, **how they are configured**, and **what operators should expect**.

---

## Purpose of Idle Timeouts

Idle timeouts exist to:

- Automatically terminate unused sessions
- Reduce exposure to long-lived compromises
- Prevent forgotten active browsers
- Control infrastructure costs
- Enforce ephemeral usage patterns

Idle timeouts are **enabled by default** and should not be disabled.

---

## How Idle Time Is Measured

Idle time is measured per session based on:

- Lack of user interaction
- Absence of browser activity signals
- No active session events

Each session tracks its own idle timer independently.

Idle detection is handled by the backend, not the browser.

---

## Configuration Variable

Idle timeout behavior is controlled by a single environment variable:

```
DEFAULT_IDLE_THRESHOLD
```

- Value is expressed in **minutes**
- Applies globally to all sessions
- Must be a positive integer

Example:

```
DEFAULT_IDLE_THRESHOLD=10
```

This configuration is written to `.env` during setup.

---

## Idle Timeout Behavior

When the idle threshold is reached:

1. The backend marks the session as idle
2. The ECS task is stopped
3. The browser container is destroyed
4. All session state is lost

There is no warning or grace period.

Termination is immediate.

---

## Manual vs Automatic Termination

Idle timeouts are distinct from manual termination:

- **Idle timeout**: Automatic, inactivity-based
- **Manual termination**: User or admin initiated

Both result in identical destruction behavior.

---

## Security Implications

Idle timeouts significantly improve security by:

- Limiting dwell time for compromised sessions
- Reducing persistence opportunities
- Preventing long-running browser exploits

Shorter idle thresholds reduce risk but may impact usability.

---

## Operational Considerations

Operators should consider:

- Investigation workflows
- Analyst interaction patterns
- Cost sensitivity
- Risk tolerance

Recommended values:
- **5–15 minutes** for most environments
- Higher values only when necessary

---

## Failure Scenarios

Idle timeouts may not trigger if:

- Backend services are unavailable
- Infrastructure is misconfigured

In such cases:
- Sessions may persist longer than intended
- Teardown should be performed

Idle timeouts are a control, not a guarantee.

---

## Best Practices

Recommended practices:

- Keep idle thresholds conservative
- Monitor session lifecycle events
- Tear down environments when not in use
- Treat idle timeouts as a backstop, not primary control

---

## Next Steps

To understand how session activity is logged:

Continue to **API**
