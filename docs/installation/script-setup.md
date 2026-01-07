---
sidebar_position: 4
---

# Setup Script

The `setup.sh` script is the **primary orchestration entry point** for deploying Open vBrowser (OvB). It automates environment preparation, infrastructure provisioning, image management, and service startup.

This document explains **what the script does**, **why each step exists**, and **what operators should expect during execution**.

---

## Purpose of the Setup Script

The setup script exists to:

- Eliminate manual deployment steps
- Enforce a consistent deployment process
- Reduce configuration drift
- Prevent partial or insecure setups
- Provide a single, auditable entry point

Running `setup.sh` is the **only supported deployment method**.

---

## Download Git Repo

Download the content from the GitHub repository:

```bash
git clone https://github.com/fish-not-phish/open-vbrowser.git
cd open-vbrowser/terraform
```

## Execution Context

The script is executed from the `terraform/` directory. Run the following command:

```bash
./setup.sh
```

It assumes:
- A Linux shell environment
- Docker and Terraform are installed
- AWS and Cloudflare credentials are available

---

## Default Browser Images

By default, the following browser images are used:

- `chrome`
- `mullvad`
- `tor`

---

## Interactive Prompt Behavior

During setup, you will see the following prompt:

```bash
Default images: chrome, mullvad, tor
Use default images? [Y/n]: 
```

- Press **Enter** or type **Y** to accept the default images.
- Type **n** to provide a custom list of images.

If you choose **n**, you will be prompted to enter your desired images.

---

## Custom Image Input Format

- Images must be separated by a **comma and a space**
- Example:

```text
chrome, firefox, brave
```

This input will replace the default image list.

---

# Environment Variable Reference

When prompted for a value during setup, you may **press Enter to accept the default value** (if one exists).

Variables marked **Recommend to Change: Yes** should be reviewed and customized for your environment.

---

## Core Application Settings

| Variable | Default Value | Recommend to Change | Notes |
|--------|---------------|--------------|------|
| `DEBUG` | `False` | No | Should remain `False` in production. |
| `CUSTOM_DOMAIN` | `domain.tld` | **Yes** | Set to your public domain (e.g. `example.com`). |
| `LOGGER_ENABLED` | `False` | No | Enable only if additional logging is required. |
| `DEFAULT_IDLE_THRESHOLD` | `10` | No | Idle timeout in minutes. |

---

## Database Configuration

| Variable | Default Value | Recommend to Change | Notes |
|--------|---------------|--------------|------|
| `DB_NAME` | `vbrowserdb` | No | Database name for the application. |
| `DB_USER` | `admin` | **Yes** | Database username. |
| `DB_PASSWORD` | `adminpass` | **Yes** | Database password. |
| `DB_HOST` | `postgres` | No | Works by default with Docker Compose. |
| `DB_PORT` | `5432` | No | Standard PostgreSQL port. |

---

## Redis Configuration

| Variable | Default Value | Recommend to Change | Notes |
|--------|---------------|--------------|------|
| `REDIS_URL` | `redis://redis:6379/0` | No | Default works with bundled Redis container. |

---

:::info
You may need to change the `DB_HOST` or `REDIS_URL` if you have existing PostgreSQL or Redis containers alive.

If this is the case, change the `container_name` inside the `open-vbrowser/docker/vbrowser-stack/docker-compose.yml` for one or both the postgres and redis service(s).

Example:
```docker
services:
  postgres:
    image: postgres:16-alpine
    container_name: custom-postgres    # new custom PostgreSQL name
    restart: unless-stopped
    environment:
      POSTGRES_DB: "${DB_NAME:-}"
      POSTGRES_USER: "${DB_USER:-}"
      POSTGRES_PASSWORD: "${DB_PASSWORD:-}"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    container_name: custom-redis    # new custom redis name
    restart: unless-stopped
```

Your new values would be:
```
DB_HOST=custom-postgres
REDIS_URL=redis://custom-redis:6379/0
```
:::

## Django Superuser (Initial Admin Account)

These values are used **once on first startup** to create the initial admin user.

| Variable | Default Value | Recommend to Change | Notes |
|--------|---------------|--------------|------|
| `DJANGO_SUPERUSER_USERNAME` | `admin` | **Yes** | Admin username. |
| `DJANGO_SUPERUSER_EMAIL` | `admin@domain.tld` | **Yes** | Admin email address. |
| `DJANGO_SUPERUSER_PASSWORD` | `SuperSecretPassword123!` | **Yes** | Strong password recommended. |

