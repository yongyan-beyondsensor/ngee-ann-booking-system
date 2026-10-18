# Executive Presentation Slide Deck System (NP FMS Tender)

> **Document Type:** Tender Executive Presentation Engine & Blueprints  
> **Tender Reference:** `FY26/FMS/003x/ITQ` — *School of Film & Media Studies (FMS), Ngee Ann Polytechnic*  
> **Project Title:** Equipment & Facility Booking System with Smart Locker Integration (Block 52)  
> **Bidding Entity:** BeyondSensor Pte Ltd  
> **Aspect Ratio:** Standard 4:3 PowerPoint presentation format (`1024px` × `768px`)  

---

## 1. Directory Structure & Architecture

```text
01-planning/
├── README.md                      # [THIS FILE] System setup, guidelines, and dev workflows
├── sample-deck.html               # Master presentation deck viewer (standalone or server-hosted)
├── deck-styles.css                # 4:3 slide styling engine, color tokens & @media print rules
├── 01-key-notes-and-topics.md     # Narrative talking points, slide-by-slide strategy & evaluation mapping
├── _plan.md                       # Strategic roadmap and breakdown
└── slides/                        # Modular slide components & data registry
    ├── deck-registry.js           # Slide template registry (ensures zero-CORS file:// browser opening)
    ├── 01-cover.html              # Slide 01: Cover Deck (Dark Modern Tech)
    ├── 02a-company-profile.html   # Slide 02A: Profile & Regional Presence (SG / MY / PH)
    ├── 02b-track-record.html      # Slide 02B: Track Records (70/30 split, bottom-docked values, IoT)
    ├── 03-understanding-needs.html# Slide 03: Block 52 Operational Friction vs. Solutions
    ├── 04-architecture.html       # Slide 04: Universal PWA + Edge Cloud + Locker IoT + ISO 27001
    ├── 05-user-workflows.html     # Slide 05: 5-Stage Loan Lifecycle & 4 Stakeholder Roles
    ├── 06-notification-matrix.html# Slide 06: Event-Driven Notification Matrix
    ├── 07-delivery-sla.html       # Slide 07: 10-Week Implementation Roadmap & Severity 1-3 SLAs
    └── 08-ending.html             # Slide 08: Strategic Partnership Pledge & Sign-Off (Dark Theme)
```

---

## 2. Quick Start / How to Run

### Option A: Direct Double-Click (Zero Setup Required)
You can directly double-click `sample-deck.html` in Windows Explorer or open it in any modern browser (`Chrome`, `Edge`, `Firefox`, `Safari`):
- URL will be: `file:///path/to/sample-deck.html`
- **Why it works:** The deck leverages `slides/deck-registry.js`, which avoids browser `fetch()` CORS security blocks on `file://` URLs.

### Option B: Local Web Server (Recommended for Live Editing)
If you are developing in VS Code or running terminal commands:
```powershell
# Using npx serve (or VS Code "Live Server" extension)
npx serve e:\dev\ngee-ann-booking-system\01-planning\01-tender-submission\02-for-submissions\02-executive-summary\01-planning
```

---

## 3. Keyboard & Interactive Controls

| Control | Action |
| :--- | :--- |
| **`Right Arrow` / `Space` / `Page Down`** | Advance to next slide |
| **`Left Arrow` / `Page Up`** | Return to previous slide |
| **`F` Key** | Toggle Fullscreen Mode (`1024x768` 4:3 centered canvas) |
| **`Print / PDF` Button** | Print to PDF / Paper with clean 4:3 page breaks |

---

## 4. Design Guidelines & Visual Standards

All future developers and AI agents must preserve the established visual guidelines:

1. **Aspect Ratio:**
   - Strict **4:3 aspect ratio** (`1024px` width by `768px` height).
   - Clean viewport centering with subtle drop-shadow on desktop screens.

2. **Color Themes:**
   - **Cover (`#slide-1`) & Ending (`#slide-9`):** Dark Modern Tech (`#090B12` to `#111422` slate navy with BeyondSensor magenta glow `#C20078` / `#FF54B0`).
   - **Body Slides (`#slide-2` to `#slide-8`):** Crisp Clean Tech Light (`#F8FAFC` base, `#FFFFFF` cards, `#E2E8F0` borders, `#0F172A` text).

3. **Corner Geometry:**
   - **Squarish Styling:** Keep corner border-radii minimal (`2px` to `4px`). Avoid large rounded/bubbly cards (`>8px`).

4. **Branding & Logos:**
   - **Dual Branding Header:** Every slide header must show both customer logo (`ngee-ann-logo.png`) and vendor logo (`beyond-sensor-logo.png`).
   - **Contrast Background on BeyondSensor Logo:** The BeyondSensor wordmark contains white text. Always wrap it inside `.brand-pill-logo` or `.hero-logo-box` which have `#0A0D14` background fills with subtle magenta borders so the white letters pop clearly on both light and dark slides.
   - Relative logo paths:
     - From `01-planning/`: `../assets/design-references/`
     - From `slides/*.html`: `../../assets/design-references/`

5. **Slide Copy Rules:**
   - **Punchy and Scannable:** Keep copy concise. Avoid wordy multi-sentence paragraphs.
   - Use bold phrase anchors followed by single-line explanations.

---

## 5. Instructions for Subsequent Developers & Agents

When updating or adding slides, follow this 2-step synchronization:

### Step 1: Update the Modular Slide File (`slides/*.html`)
Make your HTML/content changes in the respective modular slide file (e.g. `slides/02b-track-record.html`). This maintains clean source control and keeps each slide component modular.

### Step 2: Sync to `slides/deck-registry.js`
Update the corresponding template string in `slides/deck-registry.js` so that `sample-deck.html` immediately reflects your changes when opened via `file://`.
> **Asset Path Note in Registry:** In `deck-registry.js`, ensure relative image paths are `../assets/design-references/` since they execute from the root of `sample-deck.html`.

### Step 3: Reusable CSS Classes
Use the predefined CSS tokens in `deck-styles.css` rather than writing inline styles:
- `.card-clean`, `.card-clean.featured`
- `.record-card`, `.record-client`, `.record-value`
- `.bullet-compact` (uses square magenta bullets)
- `.badge-clean` (`badge-magenta`, `badge-green`, `badge-blue`, `badge-rose`)
- `.process-stepper`, `.process-step`, `.active-step`
- `.clean-table`

---

## 6. Slide Mapping Reference (9 Slides Total)

1. **Slide 1:** Executive Cover (`01-cover.html`)
2. **Slide 2A:** Company Profile & Regional Footprint (`02a-company-profile.html`)
3. **Slide 2B:** Track Record & Core Government Proof (`02b-track-record.html`)
4. **Slide 3:** Understanding Requirements: Block 52 Reality (`03-understanding-needs.html`)
5. **Slide 4:** Cloud & Smart Locker Architecture (`04-architecture.html`)
6. **Slide 5:** User Lifecycles & Tailored Experiences (`05-user-workflows.html`)
7. **Slide 6:** Event-Driven Notification Matrix (`06-notification-matrix.html`)
8. **Slide 7:** Delivery Roadmap & SLA Commitments (`07-delivery-sla.html`)
9. **Slide 8:** Strategic Partner Pledge & Sign-Off (`08-ending.html`)
