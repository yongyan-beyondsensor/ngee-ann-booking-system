# Tender Clarification Questions & Site Briefing Inquiries

**Tender Reference:** `FY26/FMS/003x/ITQ`  
**Project:** Provision of a Cloud-Based Resource Booking System (SaaS) for School of Film & Media Studies (FMS)  
**Target Forum:** Compulsory Site Briefing (15 Oct 2026, 11:00 AM) / Official GeBIZ Clarification Period  

---

## 1. Smart Locker System & Hardware Integration (Clause 14.4)
> *Context: Clause 14.4 states "The system shall support integration with existing smart locker systems via vendor-managed interfaces... Vendor shall ensure compatibility with existing locker hardware and operational workflows... All costs for integration... shall be included in the quoted price."*

- [ ] **Q1.1 Make & Model:** What is the exact brand, model, controller hardware, and operating software currently used by the smart lockers at Block 52?
- [ ] **Q1.2 Interface Specifications:** Does the current smart locker system provide open REST APIs, webhooks, or local SDKs/TCP sockets? Is there technical API documentation available for prospective bidders?
- [ ] **Q1.3 Locker Vendor Support & Licensing:** Will the existing smart locker vendor provide technical support and testing access during integration, or does Ngee Ann Polytechnic hold the software maintenance contract with them? Are there any third-party API license fees or middleware costs payable to the locker vendor?
- [ ] **Q1.4 Network Connectivity:** Clause 3.0 specifies zero integration with NP IT networks, while the SaaS is cloud-hosted. How are the smart lockers currently connected to the internet/cloud (e.g., dedicated 4G/5G cellular IoT gateway, separate VLAN, or local controller)?
- [ ] **Q1.5 User Authentication at Lockers:** How do students currently authenticate at the lockers (e.g., dynamic QR code scan, student card RFID/NFC tap, PIN code)?

---

## 2. Equipment, Labeling & On-Site Tagging Scope (Clause 14.1)
> *Context: Clause 14.1 requires the vendor to print and physically tag up to 1,000 equipment items on-site and map them into the system prior to Go-Live.*

- [ ] **Q2.1 Surface Material & Durability Specifications:** What types of equipment surfaces will be tagged (e.g., metallic cinema rigs, matte camera plastics, textured fabric bags, flight cases)? Are there specific label durability requirements (e.g., anodized aluminum, synthetic polyester, tamper-evident, scratch/oil-resistant)?
- [ ] **Q2.2 Physical Asset Staging:** Will the 1,000 pieces of equipment be centralized and consolidated in one store for the tagging exercise, or will vendor staff need to traverse active labs/studios across #01-01, #01-02, and #01-03 during operational hours?
- [ ] **Q2.3 Pre-Existing Barcodes/Assets:** Do the equipment items currently have existing NP barcode/asset tags that must be cross-referenced or retained alongside the new QR labels?
- [ ] **Q2.4 Tagging Timeline & Access Windows:** What access hours and staging schedule will FMS provide for vendor manpower to complete the physical tagging of up to 1,000 items?

---

## 3. Data Migration & Master Data Format (Clause 1.2 & 10.4)
> *Context: Clause 1.2 and 10.4 require one-time migration of operational data in Excel/CSV format.*

- [ ] **Q3.1 Data Cleansing & Schema:** Can FMS provide a sample/sanitized Excel or CSV data schema representing the current equipment inventory, user accounts, and historical bookings?
- [ ] **Q3.2 Active Data Volume:** Approximately how many active student and staff user accounts need to be onboarded initially? How many distinct academic courses and modules will be active?
- [ ] **Q3.3 Equipment Kits & Hierarchy:** Does the existing data distinguish between parent kits (e.g., camera package) and child sub-components (batteries, cables, lenses), and will serialized tracking be required for each sub-component?

---

## 4. User Authentication & Future SSO (Clause 9.2)
> *Context: Clause 9.2 states "Authentication shall be self-contained within the SaaS platform and shall not rely on external identity systems... The system shall be capable of supporting integration with Single Sign On (SSO) / Active Directory (AD), subject to future requirements..."*

- [ ] **Q4.1 Initial Account Lifecycle:** Since authentication starts self-contained, how frequently will student rosters change (e.g., semesterly bulk CSV upload), and who will be responsible for sending initial password activation emails?
- [ ] **Q4.2 Future SSO Protocol:** If NP exercises the option to integrate with SSO/AD in the future, what identity protocol will NP use (e.g., Microsoft Entra ID / Azure AD, SAML 2.0, or OpenID Connect)? Will that future integration be treated as a separate variation order or within the base contract?

---

## 5. Security & Hosting Governance (Clause 13.1 & Annex A)
> *Context: Clause 13.1 mandates ISO/IEC 27001 certification. Annex A Clause 4 prohibits data transfer or access outside Singapore.*

- [ ] **Q5.1 ISO 27001 Certificate Holder:** If a vendor deploys a SaaS solution hosted on a certified public cloud (e.g., AWS, Azure, Google Cloud in Singapore) that holds ISO 27001, does NP require the bidding entity itself to hold ISO 27001, or is the cloud hosting provider's ISO 27001 certification acceptable?
- [ ] **Q5.2 Overseas Support & Maintenance Access:** Annex A (Clause 4) restricts access to personal data from outside Singapore. Does this prohibit overseas technical support engineers (Level 3 engineering support) from accessing sanitized/troubleshooting logs, or is this restriction strictly for data residency at rest?

---

## 6. Implementation, Go-Live & Demonstration (Clause 2.3 & 15.1)
> *Context: 15-min demonstration + 10-min Q&A for shortlisted bidders. Go-Live within 6 months.*

- [ ] **Q6.1 System Demonstration Logistics:** Will the 15-minute demonstration require live on-site hardware testing (e.g., physical QR barcode scanner hooked to a laptop), or is presenting the SaaS software workflows and mobile browser responsive view sufficient?
- [ ] **Q6.2 Target Academic Semester:** Is the 6-month Go-Live targeted to align with a specific academic semester intake or vacation period?
- [ ] **Q6.3 UAT Environment & Data:** Will FMS provide test student/staff accounts and actual sample equipment kits for the formal UAT period prior to production launch?

---

## 7. Commercial & Invoicing Structure (Part C & Quotation Terms)
> *Context: Single lot quotation for 36 months + setup. 1-month termination notice by NP without compensation.*

- [ ] **Q7.1 Milestone Billing Breakdown:** How will the 1 Lot contract price be billed and paid via Vendors@Gov (e.g., one-off payment upon Go-Live acceptance, followed by quarterly/annual subscription in advance or arrears)?
- [ ] **Q7.2 Consumable Label Replacements:** Is the vendor expected to supply replacement QR labels beyond the initial 1,000 quota during the 36-month operational period for newly acquired equipment or wear-and-tear?

---

## 8. My Notes / Additional Write-in Questions
*(Space for your personal notes during the briefing)*

- [ ] 
- [ ] 
- [ ] 
