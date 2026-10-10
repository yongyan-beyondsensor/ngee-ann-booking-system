# 03 - IT Security, Hosting & Data Protection

## 1. Security & Compliance Highlights
- **ISO/IEC 27001:** Mandatory qualification requirement. The bidder **must hold and submit a valid ISO/IEC 27001 certificate** covering the proposed SaaS solution and hosting environment. Failure to provide this will disqualify the submission.
- **Singapore PDPA Compliance:** Strict adherence to the Personal Data Protection Act (PDPA) and NP institutional data handling guidelines.
- **Data Sovereignty & Cross-Border Transfer:** Under Annex A (Clause 4), personal data **shall not be transferred outside Singapore** or accessed by overseas parties without prior written agency approval.
- **Audit Logging:** System logs (access, modifications, transaction trails) must be retained and accessible for at least **36 months**.
- **Cryptographic Security:** End-to-end TLS/HTTPS encryption in transit and AES-256 (or equivalent strong encryption) at rest.

---

## 2. Requirements & Control Specifications

| Clause | Area | Description & Requirement | Classification | Vendor Action & Compliance Item |
| :---: | :--- | :--- | :---: | :--- |
| **13.1** | ISO/IEC 27001 Certification | Vendor shall possess and submit a valid ISO/IEC 27001 certificate covering the SaaS environment. NP reserves right to verify with the certifying body. | **M** | [ ] Attach copy of valid ISO 27001 certification<br>[ ] Validate certificate scope covers SaaS operations |
| **13.2** | Hosting & Data Residency Declaration | Vendor must explicitly declare the physical hosting facility and data residency country in the quotation. | **M** | [ ] Primary Hosting Location: [Fill]<br>[ ] Data Residency Location: [Singapore preferred] |
| **13.3** | Cryptographic Protection | Encryption in transit (TLS 1.2/1.3) and encryption at rest for databases and backups. | **M** | [ ] Enforce HTTPS/HSTS<br>[ ] Encrypted storage volumes & backups |
| **13.4** | Backup & Business Continuity | Automated daily backups, minimum 30 days retention policy, and documented disaster recovery (DR) capability. | **M** | [ ] Automated daily snapshots<br>[ ] 30-day immutable retention window<br>[ ] Tested DR / restore playbook |
| **13.5** | PDPA & Privacy Controls | Strict compliance with Singapore PDPA and institutional privacy guidelines for student/staff personal data. | **M** | [ ] Document PDPA policies and privacy controls |
| **3.0** | Audit Log Trail | Comprehensive audit log trails tracking all user actions, booking modifications, and administrative tasks retained for >= 36 months. | **M** | [ ] 36-month log archival storage configured |
| **Annex A.1** | Security of Personal Data | Strict protection against loss, unauthorized access, modification, and disclosure. | Mandatory Contractual | [ ] RBAC and least-privilege administrative access |
| **Annex A.4** | Data Transfer Outside SG | Prohibition of moving or exposing personal data outside Singapore without prior written approval. | Mandatory Contractual | [ ] Confirm all SaaS data centers and failovers remain within Singapore |
| **Annex A.5** | Employee Undertakings | All employees and sub-contractors handling data must sign written non-disclosure / confidentiality undertakings. | Mandatory Contractual | [ ] Maintain signed employee data protection undertakings |
| **Annex A.6** | Breach Notification | Obligation to notify NP immediately upon discovering any data security breach or unauthorized disclosure. | Mandatory Contractual | [ ] Establish incident response escalation SOP |
| **Annex A.9** | Sub-contracting | Written authorization from NP required before any sub-contractor is granted access to data. | Mandatory Contractual | [ ] Declare all hosting/infrastructure sub-contractors upfront |
| **Annex A.10** | Secure Destruction | Complete return and certified secure destruction/erasure of all agency data upon completion or termination. | Mandatory Contractual | [ ] Provide formal sanitization / certificate of destruction on contract end |
