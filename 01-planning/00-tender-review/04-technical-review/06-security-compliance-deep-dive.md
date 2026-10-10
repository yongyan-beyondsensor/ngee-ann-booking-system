# Security Compliance Deep-Dive: Vercel + Supabase vs. Akamai Self-Hosted

**Tender Reference:** `FY26/FMS/003x/ITQ`  
**Target:** School of Film & Media Studies (FMS), Ngee Ann Polytechnic  
**Focus:** Detailed Security Compliance, PDPA Annex A, ISO/IEC 27001, and Hardening Review  

---

## 1. Security Compliance Comparison Matrix

| Security & Compliance Domain | Tender Requirement | Option A: Vercel Pro + Supabase Cloud (AWS SG) | Option B: Akamai Connected Cloud (Linode SG Self-Hosted) |
| :--- | :--- | :--- | :--- |
| **ISO/IEC 27001 Certification** *(Clause 13.1)* | **Mandatory:** Valid certificate covering proposed service & operational environment. | 🟢 **Turnkey Compliance:** Vercel, Supabase, and AWS hold official ISO 27001 & SOC 2 Type 2 certificates covering the operational SaaS stack. | 🔴 **High Audit Risk:** Akamai holds ISO 27001 for data centers only. Your self-managed Linux OS, Docker containers, and DB are **uncovered** unless your company is ISO 27001 certified. |
| **PDPA Data Residency** *(Annex A Clause 4)* | **Mandatory:** Zero transfer of personal data outside Singapore. | 🟡 **Compliant with Config:** Requires `"regions": ["sin1"]` in `vercel.json` + AWS SG Supabase + Singapore SES relay. | 🟢 **100% Native:** Everything executes and stores strictly inside Akamai's Singapore facility. |
| **Encryption at Rest** *(Clause 13.3)* | **Mandatory:** All stored data must be encrypted at rest. | 🟢 **Turnkey Compliance:** Hardware-accelerated AES-256 via AWS KMS managed keys for DB, backups, and file storage. | ⚠️ **Action Required:** Linode volumes are **not encrypted by default**. You must manually configure LUKS / dm-crypt on Linux. |
| **Encryption in Transit** *(Clause 13.3)* | **Mandatory:** HTTPS / TLS across all interfaces. | 🟢 **Automated:** Enforced TLS 1.3 with automated HSTS and managed certificates. | 🟡 **Manual:** Requires configuring Nginx/Caddy reverse proxy and automating Let's Encrypt renewals via Certbot. |
| **VAPT & Threat Surface** | System must withstand institutional penetration testing. | 🟢 **Minimal Surface:** Zero open ports except 443. Database and backend APIs protected behind private cloud gateways. | 🔴 **High Exposure:** Host VM exposes SSH (port 22). Misconfigured Docker bindings can accidentally expose Postgres (5432) or Kong to the public internet. |
| **DDoS & WAF Protection** | Resilience against volumetric attacks & OWASP Top 10. | 🟢 **Built-in:** Vercel Edge Network provides automated Layer 3/4/7 DDoS mitigation and edge rate limiting. | 🟡 **Self-Managed:** Must configure Linode Cloud Firewall, fail2ban, and Nginx rate-limiting manually. |
| **36-Month Audit Trail** *(Clause 3.0)* | **Mandatory:** Retain complete audit logs for $\ge 36$ months. | 🟡 **Requires DB Table:** Platform logs expire; must log auth and transactions into PostgreSQL `security_audit_logs`. | 🟢 **Complete Control:** Full root access to pipe `pg_audit` and syslog directly to compressed S3 archives. |
| **Sub-Processor Governance** *(Annex A Clause 9)* | Must obtain written agency approval for sub-contractors handling data. | 🟡 Must declare Vercel Inc., Supabase Inc., and AWS as sub-processors in quotation submission. | 🟢 Only Akamai Technologies (Linode) declared as infrastructure hosting provider. |

---

## 2. The ISO/IEC 27001 Trap (Clause 13.1) — *The Deciding Factor*

Clause 13.1 is classified as a **Mandatory Requirement ('M')**:
> *"The Vendor shall possess a valid ISO/IEC 27001 certification, information security certification, covering the proposed service and operational environment. The Vendor shall submit a copy of the current certification together with the quotation for verification purposes."*

