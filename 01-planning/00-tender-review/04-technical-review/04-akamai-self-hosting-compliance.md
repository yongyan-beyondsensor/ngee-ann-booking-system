# Akamai Connected Cloud (Linode) Self-Hosting: Compliance & Feasibility Review

**Tender Reference:** `FY26/FMS/003x/ITQ`  
**Architecture Evaluated:** Full Self-Hosted Stack (Web App + Self-Hosted Supabase Docker) on Akamai Connected Cloud  
**Target:** School of Film & Media Studies (FMS), Ngee Ann Polytechnic  
**Contract Duration:** 36 Months  

---

## 1. Executive Summary

Self-hosting the entire solution (Next.js/React frontend + Dockerized Supabase stack) on **Akamai Connected Cloud (Singapore Data Center)** is **fully viable and compliant**, offering **superior data residency control and lower long-term cloud costs**.

However, shifting from managed SaaS (Vercel + Supabase Cloud) to self-hosted IaaS (Akamai) shifts the operational burden of **ISO 27001 environment hardening, OS patching, database High Availability (HA), and backup retention directly onto your team**.

---

## 2. Compliance Evaluation on Akamai Self-Hosted

| Clause / Requirement | Tender Specification | Akamai Self-Hosted Status | Implementation Notes |
| :--- | :--- | :---: | :--- |
| **13.2 & Annex A** | **Singapore Data Residency & PDPA** | 🟢 **Superior** | Akamai has a dedicated data center in **Singapore (`ap-south` / SG)**. Compute, block storage, and S3-compatible Object Storage stay 100% within Singapore borders. |
| **13.1** | **ISO/IEC 27001 Certification** | 🟡 **Conditional** | Akamai's infrastructure is ISO 27001 & SOC 2 certified. However, because you manage the OS, Docker daemon, and Postgres, you are responsible for host hardening. *(See Section 3 for tender clarification advice)*. |
| **13.4** | **30-Day Backup Retention** | ⚠️ **Manual Setup** | Linode's built-in backup add-on only keeps 3 rolling snapshots (Daily, Weekly, Bi-weekly). You **must script automated daily `pg_dump` to Akamai Object Storage** with a 30-day lifecycle rule. |
| **3.0** | **36-Month Audit Trail** | 🟢 **Superior** | Full root access allows installing `pg_audit` and streaming logs to cold storage (Akamai Object Storage in Singapore) indefinitely for near-zero cost. |
| **11.1** | **99.5% System Availability** | 🟡 **Requires Ops** | A single Linode VM can be a Single Point of Failure (SPOF) during host kernel reboots. Requires Docker restart policies, systemd watchdog, and automated health checks. |
| **9.2** | **Self-Contained Auth & Future SSO** | 🟢 **Compliant** | Self-hosted GoTrue supports username/password, MFA, and SAML 2.0 (Active Directory integration). |
| **11.4** | **Scheduled Maintenance (3 Days Notice)** | 🟢 **Compliant** | You have complete control over OS updates and maintenance windows outside office hours. |

---

## 3. The 4 Key Compliance & Operational Hurdles

