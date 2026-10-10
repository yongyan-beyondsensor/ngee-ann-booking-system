# 02 - Technical & Functional Requirements

## 1. High-Level Technical Scope & Architecture
- **Delivery Model:** 100% vendor-hosted, fully managed Cloud Software as a Service (SaaS).
- **Standalone Constraint:** System **must operate completely standalone**. Zero integration to Ngee Ann Polytechnic IT network, core infrastructure, IP configs, or government intranets.
- **Physical Locations:** Multi-location synchronization across FMS facilities in **Block 52 #01-01, #01-02, and #01-03**.
- **Supported Workflows:**
  1. Equipment and facility booking
  2. Multi-tier approval hierarchies
  3. QR-code loan counter check-in/check-out
  4. Self-service smart locker integration
  5. Bulk timetable imports & weekly visual calendars

---

## 2. Detailed Technical Requirements Matrix

| Section / ID | Feature Area | Description & Specifications | Code | Mandatory Checklist / Target Behavior |
| :---: | :--- | :--- | :---: | :--- |
| **1.2** | Architecture & Migration | Standalone SaaS platform. One-time initial migration of existing operational data (Excel/CSV format: equipment records, modules, booking history, reference tables). | **M** | [ ] No NP network dependencies<br>[ ] One-time CSV/Excel onboarding supported |
| **3.0** | General System | Browser-based, mobile & desktop responsive design. Role-based access control. Audit logging maintained for at least 36 months. Real-time sync across Block 52 stores. | **M** | [ ] Desktop + Mobile responsive UI<br>[ ] Real-time state synchronization<br>[ ] 36-month audit logs retention |
| **4.1** | Booking Interface | Multi-item single transaction basket. Search by keyword, module, course, or tags. Real-time availability indicator. Unique booking ID generation. | **M** | [ ] Cart/basket multi-item checkout<br>[ ] Tag & keyword faceted search<br>[ ] Unique auto-generated alphanumeric IDs |
| **4.2** | Booking Types | Individual, group, recurring, module-based, package bookings (equipment kits/sets), loose items (quantity-based), ad-hoc bookings, block/pre-bookings by admin. | **M** | [ ] Package kits (e.g., Camera + Lens + Tripod)<br>[ ] Recurring schedules<br>[ ] Loose consumables/accessories count |
| **4.3** | Booking Controls | Configurable booking time windows & durations. Auto-release of uncollected bookings. Overbooking duration prevention & alerts. | **M** | [ ] Expiry timer & auto-release<br>[ ] Booking window limits by role/module |
| **5.1** | Approval Workflows | All student bookings require mandatory approval by assigned staff approvers. Staff/admin bookings are auto-approved. User roles mapped from operational data. | **M** | [ ] Auto-approval for Staff / Admin<br>[ ] Mandatory approval routing for Students |
| **5.2** | Workflow Engine | Multi-level approval routing and configurable escalation rules. | **P** | [ ] Multi-tier approver chains<br>[ ] Escalation timeout rules |
| **6.1** | Equipment Availability & Quota | Real-time stock availability. Quota controls enforceable by course, module, and user account. | **M** | [ ] Quota ceilings per student/module<br>[ ] Real-time loan status decrement |
| **6.2** | Store Operations | Fast check-in/check-out desk interface. Support for QR code scanning, QR label generation, daily transaction summaries, and optional digital signature capture. | **M** | [ ] Barcode/QR reader input support<br>[ ] Web label printing / PDF generation<br>[ ] Optional stylus/touch signature capture |
| **7.1** | Facility Booking & Timetable | Weekly timetable view for facilities/studios. Calendar-based booking overview. Bulk timetable upload (CSV/Excel) for semester class schedules. | **M** | [ ] Weekly visual grid / matrix view<br>[ ] Semester timetable bulk upload |
| **8.1** | Notifications | Automated booking collection reminders and cancellation alerts for uncollected assets. | **P** | [ ] Automated reminder emails<br>[ ] Cancellation notifications |
| **8.2** | Overdue Alerts | Overdue reminder emails and active late/non-return tracking dashboards. | **P** | [ ] Automated overdue email cadence<br>[ ] Blacklist/late flag tracking |
| **9.1** | User Roles | Distinct RBAC permissions for: **Administrator**, **Lecturer**, **Student**, **Technical Officer**, and **Store Manager**. | **M** | [ ] 5 distinct role profiles configured |
| **9.2** | Authentication | Self-contained authentication (username/password). Optional MFA/OTP support. Capable of supporting future SSO / Active Directory integration if requested. | **M** | [ ] Self-contained user directory<br>[ ] MFA/OTP capability<br>[ ] SSO/SAML/OAuth readiness |
| **9.3** | User Administration | Bulk import of user accounts via Excel/CSV. Web portal for NP/FMS admins to create, update, activate, and deactivate accounts manually. | **M** | [ ] Bulk CSV roster import<br>[ ] Self-serve admin user CRUD |
| **10.1 - 10.3** | Reporting & Analytics | Standard reports: Outstanding loans, equipment usage, stock on hand, utilization rate, overdue items. Custom graphical and tabular reports with Excel/CSV export. | **M / P** | [ ] 5 standard report types<br>[ ] Visual dashboard charts<br>[ ] Instant CSV/Excel export |
| **14.1** | QR Deployment & Tagging | Vendor shall generate, print, and physically tag up to **1,000 equipment items** on-site with durable labels, including manpower and data mapping before Go-Live. | **M** | [ ] 1,000 physical durable labels included<br>[ ] On-site tagging manpower included |
| **14.2 - 14.4** | Smart Locker & QR Workflows | Counter collection (staff-assisted) vs. Locker collection (self-service). Seamless integration with existing smart locker system via vendor-managed interfaces. | **M** | [ ] Smart locker API/interface integration<br>[ ] All integration costs absorbed in quote |