### Why Option A (Vercel + Supabase) Protects You:
- In a managed SaaS model, the software application is delivered via certified platforms.
- You submit:
  1. **Vercel's ISO/IEC 27001:2013 Certificate** (covering application hosting, deployment pipeline, and edge infrastructure).
  2. **Supabase's ISO/IEC 27001:2013 & SOC 2 Type 2 Report** (covering database engine, authentication services, and data storage).
  3. **AWS Singapore ISO 27001 & MTCS Level 3 Certificates** (covering physical cloud infrastructure).
- This creates an unbroken, auditable chain of certified operational environments.

### Why Option B (Akamai Self-Hosted) Creates Disqualification Risk:
- Akamai’s ISO 27001 certificate covers the physical data center, electricity, physical racks, and the KVM hypervisor.
- **It does NOT cover your virtual machine.** Akamai’s compliance boundary stops at the hypervisor.
- If Ngee Ann Polytechnic’s IT Security Auditor asks:
  > *"Who manages the patch cycle for this Ubuntu VM? Who holds the ISO 27001 certification for password rotation, SSH access controls, container vulnerabilities, and database backups on this server?"*
- Unless your company holds an institutional ISO 27001 certification, you cannot produce an ISO certificate covering that server's operating environment. This creates a severe risk of bid rejection under Clause 13.1.

---

## 3. Data Protection: Encryption at Rest (Clause 13.3)

Clause 13.3 mandates **Encryption at Rest**:

### In Option A (Supabase Cloud):
- Supabase automatically encrypts all PostgreSQL tablespaces, transaction logs, automated backups, and storage buckets using **AES-256** managed under AWS KMS.
- Point-in-time snapshots and S3 backups are encrypted before writing to disk.

### In Option B (Akamai / Linode):
- Standard Linode block storage volumes and VM disks are **unencrypted raw storage blocks**.
- To satisfy Clause 13.3, you cannot simply deploy Docker. You must:
  1. Initialize the disk volume using `cryptsetup luksFormat /dev/sdX`.
  2. Create an encrypted mapper: `cryptsetup luksOpen /dev/sdX secure_db`.
  3. Format with ext4 and mount the Docker data directory to the encrypted device.
  4. Manage encryption key storage securely so the server can reboot without manual passphrase intervention.
- Failing to do this leaves database files unencrypted on the host disk, violating Clause 13.3.

---

## 4. Institutional VAPT (Vulnerability Assessment & Pen-Testing)

Polytechnic IT departments routinely run automated Qualys or Nessus vulnerability scanners against contractor solutions before Go-Live approval.

### Option A Threat Profile:
- **Exposed Attack Surface:** Single port (`443 HTTPS`) through Vercel's global edge proxy.
- **Port Scan Result:** Ports 22 (SSH), 5432 (Postgres), 8000 (Kong), 6379 (Redis) are completely non-existent on the public internet.
- **Result:** Passes infrastructure penetration testing cleanly; testing is confined to application-level logic (e.g. testing RLS bypass or authorization bugs).

### Option B Threat Profile:
- **Exposed Attack Surface:** A full Linux operating system exposed to a public Singapore IPv4 address.
- **Common Audit Findings:**
  - SSH port 22 exposed to brute-force attacks (requires SSH key-only, fail2ban, or non-standard port).
  - Outdated Linux packages or unpatched OpenSSL/OpenSSH CVEs triggering "High/Critical" scanner flags.
  - Docker's default iptables bypass: by default, Docker port mappings (`-p 5432:5432`) bypass UFW (Uncomplicated Firewall) and expose the port directly to the internet unless `iptables: false` is configured in `/etc/docker/daemon.json`.
- **Result:** Requires substantial continuous sysadmin hardening to pass institutional VAPT.

---

## 5. Security Verdict & Recommendation

| Security Dimension | Winner | Reason |
| :--- | :---: | :--- |
| **Meeting Clause 13.1 (ISO 27001)** | **Option A** | Direct platform certificates available from Vercel & Supabase. |
| **Encryption at Rest (Clause 13.3)** | **Option A** | Turnkey AES-256 KMS encryption without LUKS disk configuration. |
| **VAPT / Hardening Liability** | **Option A** | Zero exposed OS ports; infrastructure patched by vendor platform teams. |
| **Data Residency Transparency** | **Option B** | 100% on-soil in Singapore without edge routing rules. |

### Strategic Summary:
From a pure security and compliance perspective, **Option A (Vercel Pro + Supabase Cloud)** carries significantly lower legal, compliance, and operational risk for a team responding to a polytechnic ITQ. It resolves the mandatory **ISO/IEC 27001 requirement (Clause 13.1)** and **Encryption at Rest (Clause 13.3)** without requiring specialized sysadmin and compliance engineering.
