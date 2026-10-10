# 360° Comprehensive Tender Gap Audit & Compliance Readiness Review

**Tender Reference:** `FY26/FMS/003x/ITQ`  
**Target:** School of Film & Media Studies (FMS), Ngee Ann Polytechnic  
**Bidding Entity:** BeyondSensor  
**Audit Purpose:** Deep-sweep analysis covering technical, operational, procedural, and statutory compliance gaps across the GeBIZ Specification Form (GSF), Annex A, and the GeBIZ ITQ Guide.

---

## 1. Executive Gap Audit Matrix

The table below categorizes every requirement domain into:
- 🟢 **Covered & Complete:** Solved and documented.
- 🟡 **Operational Detail Needed:** Solution known, needs formal documentation or script.
- 🔴 **Action Item for Submission:** Mandatory form, briefing task, or physical deliverable.

| Category | Requirement Domain | Source Clause | Status | Impact / What Is Needed |
| :--- | :--- | :---: | :---: | :--- |
| **Procurement & Statutory** | **Compulsory Site Briefing** | Clause 2.2 | 🔴 **Immediate** | Register by **14 Oct 2026**; Attend on **15 Oct, 11:00 AM** at Block 53 #01-02. (Failure = Disqualification). |
| | **Progressive Wage (PW) Mark** | GeBIZ Guide Appx 1 | 🔴 **Mandatory** | Complete Appendix 1 Declaration Form. Attach PW Mark e-Certificate if employing local admin/drivers. |
| | **Vendors@Gov & InvoiceNow** | GeBIZ Guide Sec D | 🟡 **Admin** | Ensure BeyondSensor entity is active on `vendors.gov.sg` with registered bank GIRO details. |
| | **Price Entry (GST Exclusive)** | GSF Part C & Guide 7 | 🟢 **Complete** | Ensure Part C quotation matches GeBIZ online figure exactly, strictly excluding GST. |
| **Technical Core** | **SaaS Architecture & Roles** | Clause 1.2, 9.1 | 🟢 **Complete** | Vercel Pro (`sin1`) + Supabase AWS SG + 5 RBAC roles defined. |
| | **Security & ISO 27001** | Clause 13.1, 13.3 | 🟢 **Complete** | Vercel & Supabase ISO 27001/SOC 2 certificates + AES-256 KMS. |
| | **Data Residency (Annex A)** | Annex A Clause 4 | 🟢 **Complete** | Locked to Singapore (`sin1` + `ap-southeast-1` + AWS SES SG). |
| | **36-Month Audit Trail** | Clause 3.0 | 🟢 **Complete** | Immutable PostgreSQL `security_audit_logs` table designed. |
| **Smart Locker & QR** | **Smart Locker Integration** | Clause 14.4 | 🟢 **Complete** | Dual-mode REST API/Webhooks + OTP keypad/QR console unlock. |
| | **1,000 QR Physical Tagging** | Clause 14.1 | 🟡 **Execution** | Need physical label material spec (synthetic polyester/tamper-evident) & on-site deployment schedule. |
| | **Store Counter Hardware** | Clause 6.2 | 🟡 **Clarify** | Clarify at briefing if FMS provides counter tablets/scanners or if vendor provides handheld 2D QR scanners. |
| **Functional Features** | **Facility Timetable Upload** | Clause 7.1 | 🟡 **Tech Spec** | Need bulk timetable CSV import schema & weekly grid calendar UI. |
| | **5 Mandatory Reports** | Clause 10.2 | 🟡 **Tech Spec** | Need PostgreSQL views for Outstanding, Usage, Stock, Utilization, Overdue. |
| | **Data Exit & Erasure** | Clause 12.1, Annex A 10 | 🟡 **Tech Spec** | Need one-click data export protocol + Certificate of Secure Destruction. |
| **Evaluation Scoring** | **Track Record (10 Points)** | Clause 2.1B | 🟢 **10/10 Pts** | Locked in: MOE (G4S), URA (Prosegur), POLCAM (AETOS), NEA. |
| | **Live Demo (50 Points)** | Clause 2.3 | 🟡 **High Stakes** | 15-minute live demo run-sheet and pre-seeded demo dataset required. |

---

## 2. Deep Dive: What We Need to Cover Before Submission

### A. Procurement & Statutory Groundwork (GeBIZ Guide)
1. **The Progressive Wage (PW) Mark Declaration (Appendix 1):**
   - Singapore government procurement mandates the **Progressive Wage Mark Eligibility Declaration**.
   - If BeyondSensor employs Singapore Citizens or PRs in administrative roles, you must either:
     - Attach a copy of your **PW Mark e-Certificate**, OR
     - Tick the declaration undertaking to apply for accreditation.
   - *Failure to complete Appendix 1 can delay contract award.*
