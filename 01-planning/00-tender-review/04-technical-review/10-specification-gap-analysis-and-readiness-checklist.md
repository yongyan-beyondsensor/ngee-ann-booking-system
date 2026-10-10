# Tender Specification Gap Analysis & Technical Readiness Checklist

**Tender Reference:** `FY26/FMS/003x/ITQ`  
**Target:** School of Film & Media Studies (FMS), Ngee Ann Polytechnic  
**Document Purpose:** Comprehensive audit of all GSF specifications against the planned architecture, identifying unaddressed functional areas and submission risks.

---

## 1. Specification Coverage Scorecard

| GSF Clause | Specification Area | Architectural Status | Remaining Action / Planning Needed |
| :---: | :--- | :---: | :--- |
| **1.1 - 1.3** | Scope & Standalone SaaS Model | 🟢 **100% Covered** | Validated in Architecture & Hosting Reviews. |
| **2.1 - 2.3** | Evaluation, Briefing & 15-min Demo | 🟡 **Needs Prep** | 50 points allocated to 15-min Live Demo; 10 points to Track Record. |
| **3.0** | General System & 36-Mo Audit Trail | 🟢 **100% Covered** | PostgreSQL immutable `security_audit_logs` designed. |
| **4.1 - 4.3** | Multi-Item Basket & Booking Types | 🟢 **100% Covered** | Kits, loose items, individual, recurring & block bookings defined. |
| **5.1 - 5.2** | Multi-Tier Approval Engine | 🟢 **100% Covered** | Auto-approval for staff; module approver routing for students. |
| **6.1 - 6.2** | Store Operations & QR Desk Scan | 🟢 **100% Covered** | Fast QR check-in/out, optional stylus signature capture. |
| **7.1** | **Facility Timetable & Bulk Upload** | ⚠️ **Gap Identified** | Requires UI timetable grid & CSV semester timetable parser. |
| **8.1 - 8.2** | Automated Alerts & Overdue Cadence | 🟢 **100% Covered** | Cron email triggers via AWS SES / Resend specified. |
| **9.1 - 9.3** | 5 User Roles, Auth & Admin CRUD | 🟢 **100% Covered** | Supabase Auth + RLS + FMS Admin User Management View. |
| **10.1 - 10.3**| **Standard & Custom Reporting** | ⚠️ **Gap Identified** | 5 mandatory standard reports need schema views and CSV exporters. |
| **10.4** | Data Migration & Onboarding Plan | 🟢 **100% Covered** | Documented in `09-data-migration-and-onboarding-plan.md`. |
| **11.1 - 11.4**| SLA, 99.5% Uptime & Maintenance | 🟢 **100% Covered** | Vercel multi-AZ & zero-downtime atomic deploys mitigate penalties. |
| **12.1** | **Exit Management & Data Return** | ⚠️ **Gap Identified** | Handover export (CSV/SQL dump) and secure data erasure protocol. |
| **13.1 - 13.5**| ISO 27001, Encryption & PDPA | 🟢 **100% Covered** | Vercel/Supabase certificates + AES-256 KMS + `regions: ["sin1"]`. |
| **14.1 - 14.4**| 1,000 QR Tagging & Smart Locker | 🟢 **100% Covered** | Documented in `07-smart-locker-integration-architecture.md`. |
| **15.1** | Implementation Timeline & Training | 🟢 **100% Covered** | 6-month roadmap with end-user/admin training sessions scheduled. |
| **Annex A** | Data Disclosure, Undertakings & Erasure | 🟡 **Needs Legal Annex**| Employee written undertakings (Clause 5) & secure destruction (Clause 10). |

---

## 2. Detailed Breakdown of the 4 Functional Gaps

### Gap 1: Facility Booking & Weekly Timetable Bulk Upload (Clause 7.1)
* **What the Tender Demands:**
  - Weekly visual timetable view for studios, edit suites, and sound stages.
  - Calendar-based booking interface.
  - **Bulk timetable upload function** to import semester class schedules via Excel/CSV so studios are automatically blocked during scheduled teaching hours.
