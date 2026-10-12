# Comprehensive UI/UX Design Specification & Functional Blueprint

**Project:** Ngee Ann Polytechnic School of Film & Media Studies (FMS) Equipment & Facility Booking System  
**Tender Reference:** `FY26/FMS/003x/ITQ`  
**Specification Version:** `1.0.0`  
**Framework Target:** Next.js 16.4.0 (App Router) • Shadcn UI • Tailwind CSS • Radix UI • Recharts • Serwist PWA  

---

## 1. Executive Summary & Design System Architecture

This specification outlines the complete UI/UX component hierarchy, page topologies, and functional capabilities required to fulfill the FY26 ITQ tender. The platform delivers an enterprise-grade, responsive Progressive Web App (PWA) with native mobile device capabilities (camera barcode scanning, GPS geofencing, offline cryptographic QR passes) alongside desktop-optimized operational workstations (fast keyboard-navigable store counter scanning, calendar timetable planners, and real-time multi-store inventory grids).

### 1.1 Visual Identity & Token System (Ngee Ann Polytechnic FMS Theme)
- **Primary Accent:** NP Crimson Burgundy (`oklch(0.48 0.22 25.5)`) paired with high-contrast text.
- **Surface Elevation:** Clean dual-tier card layout with frosted glass subtle blur (`backdrop-blur-md bg-background/80`) on sticky headers and floating bottom action drawers.
- **Typography:** Inter / SF Pro Display for crisp numbers and asset barcodes, with JetBrains Mono for asset tags (`NP-FMS-CAM-0142`) and serial codes.
- **Status Semantics:**
  - `Available` / `Completed`: Emerald (`oklch(0.62 0.19 145)`)
  - `Pending Approval` / `Reserved`: Amber (`oklch(0.75 0.18 75)`)
  - `On Loan` / `Ready`: Sky Blue (`oklch(0.58 0.16 235)`)
  - `Overdue` / `Damaged` / `Cancelled`: Crimson (`oklch(0.55 0.22 25)`)
  - `Maintenance`: Slate / Violet (`oklch(0.52 0.12 290)`)

---

## 2. Global Shell & Persistent Navigation Topology

The application uses role-partitioned layouts under Next.js App Router route groups, adapting seamlessly between desktop widescreen (1440px+) and mobile PWA viewports (375px–430px).

```
┌────────────────────────────────────────────────────────────────────────┐
│ TOP BAR: Logo • Active Semester Indicator • Role Switcher • Alerts • Profile │
├──────────────┬─────────────────────────────────────────────────────────┤
│              │ MAIN CONTENT WORKSPACE                                  │
│ SIDEBAR NAV  │ - Breadcrumbs & Context Header                          │
│ (Desktop)    │ - Dynamic Page Content                                  │
│              │ - Floating Action Bar / Cart Drawer                     │
│ BOTTOM NAV   │                                                         │
│ (Mobile PWA) │ OFFLINE / GEOFENCE BANNER (Auto-collapsible alert bar)  │
└──────────────┴─────────────────────────────────────────────────────────┘
```

### 2.1 Role-Based Route Group Matrix

| Route Group | Primary User Persona | Primary Device Target | Layout Architecture |
| :--- | :--- | :--- | :--- |
| `(auth)` | All Users | Mobile & Desktop | Centered Clean Auth Card with NP Brand Identity |
| `(student)` | Enrolled Students (`FSV`, `MCM`, etc.) | Mobile PWA (Primary), Tablet/Desktop | Bottom App Navigation Bar on Mobile; Compact Left Sidebar on Desktop |
| `(lecturer)` | Module Coordinators & Faculty | Desktop/Laptop (Primary), Mobile | Dense Table View with Fast Keyboard Shortcuts & Quick Batch Modal |
| `(counter)` | Technical Officers & Counter Staff | Touchscreen POS / Store Desktop + Handheld Barcode Scanner | Full-screen High-Density Split Workstation (Cart Scan vs Camera View) |
| `(manager)` | Store Managers & Facilities Heads | Desktop Workstation | Data-dense Analytics Panels, Approval Overrides & Timetable Grid |
| `(admin)` | System Administrators | Desktop Workstation | System Config, User Management, ISO Compliance & Audit Log Viewer |

