---
sidebar_position: 7
---

# API

Open vBrowser (OvB) exposes a limited HTTP API used to **create and manage browser sessions**. The API functions as a **control plane**, not a data plane, and does not expose browser internals or browsing content.

While the API is available for integrations, users may experience **unexpected behavior**, as the API is intentionally conservative and continues to evolve.

This document describes **authentication requirements** and **all currently supported API endpoints**.

---

## API Design Philosophy

The OvB API is designed to:

- Minimize exposed surface area
- Require explicit authentication for all actions
- Prevent unauthorized session creation
- Avoid handling untrusted browsing data directly

The API is **not designed for high‑frequency automation or scraping** and should be treated as an administrative interface.

---

## API Endpoint Structure

All API endpoints are served under:

```
https://api.<CUSTOM_DOMAIN>
```

The OvB web UI is served separately and does not share credentials with the API.

---

## Authentication Model

All API requests require **two headers**:

1. An API token
2. A special integration key

Both headers are mandatory for every request.

### Required Headers

```
Authorization: Token <API_TOKEN>
X-Special-Key: <SPECIAL_INTEGRATION_KEY>
```

- The `Token` prefix is required
- Missing or invalid headers result in request rejection

---

## API Endpoints

### Create Session

Creates a new browser session.

```
POST /create-session/
```

#### Headers
```
Authorization: Token <API_TOKEN>
X-Special-Key: <SPECIAL_INTEGRATION_KEY>
```

#### Optional Request Body

```json
{
  "url": "BASE64_ENCODED_URL",
  "session_type": "vStandard"
}
```

##### Fields
- `url`
  - Base64‑encoded URL to open
  - Defaults to `google.com` (decoded)
- `session_type`
  - Session profile to use
  - Defaults to `vStandard`

#### Responses
- `201 Created`
```json
{
  "session_uuid": "2997fbdc-9a14-4096-96ce-c929f103e93d",
  "seconds": 0
}
```
- `400 Bad Request`
- `403 Forbidden`

---

### Get Session

Returns the URL of the user’s active session.

```
GET /get-session/
```

#### Headers
```
Authorization: Token <API_TOKEN>
X-Special-Key: <SPECIAL_INTEGRATION_KEY>
```

#### Response
- `200 OK`
```json
{
  "session_url": "string"
}
```

- `400 Bad Request`
- `403 Forbidden`
- `404 Not Found`

---

### Terminate Session

Terminates the user’s active browser session.

```
POST /terminate-session/
```

#### Headers
```
Authorization: Token <API_TOKEN>
X-Special-Key: <SPECIAL_INTEGRATION_KEY>
```

#### Responses
- `200 OK`
- `400 Bad Request`
- `403 Forbidden`
- `404 Not Found`

---

### API Schema

Returns the OpenAPI schema for the OvB API.

```
GET /schema/
```

#### Query Parameters
- `format`: `json` or `yaml`
- `lang`: localization language code

#### Response
- `200 OK`
- Content-Type:
  - `application/vnd.oai.openapi+json`
  - `application/vnd.oai.openapi`

---

## Error Handling

Common responses include:

- `401 Unauthorized` – Missing or invalid credentials
- `403 Forbidden` – Authenticated but not authorized
- `400 Bad Request` – Invalid request
- `404 Not Found` – Resource does not exist
- `500 Internal Server Error` – Backend failure

Error messages do not expose internal details.

---

## Security Considerations

API clients should:

- Store API tokens securely
- Never embed tokens in frontend code
- Rotate tokens if compromise is suspected
- Restrict API usage to trusted systems only

The API provides direct control over session lifecycle and should be treated as sensitive infrastructure.

---

## What the API Does NOT Do

The OvB API does **not**:

- Proxy browser traffic
- Inspect or return page content
- Capture keystrokes
- Store browsing data

All browser interaction occurs outside the API boundary.

---

## Next Steps

For details on session lifetime enforcement:

Continue to **Logging**