2. **Vendors@Gov Registration:**
   - Invoicing is strictly electronic via `www.vendors.gov.sg` (InvoiceNow / Peppol).
   - Ensure BeyondSensor's ACRA UEN and bank GIRO account are active on Vendors@Gov.

---

### B. Hardware & Store Counter Boundaries (Clause 6.2 & 14.1)
1. **Counter QR Scanners & Desk Hardware:**
   - Clause 6.2 states: *"Check-in/check-out interface, QR code scanning support, QR label generation, optional signature capture."*
   - *Question for Briefing:* Does FMS already possess 2D barcode/QR scanners hooked to store PCs at Block 52 (`#01-01`, `#01-02`, `#01-03`), or does BeyondSensor need to bundle 3 handheld USB/Bluetooth 2D scanners in our quotation?
2. **Durable QR Label Stock:**
   - Clause 14.1 states: *"Provide durable QR code labels suitable for long-term use for up to 1,000 equipment."*
   - Equipment includes cinema rigs, metal mounts, lenses, flight cases, and textile gear bags.
   - *Recommendation:* Propose **heavy-duty matte synthetic polyester (PET) or metallic foil labels** with high-tack acrylic adhesive and laminated scratch/oil protection.

---

### C. The 15-Minute Live System Demonstration (Clause 2.3 — 50 Points)
* **The Stakes:** 50 out of 60 technical points (83.3%) are decided in this single 15-minute session.
* **The Challenge:** 15 minutes is very short to showcase a full enterprise system. Shortlisted suppliers get only 3 working days' notice.
* **Demo Sequence Run-Sheet Required:**
  * **Minutes 0–3:** Role-Based Login & Student Multi-Item Cart Booking (Camera kit + studio room).
  * **Minutes 3–6:** Lecturer Mobile 1-Click Approval & Quota Enforcement.
  * **Minutes 6–9:** Store Counter QR Scan & Check-Out (with tablet touch signature).
  * **Minutes 9–12:** Smart Locker Self-Service (Dynamic QR / PIN unlock & door webhook checkout).
  * **Minutes 12–15:** Admin Weekly Timetable Grid & 1-Click Utilization / Overdue Reports.
  * **Minutes 15–25:** Q&A.

---

### D. Software Feature Specifications to Document
1. **Facility Timetable Bulk Upload Schema (Clause 7.1):**
   - Provide standard CSV format: `Facility_Code`, `Day_Of_Week`, `Start_Time`, `End_Time`, `Module_Code`, `Class_Group`, `Lecturer_Email`.
2. **The 5 Standard Report Definitions (Clause 10.2):**
   - Pre-define the exact table columns for Outstanding Loans, Equipment Usage, Real-time Stock, Utilization %, and Overdue Items.
3. **Data Exit Handover & Certified Erasure Protocol (Clause 12.1 & Annex A Clause 10):**
   - Provide a formal commitment detailing:
     - 30-day full SQL dump / CSV delivery upon contract completion.
     - Cryptographic data shredding and formal written Certificate of Destruction.

---

## 3. Prioritized Action Checklist for BeyondSensor

### Immediate Actions (Before 14 Oct):
- [x] Send compulsory briefing registration email to Ms. Hong Hui Ling & Mr. Reyas MD (`01-tender-submission/compulsory-briefing-registration-email.md`).
- [ ] Attend compulsory site briefing on **15 Oct 2026, 11:00 AM** at Block 53 #01-02.
- [ ] Bring printed copy of [06-tender-clarifications.md](file:///e:/dev/ngee-ann-booking-system/01-planning/00-tender-review/03%20-%20tender-notes/06-tender-clarifications.md) to ask the smart locker and store hardware questions.

### Submission Package Actions:
- [ ] Complete **Appendix 1: Declaration on Progressive Wage (PW) Mark Eligibility**.
- [ ] Attach Vercel’s and Supabase’s official **ISO/IEC 27001:2013** and **SOC 2 Type 2** certificates.
- [ ] Fill in **Part C Price Schedule** (1 Lot, excluding GST).
- [ ] Attach BeyondSensor’s completed **4-Project Track Record Portfolio** ([01-qualifying-track-records.md](file:///e:/dev/ngee-ann-booking-system/01-planning/00-tender-review/05-company-profile/01-qualifying-track-records.md)) and **Corporate Profile** ([02-beyondsensor-capability-statement.md](file:///e:/dev/ngee-ann-booking-system/01-planning/00-tender-review/05-company-profile/02-beyondsensor-capability-statement.md)).