---

## 3. Detailed Page Blueprint & Functional Capabilities

---

### 3.0 Portal 0: Authentication & Identity Domain `(auth)` (Clause 9.1, 9.2, Annex A)

#### Page 0.1: Universal Authentication & Role Gateway (`/login`)
- **Visual Structure:**
  - Responsive centered split card (on desktop: left pane features FMS studio imagery and security badges; right pane contains the login form. On mobile: stacked single card).
  - Header: Ngee Ann Polytechnic FMS Crest, system title, and institutional data protection notice.
  - Tabbed or Unified Input:
    - Tab 1: **Institutional ID / Email** (Supports Student ID `S10245678A` or `@np.edu.sg` / `@connect.np.edu.sg` email).
    - Tab 2: **Future SSO / Microsoft 365** (One-click Azure AD / Entra ID button for Phase 2 integration).
- **Component Breakdown:**
  - `<AuthCardShell />`: Frosted card surface with NP brand crimson border accent.
  - `<LoginForm />`: Email/Student ID and Password inputs with eye toggle for password visibility and client-side Zod validation.
  - `<InstitutionalNoticeBanner />`: Fulfills Annex A PDPA notice informing users that session access is monitored under the 36-month non-repudiation audit trail.
  - `<SsoFederationButton />`: Pre-configured SAML 2.0 / Entra ID button (disabled with "Coming Soon for NP Single Sign-On" tooltip in Phase 1 standalone mode).
- **Functional Capabilities:**
  - Direct authentication against Supabase GoTrue engine (hosted in Singapore `ap-southeast-1`).
  - Automatic resolution of Student ID to official email if the student types their matriculation number.
  - Rate limiting with lockout guard: 5 failed attempts locks IP/account for 15 minutes, emitting a `SECURITY_AUTH_FAILED` entry to `audit_logs`.
  - Conditional redirection: Upon successful password validation, if user has MFA enrolled, redirects to `/auth/mfa-verify`; otherwise, hydates JWT role claim and routes to their dedicated persona portal (`/catalog`, `/approvals`, `/counter/checkout`, or `/operations`).

#### Page 0.2: Two-Factor Authentication & OTP Challenge (`/auth/mfa-verify`)
- **Visual Structure:**
  - Minimal, high-focus centered card: Lock icon, user avatar, 6-digit split PIN input boxes, resend timer, and backup method link.
- **Component Breakdown:**
  - `<OtpInputGrid />`: 6-digit auto-advancing, paste-friendly OTP input fields with auto-submit on 6th digit.
  - `<MfaMethodSelector />`: Switcher between Time-based One-Time Password (TOTP e.g. Google Authenticator) and Email/SMS OTP via Singapore SMTP relay.
  - `<CountdownResendButton />`: 60-second cooldown timer before allowing email OTP resend.
- **Functional Capabilities:**
  - Evaluates TOTP token or 6-digit cryptographic OTP against Supabase Auth MFA API.
  - Records verification timestamp and client IP in session metadata.

#### Page 0.3: Password Self-Service & Recovery (`/auth/forgot-password` & `/auth/reset-password`)
- **Visual Structure:**
  - Focused single-column card with step progression (Request Link $\rightarrow$ Email Dispatched $\rightarrow$ Set New Password).
- **Component Breakdown:**
  - `<PasswordStrengthMeter />`: Real-time entropy evaluator enforcing institutional policy ($\ge 12$ chars, mixed case, number, special symbol).
  - `<ResetSuccessState />`: Clean confirmation card with auto-redirect countdown back to `/login`.
- **Functional Capabilities:**
  - Password reset emails dispatched strictly via custom Singapore AWS SES relay (preventing cross-border personal data transfer under Annex A Clause 4).
  - Invalidates all existing active refresh tokens upon password reset.

