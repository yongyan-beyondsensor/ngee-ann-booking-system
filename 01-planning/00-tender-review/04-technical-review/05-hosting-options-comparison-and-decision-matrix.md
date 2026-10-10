# Hosting Architecture Comparison & Decision Matrix

**Tender Reference:** `FY26/FMS/003x/ITQ`  
**Target:** School of Film & Media Studies (FMS), Ngee Ann Polytechnic  
**Contract Duration:** 36 Months  
**Budget Context:** GeBIZ ITQ Ceiling $\le \text{S}\$90,000$  

---

## 1. Executive Comparison Overview

| Dimension | Option A: Vercel Pro + Supabase Cloud (Managed PaaS) | Option B: Akamai Connected Cloud (All-in-One Self-Hosted) |
| :--- | :--- | :--- |
| **Architectural Model** | Fully Managed Serverless Frontend + Managed BaaS | IaaS Linux VM (8 GB RAM) running Docker Compose |
| **36-Month Infra Cost** | **~S$ 2,300 – S$ 3,000 SGD** (~S$ 65–85 / mo) | **~S$ 2,672 SGD** (~S$ 71 / mo) |
| **Singapore Data Residency (Annex A)** | ⚠️ **Compliant with Config** (`regions: ["sin1"]` + AWS SG) | 🟢 **100% Guaranteed** (Compute & S3 strictly in SG DC) |
| **DevOps & Maintenance Burden** | 🟢 **Near Zero** (Managed database, auto-scaling, auto-failover) | 🔴 **High** (OS patching, Docker lifecycle, DB tuning) |
| **ISO/IEC 27001 Compliance** | 🟢 **Direct Match** (Both Vercel & Supabase hold certificates) | 🟡 **Conditional** (Akamai holds infra cert; OS/app is on vendor) |
| **99.5% Uptime SLA Risk** | 🟢 **Low Risk** (Multi-AZ AWS failover + edge CDN) | 🔴 **Medium-High Risk** (Single VM is a single point of failure) |
| **36-Month Audit Trail** | 🟡 **Requires DB Table** (Platform logs expire in 7–28 days) | 🟢 **Simple** (Raw Postgres/pg_audit logs piped to S3) |
| **30-Day Backup Mandate** | 🟡 Scripted daily S3 dump OR $100/mo PITR add-on | 🟡 Scripted daily pg_dump to Akamai Object Storage |
| **Deployment & Speed to Market** | 🟢 **Instant** (Git push, atomic zero-downtime preview branches) | 🟡 **Manual** (Docker build, SSH deploy / CI/CD runner) |

---

## 2. Option A: Vercel Pro + Supabase Cloud (Recommended for Speed & Low Ops)

### How It Works:
- **Frontend / API:** Next.js deployed on Vercel Pro, strictly locked to Singapore (`"regions": ["sin1"]`).
- **Database & Auth:** Supabase Cloud Pro deployed in AWS Singapore (`ap-southeast-1`).
- **Email Delivery:** Singapore AWS SES transactional SMTP relay.

### Pros:
1. **Zero Infrastructure Maintenance:** No Linux server to patch, no database replication or WAL corruptions to troubleshoot, and no Docker daemons to restart.
2. **SLA Protection (Clause 11.1 & 11.2):** Supabase runs on AWS multi-AZ architecture with automated disk provisioning and health healing. Vercel automatically routes around localized node failures. This drastically lowers the risk of breaching the strict **4-hour response / 1–2 business day resolution** SLA penalty.
3. **Out-of-the-Box ISO 27001 & SOC 2:** Both Vercel and Supabase are enterprise-certified. You can download and attach their official compliance certificates to your GeBIZ quotation response.
4. **Zero-Downtime Releases (Clause 11.4):** Feature updates and bug fixes deploy instantaneously without taking the system offline or triggering mandatory 3-day maintenance notifications to FMS.