### 1. ISO/IEC 27001 Scope Nuance (Clause 13.1)
- **Tender Requirement:** *"The Vendor shall possess a valid ISO/IEC 27001 certification, information security certification, covering the proposed service and operational environment."*
- **The Risk:** In a self-hosted model, Akamai holds ISO 27001 for the physical data center, network, and hypervisor. If Ngee Ann Polytechnic strictly interprets this as requiring the **bidding company itself** to hold ISO 27001, self-hosting does not bypass this requirement.
- **Clarification Link:** This is why [Question 5.1 in our Tender Clarifications](file:///e:/dev/ngee-ann-booking-system/01-planning/00-tender-review/03%20-%20tender-notes/06-tender-clarifications.md#L47-L53) is critical: *"If a vendor deploys a SaaS solution hosted on a certified public cloud... does NP require the bidding entity itself to hold ISO 27001, or is the cloud hosting provider's certification acceptable?"*

### 2. Backup Retention Compliance (Clause 13.4)
- **The Issue:** Native Linode Backup Service ($10/mo) only stores **3 backups** (most recent daily, 2–7 day weekly, 8–14 day bi-weekly). It **fails** the mandatory 30-day retention rule.
- **Compliance Solution:** Configure an automated daily cron container:
  ```bash
  # Daily script at 02:00 AM SGT:
  pg_dump -Fc -U postgres -d ngee_ann_fms | gpg --encrypt | s3cmd put - s3://np-fms-backups/daily/$(date +%Y-%m-%d).dump.gpg
  ```
  Configure an S3 Lifecycle Rule on the Singapore bucket to auto-expire dumps after 30 days.

### 3. Outbound SMTP Restrictions (Annex A & Notifications)
- **The Issue:** Akamai/Linode blocks outbound TCP port 25 by default across all new accounts to prevent spam.
- **Compliance Solution:** Use an external transactional mail service running over port 587/TLS, specifically configured in **AWS SES Singapore (`ap-southeast-1`)** to maintain Singapore PDPA data residency.

### 4. High Availability & SLA (Clause 11.1 & 11.2)
- **99.5% Uptime Allowance:** Maximum permitted unplanned downtime is **~3.6 hours per month**.
- **Risk on Single VM:** If your single VM experiences kernel panic, disk exhaustion from Docker logs, or host degradation, you risk breaching the 4-hour critical issue response/resolution SLA (Clause 11.2).
- **Hardening Checklist:**
  - Docker daemon with `log-driver: "json-file"` and strict `max-size: "50m"`, `max-file: "3"` to prevent disk crashes.
  - Container auto-restart policies (`restart: always`).
  - Automated uptime ping monitoring (e.g., Uptime Kuma or Better Uptime with SMS/WhatsApp alerts).

---

## 4. Hardware Sizing & 36-Month Cost Model (Akamai)

Self-hosting Supabase (PostgreSQL, GoTrue, PostgREST, Kong, Storage, Realtime) + Next.js App requires a **minimum of 8 GB RAM** to ensure smooth performance under load.

| Resource Item | Spec / Details | Monthly Cost (USD) | 36-Month Total (USD) | 36-Month Total (SGD ~1.35) |
| :--- | :--- | :---: | :---: | :---: |
| **Linode Compute VM** | **Linode 8 GB** (4 vCPU, 8 GB RAM, 160 GB SSD) - Singapore Data Center | $48.00 / mo | $1,728.00 | ~S$ 2,332 |
| **Akamai Object Storage** | 250 GB storage in Singapore (30-day backups + 36-month audit logs) | $5.00 / mo | $180.00 | ~S$ 243 |
| **AWS SES (Singapore)** | Transactional email relay for alerts/MFA | ~$2.00 / mo | $72.00 | ~S$ 97 |
| **Domain & SSL (Certbot)** | Automated Let's Encrypt TLS renewal | $0.00 | $0.00 | S$ 0 |
| **Total Akamai Self-Hosted** | | **~$55.00 / mo** | **~$1,980.00** | **~S$ 2,672 SGD** |

---

## 5. Architectural Comparison: Akamai Self-Hosted vs. Vercel + Supabase Cloud

| Evaluation Criteria | Vercel Pro + Supabase Cloud | Akamai Self-Hosted (Linode SG) |
| :--- | :--- | :--- |
| **Data Residency (Annex A)** | Compliant (Requires `regions: ["sin1"]` & AWS SG) | **100% Guaranteed** (All compute & data strictly in SG) |
| **36-Month Audit Trail** | Requires custom Postgres table (platform logs expire) | **Trivial** (Direct filesystem / Postgres log archiving to S3) |
| **30-Day Backups** | Expensive add-on ($100/mo) or custom S3 export script | **Trivial** (Scripted daily pg_dump to Akamai Object Storage) |
| **DevOps & Maintenance Burden** | **Near Zero** (Managed PaaS/SaaS) | **Moderate to High** (OS patches, container updates, monitoring) |
| **Zero-Downtime Deployments** | Native atomic deploys | Requires Docker Swarm / blue-green or Traefik reverse proxy |
| **Total 36-Month Hosting Cost**| **~S$ 2,300 – S$ 3,000 SGD** | **~S$ 2,672 SGD** |

---

## 6. Recommendation

1. **If your primary priority is Data Sovereignty & Audit Simplicity:**  
   Akamai Self-Hosted is excellent. You have absolute control over data residency in Singapore, zero risk of accidental US edge execution, and direct control over 36-month log archiving.

2. **If your primary priority is SLA Safety & Low Maintenance:**  
   The **Vercel Pro (locked to `sin1`) + Supabase Cloud (AWS Singapore)** model is safer for a small engineering team because high availability, database failover, and CDN edge reliability are fully managed, reducing your operational risk against the strict 4-hour SLA penalties in Clause 11.2.