#### Page 0.4: Enterprise SSO Handshake & Callback Handler (`/auth/callback`)
- **Visual Structure:**
  - Full-screen loading skeleton with animated NP spinner and status text: *"Verifying institutional credentials with Ngee Ann Polytechnic..."*.
- **Component Breakdown:**
  - `<AuthExchangeSpinner />`: Smooth spinner with timeout fallback.
  - `<SsoErrorFallbackCard />`: Friendly error interface if SAML ticket or OAuth state validation fails, offering a "Return to Standard Login" action.
- **Functional Capabilities:**
  - Extracts PKCE authorization code or SAML assertion from URL parameters.
  - Exchanges token via Supabase Auth SSR helper (`@supabase/ssr`).
  - Checks user profile suspension status (`profiles.is_suspended`). If suspended, redirects to a dedicated `/suspended` lockout notification screen showing suspension end date and disciplinary reason.

---

### 3.1 Portal 1: Student Self-Service PWA `(student)`

#### Page 1.1: Equipment & Kit Catalog Browser (`/catalog`)
- **Visual Structure:**
  - Sticky Top Bar: Search input (debounced with autocomplete for keywords, brand, model, tags), Category Filter Carousel (Lucide icons), and Cart Counter Badge.
  - Secondary Filter Bar: Filter pills for *Available Now*, *Kits Only*, *Standalone Gear*, *Oversized Flag*, and *Store Bay* (`#01-01`, `#01-02`, `#01-03`).
  - Catalog Grid: Responsive 1-col (mobile) to 4-col (desktop) card grid.
- **Component Breakdown:**
  - `<CatalogSearchBar />`: Instant text search with query caching via TanStack Query.
  - `<CategoryPillBar />`: Horizontal scrollable subcategory selector.
  - `<EquipmentCard />`: Shows high-res asset thumbnail, brand/model, category badge, availability pill, kit accessory pill count, and "Add to Cart" action.
  - `<KitManifestDrawer />`: Slides up on mobile when clicking a kit card, previewing all bundled serialized child accessories (lenses, batteries, cases).
  - `<FloatingCartBar />`: Sticky bottom badge displaying item count, duration, and checkout button.
- **Functional Capabilities:**
  - Real-time availability calculation based on user's active diploma policy.
  - Warning tag if an item is oversized (mandating store counter pickup rather than smart locker).
  - Automatic quota ceiling check preventing student from adding more items than permitted by their diploma role tier (e.g. max 4 items).

#### Page 1.2: Facility & Studio Reservation Grid (`/facilities`)
- **Visual Structure:**
  - Room Selector: Visual room cards for Sound Stage 1, Film Studio 2, Foley Suite, Edit Suites 1–8.
  - Weekly Visual Timetable Matrix: Time-grid (08:00 to 22:00) displaying academic timetable class holds (`facility_timetable_blocks`) in hatched gray, existing bookings in red, and open bookable slots in interactive emerald.
- **Component Breakdown:**
  - `<FacilitySelector />`: Switcher between studio types and capacities.
  - `<InteractiveTimeGrid />`: Drag-to-select booking interval widget.
  - `<TimetableHoldOverlay />`: Tooltip showing enrolled class code (e.g. `FSV204 Studio Production`) for blocked periods.
- **Functional Capabilities:**
  - Prevents booking during imported academic class hours (Clause 7.1).
  - Real-time conflict detection via PostgreSQL GiST exclusion engine.

#### Page 1.3: Booking Checkout & Coursework Declarator (`/cart`)
- **Visual Structure:**
  - Multi-step accordion: (1) Basket Items, (2) Academic Justification, (3) Fulfillment Selection, (4) Group Crew Declaration.
