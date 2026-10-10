# 04 - Project Management, Implementation & SLA

## 1. Project Implementation Plan
- **Contract Duration:** 36 months starting from official Go-Live date (confirmed by FMS upon formal acceptance).
- **Target Go-Live:** Must achieve system Go-Live **within 6 months** from contract award.
- **Data Migration & Setup:** One-time migration of operational data (assets, modules, user rosters, booking histories) supplied in CSV/Excel.
- **Physical Tagging:** On-site deployment including printing, barcoding/QR tagging, and verifying up to **1,000 pieces of equipment** across Block 52 facilities.
- **Training Obligations:**
  - **1x End-User Training Session** (up to 2 hours, 1–10 participants).
  - **1x Administrator Training Session** (up to 2 hours, 1–10 participants).
  - Sessions held during office hours (Mon-Fri 9:00 AM – 6:00 PM) on-site at FMS or online as mutually agreed.

---

## 2. Implementation Deliverables & Milestones Matrix

| Milestone / Deliverable | Target Timeline | Scope & Responsibilities | Code | Status / Verification |
| :--- | :--- | :--- | :---: | :--- |
| **Project Kick-Off & Setup Plan** | Month 1 | Deliver detailed implementation schedule, setup plan, and resource allocation. | **P** | [ ] Submitted & Approved |
| **Data Migration & Reference Setup** | Months 2–3 | Validate and import historical CSV/Excel data (equipment, users, modules). | **M** | [ ] Verified data integrity |
| **QR Generation & On-Site Tagging** | Months 3–4 | Print durable labels and physically tag up to 1,000 items in Block 52 stores. | **M** | [ ] 1,000 assets tagged & mapped |
| **Smart Locker Interface Integration** | Months 3–4 | Configure and verify self-service smart locker workflow integration. | **M** | [ ] Locker pickup tested |
| **User Acceptance Testing (UAT)** | Month 5 | Complete formal UAT sign-off with FMS stakeholders. | **P** | [ ] UAT script sign-off |
| **Training Execution** | Month 5–6 | 1x End-User (2h) and 1x Admin (2h) sessions conducted. | **P** | [ ] Attendance & evaluation logged |
| **System Go-Live & Handover** | Month 6 | Production Go-Live milestone officially accepted by FMS. | **P** | [ ] Formal acceptance certificate |

---

## 3. Service Level Agreement (SLA) & Support Standards

The vendor is responsible for all maintenance, hosting availability, bug resolution, and operational support throughout the 36-month subscription:

| Service Parameter | Standard / Target Metric | Measurement & Conditions | Code |
| :--- | :--- | :--- | :---: |
| **System Availability** | **≥ 99.5% Monthly Uptime** | Calculated monthly, excluding pre-notified scheduled maintenance windows. | **M** |
| **Critical Incident Response** | **Within 4 hours** | Complete outage or severe disruption of core functions (booking, checkout, access). | **P** |
| **Non-Critical Incident Response** | **Within 1 business day** | Minor issues or non-blocking bugs reported during business hours. | **P** |
| **Critical Incident Resolution** | **Within 1 to 2 business days** | Restoring core services to full operational status. | **P** |
| **Minor Issue Resolution** | **Within 5 business days or next release** | Defect patch or standard scheduled sprint release. | **P** |
| **Scheduled Maintenance Window** | **Outside normal office hours** | Requires **minimum 3 working days prior written notice** to FMS. | **P** |

---

## 4. Exit Management & Data Handover (Clause 12.1)
- **Data Ownership:** All data belongs exclusively to NP / FMS. The vendor is explicitly prohibited from retaining or reusing data after contract expiry.
- **Export Formats:** Vendor must provide complete database export in **CSV, Excel, or SQL dump** format.
- **Handover Timeline:** Complete export must be delivered to FMS **within 30 calendar days** of contract conclusion.
- **Data Erasure:** Vendor must issue formal confirmation / certificate of secure sanitization and destruction under Annex A.10.
