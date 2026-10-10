# 05 - Legal, Commercial & Contractual Terms

## 1. Commercial Structure & Pricing Guidelines
- **Pricing Schedule:** The quotation is for a single lot:
  - *Item 1:* Provision of a cloud-based Resource Booking System (SaaS) for the booking and management of equipment, resources, and facilities (1 lot).
- **All-Inclusive Price:** Must include cloud hosting, software licenses, 1,000 QR tags and on-site physical tagging manpower, smart locker integration, data onboarding, training, and 36 months of maintenance/support.
- **GST Exclusivity:** All quoted prices must strictly **exclude Singapore GST**.
- **No Variations:** The price quoted must be valid irrespective of whether the quotation is accepted in whole or in part.

---

## 2. Terms & Contractual Conditions Matrix

| Area / Term | Conditions & Specifications | Risk Level & Notes |
| :--- | :--- | :--- |
| **Contract Acceptance** | NP is not bound to accept the lowest or any quotation. NP reserves the right to award by item, part thereof, or in whole without providing reasons. | Standard public procurement condition. |
| **Termination for Convenience** | NP holds the right to terminate the contract by giving **1 month's prior written notice** without supplier claim for damages or compensation. | Commercial Risk: Ensure pricing models or milestone payments amortize upfront implementation expenses. |
| **Invoicing & Payment** | Successful vendor registered with ACRA must submit e-invoices via **Vendors@Gov** (`www.vendors.gov.sg`). Payment made via GIRO. | Must maintain active Vendors@Gov profile. |
| **Warranty & Rectification** | Warranty commences on date of acceptance in Singapore. Supplier must rectify deficient services and defective items promptly. | Tied to 36-month operational SLA. |
| **Overseas Suppliers** | Overseas vendors must quote CIF (Cost, Insurance & Freight) including all costs up to final delivery at NP. | All tariffs and handling charges must be absorbed. |
| **Sub-Contracting** | Sub-contracting requires prior written approval from NP. All sub-contractors must sign confidentiality and data privacy undertakings. | Ensure third-party hosting partners (e.g., AWS/Azure/GCP) are documented. |
| **Confidentiality & Official Secrets** | Documents and data are classified as *Official (Closed) - Non Sensitive*. Governed by Singapore Official Secrets Act (OSA) where applicable. | Mandatory statutory compliance. |
| **Governing Law & Disputes** | Contract is governed by Singapore law and subject to the exclusive jurisdiction of the Singapore courts. | Standard Singapore Government ITQ terms. |

---

## 3. Commercial Risk Register & Mitigation Strategies

| Risk Item | ITQ Clause Reference | Potential Impact | Recommended Mitigation |
| :--- | :--- | :--- | :--- |
| **1-Month Termination Notice** | GSF Part A Clause 4 | Early contract termination by NP with zero damage claims could strand onboarding costs. | Structure milestones or upfront setup fees appropriately in the commercial breakdown. |
| **Smart Locker Integration Scope Creep** | GSF Clause 14.4 | "All costs for integration, configuration, and any required adjustments shall be included in quoted price." | Request locker API specs during the 15 Oct briefing to confirm interface compatibility before price freeze. |
| **On-Site 1,000 Asset Tagging** | GSF Clause 14.1 | Manpower costs for physical tagging on-site at Block 52 could exceed estimates if assets are dispersed. | Clarify asset staging and schedule during the briefing so physical tagging is batched efficiently. |
| **Cross-Border Cloud Restrictions** | Annex A Clause 4 | Storing data in non-Singapore cloud zones breaches contract without explicit prior approval. | Confirm the SaaS cloud tenant is hosted strictly in Singapore data center regions (e.g., `ap-southeast-1`). |