- **Component Breakdown:**
  - `<CartItemList />`: Displays reserved equipment and facilities with individual date-time picker intervals.
  - `<ModuleSelector />`: Dropdown filtered strictly to modules student is enrolled in for the current active semester (`student_enrollments`).
  - `<FulfillmentSelector />`: Radio toggle (`COUNTER`, `SMART_LOCKER`). Disabled with explanatory tooltip if basket contains facilities or oversized equipment.
  - `<GroupMemberTagInput />`: Search and add fellow matriculated students for Group Bookings (Clause 4.2) with designated roles (`Director`, `Cinematographer`, `Crew`).
  - `<PolicyQuotaSummary />`: Real-time gauge comparing cart count against student's remaining diploma quota.
- **Functional Capabilities (5-Gate Eligibility Pipeline):**
  - **Gate 1 (Disciplinary Suspension):** Evaluates `profiles.is_suspended`. Blocks checkout and shows suspension expiry if active.
  - **Gate 2 (Active Semester Enrollment):** Populates `<ModuleSelector />` strictly with modules verified in `student_enrollments` joined with `academic_semesters` (`is_current = TRUE`).
  - **Gate 3 (Curriculum Tier Gating):** Enforces diploma module prerequisites on advanced packages (e.g. ARRI/RED cinema packages restricted to Year 3 FSV advanced cinematography).
  - **Gate 4 (Policy Quota & Horizon):** Client-side validation ensuring end date $\le$ start date + `max_loan_duration_hours` (e.g. 72 hours) and booking horizon $\le$ `max_advance_booking_days` (e.g. 14 days).
  - **Gate 5 (Concurrency Cap):** `<PolicyQuotaSummary />` validates that total active concurrent loans + cart items does not exceed `max_simultaneous_items` (e.g. 4 items).
  - **Crew Member Validation (Clause 4.2):** Validates all tagged crew members in `<GroupMemberTagInput />` against Gates 1, 2, and 4 before checkout submission.
  - Multi-item single transaction atomic submission (`DRAFT` $\rightarrow$ `PENDING_APPROVAL`).

#### Page 1.4: Active Loans, Return Passes & Dispute Triggers (`/bookings` & `/pass/[id]`)
- **Visual Structure:**
  - Tabbed list: *Upcoming & Pending*, *Ready for Pickup*, *Active On Loan*, *Completed History*, *Disputed Incidents*.
  - Full-screen Offline Pass View: Screen-brightness booster, high-contrast QR code, booking reference, collection PIN, countdown timer, and locker door number.
  - Return Status Card: Shows scheduled return countdown, active 15-minute grace period indicator, or overdue duration counter.
- **Component Breakdown:**
  - `<BookingStatusBadge />`: Color-coded lifecycle indicator (`DRAFT`, `PENDING_APPROVAL`, `APPROVED`, `READY_FOR_COLLECTION`, `COLLECTED`, `OVERDUE`, `RETURNED_PENDING_INSPECTION`, `COMPLETED`).
  - `<OfflineQrPass />`: Canvas-rendered cryptographic JWT QR pass with local IndexedDB/Serwist PWA offline caching.
  - `<LockerUnlockButton />`: Geofence-guarded button (enabled only when device is within 50m of Block 52).
  - `<GeofenceRadar />`: Visual pulsing indicator indicating user distance to campus locker bay.
  - `<DisputeTriggerBanner />`: Displayed if a return is flagged with damage/defects, showing incident ID, photo thumbnails, and a prominent "Lodge Formal Dispute (48h Window)" button.
- **Functional Capabilities:**
  - Works 100% offline once hydrated via service worker.
  - One-click cancellation for unreviewed or approved bookings.
  - Direct navigation to Dispute Intake Form if defect claim is opened.

#### Page 1.5: Student Damage & Penalty Dispute Intake (`/bookings/[id]/dispute`)
- **Visual Structure:**
  - Focused appeal form with side-by-side incident inspection photos taken by store staff vs student's uploaded counter-evidence.
