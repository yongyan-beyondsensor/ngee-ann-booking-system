# Supabase Auth & Platform: Operational Requirements Compliance Analysis

**Tender Reference:** `FY26/FMS/003x/ITQ`  
**Focus:** Operational & Technical Requirements Compliance using Supabase Auth / Supabase Platform  
**Target Institution:** School of Film & Media Studies (FMS), Ngee Ann Polytechnic  

---

## 1. Executive Verdict

**Verdict:** **COMPLIANT, WITH 4 CRITICAL CONFIGURATION CAVEATS.**

Supabase Auth and its underlying PostgreSQL ecosystem natively satisfy all functional authentication requirements in the tender (self-contained auth, MFA/OTP, RBAC via RLS, future SSO/SAML 2.0). 

However, out-of-the-box Supabase default SaaS settings **fail 4 strict operational/legal mandates** unless specifically engineered and configured:
1. **Singapore Data Residency & PDPA (Annex A Clause 4)**: Supabase Cloud project must be deployed strictly in **AWS Singapore (`ap-southeast-1`)** and configured with custom Singapore-hosted SMTP (e.g., AWS SES Singapore) to prevent trans-border email/auth data transmission.
2. **36-Month Audit Trail (Clause 3.0)**: Supabase platform log retention is max 7–28 days. You **must** implement a dedicated database-backed audit table (`audit_logs`) or log drain to retain 36 months of auth and transactional logs.
3. **30-Day Backup Retention (Clause 13.4)**: Supabase Pro default backup retention is 7 days. You must enable the 30-day Point-in-Time Recovery (PITR) add-on or automate daily S3 backups in Singapore.
4. **FMS Admin User Management UI (Clause 9.3)**: Supabase provides the backend Auth Admin APIs, but you must build the front-end web portal for FMS Administrators to perform CSV bulk import, manual activation, and deactivation.

---

## 2. Requirement-by-Requirement Compliance Matrix

| Clause | Tender Operational Specification | Supabase Out-of-the-Box | With Architectural Configuration | Compliance Status |
| :--- | :--- | :---: | :---: | :---: |
| **9.1** | **User Roles** (Admin, Store Manager, TO, Lecturer, Student) | ⚠️ Generic Auth only | ✔ Custom Claims via `app_metadata` + `public.user_roles` + PostgreSQL Row-Level Security (RLS) | **COMPLIANT** |
| **9.2** | **Self-Contained Auth** (Username/Password) | ✔ Native | ✔ Standalone GoTrue auth engine, no external dependency | **COMPLIANT** |
| **9.2** | **MFA / OTP Support** | ✔ Native | ✔ TOTP (Google Authenticator) + Email/SMS OTP natively supported | **COMPLIANT** |
| **9.2** | **Future SSO / Active Directory (AD) Integration** | ✔ Native Enterprise | ✔ Supports SAML 2.0, Microsoft Entra ID (Azure AD), OpenID Connect | **COMPLIANT** |
| **9.3** | **Bulk Import via Excel/CSV** | ⚠️ API/DB only | ✔ Custom Next.js/Vite admin upload interface calling Supabase Admin API (`auth.admin.createUser`) | **COMPLIANT** *(Requires UI)* |
| **9.3** | **Manual Account Management (CRUD, Activate/Deactivate)** | ⚠️ Supabase Studio only | ✔ Dedicated FMS Admin portal calling `auth.admin.updateUserById({ ban_duration: ... })` | **COMPLIANT** *(Requires UI)* |
| **3.0** | **36-Month Audit Log Retention** | ❌ 1 to 28 days max | ✔ PostgreSQL trigger-based `audit_logs` table tracking logins, token refreshes, role changes, and actions | **ACTION REQUIRED** |
| **13.2** | **Data Hosting & Singapore Residency** (Annex A Clause 4) | ⚠️ Global by default | ✔ Select AWS Region: `ap-southeast-1` (Singapore). Custom SMTP server in SG. | **ACTION REQUIRED** |
| **13.3** | **Data Encryption** (In Transit & At Rest) | ✔ Native | ✔ TLS 1.3 / HTTPS for in-transit, AES-256 / AWS KMS at rest | **COMPLIANT** |
| **13.4** | **Daily Backups with 30-Day Retention** | ⚠️ Pro is 7 days | ✔ Supabase 30-day PITR add-on OR automated daily `pg_dump` to AWS S3 (Singapore) | **ACTION REQUIRED** |
| **13.1** | **ISO/IEC 27001 Certification** | ✔ Certified Platform | ✔ Supabase and AWS Singapore are ISO 27001 & SOC 2 Type 2 certified | **COMPLIANT** *(Clarify Q5.1)* |

---

## 3. Deep-Dive on Critical Compliance Requirements

