# FMS Booking System — Prototype Spec

Oct 11, 2026 · @ron

## 1. Purpose and scope

The prototype exists to win the FMS ITQ: it must show evaluators that every core workflow in the ITQ works end to end, on a believable production architecture, with a UX clearly better than what they use today.

It is a working demo, not the production system. It runs on real infrastructure with real auth and role checks, but uses seeded sample data and a mocked smart locker.

**The prototype must prove:**

1. A student can find equipment, book a multi-item kit, and get it approved by a lecturer.
2. A store officer can check that kit out and back in by scanning QR labels at the counter.
3. Quotas, booking windows and auto-release are enforced by the system, not by people.
4. Facilities (studios, edit suites) can be booked on a weekly timetable, including bulk timetable upload.
5. Admins can bulk-import users and equipment from Excel/CSV.
6. Every action is audit-logged, and standard reports export to Excel/CSV.
7. It works well on a phone, because students and store staff will mostly use phones.

**Out of scope for the prototype:** production SLA, real locker hardware integration (mocked behind an adapter), SSO/AD (designed for, not built), physical QR tagging, full data migration (a sample import only), multi-level escalation beyond one demo rule.

## 2. Market landscape

The category is mature, so the prototype should copy proven patterns and compete on fit to this ITQ, not on novelty. Film and media departments already run on these tools, which means FMS evaluators may compare our demo directly against them.