- **Component Breakdown:**
  - `<IncidentEvidenceViewer />`: High-resolution gallery of store return inspection photos showing defect highlights.
  - `<DamageDisputeForm />`: Radio selection of dispute grounds (`PRE_EXISTING_DAMAGE`, `NORMAL_WEAR_AND_TEAR`, `HARDWARE_LOCKER_MALFUNCTION`), detailed narrative text area, and file upload zone for behind-the-scenes shoot photos proving prior condition.
- **Functional Capabilities:**
  - Submits formal dispute to `equipment_damage_incidents` (`status = 'INVESTIGATING'`).
  - Automatically freezes punitive strike application until Store Manager completes adjudication.

---

### 3.2 Portal 2: Lecturer Academic Approval Hub `(lecturer)`

#### Page 2.1: Module Approval Queue (`/approvals`)
- **Visual Structure:**
  - Filter Tabs: *Pending My Review (Badge count)*, *Approved This Term*, *Rejected History*.
  - Dense Request Table: Student Matric Number, Student Name, Module Code, Project Title, Date Interval, Item Summary, Risk/Quota Flag, Actions.
- **Component Breakdown:**
  - `<BatchApprovalToolbar />`: Multi-select checkmarks allowing 1-click batch approval for standard class coursework.
  - `<ApprovalDetailsDrawer />`: Deep-dive flyout displaying student's past penalty strike history, full kit manifest, and script/project description.
  - `<RejectReasonModal />`: Mandatory feedback text area ($\ge 10$ characters) prior to executing rejection.
- **Functional Capabilities:**
  - Instant optimistic UI approval updates.
  - Automatic expiration warning pill for requests reaching T-24h and T-2h before pickup.

#### Page 2.2: Class Timetable & Teaching Pre-Bookings (`/courses`)
- **Visual Structure:**
  - Module class roster viewer with timetable schedule overview.
  - "Create Class Block" modal allowing lecturers to reserve bulk studio equipment for practical workshop days.
- **Component Breakdown:**
  - `<ClassRosterTable />`: View enrolled students and active booking status.
  - `<BulkClassBookingModal />`: Reserve multiple packages for a designated class session without individual student approvals.

---

### 3.3 Portal 3: Store Counter & Smart Locker Workstation `(counter)`

#### Page 3.1: Express Checkout & Barcode Scanner (`/counter/checkout`)
- **Visual Structure:**
  - Split-screen Dual Pane: Left pane hosts live camera scanner / physical USB HID barcode input; Right pane displays the active booking handover tray.
- **Component Breakdown:**
  - `<HardwareBarcodeListener />`: Zero-latency global keyboard listener intercepting 1D/2D laser scanner inputs without requiring input box focus.
  - `<CameraScannerModal />`: In-browser WebRTC scanner using `html5-qrcode` with audible success beep.
  - `<BookingInspectionTray />`: Displays required items vs scanned items checklist. Checkmarks turn green as each physical barcode is verified.
  - `<DigitalSignaturePad />`: Canvas stylus/touch signature capture modal (Clause 6.2) for student sign-off.
- **Functional Capabilities:**
  - Atomic transition to `COLLECTED` with simultaneous update of equipment status to `ON_LOAN`.
  - Automatic generation and instant download of PDF Handover Voucher (`@react-pdf/renderer`).

#### Page 3.2: Return Inspection & Damage Flagging (`/counter/checkin`)
- **Visual Structure:**
  - Return scan intake with condition evaluation buttons (`PRISTINE`, `GOOD`, `MINOR_WEAR`, `DAMAGED`, `MISSING_ACCESSORY`).
- **Component Breakdown:**
  - `<ConditionGradeSelector />`: Large touch-friendly segment buttons.
  - `<DamagePhotoUploader />`: Direct-to-Supabase Storage photo intake with multi-image thumbnail preview.
  - `<IncidentTicketGenerator />`: Pre-fills replacement cost, student borrower details, and damage notes for automatic submission to `equipment_damage_incidents`.
- **Functional Capabilities:**
  - Detects overdue returns, calculates overdue hours past the 15-minute grace period, and automatically logs strike penalties.
  - Flags incomplete kits if a child accessory barcode is missing.