* **Architecture Solution Needed:**
  1. **Timetable Data Model:** Table `facility_timetable_blocks` linking `facility_id`, `day_of_week`, `start_time`, `end_time`, `module_code`, `class_group`, `lecturer_id`.
  2. **CSV Parser:** Built-in admin import wizard that ingests polytechnic semester timetables and converts class blocks into recurring administrative holds.
  3. **Visual Grid UI:** Responsive weekly schedule grid (similar to FullCalendar / TimeGrid) that shows occupied class slots as locked and allows students to book remaining free windows.

---

### Gap 2: The 5 Mandatory Standard Reports (Clause 10.2 & 10.3)
* **What the Tender Demands:**
  Authorized FMS users must be able to generate and export to Excel/CSV:
  1. **Outstanding Loans:** Active loans currently checked out with borrower details and expected return times.
  2. **Equipment Usage:** Cumulative frequency and total loan hours per asset/package.
  3. **Available Equipment:** Real-time stock on hand across Block 52 stores (`#01-01`, `#01-02`, `#01-03`).
  4. **Utilization Rate:** Percentage calculation of equipment active loan time vs. total idle shelf time.
  5. **Overdue Items:** Overdue items with borrower ID, overdue duration, and strike status.
* **Architecture Solution Needed:**
  - Create pre-indexed PostgreSQL database views (`view_outstanding_loans`, `view_equipment_utilization`, `view_overdue_loans`).
  - Add client-side CSV/Excel export utility (e.g. `xlsx` / `papaparse` stream) to allow 1-click export from the FMS Admin portal.

---

### Gap 3: Data Ownership & Contract Exit Management (Clause 12.1 & Annex A Clause 10)
* **What the Tender Demands:**
  - All institutional data belongs to Ngee Ann Polytechnic / FMS.
  - Upon contract completion or termination, the vendor must deliver a **full data export** (CSV / Excel / SQL dump) within **30 days**.
  - Perform **certified secure erasure/destruction** of all customer data on vendor servers and provide written confirmation.
* **Architecture Solution Needed:**
  1. **Automated Export Procedure:** Standalone CLI/script using `pg_dump` and S3 archive delivery.
  2. **Certified Destruction Protocol:** Cryptographic erasure of database tablespaces and cryptographic shredding of backup encryption keys, accompanied by a formal Certificate of Destruction.

---

### Gap 4: Multi-Store Real-Time State Synchronization (Clause 1.2)
* **What the Tender Demands:**
  - Real-time data synchronization across Block 52 stores: Room `#01-01`, Room `#01-02`, and Room `#01-03`.
* **Architecture Solution Needed:**
  - Leverage **Supabase Realtime (PostgreSQL Logical Replication / WebSockets)**.
  - When an asset is scanned out at Room `#01-01`, store desks at `#01-02` and `#01-03` instantly receive the state change on their browser screens without needing a manual page refresh.

---

## 3. The Two High-Stakes Submission Risks (Non-Technical)

### Risk 1: The 15-Minute Live System Demonstration (Clause 2.3 — 50 Points)
* **The Weight:** The Quality evaluation is 60 points total, of which **50 points (83.3%)** are decided during a live 15-minute demonstration at Ngee Ann Polytechnic.
* **Requirement:** Must demonstrate live resource booking, approval workflows, quota allocation, RBAC, store check-out/in, and administration within a strict 15-minute window, followed by a 10-minute Q&A.
* **Mitigation:** We should prepare a **15-Minute Timed Demonstration Run-Sheet** and pre-seeded demo dataset so every feature can be shown without latency or workflow pauses.

### Risk 2: Track Record Scoring (Clause 2.1B — 10 Points)
* **The Requirement:** Vendor must submit qualifying track records in booking, equipment tracking, or smart locker solutions completed between **1 January 2021 and 31 December 2025**.
* **Condition:** Each submitted project must have a **minimum contract value of S$50,000**.
* **Scoring:** Max 10 points requires **4 or more qualifying projects**.
* **Action:** Bidding team must verify and consolidate 4 past client references meeting the S$50k threshold before submitting the quotation.

---

## 4. Next Technical Action Items to Close All Gaps
1. **Define the Database Schema for Timetable & Reporting Views:** Create the SQL schema incorporating class blocks, timetable schedules, and reporting aggregation queries.
2. **Draft the Timetable CSV Ingestion Specification:** Define standard column headers for the semester bulk timetable upload.
3. **Draft the System Demo Script (15 Minutes):** Sequence the live demonstration steps to maximize points under Clause 2.3.