### Cons & Action Items:
1. **Data Leakage Risk:** If someone removes or forgets `"regions": ["sin1"]` from `vercel.json`, serverless functions revert to the US (`iad1`), creating an immediate breach of Annex A (PDPA).
2. **Platform Log Limitations:** Supabase platform logs expire in 7–28 days. You must build a dedicated `security_audit_logs` table inside PostgreSQL to preserve 36 months of audit events.
3. **Team Seat Scaling:** Vercel Pro charges $20/month per developer seat if your core development team expands.

---

## 3. Option B: Akamai Connected Cloud / Linode (Recommended for Full Data Sovereignty)

### How It Works:
- **Compute:** 1 Dedicated or Shared Linode VM (8 GB RAM, 4 vCPUs, 160 GB SSD) hosted in Akamai’s **Singapore Data Center**.
- **Stack:** Docker Compose running PostgreSQL, GoTrue (Auth), PostgREST, Kong Gateway, Storage, and Next.js/Node frontend container.
- **Storage:** Akamai S3-compatible Object Storage in Singapore (250 GB) for 30-day backups and 36-month audit logs.

### Pros:
1. **Absolute Data Sovereignty & Audit Simplicity:** 100% of compute, database tables, and object storage live inside Singapore. There is zero risk of US Anycast edge routing.
2. **Trivial 36-Month Log Compliance (Clause 3.0):** You can mount PostgreSQL transaction logs or `pg_audit` directly to the host filesystem and compress/ship them to Akamai S3 for pennies per month.
3. **Completely Predictable, Flat Cost:** Flat ~$55 USD/mo (~S$71 SGD/mo). No user count tiers, no seat fees, no database egress surprises.
4. **Direct Database Power:** Full superuser (`postgres`) control over extensions, cron tasks, and vacuum schedules.

### Cons & Action Items:
1. **High Operational Burden:** You are solely responsible for Linux security patches, Docker daemon memory leaks, PostgreSQL vacuuming, SSL renewal scripts, and container monitoring.
2. **Single Point of Failure (SPOF):** Running everything on a single VM means that if the VM locks up at 2:00 AM, the system goes dark. Meeting the 99.5% uptime SLA requires rigorous monitoring (e.g. Uptime Kuma) and self-healing systemd watchers.
3. **ISO 27001 Ambiguity (Clause 13.1):** While Akamai's data center has ISO 27001, your self-managed OS and application layer are not covered by Akamai's certificate. If NP demands an institutional ISO certificate covering your operational practices, this requires clarification.
4. **Linode Native Backups Fall Short:** Linode's built-in backup add-on only stores 3 snapshots. You must write and maintain custom automated backup scripts to meet the 30-day requirement (Clause 13.4).

---

## 4. Final Verdict & Strategic Recommendation

| Your Project Priority | Winning Option | Key Reason |
| :--- | :---: | :--- |
| **Small Engineering Team & Peace of Mind** | **Option A (Vercel + Supabase Cloud)** | Managed high availability prevents 4-hour SLA penalties. Zero server maintenance. |
| **Audit Rigor & Tender Defense** | **Option A (Vercel + Supabase Cloud)** | Immediate enterprise ISO 27001 and SOC 2 certificates available for submission. |
| **Absolute Data Isolation & Flat Fixed Costs** | **Option B (Akamai Self-Hosted)** | 100% of the entire stack stays physically locked inside Singapore data center borders. |

### Suggested Tender Strategy:
**Propose Option A (Vercel Pro + Supabase Cloud) as your primary solution** in the tender response because:
1. The **36-month cost difference is negligible** (~S$2,500 vs ~S$2,670 SGD).
2. It eliminates the operational risk of a single server crashing under peak semester loan rushes.
3. It provides turnkey ISO 27001 / SOC 2 certification proof for Clause 13.1.
4. Simply enforce `"regions": ["sin1"]` in code to guarantee Singapore PDPA compliance.