#### Page 3.3: Smart Locker Bay Staging Monitor (`/counter/lockers`)
- **Visual Structure:**
  - Visual 24-Door Locker Matrix: Interactive graphical elevation of Locker Bay A (`Small`, `Medium`, `Large` doors) showing real-time magnetic reed sensor status (`Empty`, `Staged / Ready`, `Occupied / Pending Audit`, `Door Ajar`, `Maintenance`).
- **Component Breakdown:**
  - `<LockerDoorTile />`: Displays door number, dimension, assigned booking reference, internal temperature/sensor health, and manual override trigger.
  - `<StageLockerWizard />`: Guides technician to scan item, select appropriately sized empty compartment, and triggers IoT solenoid release to open door for loading.
  - `<MorningAuditList />`: Table of after-hours returns deposited in lockers overnight requiring physical technician verification.
- **Functional Capabilities:**
  - Real-time WebSocket telemetry updates via Supabase Realtime without page reloads.
  - Audible alert trigger for `DOOR_AJAR` states exceeding 45 seconds.

---

### 3.4 Portal 4: Store Manager & Operations Management `(manager)`

#### Page 4.1: Operational Overview & Bay Health (`/operations`)
- **Visual Structure:**
  - KPI Stat Cards: Active Loans, Overdue Assets, Store Bay Capacity, Staged Locker Utilization, Maintenance Outages.
  - Urgent Action Queue: Collisions requiring asset substitution, damage incident reviews, and locker audit items.
- **Component Breakdown:**
  - `<InventoryCollisionAlertBanner />`: Displays damaged equipment that conflicts with upcoming approved loans, featuring a 1-click **Asset Substitution Wizard**.
  - `<StoreBayTabFilter />`: Quick toggle across Store Bay `#01-01` (Cameras), `#01-02` (Audio/Grip), `#01-03` (Lighting).

#### Page 4.2: Timetable CSV Ingestion & Class Holds (`/operations/timetable`)
- **Visual Structure:**
  - Bulk timetable import dropzone alongside an interactive semester calendar viewer.
- **Component Breakdown:**
  - `<CsvDropzoneImporter />`: Drag-and-drop parser for polytechnic semester timetables with live data preview and schema error validator.
  - `<TimetableConflictResolver />`: Flags overlaps between uploaded class hours and pre-existing ad-hoc bookings before committing to the database.

#### Page 4.3: Disciplinary Strikes & Waiver Management (`/operations/penalties`)
- **Visual Structure:**
  - Table of borrower infractions: Student ID, Infraction Type, Strikes Applied, Suspension Date Boundary, Status.
- **Component Breakdown:**
  - `<StrikeWaiverDialog />`: Store Manager modal allowing disciplinary strike removal with mandatory administrative justification notes.
  - `<StudentSuspensionBanner />`: Clear indicator showing whether a student is currently barred from placing reservations.

#### Page 4.4: Damage & Penalty Dispute Adjudication Desk (`/operations/penalties/disputes/[id]`)
- **Visual Structure:**
  - Forensic Comparison Workspace: Side-by-side comparison of Outgoing Checkout Condition (photos, condition grade, technician tag, student checkout signature) vs Incoming Return Condition (return photos, defect description, inspector notes).
  - 36-Month Historical Asset Health Card: Shows past loan count, previous maintenance calibrations, and historical damage claims for the same serialized asset tag.
  - Student Disciplinary Track Record: Past penalty strikes, waivers granted, and current active coursework projects.
- **Component Breakdown:**
  - `<ForensicPhotoComparison />`: Synchronized zoom-and-pan dual image viewer comparing checkout vs return photos.
  - `<SignatureAuditVerifier />`: Displays cryptographically verified digital signature timestamps.
  - `<AdjudicationActionBar />`: 3-way decision toolbar:
    1. **"Accept Dispute & Waive"**: Flags `is_waived = TRUE`, absorbs repair into department budget, and prompts for mandatory administrative audit rationale.
    2. **"Reject Dispute & Uphold"**: Commits penalty strikes, triggers 14-day suspension if threshold reached, and prepares student billing invoice.
    3. **"Escalate to Department Chair"**: Packages a 1-click **Forensic PDF Audit Dossier** for Academic Disciplinary Board appeal.
