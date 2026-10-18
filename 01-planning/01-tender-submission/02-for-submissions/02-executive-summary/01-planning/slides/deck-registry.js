// Master slide registry: stores all slide HTML templates
// This allows sample-deck.html to run directly by double-clicking in file:// (no server needed),
// while maintaining each slide as a clean, manageable template module.

window.DECK_SLIDES = [
  // SLIDE 1: COVER
  `<!-- SLIDE 1: COVER -->
<div class="slide-viewport theme-dark active" id="slide-1">
  <div class="slide-header">
    <div class="slide-header-left">
      <span class="section-tag">Tender Submission</span>
      <div class="slide-title-group">
        <h2>Executive Presentation</h2>
        <span>Ref: FY26/FMS/003x/ITQ</span>
      </div>
    </div>
    <div class="slide-header-branding">
      <div class="customer-logo-pill">
        <img src="../assets/design-references/ngee-ann-logo.png" alt="Ngee Ann Polytechnic">
      </div>
      <div class="brand-pill-logo">
        <img src="../assets/design-references/beyond-sensor-logo.png" alt="BeyondSensor Logo">
      </div>
    </div>
  </div>

  <div class="slide-content">
    <div class="hero-content">
      <div class="hero-logo-box">
        <img src="../assets/design-references/beyond-sensor-logo.png" alt="BeyondSensor" style="height: 22px;">
        <span style="color: rgba(255,255,255,0.4); font-size: 13px;">✕</span>
        <img src="../assets/design-references/ngee-ann-logo.png" alt="Ngee Ann Polytechnic" style="height: 20px; background: #FFF; padding: 2px 6px; border-radius: 2px;">
      </div>

      <h1 class="hero-main-title">
        Smart Booking Ecosystem &<br>
        <span style="color: #FF54B0;">Smart Locker Automation</span>
      </h1>
      <p class="hero-sub-title">
        Zero Queues. Zero Locker Hoarding. 100% Asset Accountability.
      </p>

      <div class="hero-meta-bar">
        <div><strong style="color: #FF70BA;">Target:</strong> NP FMS (Block 52)</div>
        <div><strong style="color: #FF70BA;">Bidding Entity:</strong> BeyondSensor</div>
        <div><strong style="color: #FF70BA;">Date:</strong> October 2026</div>
      </div>

      <div class="hero-badges-row">
        <div class="hero-pill-badge">📱 Mobile PWA</div>
        <div class="hero-pill-badge">🗄️ 24/7 Smart Lockers</div>
        <div class="hero-pill-badge">🔒 ISO 27001 Cloud</div>
        <div class="hero-pill-badge">⚡ 36-Month Audit Trail</div>
      </div>
    </div>
  </div>

  <div class="slide-footer">
    <div class="footer-meta">Ngee Ann Polytechnic FMS • Tender FY26</div>
    <div class="slide-counter">01 / 09</div>
  </div>
</div>`,

  // SLIDE 2A: COMPANY PROFILE
  `<!-- SLIDE 2A: COMPANY PROFILE -->
<div class="slide-viewport theme-light" id="slide-2">
  <div class="slide-header">
    <div class="slide-header-left">
      <span class="section-tag">Section 02A</span>
      <div class="slide-title-group">
        <h2>Company Profile & Regional Footprint</h2>
        <span>Enterprise Physical Security Solutions & Customized Software Engineering</span>
      </div>
    </div>
    <div class="slide-header-branding">
      <div class="customer-logo-pill">
        <img src="../assets/design-references/ngee-ann-logo.png" alt="Ngee Ann Polytechnic">
      </div>
      <div class="brand-pill-logo">
        <img src="../assets/design-references/beyond-sensor-logo.png" alt="BeyondSensor Logo">
      </div>
    </div>
  </div>

  <div class="slide-content">
    <div style="display: grid; grid-template-columns: 1.3fr 1fr; gap: 16px; height: 100%;">
      <!-- Left: Core Expertise -->
      <div class="card-clean featured" style="display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div class="card-title">🏢 Core Focus & Domain Expertise</div>
          <div class="card-subtitle">Bridging Physical Security Hardware with High-Reliability Software</div>
          
          <ul class="bullet-compact" style="margin-top: 12px;">
            <li>
              <strong>Physical Security Solutions (Primary Forte)</strong>
              Specializing in physical security ecosystems, CCTV infrastructure, smart access control, and IoT hardware integration.
            </li>
            <li>
              <strong>Customized Software for Security Agencies & Public Sector</strong>
              Engineering tailored operational platforms for major security agencies (G4S, Prosegur, AETOS) and statutory boards.
            </li>
            <li>
              <strong>Mission-Critical Workflow Engineering</strong>
              Purpose-built mobile/web operational systems that replace paperwork and eliminate administrative bottlenecks.
            </li>
          </ul>
        </div>

        <div style="background: var(--light-bg-subtle); border-radius: 3px; padding: 10px 14px; border: 1px solid var(--light-border);">
          <strong style="font-size: 12px; color: var(--brand-magenta);">HQ Engineering Hub:</strong>
          <span style="font-size: 12px; color: var(--light-text-body);"> 1 Yishun Industrial Street 1, #08-03, Singapore 768160</span>
        </div>
      </div>

      <!-- Right: Regional Footprint & Delivery Capability -->
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div class="card-clean" style="flex: 1;">
          <div class="card-title" style="font-size: 14px;">🌏 Regional Presence & Network</div>
          <p style="font-size: 12px; margin-bottom: 12px; color: var(--light-text-muted);">
            Strategically established across Southeast Asia with localized technical operations:
          </p>

          <div style="display: flex; flex-direction: column; gap: 8px;">
            <div class="geo-pill">
              <span>🇸🇬</span>
              <div>
                <strong>Singapore (Headquarters)</strong>
                <div style="font-size: 11px; color: var(--light-text-muted); font-weight: normal;">Core R&D, System Engineering & 24/7 SLA Support</div>
              </div>
            </div>

            <div class="geo-pill">
              <span>🇲🇾</span>
              <div>
                <strong>Malaysia (Kuala Lumpur)</strong>
                <div style="font-size: 11px; color: var(--light-text-muted); font-weight: normal;">Software QA & Regional Solution Engineering</div>
              </div>
            </div>

            <div class="geo-pill">
              <span>🇵🇭</span>
              <div>
                <strong>Philippines (Manila)</strong>
                <div style="font-size: 11px; color: var(--light-text-muted); font-weight: normal;">Field Deployment & Technical Support Operations</div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-clean" style="padding: 12px 16px;">
          <div style="font-weight: 700; font-size: 12.5px; color: var(--light-text-heading);">✨ What This Means for NP FMS:</div>
          <p style="font-size: 11.5px; color: var(--light-text-muted); margin-top: 3px;">
            A well-resourced engineering partner with the stability of a regional firm and the speed of direct on-site Singapore response.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="slide-footer">
    <div class="footer-meta">Company Profile & Regional Footprint</div>
    <div class="slide-counter">02A / 09</div>
  </div>
</div>`,

  // SLIDE 2B: TRACK RECORD
  `<!-- SLIDE 2B: TRACK RECORD -->
<div class="slide-viewport theme-light" id="slide-3">
  <div class="slide-header">
    <div class="slide-header-left">
      <span class="section-tag">Section 02B</span>
      <div class="slide-title-group">
        <h2>Track Record: Proven Government Deliveries</h2>
        <span>100% Public-Sector Deployments with High Data Classification Rigor</span>
      </div>
    </div>
    <div class="slide-header-branding">
      <div class="customer-logo-pill">
        <img src="../assets/design-references/ngee-ann-logo.png" alt="Ngee Ann Polytechnic">
      </div>
      <div class="brand-pill-logo">
        <img src="../assets/design-references/beyond-sensor-logo.png" alt="BeyondSensor Logo">
      </div>
    </div>
  </div>

  <div class="slide-content">
    <div style="display: grid; grid-template-columns: 7fr 3fr; gap: 16px; height: 100%;">
      <!-- LEFT SIDE (70%): Clean Project References -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
        <!-- Record 1: MOE -->
        <div class="record-card" style="padding: 14px 16px; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="record-header">
              <div class="record-client">1. G4S / Ministry of Education (MOE)</div>
            </div>
            <p style="font-size: 12px; color: var(--light-text-body); line-height: 1.45; margin-top: 4px;">
              <strong>Scope:</strong> Full-stack cloud SaaS powering daily security operations, QR/NFC perimeter clocking, and visitor tracking across <strong>100+ schools islandwide</strong>.
            </p>
            <div style="margin-top: 8px; font-family: var(--font-mono); font-size: 11px; color: var(--light-text-muted);">
              • Role: Sole Software & Cloud Provider<br>
              • Scale: 100+ Schools Islandwide
            </div>
          </div>
          <div style="margin-top: 10px; padding-top: 8px; border-top: 1px dashed var(--light-border); display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 11px; color: var(--light-text-muted);">Contract Value:</span>
            <span class="record-value">&gt; S$ 960,000 SGD</span>
          </div>
        </div>

        <!-- Record 2: POLCAM -->
        <div class="record-card" style="padding: 14px 16px; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="record-header">
              <div class="record-client">2. AETOS / Police (POLCAM)</div>
            </div>
            <p style="font-size: 12px; color: var(--light-text-body); line-height: 1.45; margin-top: 4px;">
              <strong>Scope:</strong> Centralized asset tracking and inspection audit software for <strong>20,000+ CCTV camera installations</strong>, field infrastructure, and serial/barcode reconciliation.
            </p>
            <div style="margin-top: 8px; font-family: var(--font-mono); font-size: 11px; color: var(--light-text-muted);">
              • Role: Asset Tracking System Developer<br>
              • Scale: 20,000+ Physical Assets (20x FMS)
            </div>
          </div>
          <div style="margin-top: 10px; padding-top: 8px; border-top: 1px dashed var(--light-border); display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 11px; color: var(--light-text-muted);">Contract Value:</span>
            <span class="record-value">S$ 120k – 240k SGD</span>
          </div>
        </div>

        <!-- Record 3: URA -->
        <div class="record-card" style="padding: 14px 16px; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="record-header">
              <div class="record-client">3. Prosegur / URA Singapore</div>
            </div>
            <p style="font-size: 12px; color: var(--light-text-body); line-height: 1.45; margin-top: 4px;">
              <strong>Scope:</strong> Statutory ground field inspection platform featuring multi-tier RBAC access controls, mobile checklist workflows, and sensitive regulatory data management.
            </p>
            <div style="margin-top: 8px; font-family: var(--font-mono); font-size: 11px; color: var(--light-text-muted);">
              • Role: Custom SaaS Workflow Architect<br>
              • Governance: Strict Public Sector Data Rigor
            </div>
          </div>
          <div style="margin-top: 10px; padding-top: 8px; border-top: 1px dashed var(--light-border); display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 11px; color: var(--light-text-muted);">Contract Value:</span>
            <span class="record-value">&gt; S$ 50,000 SGD</span>
          </div>
        </div>

        <!-- Record 4: NEA -->
        <div class="record-card" style="padding: 14px 16px; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div class="record-header">
              <div class="record-client">4. Partner / NEA Singapore</div>
            </div>
            <p style="font-size: 12px; color: var(--light-text-body); line-height: 1.45; margin-top: 4px;">
              <strong>Scope:</strong> Specialized CCTV deployment tracking and digital evidence custody platform delivering court-admissible audit reports and continuous software variations.
            </p>
            <div style="margin-top: 8px; font-family: var(--font-mono); font-size: 11px; color: var(--light-text-muted);">
              • Role: Core Platform Developer & Data Host<br>
              • Compliance: Tamper-Evident Court Evidence
            </div>
          </div>
          <div style="margin-top: 10px; padding-top: 8px; border-top: 1px dashed var(--light-border); display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 11px; color: var(--light-text-muted);">Contract Value:</span>
            <span class="record-value">&gt; S$ 85,000 SGD</span>
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE (30%): Key Delivery Highlights -->
      <div class="card-clean featured" style="display: flex; flex-direction: column; justify-content: space-between; padding: 18px 16px; background: #FFFFFF;">
        <div>
          <div class="card-title" style="font-size: 14px; margin-bottom: 4px;">🎯 Key Highlights</div>
          <div class="card-subtitle" style="font-size: 11.5px; margin-bottom: 12px;">What This Proves for NP FMS</div>

          <div style="display: flex; flex-direction: column; gap: 8.5px;">
            <div style="border-left: 3px solid var(--brand-magenta); padding-left: 8px;">
              <strong style="font-size: 11.5px; color: var(--light-text-heading); display: block;">100% Government Track Record</strong>
              <span style="font-size: 10.5px; color: var(--light-text-muted); line-height: 1.3; display: block;">All references are public sector, handling high data classification rigor.</span>
            </div>

            <div style="border-left: 3px solid #EC4899; padding-left: 8px;">
              <strong style="font-size: 11.5px; color: var(--light-text-heading); display: block;">Deep IoT & Hardware Integration</strong>
              <span style="font-size: 10.5px; color: var(--light-text-muted); line-height: 1.3; display: block;">Beyond web & mobile: Native expertise in IoT gateways, locker sensors & access telemetry.</span>
            </div>

            <div style="border-left: 3px solid var(--color-blue); padding-left: 8px;">
              <strong style="font-size: 11.5px; color: var(--light-text-heading); display: block;">Full-Lifecycle Ownership</strong>
              <span style="font-size: 10.5px; color: var(--light-text-muted); line-height: 1.3; display: block;">We manage software, infrastructure, and data—even as a sub-contractor.</span>
            </div>

            <div style="border-left: 3px solid var(--color-emerald); padding-left: 8px;">
              <strong style="font-size: 11.5px; color: var(--light-text-heading); display: block;">Approved Tech Stacks</strong>
              <span style="font-size: 10.5px; color: var(--light-text-muted); line-height: 1.3; display: block;">Built strictly on ISO 27001-certified underlying cloud architecture.</span>
            </div>

            <div style="border-left: 3px solid #6366F1; padding-left: 8px;">
              <strong style="font-size: 11.5px; color: var(--light-text-heading); display: block;">≥ 99% Uptime SLA</strong>
              <span style="font-size: 10.5px; color: var(--light-text-muted); line-height: 1.3; display: block;">Sustained high-availability across live multi-year institutional contracts.</span>
            </div>

            <div style="border-left: 3px solid var(--color-amber); padding-left: 8px;">
              <strong style="font-size: 11.5px; color: var(--light-text-heading); display: block;">Proven Ground Adoption</strong>
              <span style="font-size: 10.5px; color: var(--light-text-muted); line-height: 1.3; display: block;">Field-validated workflows built for real users, eliminating friction.</span>
            </div>
          </div>
        </div>

        <div style="background: var(--light-bg-subtle); border-radius: 3px; padding: 8px 10px; border: 1px solid var(--light-border); margin-top: 10px;">
          <span style="font-size: 11px; color: var(--color-emerald); font-weight: 700;">Clause 2.1B:</span>
          <span style="font-size: 11px; color: var(--light-text-body);"> 4/4 references &gt;S$50k (Max 10/10 Score Guaranteed).</span>
        </div>
      </div>
    </div>
  </div>

  <div class="slide-footer">
    <div class="footer-meta">100% Government Track Record • Full-Stack Management • 99%+ Uptime</div>
    <div class="slide-counter">02B / 09</div>
  </div>
</div>`,

  // SLIDE 3: UNDERSTANDING NEEDS
  `<!-- SLIDE 3: UNDERSTANDING NEEDS -->
<div class="slide-viewport theme-light" id="slide-4">
  <div class="slide-header">
    <div class="slide-header-left">
      <span class="section-tag">Section 03</span>
      <div class="slide-title-group">
        <h2>Understanding FMS Needs: The Block 52 Reality</h2>
        <span>Targeting root operational friction points with engineered solutions</span>
      </div>
    </div>
    <div class="slide-header-branding">
      <div class="customer-logo-pill">
        <img src="../assets/design-references/ngee-ann-logo.png" alt="Ngee Ann Polytechnic">
      </div>
      <div class="brand-pill-logo">
        <img src="../assets/design-references/beyond-sensor-logo.png" alt="BeyondSensor Logo">
      </div>
    </div>
  </div>

  <div class="slide-content">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; height: 100%;">
      <!-- Problems -->
      <div class="split-col">
        <div style="font-family: var(--font-heading); font-weight: 700; font-size: 13.5px; color: #9F1239; margin-bottom: 2px;">
          ⚠️ Current Operational Friction (Before)
        </div>

        <div class="alert-card-problem">
          <div class="alert-title">1. Counter Queues at Block 52</div>
          <p>Bottlenecks at #01-01, 01-02, 01-03 during peak 9 AM checkout and 5 PM return rushes.</p>
        </div>

        <div class="alert-card-problem">
          <div class="alert-title">2. After-Hours Collection Deadlock</div>
          <p>Shoots run late or on weekends; students cannot collect/return outside 9-to-5 store hours.</p>
        </div>

        <div class="alert-card-problem">
          <div class="alert-title">3. Uncollected Locker Hoarding</div>
          <p>Uncollected gear sits in lockers indefinitely, blocking other students from filming.</p>
        </div>
      </div>

      <!-- Solutions -->
      <div class="split-col">
        <div style="font-family: var(--font-heading); font-weight: 700; font-size: 13.5px; color: #065F46; margin-bottom: 2px;">
          ✨ BeyondSensor Solution (After)
        </div>

        <div class="alert-card-solution">
          <div class="alert-title">1. Express iPad Counter Desk</div>
          <p>Rapid barcode scan & digital stylus sign-off completed in under 15 seconds per kit.</p>
        </div>

        <div class="alert-card-solution">
          <div class="alert-title">2. 24/7 Smart Locker Self-Service</div>
          <p>Contactless collection & drop-off via OTP/QR pass with physical compartment sensors.</p>
        </div>

        <div class="alert-card-solution">
          <div class="alert-title">3. Auto-Expiry & Waitlist Release</div>
          <p>Automated timeouts free uncollected lockers and instantly notify waiting crews.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="slide-footer">
    <div class="footer-meta">Understanding of Requirements • Block 52 Focus</div>
    <div class="slide-counter">03 / 09</div>
  </div>
</div>`,

  // SLIDE 4: ARCHITECTURE
  `<!-- SLIDE 4: ARCHITECTURE -->
<div class="slide-viewport theme-light" id="slide-5">
  <div class="slide-header">
    <div class="slide-header-left">
      <span class="section-tag">Section 04</span>
      <div class="slide-title-group">
        <h2>Cloud & Smart Locker Architecture</h2>
        <span>Zero NP server maintenance, instant responsiveness, and enterprise security</span>
      </div>
    </div>
    <div class="slide-header-branding">
      <div class="customer-logo-pill">
        <img src="../assets/design-references/ngee-ann-logo.png" alt="Ngee Ann Polytechnic">
      </div>
      <div class="brand-pill-logo">
        <img src="../assets/design-references/beyond-sensor-logo.png" alt="BeyondSensor Logo">
      </div>
    </div>
  </div>

  <div class="slide-content">
    <!-- 4 Pillars -->
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 14px;">
      <div class="card-clean featured" style="padding: 14px;">
        <div class="card-title" style="font-size: 13px;">📱 Universal PWA</div>
        <p style="font-size: 11.5px;">No app store installs. Instant access on iOS, Android, iPads, and PCs.</p>
      </div>
      <div class="card-clean featured" style="padding: 14px;">
        <div class="card-title" style="font-size: 13px;">⚡ Serverless Cloud</div>
        <p style="font-size: 11.5px;">Vercel Edge + Supabase Postgres. Scales automatically during rush hours.</p>
      </div>
      <div class="card-clean featured" style="padding: 14px;">
        <div class="card-title" style="font-size: 13px;">🗄️ Smart Controller</div>
        <p style="font-size: 11.5px;">Secure IoT locker gateway with door sensors and offline override keys.</p>
      </div>
      <div class="card-clean featured" style="padding: 14px;">
        <div class="card-title" style="font-size: 13px;">🛡️ ISO/IEC 27001</div>
        <p style="font-size: 11.5px;">Certified cloud tiers, role-based RBAC, and 36-month immutable audit logs.</p>
      </div>
    </div>

    <!-- Flow Stepper -->
    <div class="card-clean" style="flex: 1; padding: 16px 20px;">
      <div style="font-family: var(--font-heading); font-weight: 700; font-size: 13px; color: var(--light-text-heading); margin-bottom: 10px;">
        🏗️ 4-Tier Architectural Dataflow
      </div>

      <div class="process-stepper">
        <div class="process-step">
          <div class="process-step-num">01 • CLIENTS</div>
          <div class="process-step-name">Responsive PWA</div>
          <div class="process-step-desc">Students (Mobile) • Store (iPads) • Faculty (Desktop)</div>
        </div>
        <div class="process-step">
          <div class="process-step-num">02 • API GATEWAY</div>
          <div class="process-step-name">Edge Functions</div>
          <div class="process-step-desc">Auth validation • RBAC enforcement • 1-click token approvals</div>
        </div>
        <div class="process-step">
          <div class="process-step-num">03 • DATABASE</div>
          <div class="process-step-name">Cloud State Engine</div>
          <div class="process-step-desc">Live inventory state • Conflict detector • 36-mo audit logs</div>
        </div>
        <div class="process-step active-step">
          <div class="process-step-num">04 • HARDWARE</div>
          <div class="process-step-name">Smart Lockers</div>
          <div class="process-step-desc">Block 52 controller • Dynamic OTP/QR • Door telemetry</div>
        </div>
      </div>
    </div>
  </div>

  <div class="slide-footer">
    <div class="footer-meta">Proposed Solution & System Architecture</div>
    <div class="slide-counter">04 / 09</div>
  </div>
</div>`,

  // SLIDE 5: USER WORKFLOWS
  `<!-- SLIDE 5: USER WORKFLOWS -->
<div class="slide-viewport theme-light" id="slide-6">
  <div class="slide-header">
    <div class="slide-header-left">
      <span class="section-tag">Section 05</span>
      <div class="slide-title-group">
        <h2>Equipment & Venue Booking Lifecycles</h2>
        <span>Clear custody accountability with tailored stakeholder journeys</span>
      </div>
    </div>
    <div class="slide-header-branding">
      <div class="customer-logo-pill">
        <img src="../assets/design-references/ngee-ann-logo.png" alt="Ngee Ann Polytechnic">
      </div>
      <div class="brand-pill-logo">
        <img src="../assets/design-references/beyond-sensor-logo.png" alt="BeyondSensor Logo">
      </div>
    </div>
  </div>

  <div class="slide-content">
    <!-- 5-Step Pipeline -->
    <div style="margin-bottom: 14px;">
      <div class="process-stepper">
        <div class="process-step">
          <div class="process-step-num">STAGE 01</div>
          <div class="process-step-name">Kit Selection</div>
          <div class="process-step-desc">Student books cinema gear packages via mobile PWA</div>
        </div>
        <div class="process-step">
          <div class="process-step-num">STAGE 02</div>
          <div class="process-step-name">Lecturer Approval</div>
          <div class="process-step-desc">1-click approve/reject link sent directly to faculty email</div>
        </div>
        <div class="process-step">
          <div class="process-step-num">STAGE 03</div>
          <div class="process-step-name">Store Prep & Deposit</div>
          <div class="process-step-desc">Staff prep gear & deposit into assigned Smart Locker</div>
        </div>
        <div class="process-step active-step">
          <div class="process-step-num">STAGE 04</div>
          <div class="process-step-name">Self-Collection</div>
          <div class="process-step-desc">Student scans QR/PIN; sensors verify custody handover</div>
        </div>
        <div class="process-step">
          <div class="process-step-num">STAGE 05</div>
          <div class="process-step-name">Return Verification</div>
          <div class="process-step-desc">Counter check or drop-off with digital stylus sign-off</div>
        </div>
      </div>
    </div>

    <!-- 2 Cards -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; flex: 1;">
      <div class="card-clean">
        <div class="card-title">👥 The 4 Tailored User Experiences</div>
        <ul class="bullet-compact" style="margin-top: 6px;">
          <li><strong>Students:</strong> Fast search, quota checks, dynamic mobile locker pass.</li>
          <li><strong>Faculty:</strong> 1-click batch approvals directly from mobile email.</li>
          <li><strong>Store Officers:</strong> Rapid barcode counter scanning, inventory status, locker control.</li>
          <li><strong>SysAdmins:</strong> Course quotas, venue blackout rules, 36-month audit exports.</li>
        </ul>
      </div>

      <div class="card-clean">
        <div class="card-title">🎬 Venue Booking & Conflict Prevention</div>
        <ul class="bullet-compact" style="margin-top: 6px;">
          <li><strong>Conflict-Free Timetabling:</strong> Auto-blocks slots during scheduled classes.</li>
          <li><strong>Module Entitlements:</strong> Restricts high-end studios to qualified cohorts.</li>
          <li><strong>Key-Tag Locker Dispenser:</strong> Studio keys collected and returned via smart lockers.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="slide-footer">
    <div class="footer-meta">Operational Lifecycles & Workflow Mapping</div>
    <div class="slide-counter">05 / 09</div>
  </div>
</div>`,

  // SLIDE 6: NOTIFICATIONS
  `<!-- SLIDE 6: NOTIFICATIONS -->
<div class="slide-viewport theme-light" id="slide-7">
  <div class="slide-header">
    <div class="slide-header-left">
      <span class="section-tag">Section 06</span>
      <div class="slide-title-group">
        <h2>Event-Driven Notification Matrix</h2>
        <span>Zero Dead Air: Real-time alerts keeping students, staff, and faculty aligned</span>
      </div>
    </div>
    <div class="slide-header-branding">
      <div class="customer-logo-pill">
        <img src="../assets/design-references/ngee-ann-logo.png" alt="Ngee Ann Polytechnic">
      </div>
      <div class="brand-pill-logo">
        <img src="../assets/design-references/beyond-sensor-logo.png" alt="BeyondSensor Logo">
      </div>
    </div>
  </div>

  <div class="slide-content">
    <table class="clean-table" style="margin-bottom: 12px;">
      <thead>
        <tr>
          <th>Event</th>
          <th>Recipient</th>
          <th>Trigger</th>
          <th>Channel</th>
          <th>Expected Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Booking Submitted</strong></td>
          <td>Approving Lecturer</td>
          <td>Student checkout</td>
          <td><span class="badge-clean badge-magenta">In-App + Email</span></td>
          <td>1-Click Approve / Reject</td>
        </tr>
        <tr>
          <td><strong>Booking Approved</strong></td>
          <td>Borrower + Store Staff</td>
          <td>Faculty authorization</td>
          <td><span class="badge-clean badge-green">Email + In-App</span></td>
          <td>Store prepares kit</td>
        </tr>
        <tr>
          <td><strong>Ready for Collection</strong></td>
          <td>Borrower (Student)</td>
          <td>Kit placed in locker/counter</td>
          <td><span class="badge-clean badge-blue">Push + QR Email</span></td>
          <td>Collect at Block 52 with PIN/QR</td>
        </tr>
        <tr>
          <td><strong>Custody Transferred</strong></td>
          <td>Borrower + Store Staff</td>
          <td>Sensor verifies open/scan</td>
          <td><span class="badge-clean badge-green">Audit Log</span></td>
          <td>Loan period begins</td>
        </tr>
        <tr>
          <td><strong>Return Approaching</strong></td>
          <td>Borrower</td>
          <td>2 hours before expiry</td>
          <td><span class="badge-clean badge-magenta">Urgent Push</span></td>
          <td>Return to locker / counter</td>
        </tr>
        <tr>
          <td><strong>Overdue Alert</strong></td>
          <td>Borrower + Manager</td>
          <td>Grace period exceeded</td>
          <td><span class="badge-clean badge-rose">Email + Red Flag</span></td>
          <td>Account suspended until return</td>
        </tr>
      </tbody>
    </table>

    <!-- 3 Small Highlights -->
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
      <div class="card-clean" style="padding: 10px 14px;">
        <div style="font-weight: 700; font-size: 12.5px; color: var(--light-text-heading);">⚡ Instant Push</div>
        <div style="font-size: 11px; color: var(--light-text-muted); margin-top: 2px;">Sub-second delivery via serverless webhooks.</div>
      </div>
      <div class="card-clean" style="padding: 10px 14px;">
        <div style="font-weight: 700; font-size: 12.5px; color: var(--light-text-heading);">🔕 Anti-Spam Bundling</div>
        <div style="font-size: 11px; color: var(--light-text-muted); margin-top: 2px;">Kit loans grouped into a single notification.</div>
      </div>
      <div class="card-clean" style="padding: 10px 14px;">
        <div style="font-weight: 700; font-size: 12.5px; color: var(--light-text-heading);">📜 100% Audit Logged</div>
        <div style="font-size: 11px; color: var(--light-text-muted); margin-top: 2px;">Every timestamp retained for 36 months.</div>
      </div>
    </div>
  </div>

  <div class="slide-footer">
    <div class="footer-meta">Event-Driven Notification System</div>
    <div class="slide-counter">06 / 09</div>
  </div>
</div>`,

  // SLIDE 7: DELIVERY & SLA
  `<!-- SLIDE 7: DELIVERY & SLA -->
<div class="slide-viewport theme-light" id="slide-8">
  <div class="slide-header">
    <div class="slide-header-left">
      <span class="section-tag">Section 07</span>
      <div class="slide-title-group">
        <h2>Project Delivery Roadmap & Support SLA</h2>
        <span>Structured 4-sprint rollout with zero semester disruption</span>
      </div>
    </div>
    <div class="slide-header-branding">
      <div class="customer-logo-pill">
        <img src="../assets/design-references/ngee-ann-logo.png" alt="Ngee Ann Polytechnic">
      </div>
      <div class="brand-pill-logo">
        <img src="../assets/design-references/beyond-sensor-logo.png" alt="BeyondSensor Logo">
      </div>
    </div>
  </div>

  <div class="slide-content">
    <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 16px; height: 100%;">
      <!-- Roadmap -->
      <div class="card-clean featured" style="display: flex; flex-direction: column; justify-content: space-between;">
        <div class="card-title">🗓️ 10-Week Implementation Roadmap</div>
        
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div style="border-left: 3px solid var(--brand-magenta); padding-left: 10px;">
            <strong style="font-size: 12.5px; color: var(--light-text-heading);">Weeks 1-2: Validation & Site Survey</strong>
            <div style="font-size: 11.5px; color: var(--light-text-muted);">Block 52 locker sizing, store layout review, and role matrix.</div>
          </div>

          <div style="border-left: 3px solid var(--color-blue); padding-left: 10px;">
            <strong style="font-size: 12.5px; color: var(--light-text-heading);">Weeks 3-6: Platform & Locker Build</strong>
            <div style="font-size: 11.5px; color: var(--light-text-muted);">PWA interface, cloud backend, and Smart Locker IoT integration.</div>
          </div>

          <div style="border-left: 3px solid var(--color-emerald); padding-left: 10px;">
            <strong style="font-size: 12.5px; color: var(--light-text-heading);">Weeks 7-8: SIT / UAT & Asset Tagging</strong>
            <div style="font-size: 11.5px; color: var(--light-text-muted);">Staff user testing, data migration, and on-site 1,000 asset tagging.</div>
          </div>

          <div style="border-left: 3px solid #6366F1; padding-left: 10px;">
            <strong style="font-size: 12.5px; color: var(--light-text-heading);">Weeks 9-10: Briefings & Semester Go-Live</strong>
            <div style="font-size: 11.5px; color: var(--light-text-muted);">Faculty/student orientation, pilot dry run, official cutover.</div>
          </div>
        </div>
      </div>

      <!-- SLA -->
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div class="card-clean" style="flex: 1;">
          <div class="card-title">🛡️ Maintenance & SLA Commitments</div>
          <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 8px;">
            <div style="background: #FFF1F2; border: 1px solid #FECDD3; border-radius: 6px; padding: 9px 12px;">
              <div style="display: flex; justify-content: space-between;">
                <strong style="color: #BE123C; font-size: 12px;">Severity 1 (Critical)</strong>
                <span class="badge-clean badge-rose">&lt; 1 Hr Response</span>
              </div>
              <div style="font-size: 11px; color: #881337; margin-top: 2px;">Store desk or locker offline; immediate dispatch.</div>
            </div>

            <div style="background: #F0F9FF; border: 1px solid #BAE6FD; border-radius: 6px; padding: 9px 12px;">
              <div style="display: flex; justify-content: space-between;">
                <strong style="color: #0369A1; font-size: 12px;">Severity 2-3 (Standard)</strong>
                <span class="badge-clean badge-blue">&lt; 4 Hrs Response</span>
              </div>
              <div style="font-size: 11px; color: #0C4A6E; margin-top: 2px;">Non-critical bug fixes, minor workflow queries.</div>
            </div>
          </div>
        </div>

        <div class="card-clean" style="padding: 10px 14px;">
          <div style="font-weight: 700; font-size: 12px; color: var(--light-text-heading);">📂 Accompanying Dossiers</div>
          <div style="font-size: 11px; color: var(--light-text-muted); margin-top: 2px;">
            Smart Locker Specs • System Architecture Blueprint • ISO 27001 Registry
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="slide-footer">
    <div class="footer-meta">Delivery Roadmap & Service Level Agreements</div>
    <div class="slide-counter">07 / 09</div>
  </div>
</div>`,

  // SLIDE 8: ENDING
  `<!-- SLIDE 8: ENDING -->
<div class="slide-viewport theme-dark" id="slide-9">
  <div class="slide-header">
    <div class="slide-header-left">
      <span class="section-tag">Strategic Partnership</span>
      <div class="slide-title-group">
        <h2>Partner Pledge & Sign-Off</h2>
        <span>Dedicated long-term partnership with Ngee Ann Polytechnic FMS</span>
      </div>
    </div>
    <div class="slide-header-branding">
      <div class="customer-logo-pill">
        <img src="../assets/design-references/ngee-ann-logo.png" alt="Ngee Ann Polytechnic">
      </div>
      <div class="brand-pill-logo">
        <img src="../assets/design-references/beyond-sensor-logo.png" alt="BeyondSensor Logo">
      </div>
    </div>
  </div>

  <div class="slide-content">
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; padding: 0 40px;">
      <div class="hero-logo-box" style="margin-bottom: 14px;">
        <img src="../assets/design-references/beyond-sensor-logo.png" alt="BeyondSensor" style="height: 20px;">
        <span style="color: rgba(255,255,255,0.4); font-size: 13px;">✕</span>
        <img src="../assets/design-references/ngee-ann-logo.png" alt="Ngee Ann Polytechnic" style="height: 18px; background: #FFF; padding: 2px 6px; border-radius: 2px;">
      </div>

      <h2 style="font-family: var(--font-heading); font-size: 28px; font-weight: 800; color: #FFF; margin-bottom: 8px;">
        Ready to Deliver the Gold Standard for Block 52.
      </h2>

      <p style="font-size: 15px; color: #CBD5E1; max-width: 680px; margin-bottom: 24px;">
        Proven public sector asset rigor paired with modern consumer-grade web apps.
      </p>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; width: 100%; max-width: 740px; margin-bottom: 24px;">
        <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 8px; padding: 12px;">
          <div style="color: #FF54B0; font-family: var(--font-mono); font-weight: 700; font-size: 12.5px;">ZERO QUEUES</div>
          <div style="color: #FFF; font-size: 11.5px; margin-top: 3px;">PWA mobile touchpoints + 24/7 locker pickup</div>
        </div>
        <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 8px; padding: 12px;">
          <div style="color: #38BDF8; font-family: var(--font-mono); font-weight: 700; font-size: 12.5px;">100% CUSTODY</div>
          <div style="color: #FFF; font-size: 11.5px; margin-top: 3px;">36-month audit trail & digital sign-offs</div>
        </div>
        <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 8px; padding: 12px;">
          <div style="color: #34D399; font-family: var(--font-mono); font-weight: 700; font-size: 12.5px;">LOCAL TEAM</div>
          <div style="color: #FFF; font-size: 11.5px; margin-top: 3px;">Direct on-site tagging & commissioning</div>
        </div>
      </div>

      <div style="font-family: var(--font-mono); font-size: 12px; color: #94A3B8;">
        BeyondSensor Pte Ltd • Singapore • <span style="color: #FF54B0;">contact@beyondsensor.com</span>
      </div>
    </div>
  </div>

  <div class="slide-footer">
    <div class="footer-meta">Ngee Ann Polytechnic FMS • Tender Submission FY26</div>
    <div class="slide-counter">08 / 09</div>
  </div>
</div>`
];