| Product | Model | What it does well | What to adopt | Where we can beat it for this ITQ |
| --- | --- | --- | --- | --- |
| [Cheqroom](https://www.cheqroom.com/blog/equipment-checkout-systems-for-film-studios-vs-universities/) | Commercial SaaS | Widely used by US film/media departments, e.g. [UCSB Film & Media Studies](https://www.filmandmedia.ucsb.edu/wp-content/uploads/2023/10/CheqroomEssentials.pdf). Dashboard, calendar, items, kits, reservations, check-outs; mobile app; barcode scanning; approvals; pricing by admin licence rather than per user | Kits as first-class objects; a student dashboard that opens on "what I have and what's due"; damage notes and photos on return | Course/module quotas, lecturer approval routing, locker hand-off, Singapore hosting and PDPA posture built in rather than configured |
| [WebCheckout](https://itservices.cas.unt.edu/software/webcheckout-aka-web-checkout) | Commercial SaaS, higher-ed focus | Long-standing higher-ed leader; separate patron portal and operator console; bulk resource import; email templates for reminders and overdue notices. Entry tier listed at about US$400/month on [Capterra](https://www.capterra.in/software/123351/webcheckout) | The two-surface split: a simple patron portal and a dense operator console | Modern mobile UX; it leans on campus-system integrations, which this ITQ explicitly forbids |
| [Shelf.nu](https://github.com/Shelf-nu/shelf.nu/wiki) | Open source (AGPL-3.0) + hosted cloud | QR tags scannable by any phone; bookings with double-booking prevention; kits; hierarchical locations; bulk scan actions; quantity-tracked assets in [v2.0](https://github.com/Shelf-nu/shelf.nu/releases/tag/shelf%402.0.0) | Best UX reference for QR scanning and "scan mode" bulk actions. Its quantity-aware bookings map to the ITQ's "loose items" | Approval workflow, quotas and timetables are not its centre of gravity |
| [LibreBooking](https://librebooking.readthedocs.io/) | Open source (GPL-3.0), PHP | Rooms and resources, recurring and multi-resource bookings, waitlists, quotas and credits, usage reports ([overview](https://www.linuxlinks.com/librebooking-self-hosted-resource-reservation-system/)) | Rule model for facility quotas and recurring timetable slots | Dated Bootstrap UI; no QR checkout or counter workflow |

**Build, don't fork.** Shelf.nu is the closest open-source match, but AGPL-3.0 obliges you to publish your modified source to network users, and its stack is not ours. Use it and Cheqroom as UX references, not as a codebase.

**Our wedge:** an FMS-specific workflow out of the box (course/module quotas, lecturer approvals, counter plus locker collection, studio timetables), a genuinely good phone experience, and a clean compliance story for a Singapore polytechnic.

## 3. Users, roles and permissions

Five roles come straight from the ITQ. Permissions are enforced server-side on every request; the UI only hides what a role cannot do.

| Capability | Student | Lecturer | Technical Officer | Store Manager | Administrator |
| --- | --- | --- | --- | --- | --- |
| Browse catalogue and availability | Yes | Yes | Yes | Yes | Yes |
| Create booking | Yes, needs approval | Yes, auto-approved | Yes, auto-approved | Yes, auto-approved | Yes, auto-approved |
| Group booking with named teammates (BK-12) | Yes, needs approval | No | No | No | No |
| Book on behalf of a class or group | No | Yes | Yes | Yes | Yes |
| Approve or reject student bookings | No | Own modules | Assigned scope | Assigned scope | All |
| Check out / check in at counter | No | No | Yes | Yes | Yes |
| Ad-hoc and block (pre-)bookings | No | Request (a Store Manager or Administrator approves) | Yes | Yes | Yes |
| Recurring weekly bookings (BK-06) | No | Yes | Yes | Yes | Yes |
| Manage equipment, kits, QR labels | No | No | Yes | Yes | Yes |
| Facility timetable upload | No | No | No | Yes | Yes |
| Users, roles, quotas, booking rules | No | No | No | No | Yes |
| Reports and exports | Own history | Own modules | Yes | Yes | Yes |
| View audit log | No | No | No | Read | Read |

**Open question:** confirm with FMS whether Technical Officer and Store Manager differ in practice, or whether Store Manager is simply a TO with config rights.

## 4. Domain model

The key design decision: equipment is modelled as a **Product** (the type, e.g. "Sony FX3") with many **Units** (each physical item with its own QR). A booking reserves quantities of products; checkout assigns specific units by scanning. This one split handles serialised gear, loose quantity items and kits cleanly.

| Entity | Purpose | Key fields |
| --- | --- | --- |
| User | Anyone who signs in | name, email, role, student/staff ID, status (active/inactive), MFA enabled |
| Course, Module | Academic structure for quotas and approvals | code, name, cohort, lecturers (approvers), enrolled students |
| Product | An equipment type | name, category, tags, photo, tracking mode (serialised or quantity), loan rules |
| Unit | One physical item | product, QR code, serial no., location, condition, status (available, out, maintenance, retired). There is no "booked" status: units are assigned only at checkout, and availability is always worked out from bookings |
| Kit (package) | A preset bundle | name, list of product × quantity, collection mode (counter or locker) |
| Facility | Studio, edit suite, room | name, location (Blk 52 #01-01/02/03), capacity, timetable rules |
| Booking | One transaction, many lines | booking ID, requester, module, purpose, start/end, audience (individual, group, module), flags (ad-hoc, block), optional recurring series, status. "Package" and "loose quantity" (BK-05) are derived from the lines, not stored |
| Booking line | What is reserved | product or kit or facility, quantity, assigned units at checkout |
| Approval | Decision record | booking, level, approver, decision, comment, timestamp |
| Quota rule | Limits | scope (course, module, user, role), product/category, max quantity, max duration, booking window |
| Loan | Custody of units | units, borrower, checked out by/at, due at, returned at, condition notes, signature |
| Locker slot | Self-service hand-off | locker ID, booking, access code, status |
| Timetable slot | Recurring facility use | facility, module, weekday, time, term dates |
| Audit event | Immutable log | actor, action, entity, before/after, IP, timestamp; retained 36 months |

## 5. Functional requirements

Every ITQ requirement gets an ID so it can be traced from the bid's compliance matrix to code and tests. MVP = must work in the demo; Should = build if time allows, otherwise show as designed; Later = production phase.

| ID | Requirement | Acceptance check | Priority |
| --- | --- | --- | --- |
| BK-01 | Multi-item booking in one transaction | Cart holds products, kits and quantities; one submit creates one booking | MVP |
| BK-02 | Search by keyword, module, course or tag | Results filter as you type; a module filter shows only gear that module may book | MVP |
| BK-03 | Real-time availability | Availability reflects other users' bookings without a page reload | MVP |
| BK-04 | Unique booking IDs | Human-readable, e.g. FMS-2610-0042, shown on every screen and email | MVP |
| BK-05 | Booking types: individual, group, course/module, package, loose quantity | Each type can be created and is labelled in lists | MVP |
| BK-06 | Recurring bookings | Weekly series with exceptions; conflicts flagged per occurrence. Staff only. Detail in §5.1 | MVP |
| BK-07 | Ad-hoc (admin-approved) and block/pre-bookings | Block bookings hold stock and are invisible to students as bookable. A block is a class set. Detail in §5.1 | MVP |
| BK-08 | Configurable booking windows and durations | Rules per product/category/role; violations blocked with a clear reason | MVP |
| BK-09 | Auto-release of uncollected bookings | After a configurable grace period, stock is released and the user notified | MVP |
| BK-10 | Alerts for over-long bookings | Requests beyond max duration are flagged to the approver | Should |
| BK-12 | Group bookings by students | A student names teammates from the same module; one booking, one approval; it counts against every member's limits. Detail in §5.1 | MVP |
| BK-11 | Booking history in the main navigation | "My bookings" has two subtabs, Current and History; History is newest first and opens the full booking. Detail in §5.1 | MVP |
| AP-01 | Mandatory approval of all student bookings | Student booking stays Pending until an assigned approver acts | MVP |
| AP-02 | Auto-approval of staff and admin bookings | Staff bookings go straight to Confirmed, logged as system-approved | MVP |
| AP-03 | Multi-level approval | e.g. lecturer then store manager for high-value items | Should |
| AP-04 | Configurable escalation rules | Unactioned approvals escalate after N hours; one demo rule only | Later |
| EQ-01 | Quota by course, module and user | Exceeding a quota blocks submission and says which rule applies | MVP |
| EQ-02 | Counter check-out/check-in with QR scanning | Phone camera and USB scanner both work; wrong unit is rejected | MVP |
| EQ-03 | QR label generation | Printable PDF label sheets per product or selection | MVP |
| EQ-04 | Daily transaction summary | One screen and export of today's checkouts and returns | Should |
| EQ-05 | Optional signature capture | Borrower signs on screen at checkout; stored with the loan | Should |
| FC-01 | Weekly timetable view of facilities | Week grid by facility, colour-coded by booking type | MVP |
| FC-02 | Calendar interface for bookings | Day/week/month views; click to create where allowed | MVP |
| FC-03 | Bulk timetable upload | CSV/XLSX import with a preview of rows and conflicts before commit | Should |
| NT-01 | Collection reminders | Email before pickup time | MVP |
| NT-02 | Overdue reminders (email) | Sent at due time and on a repeating schedule | MVP |
| NT-03 | Late and non-return tracking | Overdue list with days late; history on the user profile | MVP |
| NT-04 | Email for every booking, loan and account event | Every email goes through EmailOutbox and carries the booking code, what, when, where and one clear button. Outside production, a "Sent emails" page shows each one as rendered. Full list in §5.1 | MVP |
| UM-01 | Self-contained authentication | Email and password with reset; no external identity provider. Sign-in screen as in §5.1 | MVP |
| UM-02 | Optional MFA/OTP | TOTP or email OTP, enforceable per role | Should |
| UM-03 | SSO/AD capable in future | Auth layer supports adding SAML/OIDC without schema changes | Later |
| UM-04 | Bulk user import | CSV/XLSX with validation report; dry run before commit | MVP |
| UM-05 | Manual user management | Create, edit, activate, deactivate; deactivated users cannot sign in | MVP |
| UM-06 | Install card after first booking | Shown once, on the confirmation screen of a user's first booking. Install button on Android/Chromium; instruction sheet on iOS; hidden when installed or when the browser has neither path. Detail in §5.1 | MVP |
| UM-07 | Account panel | Tapping the account name in the header opens it. Holds Install app and Sign out now, Change password later. Detail in §5.1 | MVP |
| UM-08 | Install analytics | Card shown, card dismissed, menu opened and install accepted are counted by platform, with no user ID; an admin view or export shows the install rate. Detail in §5.1 | MVP |
| UM-09 | Self-service password reset | "Forgot password?" under the password field; same response whether or not the account exists; single-use 30-minute link; rate-limited; all other sessions ended on success. Detail in §5.1 | MVP |
| UM-10 | Auth email delivery | Reset, activation and password-changed emails are sent right after the database commit, not left for the tick; still recorded in EmailOutbox and retried by the tick. Detail in §5.1 | MVP |
| UM-11 | Admin-triggered reset | An admin can send a reset link from a user's record; staff can never set, see or choose a password; audit-logged | MVP |
| UM-12 | Account activation via link | Imported and manually created users have no password; they get a "Set your password" link valid for 7 days, using the reset flow. Activation status and resend in the user list. Detail in §5.1 | MVP |
| RP-01 | Standard reports: outstanding loans, usage, available, utilisation, overdue | Each filterable by date and module; every figure drills down to the bookings behind it; export to Excel/CSV | MVP |
| RP-02 | Custom graphical and tabular reports | Pick what to count (bookings, loan hours, items out, late returns), what to group by (item, category, module, course, week) and a date range; chart plus table; every bar drills down to its bookings; export | MVP |
| RP-03 | User booking history | One screen per user: every booking, return and late return, filterable by date. Staff see anyone's; students see only their own | MVP |
| RP-04 | Equipment usage history | One screen per physical item: every loan, condition change and repair, opened by scanning its QR or from any report | MVP |
| DM-01 | Data upload for resources, users, courses, modules | Same import pipeline as UM-04 for every entity | MVP |
| LK-01 | Locker collection workflow | Booking assigned to a locker slot; collection code issued; via adapter (mocked) | Should |
| AU-01 | Audit log, retained 36 months | Every write recorded with actor and before/after; append-only | MVP |
| AU-02 | Audit log viewer | Read-only, for Administrator and Store Manager. Search by booking code, user, item or date; filter by action; a timeline per booking, user or item; export to CSV. Needed for the last demo step | MVP |
| INV-01 | Manage equipment types (products) | Create, edit and deactivate products: name, category, tags, photo, tracked individually or by quantity, stock count. Anything with booking history is deactivated, never deleted | MVP |
| INV-02 | Manage individual items (units) | Add units with serial number and location; set condition; mark Under repair or Retired with a reason. A unit out of service drops out of availability at once, and any future bookings it leaves short are listed for staff to resolve | MVP |
| INV-03 | Manage kits | Create and edit kits from products and quantities; set counter or locker collection; deactivate. Editing a kit never changes bookings already made | MVP |
| INV-04 | Control which modules may book what | Per module, pick the products and categories its students may book (drives BK-02 search filtering) | MVP |
| INV-05 | Manage facilities | Create, edit and deactivate studios and rooms: location, capacity, opening hours, slot length | Should |
| PWA-01 | Installable on a phone's home screen | The site can be added to the home screen with its own icon and opens without browser bars. No offline mode. When and how users are asked is UM-06 and UM-07 | MVP |

### 5.1 Detail: booking history, install, and accounts

**BK-11 Booking history**

- "My bookings" has two subtabs: Current (pending, approved, with you, overdue) and History (returned, cancelled, not approved, released, expired).
- History is newest first, shows booking code, items, dates and the final status label (plain-language labels from `UX.md`), and opens the full booking detail.
- Booking history is NOT in the account panel. (RP-03 is the staff-facing report of the same data, per user.)
- **News box (added 2026-10-13, from the owner's phone review).** A rejected or expired booking moves to History, so the home screen alone would not tell the student. "My bookings" therefore opens with "Since you last looked": each decision (approved, not approved with the reason, expired) names the booking by its items and code, and opens it. No "Book again" button on a rejection. It is shown once: after the page has been on screen it is not news again. The menu shows a number beside "My bookings" while there is unseen news. The only thing stored is when the person last looked.
- Numbers in the menu (requests waiting, unseen news) are re-counted on every change of page and every 30 seconds, because the menu is not redrawn between pages.

**UM-06 Install card after first booking**

- After a user's first booking is submitted, the confirmation screen shows an install card.
- Android/Chromium browsers (Chrome, Brave, Edge, Samsung Internet; `beforeinstallprompt` available): an "Install" button triggers the native prompt.
- iOS: no programmatic install, so "How to install" opens an instruction sheet showing Share → Add to Home Screen, with illustrations for Safari and for Chrome on iOS. This sheet gets the same design care as the Android flow and is tested on a real iPhone.
- Hidden when the app is already running installed: `matchMedia('(display-mode: standalone)')` or `navigator.standalone` on iOS.
- Hidden on browsers with neither path (no `beforeinstallprompt` and not iOS).
- Frequency: shown once. If dismissed, it is never shown again; the account panel is the permanent route. The dismissal is stored per browser in localStorage, with reads and writes wrapped in try/catch.

**UM-07 Account panel**

- Tapping the account name in the header opens the account panel. The trigger looks tappable (initials/avatar + chevron) and is at least 44 × 44 px.
- Items now: Install app, Sign out. Later: Change password.
- "Install app" uses the same platform logic as the card and is hidden when already installed.

**UM-08 Install analytics**

- Record install_card_shown, install_card_dismissed, install_menu_opened and install_accepted (from the `appinstalled` event) as plain tallies by platform (android / ios / other). No user ID is stored: nothing new is held about a person, so the personal-data list in §9 is unchanged.
- An admin view (or report export) shows the install rate. Used as bid evidence.

**UM-09 Self-service password reset**

- Sign-in screen: a "Forgot password?" link directly under the password field. Remove "Ask at the store counter".
- The user enters an email. The response is always identical, whether or not the account exists: "If that email has an account, we've sent a reset link. Check your inbox and spam folder."
- No email is sent for unknown or deactivated accounts; the on-screen response is the same.
- Reset token: single-use, expires after 30 minutes, invalidated by any newer request.
- Rate limits: 3 requests per email per hour and 10 per IP per hour. Excess requests get the same response and send nothing.
- Show the password policy before the user types the new password, not only on error.
- On success: revoke all other sessions, write an AuditEvent (action = password_reset), and send a "Your password was changed" email telling them to contact FMS if it wasn't them.
- Reset does not bypass TOTP. Users with 2FA still need it at their next sign-in.
- Expired or used link: a page saying so, with a button to request a new link. Never a dead end.

**UM-10 Auth email delivery**

- Reset, activation and password-changed emails are sent immediately after the database commit, not left for the cron tick. They are still written to EmailOutbox for the record, and the tick retries any that failed.
- Booking-related emails (changed 2026-10-13): still queued in the transaction, and now also sent right after it commits, never inside it. Reason: on the current hosting plan the tick runs once a day, so a lecturer would hear of a request a day late. The tick stays as the retry for anything that failed.

**UM-11 Admin-triggered reset**

- An admin can send a reset link from a user's record. Staff can never set, see or choose a user's password. Audit-logged.

**UM-12 Account activation via link**

- Users created by bulk import or manually have no password. They receive a "Set your password" email using the same token mechanism; the activation link is valid for 7 days.
- Activation and reset share one flow and one page; only the copy differs.
- The user list shows activation status (Not sent / Sent / Activated), with resend per user and in bulk.
- The bulk import dry-run report states how many activation emails will be sent. Nothing is sent until the admin confirms the import.

**BK-12 Group bookings (MVP; decided 2026-10-13)**

This reverses the earlier rule that students book as individuals only.

- A student books under one of their modules and names teammates from that module's class list. It is one booking and still needs the lecturer's approval.
- Teammates are added at once and emailed. A teammate can leave before the booking is approved.
- The gear counts against every member's limits, so a team cannot take the group's camera and then one each on top.
- If the gear is late, every member is blocked from new bookings until it is back.
- Every member sees the booking in their own list.
- To confirm: 2 to 8 people including the booker; only the booker or staff can cancel; any member may collect (settled with the counter phase).

**BK-07 Block bookings: a class set (MVP; decided 2026-10-13)**

- A block is staff holding gear for a whole class session, e.g. 10 cameras for FSV101 on Tuesday. Students do not book from it; the lecturer or officer hands the gear out.
- It skips the three normal limits (loan length, how far ahead, quantity). A reason is required and audit-logged. Stock is still checked: a block can never take gear that is already promised.
- Technical Officers, Store Managers and Administrators make blocks directly. A lecturer's block is a request: it waits for a Store Manager or Administrator to approve it.
- Students see the gear as unavailable for those times, with no detail.
- To confirm: a lecturer's request holds stock while it waits, with the same 48-hour hold as a student request. What "ad-hoc" means beyond this is not yet defined with FMS.

**BK-06 Recurring bookings (MVP; decided 2026-10-13)**

- Staff only, so there is no approval step. Weekly.
- Each week is its own booking with its own code, linked to one series.
- A week that clashes is skipped and listed; the other weeks are still made.
- To confirm: an end date is required, at most 26 weeks; one week or the whole series can be cancelled; a recurring booking may be a block (a class set every Tuesday); equipment first, rooms once the facilities phase is built.

**AP-01 Approval (decided 2026-10-12)**

- Who decides a student's request: a lecturer of the module it was booked under, or an Administrator. Store staff cannot approve until FMS says what their scope is (open question below).
- A module with no active lecturer: the request and its email go to the Administrators, so it is never left with nobody.
- A rejection needs a reason (at most 300 characters); the student is emailed it. An approval needs none.
- Nothing can be decided once the hold has run out. The request leaves the approver's list at that moment.
- A request is decided once. Two approvers at the same instant: one wins, the other is told what already happened.
- Several requests can be approved together. There is no reject-several, because each rejection needs its own reason.
- The button in the approver's email opens the request and needs a sign-in. A link never approves by itself.

**NT-04 Email notifications**

Every email goes through EmailOutbox and follows `UX.md`: booking code, what, when, where, one clear button. Each template is built in the phase that creates its event.

- The outbox keeps each email as rendered (subject, HTML, plain text), who it was for and which booking it is about.
- Providers plug in behind one adapter (`src/server/email/provider.ts`, chosen by `EMAIL_PROVIDER`). Until one is chosen the stand-in "preview" provider is used: nothing reaches a real inbox, every signed-in person can read their own emails under "Demo inbox" in the account panel, and Administrators see all of them under Console → Emails.
- One-time links (password reset): with the stand-in provider an Administrator can open the email, because there is no other way for the link to reach anyone in a demo. Once a real provider delivers, the link is wiped from the database after sending and hidden from everyone but its owner. This is the only exception to UM-11's "staff can never see a password link", and it ends when a provider is connected.
- A provider refusal is retried after 1, 2, 4 and 8 hours; after 5 refusals the email is marked Failed.
- Provider chosen 2026-10-13: **Resend**, called over HTTPS with no extra library, sending from the owner's domain. Setup steps are in `docs/email-setup.md`. Each outbox row carries its own key so a retry cannot send twice. Not checked: Resend is believed to have no Singapore region, which matters for the data-residency question below.
- Safety catch for the prototype: while `EMAIL_ONLY_TO_DOMAIN` is set, real email is only sent to addresses on that domain; anything else is marked Failed with that reason.
- Seed accounts (changed 2026-10-13): the seed holds the owner's twelve test accounts from `test-emails.txt` (invented names, real mailboxes on the owner's domain) and no other people. The browser tests add their own made-up people to the throwaway test database only.

- Booking submitted: receipt to student; action email to approver(s) with approve/reject buttons.
- Approved / rejected (with reason) / expired: to student.
- Cancelled: to student (with reason if staff cancelled); to approver if it was still pending.
- Staff booking auto-approved: receipt to requester.
- Collection reminder before pickup; locker ready with access code.
- Checked out: receipt with items and due time. Due-soon reminder 24 h before.
- Overdue: at due time, then daily; copy to Store Manager after a configurable number of days.
- Returned: receipt; if damage is noted, also to Store Manager.
- Auto-released (not collected): to student.
- Item taken out of service affecting a booking: to student and staff.
- Accounts: welcome/set-password for admin-created accounts, password reset, password changed.
- Outside production, an admin "Sent emails" page shows every email as rendered, so the demo can show emails without real inboxes.

**AU-02 Audit log viewer**

- Read-only, for Administrator and Store Manager.
- Search by booking code, user, item or date; filter by action.
- Show a timeline per booking, user or item. Export to CSV.

**INV-01 to INV-05 Inventory, one rule for all**

- Anything with history is deactivated, never deleted. Every change is audit-logged.
- INV-02: out-of-service units leave availability at once; any future bookings left short are listed so staff can resolve them.

**RP-01 to RP-04 Reports**

- RP-02 stays a constrained builder: count bookings, loan hours, items out or late returns; group by item, category, module, course or week; choose a date range.
- The report queries are designed so drill-down links (a figure or a bar to the bookings behind it) work from the start.

**UM-01 Sign-in screen**

- Email field: `type="email"`, `autocomplete="username"`. Password: `autocomplete="current-password"`. New-password fields: `autocomplete="new-password"`.
- A show/hide password toggle with an accessible name ("Show password" / "Hide password").
- Keep the footer: "Don't have an account? Accounts are created by FMS staff."

## 6. Key user flows

Every booking moves through one state machine; each arrow is an audited event, and only the rules engine may move a booking between states.

```
Submitted --(student)--> PendingApproval --approved--> Confirmed
Submitted --(staff/admin)------------------------------> Confirmed
PendingApproval --rejected--> Rejected
PendingApproval --cancelled by requester or staff--> Cancelled
PendingApproval --hold ran out with no decision (default 48 h, or the start time if sooner)--> Expired
Confirmed --cancelled before collection--> Cancelled
Confirmed --not collected within grace period--> AutoReleased
Confirmed --scanned out (counter or locker)--> CheckedOut
CheckedOut --scanned in--> Returned
CheckedOut --past due--> Overdue --scanned in--> Returned
```

Only student bookings pass through Pending approval. Uncollected bookings release stock automatically, and overdue loans keep reminding until scanned back in.

**Counter collection (staff-assisted):**

1. Student shows the booking QR on their phone; the officer scans it.
2. The screen lists each line; the officer scans units one by one. A unit of the wrong product, or one already out, is rejected on the spot.
3. Optional signature on the tablet; the loan starts and the due time is emailed.
4. On return, the officer scans each unit, marks condition, and adds a note or photo if damaged.

**Locker collection (self-service):**

1. Store staff prepare the kit, scan its units into the booking, and place it in a locker slot.
2. The system asks the locker adapter for a slot code and emails it to the student.
3. The student opens the locker; the adapter reports collection and the loan starts.
4. Returns go back to the counter for inspection (to confirm with FMS).

## 7. Design direction

Use **shadcn/ui** themed with FMS's own web colours and NP's web typeface. NP's website gives each academic school its own accent colour; FMS's is magenta #AD208E, and the whole site is set in Barlow. The values below were read from the live np.edu.sg pages and stylesheets on 11 Oct 2026.

**What the NP website actually uses:** a school colour system. On a school's pages, its colour replaces the primary button, links, active tabs, card accents and table headers. NP-wide pages use a mid blue as primary and a deep purple as secondary. The corporate CMYK palette on NP's [logo page](https://np.edu.sg/corporate-logo) (blue, golden yellow, black, white) governs the logo and print; the website does not use the dark corporate blue at all.

**Typeface:** Barlow everywhere (400, 600 and 700 in use), with Inter only inside a few site widgets. Barlow is a free Google Font, so the app can use it directly and match the NP site exactly.

| Token | Value | Where np.edu.sg uses it | Use in our app | Contrast |
| --- | --- | --- | --- | --- |
| `--primary` FMS magenta | #AD208E | FMS pages: primary buttons, active tabs, links, "Read more" | Primary actions, links, selected states | 6.2:1 on white, passes AA |
| `--secondary` NP purple | #4B3F72 | Site-wide secondary buttons, carousel arrows, back-to-top | Secondary buttons, operator console header | 9.3:1 on white |
| `--info` NP web blue | #327AAE | Primary buttons on NP-wide pages | Info notices, "Confirmed" status | 4.6:1 on white, passes AA narrowly |
| `--accent` NP golden yellow | #FEAB10 | Star icons; the web form of the corporate golden yellow | Highlights, the "today" marker; text only on dark | 9.9:1 on #111111; 1.9:1 on white, so never text on light |
| `--foreground` | #111111 | Body text and headings | Body text | — |
| `--background` / `--card` | #F5F5F5 / #FFFFFF | Page background / cards | Same | — |
| `--muted-foreground` | #707070 | Breadcrumbs | Secondary text | 4.5:1 on #F5F5F5 |

For reference, the other schools' colours: Business & Accountancy #DB1F35, Design & Environment #577935, Engineering #007994, Humanities & Interdisciplinary Studies #D81365, Health Sciences #00803C, InfoComm Technology #6E298D, Life Sciences & Chemical Technology #C93F0D, plus #007A78 and #005E54 for two further programmes. Because colour is per school, the app can be re-skinned for another school by changing one token, which is a selling point if NP later wants it beyond FMS.

**Shape and type scale (from the FMS page):** buttons and cards use a 12 px radius; cards are white with a soft shadow (0 3px 16px, black at 20%); buttons have 16 px padding, 600 weight, sentence case. Headings: H1 32 px/700, H2 32 px/600, H3 18 px/700; body 16 px/400 at 1.5 line height. In shadcn this maps to `--radius: 0.75rem` plus Tailwind font sizes.

**Status colours stay separate from school colours:** green available, NP blue confirmed, amber pending, red overdue, grey maintenance. Each is always paired with a label and icon, never colour alone.

The NP site is built on Next.js with Bootstrap and uses icons from the Singapore Government Design System (SGDS), so a Next.js + Tailwind build sits naturally beside it. Before the bid, confirm with NP Corporate Communications that the FMS magenta, Barlow and the NP logo may be used in a vendor-hosted system.

**Why shadcn/ui over the alternatives:**

- It copies components into our repo, so we own and restyle them fully. Brand theming is just CSS variables.
- It is built on Radix primitives, so keyboard and screen-reader behaviour comes for free. That matters for WCAG 2.1 AA, which a public institution may ask about.
- Claude Code knows it very well, which speeds up the build.
- Gaps to fill: shadcn has no timetable or resource calendar. Use FullCalendar (resource timeline) for FC-01/02 and TanStack Table for dense admin and report tables.
- Alternatives considered: Mantine ships more out of the box (dates, calendars) but is harder to make look bespoke; MUI reads as "Google admin"; Ant Design is dense and dated for a student-facing app.

**UX principles:**

1. **Two surfaces, two densities.** A light, mobile-first student portal; a dense, keyboard- and scanner-first operator console for the store counter.
2. **Scan first at the counter.** The cursor always sits in a scan field; scanning a booking QR opens it, scanning a unit assigns it, errors are loud and spoken in plain words.
3. **Show availability as time, not as a number.** A small timeline per product beats "3 available".
4. **Say why something is blocked.** Every quota or window violation names the rule and when it frees up.
5. **Dark mode for the console.** Media students and staff spend their days in dark editing suites; it also reads well under counter lighting.

## 8. Tech stack and architecture

One TypeScript web app on one Postgres database, hosted in a Singapore region. No microservices, no Redis, no mobile app: a responsive web app covers phones, and every moving part we skip is one less thing to secure and explain to evaluators.

| Layer | Choice | Why |
| --- | --- | --- |
| App framework | Next.js (App Router) + TypeScript | Server and UI in one codebase; huge ecosystem; Claude Code is very fluent in it |
| UI | shadcn/ui + Tailwind, FullCalendar, TanStack Table | See section 7 |
| Database | PostgreSQL on Supabase, Singapore region (ap-southeast-1) | Relational data with hard integrity rules (bookings, quotas, approvals). Supabase is used as managed Postgres plus Storage only: no Supabase Auth, no Data API |
| ORM and migrations | Prisma | Mature, typed, readable schema file that doubles as documentation |
| Auth | Better Auth (email/password, TOTP 2FA; SAML/OIDC plugins for later SSO) | Self-contained as the ITQ requires, with a path to SSO. Check plugin maturity before committing |
| Background jobs | Vercel Cron calling one protected `/api/cron/tick` endpoint every minute, plus an email outbox table | Reminders, auto-release and overdue sweeps. Vercel has no long-running worker, so a queue library like pg-boss doesn't fit; time-based sweeps do |
| Email | Amazon SES or Postmark | Transactional email with delivery logs |
| QR | `qrcode` to generate; a ZXing-based camera scanner in the browser; USB scanners work as keyboards | No native app needed |
| Import/export | SheetJS or ExcelJS | Excel and CSV in and out |
| Locker | `LockerProvider` interface, `MockLockerProvider` for the demo | Swap in the real vendor's API once known; nothing else changes |
| Tests | Vitest (rules engine) + Playwright (end-to-end flows) | The booking and quota rules are where bugs cost money |
| Hosting | Vercel Pro with functions pinned to `sin1` (Singapore) + Supabase Pro in ap-southeast-1 (Singapore). The same setup can carry production, or move to AWS ap-southeast-1 | App compute and data both stay in Singapore, which is the easy answer to residency questions |
| File storage | Supabase Storage, private bucket, signed URLs | Damage photos and signatures, kept in the same Singapore region |

**Engineering rules that matter most:**

1. **No double-booking, ever.** Availability checks and booking writes happen in one database transaction with row locks on the affected products. Never trust the availability the UI showed.
2. **One rules engine.** Quotas, booking windows, durations and approval routing live in one tested module, called by every path that creates or changes a booking (UI, import, admin override).
3. **Audit by construction.** Every write goes through a service layer that writes the audit event in the same transaction. The audit table is append-only at the database-permission level.
4. **Close Supabase's side doors.** Turn off the Data API so tables Prisma creates are not reachable over Supabase's auto-generated REST endpoint. All data access goes through the Next.js server.

## 9. Non-functional requirements

The prototype builds the security controls for real; the SLA, backups and DR are the bid partner's operational commitments, but the architecture must make them easy to promise.

| ITQ requirement | Prototype | Production (bid partner) |
| --- | --- | --- |
| Role-based access control | Built: server-side checks on every route, tested per role | Same |
| Encryption in transit | HTTPS/TLS everywhere, HSTS | Same |
| Encryption at rest | Managed Postgres with storage encryption on | Same, with key management documented |
| Audit logs, 36 months | Append-only audit table, written per transaction | Retention policy and archive to cold storage |
| Backups: daily, 30-day retention | Platform default backups | Daily automated, 30-day retention, tested restores |
| Disaster recovery | Not in prototype | Documented RPO/RTO, cross-zone standby |
| Uptime ≥ 99.5% monthly | Not in prototype | Monitoring, alerting, status page |
| PDPA | Collect minimum personal data; consent and purpose notice at first sign-in; data export and deletion for a user | DPA with NP, retention schedule, breach process |
| Responsive design | Every screen usable at 360 px wide. Tablets too: automated browser runs at 768 × 1024 (portrait) and 1024 × 768 (landscape) for the student portal and the counter console, alongside the 360 px runs. Touch targets stay at least 44 px. The counter console works fully on a tablet with a USB scanner | Same |
| Accessibility | Target WCAG 2.1 AA on key flows | Same, with an audit |
| Standalone, no NP systems | No external identity or NP integration | Same; SSO only if NP later approves |

**Personal data we hold:** name, email, student/staff ID, course/module, booking and loan history, optional signature image. Keep it to that list unless FMS asks for more.

## 10. Build plan, demo script and open questions

Build in vertical slices, each one demoable on its own, so there is always something to show if the deadline arrives early.

**How to read the estimates.** They are working days for one builder with Claude Code, and they are estimates, not promises. Phases 1 and 2 were first budgeted at 2.5 weeks and took about 2.5 working days, so the figures below scale the original budgets by that pace and add the scope agreed since. Any of them could be out by half either way. The builder's own time (reviewing on a phone, decisions, account set-up) is listed separately, because that, not the coding, sets the calendar. Set the total against the ITQ closing date once known.

**Build phases:**

1. **Foundations. Done.** Repo, `CLAUDE.md`, schema, auth, roles, audit layer, seed data, NP theme tokens, deploy pipeline. Also delivered here: UM-01, UM-05 (deactivation), AU-01.
2. **Catalogue and booking. Done (signed off 2026-10-12).** Products, units, kits, search, availability, cart, booking rules engine, quotas. Covers BK-01 to BK-05, BK-08, EQ-01. Also delivered here, ahead of plan: hold expiry (the Expired state), the scheduled job, BK-11, PWA-01, UM-06, UM-07, UM-08, and the sign-in screen of UM-01.
3. **Approval, email and audit viewer (about 2 days; builder about 1 hour).** Approver inbox on a phone, approve and reject with a reason, approve several at once. The email layer: templates, the "Sent emails" page, and a provider adapter so a real provider plugs in later without other changes. Self-service password reset on top of it. The audit log viewer. Covers AP-01, AP-02, NT-04 (booking submitted, approved, rejected, expired, cancelled, auto-approved, password reset, password changed), UM-09, UM-10, AU-02.
4. **Counter (about 3 days; builder about 2 hours, with a real scanner or phone camera).** QR labels, scan-first checkout and return, condition notes and damage photos, overdue tracking, auto-release job, collection and overdue reminders. Tablet runs start here. Covers EQ-02, EQ-03, BK-09, NT-01 to NT-03, NT-04 (collection reminder, checked out, due soon, overdue, returned, auto-released).
5. **Groups, class sets and recurring (about 5 days, a guess; builder about 1 hour).** Student group bookings with named teammates; block bookings as class sets, with a lecturer's request approved by a Store Manager or Administrator; weekly recurring bookings for staff. Built after the counter because who may collect a group's or a class's gear depends on how the counter works. Covers BK-06, BK-07, BK-12.
6. **Facilities, inventory and imports (about 4 days; builder about 2 hours).** Timetable and calendar views; screens to manage products, units, kits and module equipment lists; user management; CSV/XLSX import for users, equipment and modules with a dry run; account activation by link. Covers FC-01, FC-02, INV-01 to INV-04, UM-04, UM-11, UM-12, DM-01, NT-04 (item out of service, welcome and set-password).
7. **Reports and polish (about 3 days; builder about 2 hours, plus the usability sessions).** The five standard reports with drill-down, the custom report builder, user booking history and equipment usage history, mocked locker flow, limit rules editor (create, edit, deactivate; audit-logged), accessibility pass. Covers RP-01 to RP-04, LK-01, NT-04 (locker ready).

About 17 working days remain, plus about 8 hours of the builder's time, plus two usability rounds (`UX.md` §4: after Phase 4 and after the last phase, five people each; `UX.md` still says "Phase 6" and means the last one).

**Not scheduled ("Should" items, built only if time allows):** BK-10, AP-03, EQ-04, EQ-05, FC-03, UM-02, INV-05.

**What each phase needs from outside the code:**

- Phase 3: nothing to start. Real email needs the Resend key, the domain records and the forwarders in `docs/email-setup.md`; without them the app runs on the stand-in and shows every email on screen.
- Phase 4: a Supabase Storage bucket for damage photos (about 10 minutes to set up); Vercel Pro if reminders must fire by themselves every minute (on Hobby they fire once a day, or when an admin presses "Run scheduled jobs now"); a real phone camera and USB scanner to prove scanning.
- Phase 6: sample files of users and equipment to import; the same Storage bucket for product photos.
- Phase 7: a decision on a charting library for RP-02, which is not in the agreed stack; five people per usability round.
**Demo script (10 minutes):**

1. Admin imports a module list and 200 students from Excel; shows the validation report.
2. A student on a phone searches "FX3", adds a camera kit and a light, hits a quota limit, adjusts and submits.
3. The lecturer approves from an email link on their phone.
4. At the counter, the officer scans the booking QR, then each unit; a wrong lens is rejected.
5. The clock jumps forward: overdue email fires; the item appears in the overdue report.
6. Return by scan with a damage note and photo.
7. A second booking is routed to a locker; the student gets a collection code (mocked locker).
8. Studio timetable week view with a bulk-uploaded term schedule.
9. Admin tightens a quota in the limit rules editor; a student booking is then blocked, and the message names that rule.
10. Admin opens the audit log and shows every step above, with actor and timestamp.

**Open questions for FMS (raise through the ITQ clarification channel):**

- [ ] Smart locker make, model and API documentation
- [ ] Approval routing: always the module lecturer, or by equipment category or value?
- [ ] Approval levels and escalation rules in use today
- [ ] Quota rules in use today, and per course, module or student?
- [ ] Difference between Technical Officer and Store Manager roles
- [ ] Expected volume: students, staff, equipment items, bookings per week
- [ ] Sample export of current equipment and booking data (columns only is enough)
- [ ] Approval to use the FMS magenta (#AD208E), Barlow and the NP logo in the app
- [ ] Data residency or hosting-location requirement
- [ ] Any security assessment or penetration test expected before go-live
- [ ] personal-project bookings outside a module?
- [ ] Which email do students log in with: NP student mailbox or personal? Reset and activation depend on deliverability. Test against a real NP mailbox; configure SPF and DKIM on the sending domain.
- [ ] Which roles can trigger a reset for someone else: Administrator only, or StoreManager too?
- [ ] Group bookings (BK-12, now MVP): may any member collect, or only the booker? Is there a maximum team size?
- [ ] Block bookings (BK-07): what does FMS mean by "ad-hoc", beyond a class set?
- [ ] Email provider region: Resend is believed to have no Singapore region. Acceptable for the prototype; confirm for production.
- [ ] What device the counter uses (PC, tablet or phone).

## 11. User experience

Every screen is designed around one test: can this person finish their task quickly, without help, on the device in their hand? The full standards live in `UX.md` in the repo; this is the summary for the bid.

| Persona | Context | Home screen answers | Key target |
| --- | --- | --- | --- |
| Student | Phone, on the move, books a few times a month | What do I have, what's due, what's waiting? | Book a standard kit in 6 taps or fewer, under 60 s |
| Lecturer | Phone, from an email, mid-class | What's waiting for me? | Approve from the email in 2 taps or fewer |
| Technical Officer | Counter, scanner in hand, queue waiting | Who's collecting and returning today? | Check out 5 items in under 30 s, no mouse |
| Store Manager | Desktop, a few times a week | What needs my attention this week? | Overdue items at the top of home; reports in 3 clicks or fewer |
| Administrator | Desktop, semester set-up | Is everything set up and working? | Import 200 users with a dry run and row-by-row errors |

**How it is enforced:** each target is an automated test that fails the build if the task takes more steps than allowed; every screen follows shared standards for plain-language labels, errors that always offer a way forward, and mobile touch targets; and two rounds of usability testing with five people each run before the bid, with findings and fixes recorded as evidence.

Personas are working assumptions until FMS confirms counter hardware, approval scope and booking habits.