### A. Role Structure & RBAC (Clause 9.1 & 5.1)
- **Tender Requirement:** 5 distinct roles with auto-approval for staff/admins and mandatory approval for students.
- **Supabase Implementation:**
  - Supabase Auth manages identity in `auth.users`.
  - Store authorization roles in a dedicated public table:
    ```sql
    create type app_role as enum ('administrator', 'store_manager', 'technical_officer', 'lecturer', 'student');

    create table public.user_roles (
      id uuid primary key default gen_random_uuid(),
      user_id uuid references auth.users(id) on delete cascade not null,
      role app_role not null,
      department text default 'FMS',
      created_at timestamptz default now(),
      unique(user_id, role)
    );
    ```
  - Use custom claims sync or database triggers to inject the active role into the JWT (`auth.jwt() -> 'user_role'`), enabling instant, secure Row-Level Security (RLS) policies on bookings, inventory, and stores.

### B. Self-Contained Auth vs. Future SSO (Clause 9.2)
- **Tender Requirement:** Operates 100% standalone without NP infrastructure at launch, but must support SSO / Active Directory if requested later.
- **Supabase Advantage:**
  - **Phase 1 (Go-Live):** Use standard email/password or username login directly within Supabase Auth.
  - **Phase 2 (Future SSO):** Supabase Auth has built-in enterprise SSO via SAML 2.0. When Ngee Ann Polytechnic decides to federate with Microsoft Entra ID (Azure AD), it can be enabled simply by adding NP's Identity Provider (IdP) metadata XML into Supabase without refactoring database schema or frontend routing.

### C. The 36-Month Audit Trail Mandate (Clause 3.0) — *Critical Gap Fix*
- **The Issue:** Supabase platform logs (Logflare) retain log data for only:
  - Free Tier: 1 day
  - Pro Tier: 7 days
  - Team/Enterprise Tier: 28 days
- **Compliance Solution:** Implement an immutable `security_audit_logs` table in Postgres:
  ```sql
  create table public.security_audit_logs (
    id bigserial primary key,
    event_timestamp timestamptz default now() not null,
    actor_id uuid references auth.users(id),
    actor_role text,
    ip_address inet,
    user_agent text,
    action_type text not null, -- 'AUTH_LOGIN', 'AUTH_FAILED', 'ROLE_CHANGE', 'BOOKING_APPROVAL'
    resource_id text,
    metadata jsonb
  );

  create index idx_audit_logs_timestamp on public.security_audit_logs(event_timestamp);
  ```
  - Combined with an auth hook or API gateway interceptor, all login, logout, password resets, and role assignments are preserved in PostgreSQL indefinitely (satisfying the 36-month SLA).

### D. Singapore Data Residency & Annex A PDPA (Clause 13.2 & Annex A)
- **Tender Restriction:** Annex A Clause 4 strictly prohibits transferring personal data outside Singapore or granting access to overseas entities.
- **Supabase Configuration:**
  1. **Region Selection:** Set project region explicitly to **Singapore (`ap-southeast-1`)**.
  2. **SMTP Relay:** Disable Supabase's default external email delivery service (which routes through global mail relays). Configure a custom SMTP relay located in Singapore (e.g., AWS SES configured in Singapore region `ap-southeast-1`).
  3. **Storage Buckets:** Digital signature captures and QR label images must reside in Supabase Storage hosted within the same Singapore project.

### E. User Administration & Bulk Upload (Clause 9.3)
- **Tender Requirement:** FMS administrators must be able to bulk import accounts via CSV/Excel and manually create, edit, activate, and deactivate users.
- **Implementation:**
  - FMS administrators cannot be expected to log in to Supabase Studio (developer dashboard).
  - You must provide an Admin User Management View in your application:
    - **CSV Parser:** Validates name, student/staff ID, email, role, and module enrollment.
    - **Admin Edge Function:** Loops through rows calling `supabase.auth.admin.createUser()` with temporary passwords and sends welcome/activation invites.
    - **Deactivation/Banning:** Toggles `supabase.auth.admin.updateUserById(userId, { ban_duration: '876000h' })` to immediately revoke session JWTs when a student graduates or leaves.

---

## 4. Conclusion & Recommended Action Items for Proposal

Using Supabase Auth is an **excellent architectural choice** for this tender because:
1. It eliminates the need to build authentication, session management, password hashing, and token revocation from scratch.
2. It satisfies both **Phase 1 standalone** and **Phase 2 SSO readiness** seamlessly.
3. It ties directly into PostgreSQL RLS for bulletproof multi-role authorization.

### Proposal Action Plan:
- In the GSF compliance table, mark **Item 9.1, 9.2, 9.3 as Complied ('Y')**.
- In the technical proposal, specifically state that **Supabase is hosted in AWS Singapore (`ap-southeast-1`)**, with **custom 36-month audit tables** and **Singapore-based SES relay**, completely fulfilling PDPA Annex A and Clause 3.0.