---

## Cloudflare Integration

| Variable | Default Value | Recommend to Change | Notes |
|--------|---------------|--------------|------|
| `CF_Zone_ID` | `xxxx` | **Yes** | Required for Cloudflare integration. |
| `CF_Token` | `xxxx` | **Yes** | API token with DNS permissions. |

---

## AWS Configuration

| Variable | Default Value | Recommend to Change | Notes |
|--------|---------------|--------------|------|
| `AWS_DEFAULT_REGION` | `us-east-1` | No | Change only if using a different AWS region. |

---

## Setup Notes

- You may **press Enter to accept the default value** when one is provided.
- Review and update all variables marked **Recommend to Change: Yes** before deployment.
- Secrets (passwords, tokens, API keys) should never be committed to version control.

---

:::info

The below steps are built into the `./setup.sh` script. For the purposes of this guide, we are detailing what the script is doing under the hood. You are not expected to execute any additional commands other than running the setup script.

Please enter the correct values for each variable the script prompts you for.

:::

## Step 1: Browser Image Selection

OvB treats browser containers as **explicitly approved execution environments**.

During this step:

- A default browser set is offered:
  - `chrome`
  - `mullvad`
  - `tor`
- Operators may choose a custom subset
- Unselected browser directories are moved to `unused/`
- Selected browser directories remain in `vbrowsers/`

This ensures:
- Only approved browsers are built
- Reduced build time
- Smaller ECR footprint

The selected images are written into `terraform.tfvars` as `docker_images`.

---

## Step 2: Secret Generation

The script generates a secure Django secret key:

- Cryptographically random
- Base64-derived
- Trimmed to a safe length
- Written only to `.env`

Secrets are **never hardcoded**.

---

## Step 3: Environment Variable Collection

The script interactively prompts for required configuration values, including:

- Application settings
- Database configuration
- Redis configuration
- AWS region
- Cloudflare credentials
- Admin user credentials

Defaults are provided for most values.

At completion, all values are written to a single `.env` file.

---

## Step 4: Environment Augmentation

Additional values are derived automatically:

- `ALLOWED_HOSTS`
- `USER_EMAIL`
- `AWS_DEFAULT_REGION`

This ensures internal consistency across services.

---

## Step 5: Terraform Configuration Patching

The script updates Terraform inputs to match selected configuration:

- Browser image list
- AWS region
- Logging region settings

This guarantees Terraform and runtime services remain synchronized.

---

## Step 6: Infrastructure Provisioning

Terraform is executed automatically:

```bash
terraform init
terraform apply -auto-approve
```

This provisions:
- ECS cluster and services
- ECR repositories
- IAM roles and policies
- Networking resources
- Logging infrastructure

---

## Step 7: Environment Propagation

The generated `.env` file is copied into:

- `django/.env`
- `docker/containers-update/.env`
- `docker/vbrowser-stack/.env`

This creates a **single source of truth** for configuration.

---

## Step 8: Docker Image Builds

The script builds required images locally:

- `vbrowser` (Django backend)
- `containers-updater`

Images are tagged locally and prepared for ECR push.

---

## Step 9: Service Startup

Docker Compose is used to start services:

- `containers-update`
- `vbrowser-stack`

```bash
docker compose up -d
```

The order ensures images are built before services attempt to use them.

---

## containers-updater Execution

The `containers-updater` service:

- Builds selected browser images
- Pushes images to AWS ECR
- Prepares images for ECS tasks

Operators **must wait** for this process to complete before launching sessions.

Monitor progress with:

```bash
docker logs containers-updater -f
```

---

## Completion Criteria

The setup process is complete when:

- Terraform apply succeeds
- All Docker services are running
- `containers-updater` logs indicate completion

At this point, OvB is ready to accept sessions.

---

## Common Failure Scenarios

Common issues include:

- Cloudflare DNS propagation delays
- Invalid API token permissions
- Insufficient AWS IAM permissions
- Interrupted Terraform runs

Most issues are resolved by:
- Fixing credentials
- Waiting for DNS propagation
- Running `destroy.sh` and re-running setup

---

## Idempotency and Re-Runs

The setup script is designed to be re-run safely **after teardown**.

Partial re-runs without destroy are **not recommended**.

---

## Next Steps

After setup completes successfully:

Continue to **Environment Variables**