- **Functional Capabilities:**
  - Emits immutable audit log entry into `audit_logs` capturing Store Manager ID, decision code, before-and-after incident status, and timestamp.
  - Dispatches automated resolution email and in-app notice to the student appellant.

---

### 3.5 Portal 5: Administration, Reporting & Compliance `(admin)`

#### Page 5.1: Asset Master Registry & QR Label Generator (`/admin/inventory`)
- **Visual Structure:**
  - Comprehensive searchable asset table with inline status toggles, kit hierarchy tree views, and batch operations.
- **Component Breakdown:**
  - `<KitBuilderModal />`: Interface for assembling parent kits with child serialized accessories (`kit_components`).
  - `<QrBatchPrinter />`: Formats printable sheets of durable QR code labels (Clause 14.1) for up to 1,000 assets, formatted for standard industrial label printers (Avery/Zebra).
  - `<AssetFormDrawer />`: Full metadata editor (replacement cost in SGD, brand, model, store location, serial number).

#### Page 5.2: The 5 Mandatory Standard Reports (Clause 10.2 & 10.3) (`/admin/reports`)
- **Visual Structure:**
  - Tabbed analytical suite featuring interactive Recharts visualizations, date range pickers, and export toolbars.
- **Component Breakdown:**
  - `<ReportExportToolbar />`: 1-click export to styled Excel (`.xlsx` via `exceljs`), raw CSV, or executive PDF summary.
  - `<OutstandingLoansTable />`: Tracks currently checked-out equipment, borrower contact numbers, and return countdowns.
  - `<EquipmentUsageChart />`: Bar chart and data table displaying total cumulative loan hours per asset category.
  - `<StockAvailabilityGrid />`: Real-time on-hand counts grouped by Block 52 store bays (`#01-01`, `#01-02`, `#01-03`).
  - `<UtilizationRateGauge />`: Percentage calculation of active loan duration against total idle shelf time.
  - `<OverdueReportTable />`: Itemized overdue list with incurred strikes, borrower matric number, and escalated disciplinary status.

#### Page 5.3: Immutable 36-Month Security Audit Trail (Clause 3.0) (`/admin/audit-trail`)
- **Visual Structure:**
  - Forensic log viewer with real-time stream, actor filter, action type selector (`CREATE_BOOKING`, `UNLOCK_LOCKER`, `SUSPEND_USER`, `WAIVE_PENALTY`), and IP geolocation filter.
- **Component Breakdown:**
  - `<AuditLogTable />`: Displays exact server timestamp, actor name/role, action code, client IP, Singapore edge verification badge (`SG`), and before-and-after metadata diff modal.
  - `<JsonDiffViewer />`: Highlights state changes in green/red for complete non-repudiation.
  - `<ComplianceRetentionIndicator />`: Confirms active 36-month legal retention lock under PostgreSQL engine-level immutability rules.

#### Page 5.4: User Roster & Bulk Account Provisioning (`/admin/users`)
- **Visual Structure:**
  - Student and staff account directory with role assignment dropdowns, cohort year filters, and bulk roster CSV importer.
- **Component Breakdown:**
  - `<UserCsvImporter />`: Ingests semester class enrollment CSVs, mapping student IDs, primary diplomas, and cohort years automatically.
  - `<UserDetailModal />`: View student profile, current active loans, enrolled modules, and penalty history.

---

## 4. Cross-Cutting UI/UX Component Inventory

| Component Name | Primary Function | Relevant Tender Clauses |
| :--- | :--- | :--- |
| `<LoginForm />` | Dual-mode credential input (Matric ID or Email) with Zod validation and rate limiting. | Clause 9.1, 9.2 |
| `<OtpInputGrid />` | Auto-advancing 6-digit MFA OTP input component supporting TOTP and SMS/Email codes. | Clause 9.2 |
| `<PasswordStrengthMeter />` | Real-time institutional password complexity evaluator with visual progress gauge. | Clause 3.0, 13.3 |
| `<HardwareBarcodeListener />` | Global keyboard buffer interceptor for 1D/2D laser scanners at counter desks. | Clause 6.2, 14.1 |
| `<CameraQrScanner />` | WebRTC mobile camera feed barcode and QR scanner modal. | Clause 6.2, 14.3 |
| `<OfflineQrPass />` | High-contrast JWT offline QR code display with PWA cache and brightness boost. | Clause 1.2, 6.2 |
| `<DigitalSignaturePad />` | HTML5 canvas stylus/touch signature capture with PNG data export. | Clause 6.2 |
| `<GeofenceRadar />` | HTML5 Geolocation distance calculator with 50m campus locker proximity indicator. | Clause 14.4 |
| `<LockerElevationMatrix />` | 24-door visual SVG elevation of physical locker bay with live reed switch states. | Clause 14.4 |
| `<TimetableWeekGrid />` | Calendar schedule grid rendering class timetable blocks and open facility slots. | Clause 7.1 |
| `<CsvDataImporter />` | Drag-and-drop CSV validation wizard with preview table and schema mapping. | Clause 7.1, 9.3, 10.4 |
| `<ReportExportToolbar />` | Formats and triggers downloads for Excel (`.xlsx`), CSV, and PDF reports. | Clause 10.2, 10.3 |
| `<AuditDiffModal />` | Side-by-side JSON diff viewer showing state transitions for forensic auditing. | Clause 3.0 |
| `<CollisionAlternativeModal />` | Graceful collision modal proposing 1-click alternative kit units or adjacent time slots. | Clause 4.1, 4.3 |
| `<DamageDisputeForm />` | Student appeal form with evidence upload and dispute ground classification. | Clause 6.1, 8.1 |
| `<ForensicPhotoComparison />` | Synchronized zoom/pan comparison of checkout vs return inspection photos. | Clause 3.0, 6.2 |

---

## 5. Responsive Behavior & Screen Viewport Matrix

| Page / Interface | Mobile Viewport (< 640px) | Tablet Viewport (640px – 1024px) | Desktop Viewport (> 1024px) |
| :--- | :--- | :--- | :--- |
| **Catalog Browser** | 1-column cards, sticky bottom cart pill, full-screen filter modal. | 2-column cards, sticky top category pills, slide-over cart sheet. | 4-column cards, sticky left filter sidebar, persistent right cart drawer. |
| **Weekly Timetable** | Day-by-day swipe view with hourly vertical slot cards. | 3-day split calendar with horizontal scroll. | Full 7-day visual week grid (08:00 to 22:00) with drag-to-select. |
| **Counter Checkout** | Camera-first full-screen scan mode. | Split-pane (camera feed top, item checklist bottom). | Dual-column workstation (USB laser scanner input left, checklist & signature right). |
| **Locker Matrix** | 2-column vertical door list with status badges and unlock buttons. | 4-column door grid with dimensional size tags. | Authentic 24-door physical bank graphical elevation with live sensor telemetry. |
| **Reports Suite** | Summary metric cards with quick CSV download buttons. | Responsive bar/pie charts with horizontal scrolling summary tables. | Multi-chart dashboard with interactive drill-down tables and custom date range filters. |

---

## 6. Implementation Readiness & Sequence
1. Register and scaffold shared UI primitives in `@repo/ui` based on Shadcn UI token definitions.
2. Build mobile PWA components: `<OfflineQrPass />`, `<CameraQrScanner />`, `<GeofenceRadar />`.
3. Build store counter workstation components: `<HardwareBarcodeListener />`, `<DigitalSignaturePad />`, `<LockerElevationMatrix />`.
4. Implement the 5 mandatory standard reporting views in `apps/web/src/app/(admin)/reports`.
