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
    <div class="slide-counter">01 / 13</div>
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
        <span>Founded in 2022 • Singapore Headquarters & Southeast Asia Presence</span>
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
    <div style="display: grid; grid-template-columns: 1.15fr 1.35fr; gap: 16px; height: 100%;">
      <!-- Left: Company Overview & History -->
      <div class="card-clean featured" style="display: flex; flex-direction: column; justify-content: space-between; padding: 18px 20px;">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <div class="card-title" style="font-size: 15px; margin: 0;">🏢 Company Overview & History</div>
            <span style="font-family: var(--font-mono); font-size: 11px; background: rgba(194, 0, 120, 0.1); color: var(--brand-magenta); border: 1px solid rgba(194, 0, 120, 0.25); border-radius: 3px; padding: 2px 7px; font-weight: 700;">Est. 2022</span>
          </div>
          <div class="card-subtitle" style="margin-bottom: 14px;">High-Reliability Software & IoT Integration for Security & Public Sector</div>

          <div style="display: flex; flex-direction: column; gap: 11px;">
            <div style="border-left: 3px solid var(--brand-magenta); padding-left: 10px;">
              <strong style="font-size: 12.5px; color: var(--light-text-heading); display: block;">Founded in 2022 in Singapore</strong>
              <p style="font-size: 11.5px; color: var(--light-text-body); line-height: 1.45; margin: 2px 0 0 0;">
                Established to modernize mission-critical operations, bridging physical security hardware with high-availability cloud platforms.
              </p>
            </div>

            <div style="border-left: 3px solid var(--color-blue); padding-left: 10px;">
              <strong style="font-size: 12.5px; color: var(--light-text-heading); display: block;">Public Sector & Agency DNA</strong>
              <p style="font-size: 11.5px; color: var(--light-text-body); line-height: 1.45; margin: 2px 0 0 0;">
                Rapidly trusted by tier-1 security agencies (G4S, Prosegur, AETOS) and statutory boards across Singapore for mission-critical systems.
              </p>
            </div>

            <div style="border-left: 3px solid var(--color-emerald); padding-left: 10px;">
              <strong style="font-size: 12.5px; color: var(--light-text-heading); display: block;">100% In-House Engineering</strong>
              <p style="font-size: 11.5px; color: var(--light-text-body); line-height: 1.45; margin: 2px 0 0 0;">
                Zero subcontracting layers. Direct technical accountability across frontend, cloud backend, IoT firmware, and locker hardware.
              </p>
            </div>
          </div>
        </div>

        <div style="background: var(--light-bg-subtle); border-radius: 4px; padding: 10px 14px; border: 1px solid var(--light-border); margin-top: 10px;">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <strong style="font-size: 11.5px; color: var(--brand-magenta);">🇸🇬 Global HQ & Engineering Hub:</strong>
            <span style="font-size: 11px; font-family: var(--font-mono); color: var(--light-text-muted);">Singapore</span>
          </div>
          <div style="font-size: 11.5px; color: var(--light-text-body); margin-top: 2px;">
            1 Yishun Industrial Street 1, #08-03, Singapore 768160
          </div>
        </div>
      </div>

      <!-- Right: Southeast Asia Presence Map & Regional Hubs -->
      <div class="card-clean" style="display: flex; flex-direction: column; justify-content: space-between; padding: 16px 18px; background: #FFFFFF;">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <div class="card-title" style="font-size: 14px; margin: 0;">🌏 Southeast Asia Regional Presence</div>
            <span style="font-size: 11px; color: var(--light-text-muted); font-family: var(--font-mono);">Hub & Spoke Model</span>
          </div>
          <div class="card-subtitle" style="font-size: 11.5px; margin-bottom: 10px;">
            Singapore HQ steering regional delivery capability across SEA
          </div>

          <!-- Stylized South East Asia SVG Map -->
          <div style="position: relative; width: 100%; height: 215px; background: radial-gradient(circle at 50% 60%, #F8FAFC 0%, #EEF2F6 100%); border: 1px solid var(--light-border); border-radius: 6px; overflow: hidden; margin-bottom: 12px; display: flex; align-items: center; justify-content: center;">
            <svg viewBox="0 0 540 260" style="width: 100%; height: 100%;" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="seaGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#E2E8F0" stroke-width="0.75" />
                </pattern>
                <filter id="sgGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <rect width="100%" height="100%" fill="url(#seaGrid)" />

              <!-- Southeast Asia Landmass Silhouettes -->
              <path d="M 110 35 L 145 25 L 175 35 L 210 50 L 225 90 L 220 120 L 195 130 L 175 125 L 170 145 L 155 135 L 140 85 L 115 70 Z" fill="#CBD5E1" opacity="0.65" />
              <path d="M 168 135 L 180 148 L 195 180 L 192 195 L 182 185 L 172 165 Z" fill="#94A3B8" opacity="0.8" />
              <path d="M 140 160 L 165 175 L 205 220 L 185 240 L 145 210 L 125 180 Z" fill="#E2E8F0" opacity="0.75" />
              <path d="M 255 155 L 295 140 L 330 165 L 325 210 L 275 220 L 245 190 Z" fill="#E2E8F0" opacity="0.8" />
              <path d="M 205 245 L 260 248 L 305 252 L 300 260 L 220 258 Z" fill="#E2E8F0" opacity="0.75" />
              <path d="M 370 65 L 390 60 L 400 95 L 385 110 L 368 95 Z" fill="#94A3B8" opacity="0.85" />
              <path d="M 390 120 L 415 135 L 405 155 L 385 140 Z" fill="#94A3B8" opacity="0.85" />
              <path d="M 390 165 L 420 170 L 415 205 L 380 195 Z" fill="#94A3B8" opacity="0.85" />

              <!-- Connection Hub Lines from Singapore HQ -->
              <line x1="193" y1="197" x2="175" y2="162" stroke="#C20078" stroke-width="2" stroke-dasharray="4,3" opacity="0.85" />
              <line x1="193" y1="197" x2="385" y2="85" stroke="#C20078" stroke-width="2" stroke-dasharray="4,3" opacity="0.85" />

              <!-- Node: Malaysia (KL) -->
              <circle cx="175" cy="162" r="5" fill="#3B82F6" stroke="#FFFFFF" stroke-width="2" />
              <text x="100" y="158" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#1E293B">🇲🇾 Kuala Lumpur</text>
              <text x="100" y="170" font-family="'JetBrains Mono', monospace" font-size="9" fill="#64748B">Software QA & Eng.</text>

              <!-- Node: Philippines (Manila) -->
              <circle cx="385" cy="85" r="5" fill="#10B981" stroke="#FFFFFF" stroke-width="2" />
              <text x="396" y="82" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#1E293B">🇵🇭 Manila</text>
              <text x="396" y="94" font-family="'JetBrains Mono', monospace" font-size="9" fill="#64748B">Tech Ops & Support</text>

              <!-- Main HQ Node: Singapore -->
              <circle cx="193" cy="197" r="14" fill="rgba(194, 0, 120, 0.2)" />
              <circle cx="193" cy="197" r="8" fill="#C20078" stroke="#FFFFFF" stroke-width="2.5" filter="url(#sgGlow)" />
              <rect x="208" y="185" width="132" height="34" rx="4" fill="#FFFFFF" stroke="#C20078" stroke-width="1.5" />
              <text x="216" y="199" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="800" fill="#C20078">🇸🇬 SINGAPORE (HQ)</text>
              <text x="216" y="212" font-family="'JetBrains Mono', monospace" font-size="9" fill="#475569">Core R&D • 24/7 SLA</text>
            </svg>
          </div>

          <!-- Presence Pill Matrix -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
            <div style="background: #FDF2F8; border: 1px solid #FBCFE8; border-radius: 4px; padding: 7px 9px;">
              <div style="display: flex; align-items: center; gap: 5px;">
                <span style="font-size: 13px;">🇸🇬</span>
                <strong style="font-size: 11.5px; color: var(--brand-magenta);">Singapore HQ</strong>
              </div>
              <div style="font-size: 10px; color: var(--light-text-body); margin-top: 2px;">
                Primary R&D, product engineering, executive governance & 1-hr on-site SLA response.
              </div>
            </div>

            <div style="background: #F0F9FF; border: 1px solid #BAE6FD; border-radius: 4px; padding: 7px 9px;">
              <div style="display: flex; align-items: center; gap: 5px;">
                <span style="font-size: 13px;">🇲🇾</span>
                <strong style="font-size: 11.5px; color: #0284C7;">Malaysia</strong>
              </div>
              <div style="font-size: 10px; color: var(--light-text-body); margin-top: 2px;">
                Software QA validation, cross-browser testing & regional engineering augmentation.
              </div>
            </div>

            <div style="background: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 4px; padding: 7px 9px;">
              <div style="display: flex; align-items: center; gap: 5px;">
                <span style="font-size: 13px;">🇵🇭</span>
                <strong style="font-size: 11.5px; color: #059669;">Philippines</strong>
              </div>
              <div style="font-size: 10px; color: var(--light-text-body); margin-top: 2px;">
                Extended technical support operations, documentation & field deployment services.
              </div>
            </div>
          </div>
        </div>

        <div style="border-top: 1px dashed var(--light-border); padding-top: 8px; margin-top: 8px; display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 11.5px; color: var(--light-text-heading); font-weight: 700;">✨ Value for NP FMS:</span>
          <span style="font-size: 11px; color: var(--light-text-muted);">Regional scale & continuous bench strength with direct on-site Singapore SLA accountability.</span>
        </div>
      </div>
    </div>
  </div>

  <div class="slide-footer">
    <div class="footer-meta">Company Profile & Regional Footprint • Founded 2022</div>
    <div class="slide-counter">02A / 13</div>
  </div>
</div>`,

  // SLIDE 2B: COMPANY EXPERTISE & SERVICES
  `<!-- SLIDE 2B: COMPANY EXPERTISE & SERVICES -->
<div class="slide-viewport theme-light" id="slide-3">
  <div class="slide-header">
    <div class="slide-header-left">
      <span class="section-tag">Section 02B</span>
      <div class="slide-title-group">
        <h2>Company Expertise & Core Services</h2>
        <span>CCTV & Smart IoT • Full-Stack Software Engineering • System Integration & AI</span>
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
    <!-- 3 Core Expertise Pillars -->
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; height: 100%;">
      
      <!-- Pillar 1: CCTV & IoT Solutions -->
      <div class="card-clean featured" style="display: flex; flex-direction: column; justify-content: space-between; padding: 18px 16px; border-top: 4px solid var(--brand-magenta);">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
            <span style="font-size: 26px;">📹</span>
            <span class="badge-clean badge-magenta" style="font-size: 10px;">Hardware & Sensors</span>
          </div>
          <div class="card-title" style="font-size: 15px; margin-bottom: 4px; line-height: 1.3;">
            CCTV & Smart IoT Solutions
          </div>
          <div class="card-subtitle" style="font-size: 11.5px; margin-bottom: 12px; color: var(--brand-magenta);">
            Provision, Deployment & Smart Video Analytics
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div style="background: var(--light-bg-subtle); border-radius: 4px; padding: 9px 10px; border: 1px solid var(--light-border);">
              <strong style="font-size: 11.5px; color: var(--light-text-heading); display: block;">Turnkey Hardware Deployment</strong>
              <p style="font-size: 11px; color: var(--light-text-body); line-height: 1.4; margin: 2px 0 0 0;">
                Experts in provisioning, installing, and maintaining physical CCTV infrastructure, network video recorders, and secure perimeter sensors.
              </p>
            </div>

            <div style="background: var(--light-bg-subtle); border-radius: 4px; padding: 9px 10px; border: 1px solid var(--light-border);">
              <strong style="font-size: 11.5px; color: var(--light-text-heading); display: block;">Smart Video Analytics</strong>
              <p style="font-size: 11px; color: var(--light-text-body); line-height: 1.4; margin: 2px 0 0 0;">
                Automated event detection, crowd density analysis, and tamper-evident surveillance custody across high-security premises.
              </p>
            </div>

            <div style="background: var(--light-bg-subtle); border-radius: 4px; padding: 9px 10px; border: 1px solid var(--light-border);">
              <strong style="font-size: 11.5px; color: var(--light-text-heading); display: block;">IoT Locker & Access Gateways</strong>
              <p style="font-size: 11px; color: var(--light-text-body); line-height: 1.4; margin: 2px 0 0 0;">
                Direct integration of locker solenoids, door telemetry, QR/NFC readers, and edge controllers.
              </p>
            </div>
          </div>
        </div>

        <div style="margin-top: 12px; padding-top: 8px; border-top: 1px dashed var(--light-border);">
          <div style="font-size: 10.5px; color: var(--light-text-muted); font-family: var(--font-mono);">
            <strong>FMS Fit:</strong> Native locker hardware mastery without 3rd-party dependency.
          </div>
        </div>
      </div>

      <!-- Pillar 2: Software Development -->
      <div class="card-clean featured" style="display: flex; flex-direction: column; justify-content: space-between; padding: 18px 16px; border-top: 4px solid var(--color-blue);">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
            <span style="font-size: 26px;">💻</span>
            <span class="badge-clean badge-blue" style="font-size: 10px;">Full-Stack Engineering</span>
          </div>
          <div class="card-title" style="font-size: 15px; margin-bottom: 4px; line-height: 1.3;">
            Software Development
          </div>
          <div class="card-subtitle" style="font-size: 11.5px; margin-bottom: 12px; color: #0284C7;">
            Mobile, Web, Desktop & Operations Integration
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div style="background: var(--light-bg-subtle); border-radius: 4px; padding: 9px 10px; border: 1px solid var(--light-border);">
              <strong style="font-size: 11.5px; color: var(--light-text-heading); display: block;">Cross-Platform App Development</strong>
              <p style="font-size: 11px; color: var(--light-text-body); line-height: 1.4; margin: 2px 0 0 0;">
                Experts in responsive Progressive Web Apps (PWA), native iOS/Android, and iPad tablet apps engineered for field and counter duty.
              </p>
            </div>

            <div style="background: var(--light-bg-subtle); border-radius: 4px; padding: 9px 10px; border: 1px solid var(--light-border);">
              <strong style="font-size: 11.5px; color: var(--light-text-heading); display: block;">Bridging Operational Capabilities</strong>
              <p style="font-size: 11px; color: var(--light-text-body); line-height: 1.4; margin: 2px 0 0 0;">
                Eliminating paperwork and manual spreadsheets by tailoring digital workflows to real human ground routines and institutional SOPs.
              </p>
            </div>

            <div style="background: var(--light-bg-subtle); border-radius: 4px; padding: 9px 10px; border: 1px solid var(--light-border);">
              <strong style="font-size: 11.5px; color: var(--light-text-heading); display: block;">Scalable Cloud Platforms</strong>
              <p style="font-size: 11px; color: var(--light-text-body); line-height: 1.4; margin: 2px 0 0 0;">
                Modern serverless backends (Next.js, TypeScript, PostgreSQL) delivering sub-second response times and 99.9% uptime.
              </p>
            </div>
          </div>
        </div>

        <div style="margin-top: 12px; padding-top: 8px; border-top: 1px dashed var(--light-border);">
          <div style="font-size: 10.5px; color: var(--light-text-muted); font-family: var(--font-mono);">
            <strong>FMS Fit:</strong> Instant mobile PWA for students + fast iPad counter desk for store.
          </div>
        </div>
      </div>

      <!-- Pillar 3: System Integration & AI Implementations -->
      <div class="card-clean featured" style="display: flex; flex-direction: column; justify-content: space-between; padding: 18px 16px; border-top: 4px solid var(--color-emerald);">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
            <span style="font-size: 26px;">🤖</span>
            <span class="badge-clean badge-green" style="font-size: 10px;">AI & Modern Integration</span>
          </div>
          <div class="card-title" style="font-size: 15px; margin-bottom: 4px; line-height: 1.3;">
            System Integration & AI
          </div>
          <div class="card-subtitle" style="font-size: 11.5px; margin-bottom: 12px; color: #059669;">
            AI, LLM Solutions & Enterprise Systems Bridge
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div style="background: var(--light-bg-subtle); border-radius: 4px; padding: 9px 10px; border: 1px solid var(--light-border);">
              <strong style="font-size: 11.5px; color: var(--light-text-heading); display: block;">AI & LLM Operational Solutions</strong>
              <p style="font-size: 11px; color: var(--light-text-body); line-height: 1.4; margin: 2px 0 0 0;">
                Building practical AI and Large Language Model (LLM) agents to automate customer inquiries, document parsing, and problem resolution.
              </p>
            </div>

            <div style="background: var(--light-bg-subtle); border-radius: 4px; padding: 9px 10px; border: 1px solid var(--light-border);">
              <strong style="font-size: 11.5px; color: var(--light-text-heading); display: block;">Intelligent Automated Workflows</strong>
              <p style="font-size: 11px; color: var(--light-text-body); line-height: 1.4; margin: 2px 0 0 0;">
                Intelligent scheduling logic, automated conflict-detection engines, and dynamic notification dispatch for high-demand resources.
              </p>
            </div>

            <div style="background: var(--light-bg-subtle); border-radius: 4px; padding: 9px 10px; border: 1px solid var(--light-border);">
              <strong style="font-size: 11.5px; color: var(--light-text-heading); display: block;">Enterprise System Integration</strong>
              <p style="font-size: 11px; color: var(--light-text-body); line-height: 1.4; margin: 2px 0 0 0;">
                Seamless API connectivity with institutional LDAP/SSO, timetable databases, and 36-month tamper-evident compliance audit vaults.
              </p>
            </div>
          </div>
        </div>

        <div style="margin-top: 12px; padding-top: 8px; border-top: 1px dashed var(--light-border);">
          <div style="font-size: 10.5px; color: var(--light-text-muted); font-family: var(--font-mono);">
            <strong>FMS Fit:</strong> Conflict-free venue engine + automated locker release rules.
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="slide-footer">
    <div class="footer-meta">Company Expertise & Core Services • BeyondSensor</div>
    <div class="slide-counter">02B / 13</div>
  </div>
</div>`,

  // SLIDE 2C: TRACK RECORD
  `<!-- SLIDE 2C: TRACK RECORD -->
<div class="slide-viewport theme-light" id="slide-4">
  <div class="slide-header">
    <div class="slide-header-left">
      <span class="section-tag">Section 02C</span>
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
    <div class="slide-counter">02C / 13</div>
  </div>
</div>`,

  // SLIDE 3A: REQUIREMENTS UNDERSTANDING & SOLUTION FRAMEWORK
  `<!-- SLIDE 3A: REQUIREMENTS UNDERSTANDING & SOLUTION FRAMEWORK -->
<div class="slide-viewport theme-light" id="slide-5">
  <div class="slide-header">
    <div class="slide-header-left">
      <span class="section-tag">Section 03A</span>
      <div class="slide-title-group">
        <h2>Requirements Understanding & Solution Framework</h2>
        <span>From Stakeholder Demands to a Unified, User-Friendly Operations Platform</span>
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
    <div style="display: grid; grid-template-columns: 1fr 1fr 1.35fr; gap: 14px; height: 100%;">
      
      <!-- CARD 1: STAKEHOLDER PERSONAS -->
      <div class="card-clean" style="display: flex; flex-direction: column; justify-content: space-between; padding: 18px 16px; border-top: 3px solid var(--brand-magenta);">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <div class="card-title" style="font-size: 13.5px; margin: 0; color: var(--light-text-heading);">1. Core Stakeholders</div>
            <span class="badge-clean badge-magenta" style="font-size: 9.5px;">Who We Serve</span>
          </div>
          <div class="card-subtitle" style="font-size: 11px; margin-bottom: 14px;">Tailored to daily campus roles</div>

          <div style="display: flex; flex-direction: column; gap: 11px;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <strong style="font-size: 12px; color: var(--light-text-heading);">🎓 Students</strong>
                <span style="font-size: 9.5px; font-family: var(--font-mono); color: var(--light-text-muted);">Borrowers</span>
              </div>
              <p style="font-size: 11px; color: var(--light-text-muted); line-height: 1.35; margin: 2px 0 0 0;">
                Frictionless mobile search, fast bookings, and 24/7 self-service returns.
              </p>
            </div>

            <div style="border-top: 1px solid var(--light-border); padding-top: 9px;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <strong style="font-size: 12px; color: var(--light-text-heading);">👨‍🏫 Faculty</strong>
                <span style="font-size: 9.5px; font-family: var(--font-mono); color: var(--light-text-muted);">Approvers</span>
              </div>
              <p style="font-size: 11px; color: var(--light-text-muted); line-height: 1.35; margin: 2px 0 0 0;">
                1-click approvals for venues and gear packages directly from email.
              </p>
            </div>

            <div style="border-top: 1px solid var(--light-border); padding-top: 9px;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <strong style="font-size: 12px; color: var(--light-text-heading);">🔧 Technical Officers</strong>
                <span style="font-size: 9.5px; font-family: var(--font-mono); color: var(--light-text-muted);">Store Ops</span>
              </div>
              <p style="font-size: 11px; color: var(--light-text-muted); line-height: 1.35; margin: 2px 0 0 0;">
                Fast barcode check-in/out, live inventory counts, and locker prep.
              </p>
            </div>

            <div style="border-top: 1px solid var(--light-border); padding-top: 9px;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <strong style="font-size: 12px; color: var(--light-text-heading);">🛡️ Administrators</strong>
                <span style="font-size: 9.5px; font-family: var(--font-mono); color: var(--light-text-muted);">Governance</span>
              </div>
              <p style="font-size: 11px; color: var(--light-text-muted); line-height: 1.35; margin: 2px 0 0 0;">
                Timetable blackout rules, cohort quotas, and 36-month audit logs.
              </p>
            </div>
          </div>
        </div>

        <div style="padding-top: 10px; border-top: 1px dashed var(--light-border); font-size: 10.5px; color: var(--light-text-muted); font-family: var(--font-mono);">
          Role-governed clarity across all touchpoints.
        </div>
      </div>

      <!-- CARD 2: CRITICAL SUCCESS FACTORS -->
      <div class="card-clean" style="display: flex; flex-direction: column; justify-content: space-between; padding: 18px 16px; border-top: 3px solid var(--color-blue);">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <div class="card-title" style="font-size: 13.5px; margin: 0; color: var(--light-text-heading);">2. Key Success Drivers</div>
            <span class="badge-clean badge-blue" style="font-size: 9.5px;">Standard of Excellence</span>
          </div>
          <div class="card-subtitle" style="font-size: 11px; margin-bottom: 14px;">Operational demands for zero friction</div>

          <div style="display: flex; flex-direction: column; gap: 11px;">
            <div>
              <strong style="font-size: 12px; color: var(--light-text-heading); display: block;">📱 Persona-Driven Usability</strong>
              <span style="font-size: 11px; color: var(--light-text-muted); line-height: 1.35; display: block;">
                Purpose-built UX for Mobile (students), iPads (store counter), and PCs.
              </span>
            </div>

            <div style="border-top: 1px solid var(--light-border); padding-top: 9px;">
              <strong style="font-size: 12px; color: var(--light-text-heading); display: block;">⚡ High Responsiveness</strong>
              <span style="font-size: 11px; color: var(--light-text-muted); line-height: 1.35; display: block;">
                Instant sub-second interactions without app-store installs or slow syncs.
              </span>
            </div>

            <div style="border-top: 1px solid var(--light-border); padding-top: 9px;">
              <strong style="font-size: 12px; color: var(--light-text-heading); display: block;">⏱️ Rapid Queue Elimination</strong>
              <span style="font-size: 11px; color: var(--light-text-muted); line-height: 1.35; display: block;">
                &lt;15s counter transactions and 24/7 self-service locker pickup and returns.
              </span>
            </div>

            <div style="border-top: 1px solid var(--light-border); padding-top: 9px;">
              <strong style="font-size: 12px; color: var(--light-text-heading); display: block;">🔒 Security & IM8 Compliance</strong>
              <span style="font-size: 11px; color: var(--light-text-muted); line-height: 1.35; display: block;">
                ISO 27001-certified cloud infrastructure with immutable audit logs.
              </span>
            </div>
          </div>
        </div>

        <div style="padding-top: 10px; border-top: 1px dashed var(--light-border); font-size: 10.5px; color: var(--light-text-muted); font-family: var(--font-mono);">
          Eliminates Block 52 rush-hour bottlenecks.
        </div>
      </div>

      <!-- CARD 3: COMBINED 4-IN-1 SOLUTION DIRECTION -->
      <div class="card-clean featured" style="display: flex; flex-direction: column; justify-content: space-between; padding: 18px 16px; border-top: 3px solid var(--color-emerald); background: #FFFFFF;">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <div class="card-title" style="font-size: 13.5px; margin: 0; color: #065F46;">3. Solution Architecture</div>
            <span class="badge-clean badge-green" style="font-size: 9.5px;">Unified 4-in-1</span>
          </div>
          <div class="card-subtitle" style="font-size: 11px; margin-bottom: 12px; color: var(--light-text-muted);">
            One unified web platform connecting hardware and software
          </div>

          <!-- 2x2 Clean Quadrant Grid -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            
            <div style="background: var(--light-bg-subtle); border: 1px solid var(--light-border); border-radius: 4px; padding: 10px;">
              <div style="font-size: 18px; margin-bottom: 4px;">📦</div>
              <strong style="font-size: 11.5px; color: var(--light-text-heading); display: block;">Inventory Control</strong>
              <span style="font-size: 10px; color: var(--light-text-muted); line-height: 1.3; display: block; margin-top: 2px;">
                Live serial tracking, cinema kit bundles, maintenance & quarantine.
              </span>
            </div>

            <div style="background: var(--light-bg-subtle); border-radius: 4px; padding: 10px; border: 1px solid var(--light-border);">
              <div style="font-size: 18px; margin-bottom: 4px;">🎬</div>
              <strong style="font-size: 11.5px; color: var(--light-text-heading); display: block;">Venue Management</strong>
              <span style="font-size: 10px; color: var(--light-text-muted); line-height: 1.3; display: block; margin-top: 2px;">
                Conflict-free timetables, cohort entitlements & studio key tracking.
              </span>
            </div>

            <div style="background: var(--light-bg-subtle); border-radius: 4px; padding: 10px; border: 1px solid var(--light-border);">
              <div style="font-size: 18px; margin-bottom: 4px;">📱</div>
              <strong style="font-size: 11.5px; color: var(--light-text-heading); display: block;">Booking Portal (PWA)</strong>
              <span style="font-size: 10px; color: var(--light-text-muted); line-height: 1.3; display: block; margin-top: 2px;">
                Fluid mobile catalog, loan quotas, and fast faculty sign-offs.
              </span>
            </div>

            <div style="background: var(--light-bg-subtle); border-radius: 4px; padding: 10px; border: 1px solid var(--light-border);">
              <div style="font-size: 18px; margin-bottom: 4px;">🗄️</div>
              <strong style="font-size: 11.5px; color: var(--light-text-heading); display: block;">Smart Lockers</strong>
              <span style="font-size: 10px; color: var(--light-text-muted); line-height: 1.3; display: block; margin-top: 2px;">
                Contactless OTP/QR pickup, compartment sensors, and auto-timeouts.
              </span>
            </div>

          </div>
        </div>

        <div style="background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 4px; padding: 8px 10px; margin-top: 10px; display: flex; align-items: center; justify-content: space-between;">
          <strong style="font-size: 10.5px; color: #166534;">Strategic Benefit:</strong>
          <span style="font-size: 10.5px; color: #15803D;">Single source of truth. Zero vendor finger-pointing.</span>
        </div>
      </div>

    </div>
  </div>

  <div class="slide-footer">
    <div class="footer-meta">Requirements Understanding & Solution Framework • BeyondSensor</div>
    <div class="slide-counter">03A / 13</div>
  </div>
</div>`,

  // SLIDE 3B: SYSTEM OVERVIEW & PLATFORM ARCHITECTURE
  `<!-- SLIDE 3B: SYSTEM OVERVIEW & PLATFORM ARCHITECTURE -->
<div class="slide-viewport theme-light" id="slide-6">
  <div class="slide-header">
    <div class="slide-header-left">
      <span class="section-tag">Section 03B</span>
      <div class="slide-title-group">
        <h2>System Overview & Platform Architecture</h2>
        <span>End-to-End Topology: Universal PWA Clients, Edge Gateway, Supabase Real-Time DB & Hardware Bus</span>
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

  <div class="slide-content compact">
    <div style="display: grid; grid-template-columns: 1.62fr 1fr; gap: 14px; height: 100%;">
      
      <!-- LEFT: ARCHITECTURE DIAGRAM CONTAINER (MAXIMIZED READABILITY & SPACE) -->
      <div class="card-clean featured" style="display: flex; flex-direction: column; padding: 12px; height: 100%; overflow: hidden; background: #FFFFFF;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
          <div class="card-title" style="font-size: 13.5px; margin: 0; display: flex; align-items: center; gap: 6px;">
            <span>📐</span> End-to-End System Topology
          </div>
          <span class="badge-clean badge-magenta" style="font-size: 9.5px; font-weight: 700;">Zero-Maintenance Serverless Cloud</span>
        </div>

        <div style="flex: 1; display: flex; align-items: center; justify-content: center; background: #F8FAFC; border: 1px solid var(--light-border); border-radius: 4px; overflow: hidden; padding: 8px;">
          <img src="../assets/01-system-architecture-overview.png" 
               alt="System Architecture Overview" 
               style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 3px; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.06));">
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 8px; padding-top: 6px; border-top: 1px dashed var(--light-border); font-size: 10px; color: var(--light-text-muted);">
          <span>Security Standard: GovTech IM8 &amp; ISO/IEC 27001</span>
          <span style="font-family: var(--font-mono); color: var(--brand-magenta);">HTTPS / WSS / TLS 1.3 End-to-End</span>
        </div>
      </div>

      <!-- RIGHT: CORE ARCHITECTURAL NOTES & CAPABILITIES -->
      <div style="display: flex; flex-direction: column; gap: 8px; height: 100%; justify-content: space-between;">
        
        <!-- Pillar 1: Client Layer -->
        <div class="card-clean" style="padding: 10px 12px; border-left: 3px solid var(--brand-magenta);">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <strong style="font-size: 11.5px; color: var(--light-text-heading);">1. Multi-Device PWA Clients</strong>
            <span class="badge-clean badge-magenta" style="font-size: 9px;">Zero-Install</span>
          </div>
          <p style="font-size: 10.5px; color: var(--light-text-body); line-height: 1.35; margin: 3px 0 0 0;">
            Next.js responsive interface tailored for Students (mobile), Store Staff (counter iPads with barcode scanning), and Faculty/Admins (desktop).
          </p>
        </div>

        <!-- Pillar 2: Edge & Auth Gateway -->
        <div class="card-clean" style="padding: 10px 12px; border-left: 3px solid var(--color-blue);">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <strong style="font-size: 11.5px; color: var(--light-text-heading);">2. Edge API &amp; Auth Gateway</strong>
            <span class="badge-clean badge-blue" style="font-size: 9px;">&lt;50ms Latency</span>
          </div>
          <p style="font-size: 10.5px; color: var(--light-text-body); line-height: 1.35; margin: 3px 0 0 0;">
            Vercel Edge Functions with SSO/SAML auth, strict role-based access control (RBAC), and 1-click tokenized email approvals for lecturers.
          </p>
        </div>

        <!-- Pillar 3: Real-Time State & Audit Engine -->
        <div class="card-clean" style="padding: 10px 12px; border-left: 3px solid var(--color-emerald);">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <strong style="font-size: 11.5px; color: var(--light-text-heading);">3. Supabase Real-Time DB &amp; State</strong>
            <span class="badge-clean badge-emerald" style="font-size: 9px;">PostgreSQL</span>
          </div>
          <p style="font-size: 10.5px; color: var(--light-text-body); line-height: 1.35; margin: 3px 0 0 0;">
            Row-Level Security (RLS) protects data isolation. Live websocket updates eliminate double-bookings; immutable audit trail preserved for 36 months.
          </p>
        </div>

        <!-- Pillar 4: Smart Locker & Integration Bus -->
        <div class="card-clean" style="padding: 10px 12px; border-left: 3px solid var(--color-amber);">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <strong style="font-size: 11.5px; color: var(--light-text-heading);">4. Hardware &amp; Services Bus</strong>
            <span class="badge-clean badge-amber" style="font-size: 9px;">MQTT / Webhooks</span>
          </div>
          <p style="font-size: 10.5px; color: var(--light-text-body); line-height: 1.35; margin: 3px 0 0 0;">
            Encrypted bidirectional telemetry to Block 52 smart locker controllers, coupled with SendGrid/Twilio notification hooks for real-time alerts.
          </p>
        </div>

        <!-- Bottom Highlight Box -->
        <div style="background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 4px; padding: 8px 10px;">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <span style="font-size: 10.5px; font-weight: 700; color: #166534;">🌟 FMS Operational Benefit</span>
            <span style="font-size: 9px; font-family: var(--font-mono); color: #15803D;">99.9% UPTIME SLA</span>
          </div>
          <div style="font-size: 10px; color: #15803D; margin-top: 2px; line-height: 1.3;">
            Zero on-premise server maintenance overhead for NP IT, auto-elastic scaling during semester peak booking rushes, and total system observability.
          </div>
        </div>

      </div>

    </div>
  </div>

  <div class="slide-footer">
    <div class="footer-meta">System Overview &amp; Cloud Platform Architecture • BeyondSensor</div>
    <div class="slide-counter">03B / 13</div>
  </div>
</div>`,

  // SLIDE 3C: SMART LOCKER ARCHITECTURE & OPERATIONS
  `<!-- SLIDE 3C: SMART LOCKER ARCHITECTURE & OPERATIONS -->
<div class="slide-viewport theme-light" id="slide-7">
  <div class="slide-header">
    <div class="slide-header-left">
      <span class="section-tag">Section 03C</span>
      <div class="slide-title-group">
        <h2>Smart Locker Architecture &amp; Operations</h2>
        <span>24/7 Contactless Self-Service: Secure Compartment Control, Door Telemetry &amp; Offline Continuity</span>
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

  <div class="slide-content compact">
    <div style="display: grid; grid-template-columns: 1.62fr 1fr; gap: 14px; height: 100%;">
      
      <!-- LEFT: LOCKER ARCHITECTURE DIAGRAM CONTAINER (MAXIMIZED READABILITY & SPACE) -->
      <div class="card-clean featured" style="display: flex; flex-direction: column; padding: 12px; height: 100%; overflow: hidden; background: #FFFFFF;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
          <div class="card-title" style="font-size: 13.5px; margin: 0; display: flex; align-items: center; gap: 6px;">
            <span>🗄️</span> Smart Locker Hardware &amp; Controller Topology
          </div>
          <span class="badge-clean badge-emerald" style="font-size: 9.5px; font-weight: 700;">Block 52 Deployment</span>
        </div>

        <div style="flex: 1; display: flex; align-items: center; justify-content: center; background: #F8FAFC; border: 1px solid var(--light-border); border-radius: 4px; overflow: hidden; padding: 8px;">
          <img src="../assets/02-locker-architecture-overview.png" 
               alt="Smart Locker Architecture Overview" 
               style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 3px; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.06));">
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 8px; padding-top: 6px; border-top: 1px dashed var(--light-border); font-size: 10px; color: var(--light-text-muted);">
          <span>Controller: Industrial Microcontroller + Relay Boards</span>
          <span style="font-family: var(--font-mono); color: var(--color-emerald);">Hardware Watchdog &amp; UPS Protected</span>
        </div>
      </div>

      <!-- RIGHT: OPERATIONAL NOTES & LOCKER WORKFLOWS -->
      <div style="display: flex; flex-direction: column; gap: 8px; height: 100%; justify-content: space-between;">
        
        <!-- Step 1: Allocation & Prep -->
        <div class="card-clean" style="padding: 10px 12px; border-left: 3px solid var(--brand-magenta);">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <strong style="font-size: 11.5px; color: var(--light-text-heading);">1. Technical Officer Dispatch</strong>
            <span class="badge-clean badge-magenta" style="font-size: 9px;">Counter iPad</span>
          </div>
          <p style="font-size: 10.5px; color: var(--light-text-body); line-height: 1.35; margin: 3px 0 0 0;">
            Staff scans equipment barcodes, selects target locker compartment (S/M/L), deposits items, and closes the door. System generates an encrypted pickup token.
          </p>
        </div>

        <!-- Step 2: Contactless Pickup -->
        <div class="card-clean" style="padding: 10px 12px; border-left: 3px solid var(--color-blue);">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <strong style="font-size: 11.5px; color: var(--light-text-heading);">2. Contactless Pickup (OTP / QR)</strong>
            <span class="badge-clean badge-blue" style="font-size: 9px;">24/7 Access</span>
          </div>
          <p style="font-size: 10.5px; color: var(--light-text-body); line-height: 1.35; margin: 3px 0 0 0;">
            Borrower presents dynamic single-use QR or enters numeric OTP at the locker kiosk touch screen. Designated compartment door releases instantly.
          </p>
        </div>

        <!-- Step 3: Door Telemetry & Sensors -->
        <div class="card-clean" style="padding: 10px 12px; border-left: 3px solid var(--color-emerald);">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <strong style="font-size: 11.5px; color: var(--light-text-heading);">3. Sensor Verification &amp; Custody</strong>
            <span class="badge-clean badge-emerald" style="font-size: 9px;">Real-Time</span>
          </div>
          <p style="font-size: 10.5px; color: var(--light-text-body); line-height: 1.35; margin: 3px 0 0 0;">
            Magnetic reed switches and optical compartment sensors confirm door open/close cycles and asset withdrawal, logging exact timestamps to the cloud audit engine.
          </p>
        </div>

        <!-- Step 4: Safety, Timeouts & Offline Override -->
        <div class="card-clean" style="padding: 10px 12px; border-left: 3px solid var(--color-amber);">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <strong style="font-size: 11.5px; color: var(--light-text-heading);">4. Auto-Timeouts &amp; Manual Override</strong>
            <span class="badge-clean badge-amber" style="font-size: 9px;">Fail-Safe</span>
          </div>
          <p style="font-size: 10.5px; color: var(--light-text-body); line-height: 1.35; margin: 3px 0 0 0;">
            Unclaimed items trigger auto-expiry alerts after configurable time limits. Physical master keys and battery backup ensure uninterrupted access during campus power or network drops.
          </p>
        </div>

        <!-- Bottom Highlight Box -->
        <div style="background: #F0F9FF; border: 1px solid #BAE6FD; border-radius: 4px; padding: 8px 10px;">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <span style="font-size: 10.5px; font-weight: 700; color: #0369A1;">🌟 Solves After-Hours Friction</span>
            <span style="font-size: 9px; font-family: var(--font-mono); color: #0284C7;">ZERO COUNTER CONGESTION</span>
          </div>
          <div style="font-size: 10px; color: #0369A1; margin-top: 2px; line-height: 1.3;">
            Students shooting evening cinema projects pick up and return kits independently, freeing Technical Officers from manual after-hours queue management.
          </div>
        </div>

      </div>

    </div>
  </div>

  <div class="slide-footer">
    <div class="footer-meta">Smart Locker Architecture &amp; Hardware Operations • BeyondSensor</div>
    <div class="slide-counter">03C / 13</div>
  </div>
</div>`,

  // SLIDE 3D: EVENT-DRIVEN NOTIFICATION MATRIX
  `<!-- SLIDE 3D: EVENT-DRIVEN NOTIFICATION MATRIX -->
<div class="slide-viewport theme-light" id="slide-8">
  <div class="slide-header">
    <div class="slide-header-left">
      <span class="section-tag">Section 03D</span>
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
    <div class="footer-meta">Event-Driven Notification System • BeyondSensor</div>
    <div class="slide-counter">03D / 13</div>
  </div>
</div>`,

  // SLIDE 4A: PROJECT MILESTONES & WORK BREAKDOWN
  "<div class=\"slide-viewport theme-light\" id=\"slide-9\">\n  <div class=\"slide-header\">\n    <div class=\"slide-header-left\">\n      <span class=\"section-tag\">Section 04A</span>\n      <div class=\"slide-title-group\">\n        <h2>Project Milestones &amp; Work Breakdown</h2>\n        <span>6-Month (26-Week) Structured Delivery Schedule with Zero Operational Disruption</span>\n      </div>\n    </div>\n    <div class=\"slide-header-branding\">\n      <div class=\"customer-logo-pill\">\n        <img src=\"../assets/design-references/ngee-ann-logo.png\" alt=\"Ngee Ann Polytechnic\">\n      </div>\n      <div class=\"brand-pill-logo\">\n        <img src=\"../assets/design-references/beyond-sensor-logo.png\" alt=\"BeyondSensor Logo\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"slide-content compact\" style=\"padding: 16px 26px 12px 26px; display: flex; flex-direction: column; justify-content: space-between;\">\n    <!-- Top Milestone Grid (5 Phases) -->\n    <div style=\"display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; flex: 1;\">\n      \n      <!-- Phase 1 -->\n      <div class=\"card-clean featured\" style=\"display: flex; flex-direction: column; justify-content: space-between; padding: 12px 11px; border-top: 3.5px solid var(--brand-magenta);\">\n        <div>\n          <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;\">\n            <span style=\"font-family: var(--font-mono); font-size: 10px; color: var(--brand-magenta); font-weight: 800;\">PHASE 01</span>\n            <span class=\"badge-clean badge-magenta\" style=\"font-size: 8.5px; padding: 1px 5px;\">T+0 Wks</span>\n          </div>\n          <strong style=\"font-size: 12px; color: var(--light-text-heading); display: block; line-height: 1.25; margin-bottom: 6px;\">\n            Discovery &amp; Approvals\n          </strong>\n          <div style=\"background: var(--light-bg-subtle); border-radius: 3px; padding: 6px 8px; border: 1px solid var(--light-border); margin-bottom: 8px;\">\n            <div style=\"font-size: 9.5px; font-family: var(--font-mono); color: var(--light-text-muted);\">Duration: <strong>4 Weeks</strong></div>\n            <div style=\"font-size: 9.5px; font-family: var(--font-mono); color: var(--light-text-muted);\">Window: Weeks 1 – 4</div>\n          </div>\n          <ul style=\"list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 5px;\">\n            <li style=\"font-size: 10px; color: var(--light-text-body); line-height: 1.35; position: relative; padding-left: 12px;\">\n              <span style=\"position: absolute; left: 0; color: var(--brand-magenta);\">•</span>FMS Block 52 site survey &amp; measurements\n            </li>\n            <li style=\"font-size: 10px; color: var(--light-text-body); line-height: 1.35; position: relative; padding-left: 12px;\">\n              <span style=\"position: absolute; left: 0; color: var(--brand-magenta);\">•</span>Stakeholder role permissions sign-off\n            </li>\n            <li style=\"font-size: 10px; color: var(--light-text-body); line-height: 1.35; position: relative; padding-left: 12px;\">\n              <span style=\"position: absolute; left: 0; color: var(--brand-magenta);\">•</span>Finalized technical architecture baseline\n            </li>\n          </ul>\n        </div>\n        <div style=\"border-top: 1px dashed var(--light-border); padding-top: 6px; margin-top: 6px; font-size: 9.5px; color: var(--brand-magenta); font-weight: 700;\">\n          Gate 1: Scope Sign-Off\n        </div>\n      </div>\n\n      <!-- Phase 2 -->\n      <div class=\"card-clean featured\" style=\"display: flex; flex-direction: column; justify-content: space-between; padding: 12px 11px; border-top: 3.5px solid var(--color-blue);\">\n        <div>\n          <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;\">\n            <span style=\"font-family: var(--font-mono); font-size: 10px; color: #0284C7; font-weight: 800;\">PHASE 02</span>\n            <span class=\"badge-clean badge-blue\" style=\"font-size: 8.5px; padding: 1px 5px;\">T+3 Wks</span>\n          </div>\n          <strong style=\"font-size: 12px; color: var(--light-text-heading); display: block; line-height: 1.25; margin-bottom: 6px;\">\n            Software &amp; Cloud Build\n          </strong>\n          <div style=\"background: var(--light-bg-subtle); border-radius: 3px; padding: 6px 8px; border: 1px solid var(--light-border); margin-bottom: 8px;\">\n            <div style=\"font-size: 9.5px; font-family: var(--font-mono); color: var(--light-text-muted);\">Duration: <strong>12 Weeks</strong></div>\n            <div style=\"font-size: 9.5px; font-family: var(--font-mono); color: var(--light-text-muted);\">Window: Weeks 4 – 15</div>\n          </div>\n          <ul style=\"list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 5px;\">\n            <li style=\"font-size: 10px; color: var(--light-text-body); line-height: 1.35; position: relative; padding-left: 12px;\">\n              <span style=\"position: absolute; left: 0; color: #0284C7;\">•</span>Multi-device PWA frontend development\n            </li>\n            <li style=\"font-size: 10px; color: var(--light-text-body); line-height: 1.35; position: relative; padding-left: 12px;\">\n              <span style=\"position: absolute; left: 0; color: #0284C7;\">•</span>Supabase PostgreSQL database &amp; RLS setup\n            </li>\n            <li style=\"font-size: 10px; color: var(--light-text-body); line-height: 1.35; position: relative; padding-left: 12px;\">\n              <span style=\"position: absolute; left: 0; color: #0284C7;\">•</span>Automated email/push notification hooks\n            </li>\n          </ul>\n        </div>\n        <div style=\"border-top: 1px dashed var(--light-border); padding-top: 6px; margin-top: 6px; font-size: 9.5px; color: #0284C7; font-weight: 700;\">\n          Gate 2: Sprint Builds Complete\n        </div>\n      </div>\n\n      <!-- Phase 3 -->\n      <div class=\"card-clean featured\" style=\"display: flex; flex-direction: column; justify-content: space-between; padding: 12px 11px; border-top: 3.5px solid var(--color-emerald);\">\n        <div>\n          <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;\">\n            <span style=\"font-family: var(--font-mono); font-size: 10px; color: #059669; font-weight: 800;\">PHASE 03</span>\n            <span class=\"badge-clean badge-green\" style=\"font-size: 8.5px; padding: 1px 5px;\">T+6 Wks</span>\n          </div>\n          <strong style=\"font-size: 12px; color: var(--light-text-heading); display: block; line-height: 1.25; margin-bottom: 6px;\">\n            Smart Locker Integration\n          </strong>\n          <div style=\"background: var(--light-bg-subtle); border-radius: 3px; padding: 6px 8px; border: 1px solid var(--light-border); margin-bottom: 8px;\">\n            <div style=\"font-size: 9.5px; font-family: var(--font-mono); color: var(--light-text-muted);\">Duration: <strong>4 Weeks</strong></div>\n            <div style=\"font-size: 9.5px; font-family: var(--font-mono); color: var(--light-text-muted);\">Window: Weeks 7 – 10</div>\n          </div>\n          <ul style=\"list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 5px;\">\n            <li style=\"font-size: 10px; color: var(--light-text-body); line-height: 1.35; position: relative; padding-left: 12px;\">\n              <span style=\"position: absolute; left: 0; color: #059669;\">•</span>Controller hardware &amp; relay board staging\n            </li>\n            <li style=\"font-size: 10px; color: var(--light-text-body); line-height: 1.35; position: relative; padding-left: 12px;\">\n              <span style=\"position: absolute; left: 0; color: #059669;\">•</span>Dynamic OTP / QR solenoid test bench\n            </li>\n            <li style=\"font-size: 10px; color: var(--light-text-body); line-height: 1.35; position: relative; padding-left: 12px;\">\n              <span style=\"position: absolute; left: 0; color: #059669;\">•</span>Door telemetry &amp; sensor loop validation\n            </li>\n          </ul>\n        </div>\n        <div style=\"border-top: 1px dashed var(--light-border); padding-top: 6px; margin-top: 6px; font-size: 9.5px; color: #059669; font-weight: 700;\">\n          Gate 3: Hardware Verification\n        </div>\n      </div>\n\n      <!-- Phase 4 -->\n      <div class=\"card-clean featured\" style=\"display: flex; flex-direction: column; justify-content: space-between; padding: 12px 11px; border-top: 3.5px solid #6366F1;\">\n        <div>\n          <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;\">\n            <span style=\"font-family: var(--font-mono); font-size: 10px; color: #6366F1; font-weight: 800;\">PHASE 04</span>\n            <span class=\"badge-clean\" style=\"background: #EEF2FF; color: #4F46E5; border: 1px solid #C7D2FE; font-size: 8.5px; padding: 1px 5px;\">T+18 Wks</span>\n          </div>\n          <strong style=\"font-size: 12px; color: var(--light-text-heading); display: block; line-height: 1.25; margin-bottom: 6px;\">\n            Data Tagging &amp; Staging\n          </strong>\n          <div style=\"background: var(--light-bg-subtle); border-radius: 3px; padding: 6px 8px; border: 1px solid var(--light-border); margin-bottom: 8px;\">\n            <div style=\"font-size: 9.5px; font-family: var(--font-mono); color: var(--light-text-muted);\">Duration: <strong>1 Week</strong></div>\n            <div style=\"font-size: 9.5px; font-family: var(--font-mono); color: var(--light-text-muted);\">Window: Week 19</div>\n          </div>\n          <ul style=\"list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 5px;\">\n            <li style=\"font-size: 10px; color: var(--light-text-body); line-height: 1.35; position: relative; padding-left: 12px;\">\n              <span style=\"position: absolute; left: 0; color: #6366F1;\">•</span>1,000+ asset barcode / QR registration\n            </li>\n            <li style=\"font-size: 10px; color: var(--light-text-body); line-height: 1.35; position: relative; padding-left: 12px;\">\n              <span style=\"position: absolute; left: 0; color: #6366F1;\">•</span>Kit bundling &amp; serial number mapping\n            </li>\n            <li style=\"font-size: 10px; color: var(--light-text-body); line-height: 1.35; position: relative; padding-left: 12px;\">\n              <span style=\"position: absolute; left: 0; color: #6366F1;\">•</span>Store room location &amp; locker binding\n            </li>\n          </ul>\n        </div>\n        <div style=\"border-top: 1px dashed var(--light-border); padding-top: 6px; margin-top: 6px; font-size: 9.5px; color: #6366F1; font-weight: 700;\">\n          Gate 4: Inventory Ready\n        </div>\n      </div>\n\n      <!-- Phase 5 -->\n      <div class=\"card-clean featured\" style=\"display: flex; flex-direction: column; justify-content: space-between; padding: 12px 11px; border-top: 3.5px solid var(--color-amber);\">\n        <div>\n          <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;\">\n            <span style=\"font-family: var(--font-mono); font-size: 10px; color: #D97706; font-weight: 800;\">PHASE 05</span>\n            <span class=\"badge-clean\" style=\"background: #FEF3C7; color: #B45309; border: 1px solid #FCD34D; font-size: 8.5px; padding: 1px 5px;\">T+20 Wks</span>\n          </div>\n          <strong style=\"font-size: 12px; color: var(--light-text-heading); display: block; line-height: 1.25; margin-bottom: 6px;\">\n            UAT, Training &amp; Cutover\n          </strong>\n          <div style=\"background: var(--light-bg-subtle); border-radius: 3px; padding: 6px 8px; border: 1px solid var(--light-border); margin-bottom: 8px;\">\n            <div style=\"font-size: 9.5px; font-family: var(--font-mono); color: var(--light-text-muted);\">Duration: <strong>6 Weeks</strong></div>\n            <div style=\"font-size: 9.5px; font-family: var(--font-mono); color: var(--light-text-muted);\">Window: Weeks 20 – 26</div>\n          </div>\n          <ul style=\"list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 5px;\">\n            <li style=\"font-size: 10px; color: var(--light-text-body); line-height: 1.35; position: relative; padding-left: 12px;\">\n              <span style=\"position: absolute; left: 0; color: #D97706;\">•</span>Rigorous staff &amp; student pilot UAT\n            </li>\n            <li style=\"font-size: 10px; color: var(--light-text-body); line-height: 1.35; position: relative; padding-left: 12px;\">\n              <span style=\"position: absolute; left: 0; color: #D97706;\">•</span>Hands-on faculty / counter briefings\n            </li>\n            <li style=\"font-size: 10px; color: var(--light-text-body); line-height: 1.35; position: relative; padding-left: 12px;\">\n              <span style=\"position: absolute; left: 0; color: #D97706;\">•</span>Cutover to production maintenance\n            </li>\n          </ul>\n        </div>\n        <div style=\"border-top: 1px dashed var(--light-border); padding-top: 6px; margin-top: 6px; font-size: 9.5px; color: #D97706; font-weight: 700;\">\n          Gate 5: Handover &amp; SLA\n        </div>\n      </div>\n\n    </div>\n\n    <!-- Bottom Timeline Summary Banner -->\n    <div style=\"background: #F8FAFC; border: 1px solid var(--light-border); border-radius: 4px; padding: 10px 16px; margin-top: 10px; display: flex; align-items: center; justify-content: space-between;\">\n      <div style=\"display: flex; align-items: center; gap: 12px;\">\n        <span style=\"font-size: 18px;\">🗓️</span>\n        <div>\n          <strong style=\"font-size: 11.5px; color: var(--light-text-heading);\">Total Implementation Window: 6 Months (26 Weeks)</strong>\n          <div style=\"font-size: 10px; color: var(--light-text-muted); margin-top: 1px;\">Structured overlapping tracks ensure hardware, software, and physical data tagging converge seamlessly for semester go-live.</div>\n        </div>\n      </div>\n      <div style=\"display: flex; gap: 8px;\">\n        <span class=\"badge-clean badge-magenta\" style=\"font-size: 9px; font-weight: 700;\">Zero Queue Target</span>\n        <span class=\"badge-clean badge-green\" style=\"font-size: 9px; font-weight: 700;\">Transition to Maintenance</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"slide-footer\">\n    <div class=\"footer-meta\">Project Delivery Milestones &amp; Work Breakdown • BeyondSensor</div>\n    <div class=\"slide-counter\">04A / 13</div>\n  </div>\n</div>",

  // SLIDE 4B: IMPLEMENTATION SCHEDULE & GANTT VISUALS
  "<div class=\"slide-viewport theme-light\" id=\"slide-10\">\n  <div class=\"slide-header\">\n    <div class=\"slide-header-left\">\n      <span class=\"section-tag\">Section 04B</span>\n      <div class=\"slide-title-group\">\n        <h2>Implementation Schedule &amp; Gantt Visuals</h2>\n        <span>Visualized 26-Week Master Timeline: Parallel Workstreams &amp; Key Stage-Gate Deliverables</span>\n      </div>\n    </div>\n    <div class=\"slide-header-branding\">\n      <div class=\"customer-logo-pill\">\n        <img src=\"../assets/design-references/ngee-ann-logo.png\" alt=\"Ngee Ann Polytechnic\">\n      </div>\n      <div class=\"brand-pill-logo\">\n        <img src=\"../assets/design-references/beyond-sensor-logo.png\" alt=\"BeyondSensor Logo\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"slide-content compact\" style=\"padding: 16px 26px 12px 26px; display: flex; flex-direction: column; justify-content: space-between;\">\n    \n    <!-- Gantt Chart Card Container -->\n    <div class=\"card-clean featured\" style=\"padding: 14px 16px; flex: 1; display: flex; flex-direction: column; justify-content: space-between; background: #FFFFFF;\">\n      \n      <div>\n        <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;\">\n          <div>\n            <div class=\"card-title\" style=\"font-size: 13.5px; margin: 0;\">📊 26-Week Multi-Track Schedule Gantt Chart</div>\n            <div class=\"card-subtitle\" style=\"font-size: 10.5px; margin: 2px 0 0 0; color: var(--light-text-muted);\">\n              Coordinated rollout covering software sprints, locker controller fabrication, and data migration\n            </div>\n          </div>\n          <div style=\"display: flex; gap: 8px;\">\n            <span class=\"badge-clean badge-magenta\" style=\"font-size: 8.5px;\">Discovery</span>\n            <span class=\"badge-clean badge-blue\" style=\"font-size: 8.5px;\">Software Dev</span>\n            <span class=\"badge-clean badge-green\" style=\"font-size: 8.5px;\">Smart Lockers</span>\n            <span class=\"badge-clean\" style=\"background: #EEF2FF; color: #4F46E5; border: 1px solid #C7D2FE; font-size: 8.5px;\">Tagging</span>\n            <span class=\"badge-clean\" style=\"background: #FEF3C7; color: #B45309; border: 1px solid #FCD34D; font-size: 8.5px;\">UAT &amp; Live</span>\n          </div>\n        </div>\n\n        <!-- Gantt Visual Grid -->\n        <div style=\"background: #F8FAFC; border: 1px solid var(--light-border); border-radius: 4px; padding: 12px 14px; overflow: hidden;\">\n          \n          <!-- Month & Week Scale Header -->\n          <div style=\"display: grid; grid-template-columns: 210px repeat(6, 1fr); gap: 4px; padding-bottom: 8px; border-bottom: 1.5px solid var(--light-border); font-family: var(--font-mono); font-size: 9.5px; font-weight: 700; color: var(--light-text-heading); text-align: center;\">\n            <div style=\"text-align: left; font-family: var(--font-heading);\">Track / Activity Stream</div>\n            <div style=\"background: #FFFFFF; border: 1px solid var(--light-border); border-radius: 2px; padding: 3px 0;\">M1 (W1-4)</div>\n            <div style=\"background: #FFFFFF; border: 1px solid var(--light-border); border-radius: 2px; padding: 3px 0;\">M2 (W5-8)</div>\n            <div style=\"background: #FFFFFF; border: 1px solid var(--light-border); border-radius: 2px; padding: 3px 0;\">M3 (W9-13)</div>\n            <div style=\"background: #FFFFFF; border: 1px solid var(--light-border); border-radius: 2px; padding: 3px 0;\">M4 (W14-17)</div>\n            <div style=\"background: #FFFFFF; border: 1px solid var(--light-border); border-radius: 2px; padding: 3px 0;\">M5 (W18-21)</div>\n            <div style=\"background: #FFFFFF; border: 1px solid var(--light-border); border-radius: 2px; padding: 3px 0;\">M6 (W22-26)</div>\n          </div>\n\n          <!-- Gantt Row 1: Discovery & Approvals (Weeks 1-4) -->\n          <div style=\"display: grid; grid-template-columns: 210px 1fr; gap: 4px; align-items: center; padding: 8px 0; border-bottom: 1px solid #EDF2F7;\">\n            <div>\n              <strong style=\"font-size: 11px; color: var(--light-text-heading); display: block;\">1. Discovery &amp; Scope Sign-Off</strong>\n              <span style=\"font-size: 9px; color: var(--light-text-muted); font-family: var(--font-mono);\">Site Survey • Role Matrices</span>\n            </div>\n            <div style=\"display: grid; grid-template-columns: repeat(26, 1fr); height: 20px; position: relative;\">\n              <!-- Bar spans W1 to W4 (cols 1-4) -->\n              <div style=\"grid-column: 1 / span 4; background: linear-gradient(90deg, #FF54B0 0%, #C20078 100%); border-radius: 3px; display: flex; align-items: center; justify-content: center; color: #FFF; font-size: 8.5px; font-family: var(--font-mono); font-weight: 700; box-shadow: 0 1px 3px rgba(194,0,120,0.3);\">\n                4 Wks (T+0)\n              </div>\n            </div>\n          </div>\n\n          <!-- Gantt Row 2: Software & Cloud Provision (Weeks 4-15) -->\n          <div style=\"display: grid; grid-template-columns: 210px 1fr; gap: 4px; align-items: center; padding: 8px 0; border-bottom: 1px solid #EDF2F7;\">\n            <div>\n              <strong style=\"font-size: 11px; color: var(--light-text-heading); display: block;\">2. Software &amp; Cloud Build</strong>\n              <span style=\"font-size: 9px; color: var(--light-text-muted); font-family: var(--font-mono);\">PWA Frontend • Supabase Core</span>\n            </div>\n            <div style=\"display: grid; grid-template-columns: repeat(26, 1fr); height: 20px; position: relative;\">\n              <!-- Bar spans W4 to W15 (cols 4-15) -->\n              <div style=\"grid-column: 4 / span 12; background: linear-gradient(90deg, #38BDF8 0%, #0284C7 100%); border-radius: 3px; display: flex; align-items: center; justify-content: center; color: #FFF; font-size: 8.5px; font-family: var(--font-mono); font-weight: 700; box-shadow: 0 1px 3px rgba(2,132,199,0.3);\">\n                12 Weeks Sprints (T+3)\n              </div>\n            </div>\n          </div>\n\n          <!-- Gantt Row 3: Smart Locker Integration (Weeks 7-10) -->\n          <div style=\"display: grid; grid-template-columns: 210px 1fr; gap: 4px; align-items: center; padding: 8px 0; border-bottom: 1px solid #EDF2F7;\">\n            <div>\n              <strong style=\"font-size: 11px; color: var(--light-text-heading); display: block;\">3. Smart Locker Integration</strong>\n              <span style=\"font-size: 9px; color: var(--light-text-muted); font-family: var(--font-mono);\">Hardware Controller • Telemetry</span>\n            </div>\n            <div style=\"display: grid; grid-template-columns: repeat(26, 1fr); height: 20px; position: relative;\">\n              <!-- Bar spans W7 to W10 (cols 7-10) -->\n              <div style=\"grid-column: 7 / span 4; background: linear-gradient(90deg, #34D399 0%, #059669 100%); border-radius: 3px; display: flex; align-items: center; justify-content: center; color: #FFF; font-size: 8.5px; font-family: var(--font-mono); font-weight: 700; box-shadow: 0 1px 3px rgba(5,150,105,0.3);\">\n                4 Wks (T+6)\n              </div>\n            </div>\n          </div>\n\n          <!-- Gantt Row 4: Data Onboarding / Tagging (Week 19) -->\n          <div style=\"display: grid; grid-template-columns: 210px 1fr; gap: 4px; align-items: center; padding: 8px 0; border-bottom: 1px solid #EDF2F7;\">\n            <div>\n              <strong style=\"font-size: 11px; color: var(--light-text-heading); display: block;\">4. Data Tagging &amp; Staging</strong>\n              <span style=\"font-size: 9px; color: var(--light-text-muted); font-family: var(--font-mono);\">1,000+ Barcodes • Bundles</span>\n            </div>\n            <div style=\"display: grid; grid-template-columns: repeat(26, 1fr); height: 20px; position: relative;\">\n              <!-- Bar spans W19 (col 19) -->\n              <div style=\"grid-column: 19 / span 2; background: linear-gradient(90deg, #818CF8 0%, #4F46E5 100%); border-radius: 3px; display: flex; align-items: center; justify-content: center; color: #FFF; font-size: 8px; font-family: var(--font-mono); font-weight: 700; box-shadow: 0 1px 3px rgba(79,70,229,0.3);\">\n                1 Wk (T+18)\n              </div>\n            </div>\n          </div>\n\n          <!-- Gantt Row 5: UAT, Training & Cutover (Weeks 20-26) -->\n          <div style=\"display: grid; grid-template-columns: 210px 1fr; gap: 4px; align-items: center; padding: 8px 0;\">\n            <div>\n              <strong style=\"font-size: 11px; color: var(--light-text-heading); display: block;\">5. UAT, Handover &amp; Cutover</strong>\n              <span style=\"font-size: 9px; color: var(--light-text-muted); font-family: var(--font-mono);\">Staff Pilot • Go-Live Gate</span>\n            </div>\n            <div style=\"display: grid; grid-template-columns: repeat(26, 1fr); height: 20px; position: relative;\">\n              <!-- Bar spans W20 to W26 (cols 20-26) -->\n              <div style=\"grid-column: 20 / span 7; background: linear-gradient(90deg, #FBBF24 0%, #D97706 100%); border-radius: 3px; display: flex; align-items: center; justify-content: center; color: #FFF; font-size: 8.5px; font-family: var(--font-mono); font-weight: 700; box-shadow: 0 1px 3px rgba(217,119,6,0.3);\">\n                6 Wks Pilot &amp; Go-Live (T+20)\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <!-- Critical Stage-Gate Highlights -->\n      <div style=\"display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;\">\n        <div style=\"background: #FDF2F8; border: 1px solid #FBCFE8; border-radius: 4px; padding: 8px 10px;\">\n          <strong style=\"font-size: 10.5px; color: var(--brand-magenta); display: block;\">🎯 Parallel Engineering</strong>\n          <span style=\"font-size: 9.5px; color: var(--light-text-body); line-height: 1.35; display: block; margin-top: 2px;\">\n            Software cloud build overlaps with hardware controller assembly from Week 7, cutting lead times by 30%.\n          </span>\n        </div>\n\n        <div style=\"background: #F0F9FF; border: 1px solid #BAE6FD; border-radius: 4px; padding: 8px 10px;\">\n          <strong style=\"font-size: 10.5px; color: #0284C7; display: block;\">📦 Low-Impact Data Tagging</strong>\n          <span style=\"font-size: 9.5px; color: var(--light-text-body); line-height: 1.35; display: block; margin-top: 2px;\">\n            Barcode tagging executed in Week 19 prior to semester start, preventing teaching interruption.\n          </span>\n        </div>\n\n        <div style=\"background: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 4px; padding: 8px 10px;\">\n          <strong style=\"font-size: 10.5px; color: #059669; display: block;\">🛡️ Dedicated Buffer Window</strong>\n          <span style=\"font-size: 9.5px; color: var(--light-text-body); line-height: 1.35; display: block; margin-top: 2px;\">\n            Generous 6-week UAT and pilot period guarantees staff familiarity before transition to maintenance phase.\n          </span>\n        </div>\n      </div>\n\n    </div>\n\n    <!-- Bottom Status Note -->\n    <div style=\"border-top: 1px dashed var(--light-border); padding-top: 8px; margin-top: 8px; display: flex; align-items: center; justify-content: space-between;\">\n      <span style=\"font-size: 10.5px; color: var(--light-text-heading); font-weight: 700;\">✨ Schedule Commitment:</span>\n      <span style=\"font-size: 10px; color: var(--light-text-muted);\">Total 26 Weeks with zero academic timetable conflict, culminating in seamless SLA maintenance transition.</span>\n    </div>\n\n  </div>\n\n  <div class=\"slide-footer\">\n    <div class=\"footer-meta\">Implementation Schedule &amp; Gantt Visuals • BeyondSensor</div>\n    <div class=\"slide-counter\">04B / 13</div>\n  </div>\n</div>",

  // SLIDE 4C: OPERATIONS MAINTENANCE & SUPPORT MODEL
  "<div class=\"slide-viewport theme-light\" id=\"slide-11\">\n  <div class=\"slide-header\">\n    <div class=\"slide-header-left\">\n      <span class=\"section-tag\">Section 04C</span>\n      <div class=\"slide-title-group\">\n        <h2>Operations Maintenance &amp; WhatsApp Support Model</h2>\n        <span>Direct Communication, Proactive Remote Telemetry &amp; Guaranteed 3-Day On-Site Response</span>\n      </div>\n    </div>\n    <div class=\"slide-header-branding\">\n      <div class=\"customer-logo-pill\">\n        <img src=\"../assets/design-references/ngee-ann-logo.png\" alt=\"Ngee Ann Polytechnic\">\n      </div>\n      <div class=\"brand-pill-logo\">\n        <img src=\"../assets/design-references/beyond-sensor-logo.png\" alt=\"BeyondSensor Logo\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"slide-content compact\" style=\"padding: 16px 26px 12px 26px; display: flex; flex-direction: column; justify-content: space-between;\">\n    \n    <div style=\"display: grid; grid-template-columns: 1.15fr 1.35fr; gap: 14px; flex: 1;\">\n      \n      <!-- Left Column: Core Communication & Upkeep -->\n      <div class=\"card-clean featured\" style=\"display: flex; flex-direction: column; justify-content: space-between; padding: 14px 14px; border-top: 3.5px solid #25D366;\">\n        <div>\n          <div style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;\">\n            <div style=\"display: flex; align-items: center; gap: 6px;\">\n              <span style=\"font-size: 22px;\">💬</span>\n              <strong style=\"font-size: 13.5px; color: var(--light-text-heading);\">Core Channel: WhatsApp Business</strong>\n            </div>\n            <span class=\"badge-clean\" style=\"background: #DCF8C6; color: #128C7E; border: 1px solid #A7F3D0; font-size: 8.5px; font-weight: 700;\">Direct &amp; Instant</span>\n          </div>\n          <div class=\"card-subtitle\" style=\"font-size: 10.5px; margin-bottom: 10px; color: #075E54;\">\n            Zero Support Gatekeepers • Real-Time Staff Escalation\n          </div>\n\n          <div style=\"display: flex; flex-direction: column; gap: 8px;\">\n            <div style=\"background: var(--light-bg-subtle); border-radius: 4px; padding: 8px 10px; border: 1px solid var(--light-border);\">\n              <strong style=\"font-size: 11px; color: var(--light-text-heading); display: block;\">📱 Dedicated FMS WhatsApp Support Group</strong>\n              <p style=\"font-size: 10px; color: var(--light-text-body); line-height: 1.35; margin: 2px 0 0 0;\">\n                All operational queries, bug reports, and urgent locker alerts routed directly into a shared group with BeyondSensor lead engineers.\n              </p>\n            </div>\n\n            <div style=\"background: var(--light-bg-subtle); border-radius: 4px; padding: 8px 10px; border: 1px solid var(--light-border);\">\n              <strong style=\"font-size: 11px; color: var(--light-text-heading); display: block;\">⚡ Sub-15 Minute Acknowledgement</strong>\n              <p style=\"font-size: 10px; color: var(--light-text-body); line-height: 1.35; margin: 2px 0 0 0;\">\n                Fast human response without tedious ticket portals or slow multi-day email chains.\n              </p>\n            </div>\n\n            <div style=\"background: var(--light-bg-subtle); border-radius: 4px; padding: 8px 10px; border: 1px solid var(--light-border);\">\n              <strong style=\"font-size: 11px; color: var(--light-text-heading); display: block;\">🔄 Upkeep &amp; Continuous Support</strong>\n              <p style=\"font-size: 10px; color: var(--light-text-body); line-height: 1.35; margin: 2px 0 0 0;\">\n                Includes monthly cloud security patching, database optimization, and semester blackout calendar adjustments.\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div style=\"background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 3px; padding: 6px 10px; margin-top: 8px;\">\n          <div style=\"display: flex; justify-content: space-between; align-items: center;\">\n            <span style=\"font-size: 9.5px; font-weight: 700; color: #166534;\">Primary Point of Contact:</span>\n            <span style=\"font-family: var(--font-mono); font-size: 9px; color: #15803D;\">yy.foo@beyondsensor.com</span>\n          </div>\n        </div>\n      </div>\n\n      <!-- Right Column: Locker Maintenance (Remote First + 3-Day On-Site Fallback) -->\n      <div class=\"card-clean featured\" style=\"display: flex; flex-direction: column; justify-content: space-between; padding: 14px 14px; border-top: 3.5px solid var(--brand-magenta); background: #FFFFFF;\">\n        <div>\n          <div style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;\">\n            <div style=\"display: flex; align-items: center; gap: 6px;\">\n              <span style=\"font-size: 22px;\">🗄️</span>\n              <strong style=\"font-size: 13.5px; color: var(--light-text-heading);\">Smart Locker Maintenance SOP</strong>\n            </div>\n            <span class=\"badge-clean badge-magenta\" style=\"font-size: 8.5px; font-weight: 700;\">Two-Tier Resolution</span>\n          </div>\n          <div class=\"card-subtitle\" style=\"font-size: 10.5px; margin-bottom: 10px; color: var(--brand-magenta);\">\n            Remote-First Diagnostics with Guaranteed On-Site Response\n          </div>\n\n          <div style=\"display: flex; flex-direction: column; gap: 8px;\">\n            <!-- Tier 1: Remote -->\n            <div style=\"background: #F0F9FF; border: 1px solid #BAE6FD; border-radius: 4px; padding: 8px 10px;\">\n              <div style=\"display: flex; justify-content: space-between; align-items: center;\">\n                <strong style=\"color: #0369A1; font-size: 11px;\">Tier 1: Proactive Remote Diagnostics</strong>\n                <span class=\"badge-clean badge-blue\" style=\"font-size: 8px; padding: 1px 5px;\">&lt; 1 Hr Triage</span>\n              </div>\n              <p style=\"font-size: 10px; color: #0C4A6E; line-height: 1.35; margin: 3px 0 0 0;\">\n                All Block 52 controllers broadcast live heartbeat telemetry. Firmware reboots, sensor overrides, and token regenerations handled remotely within minutes.\n              </p>\n            </div>\n\n            <!-- Tier 2: On-Site Fallback -->\n            <div style=\"background: #FFF1F2; border: 1px solid #FECDD3; border-radius: 4px; padding: 8px 10px;\">\n              <div style=\"display: flex; justify-content: space-between; align-items: center;\">\n                <strong style=\"color: #BE123C; font-size: 11px;\">Tier 2: On-Site Physical Fallback</strong>\n                <span class=\"badge-clean badge-rose\" style=\"font-size: 8px; padding: 1px 5px;\">Within 3 Working Days</span>\n              </div>\n              <p style=\"font-size: 10px; color: #881337; line-height: 1.35; margin: 3px 0 0 0;\">\n                If hardware failure or physical mechanical issues cannot be cleared remotely, BeyondSensor dispatches a certified technician for on-site repair within <strong>3 working days</strong>.\n              </p>\n            </div>\n\n            <!-- Tier 3: Critical Emergencies -->\n            <div style=\"background: #FEF3C7; border: 1px solid #FDE68A; border-radius: 4px; padding: 8px 10px;\">\n              <div style=\"display: flex; justify-content: space-between; align-items: center;\">\n                <strong style=\"color: #92400E; font-size: 11px;\">Offline Safeguard: Mechanical Master Key</strong>\n                <span class=\"badge-clean\" style=\"background: #FDE68A; color: #78350F; border: 1px solid #F59E0B; font-size: 8px; padding: 1px 5px;\">Zero Locked Equipment</span>\n              </div>\n              <p style=\"font-size: 10px; color: #78350F; line-height: 1.35; margin: 3px 0 0 0;\">\n                Physical brass master keys remain with FMS Store Managers at all times, guaranteeing immediate manual gear retrieval even during power outages.\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div style=\"border-top: 1px dashed var(--light-border); padding-top: 6px; margin-top: 8px; display: flex; align-items: center; justify-content: space-between;\">\n          <span style=\"font-size: 9.5px; color: var(--light-text-heading); font-weight: 700;\">SLA Commitment:</span>\n          <span style=\"font-size: 9.5px; color: var(--light-text-muted);\">99.9% Software Uptime • Continuous WhatsApp Escalation • 3-Day On-Site Max</span>\n        </div>\n      </div>\n\n    </div>\n\n    <!-- Bottom Reference Pill -->\n    <div style=\"background: #F8FAFC; border: 1px solid var(--light-border); border-radius: 4px; padding: 8px 14px; margin-top: 10px; display: flex; align-items: center; justify-content: space-between;\">\n      <div style=\"display: flex; align-items: center; gap: 8px;\">\n        <span style=\"font-size: 14px;\">📂</span>\n        <span style=\"font-size: 10px; color: var(--light-text-body);\">\n          <strong>Accompanying Maintenance Dossiers:</strong> Preventive Maintenance Checklist • Smart Locker Hardware SLA • Remote Support Escalation Protocol\n        </span>\n      </div>\n      <span class=\"badge-clean badge-magenta\" style=\"font-size: 8.5px; font-weight: 700;\">Singapore Direct Team</span>\n    </div>\n\n  </div>\n\n  <div class=\"slide-footer\">\n    <div class=\"footer-meta\">Operations Maintenance &amp; WhatsApp Support Model • BeyondSensor</div>\n    <div class=\"slide-counter\">04C / 13</div>\n  </div>\n</div>",

  // SLIDE 5: CYBERSECURITY, DATA RESIDENCY & COMPLIANCE
  `<!-- SLIDE 5: CYBERSECURITY, DATA RESIDENCY & COMPLIANCE -->
<div class="slide-viewport theme-light" id="slide-10">
  <div class="slide-header">
    <div class="slide-header-left">
      <span class="section-tag">Section 05</span>
      <div class="slide-title-group">
        <h2>Cybersecurity, Data Residency & Compliance</h2>
        <span>GovTech IM8-Aligned • Singapore Data Residency • ISO 27001 & SOC 2 Tier Architecture</span>
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

  <div class="slide-content compact" style="padding: 16px 28px 12px 28px; display: flex; flex-direction: column; justify-content: space-between;">
    <!-- 3-Column Architecture: Vercel | Supabase | Overall Governance -->
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; flex: 1;">
      
      <!-- Column 1: Vercel (Frontend & Edge Layer) -->
      <div class="card-clean featured" style="display: flex; flex-direction: column; justify-content: space-between; padding: 13px 13px; border-top: 3.5px solid var(--brand-magenta);">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 20px;">▲</span>
              <strong style="font-size: 13.5px; color: var(--light-text-heading);">Vercel Cloud Edge</strong>
            </div>
            <span class="badge-clean badge-magenta" style="font-size: 9px;">Web &amp; PWA Tier</span>
          </div>
          <div class="card-subtitle" style="font-size: 10.5px; margin-bottom: 8px; color: var(--brand-magenta);">
            Serverless Frontend &amp; Edge API Gateway
          </div>

          <div style="display: flex; flex-direction: column; gap: 6.5px;">
            <div style="background: var(--light-bg-subtle); border-radius: 3px; padding: 7px 9px; border: 1px solid var(--light-border);">
              <strong style="font-size: 10.5px; color: var(--light-text-heading); display: block;">🇸🇬 Singapore Data Residency</strong>
              <p style="font-size: 10px; color: var(--light-text-body); line-height: 1.3; margin: 1px 0 0 0;">
                All edge compute functions and static web assets routed strictly through Singapore PoPs (sin1 region).
              </p>
            </div>

            <div style="background: var(--light-bg-subtle); border-radius: 3px; padding: 7px 9px; border: 1px solid var(--light-border);">
              <strong style="font-size: 10.5px; color: var(--light-text-heading); display: block;">🔒 Encrypted Transit (TLS 1.2 / 1.3)</strong>
              <p style="font-size: 10px; color: var(--light-text-body); line-height: 1.3; margin: 1px 0 0 0;">
                Enforced HSTS, automatic SSL certificate rotation, and TLS 1.3 cryptographic protection end-to-end.
              </p>
            </div>

            <div style="background: var(--light-bg-subtle); border-radius: 3px; padding: 7px 9px; border: 1px solid var(--light-border);">
              <strong style="font-size: 10.5px; color: var(--light-text-heading); display: block;">⚡ Automated CI/CD via GitHub</strong>
              <p style="font-size: 10px; color: var(--light-text-body); line-height: 1.3; margin: 1px 0 0 0;">
                Immutable build records, pull-request previews, and zero downtime blue/green atomic rollouts.
              </p>
            </div>

            <div style="background: var(--light-bg-subtle); border-radius: 3px; padding: 7px 9px; border: 1px solid var(--light-border);">
              <strong style="font-size: 10.5px; color: var(--light-text-heading); display: block;">🛡️ Underlying AWS Global Backbone</strong>
              <p style="font-size: 10px; color: var(--light-text-body); line-height: 1.3; margin: 1px 0 0 0;">
                ISO 27001-certified edge nodes running on high-resilience AWS physical infrastructure.
              </p>
            </div>
          </div>
        </div>

        <div style="margin-top: 8px; padding-top: 6px; border-top: 1px dashed var(--light-border); display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 9.5px; color: var(--light-text-muted); font-family: var(--font-mono);">Role: Host &amp; Frontend</span>
          <span class="badge-clean badge-magenta" style="font-size: 8.5px; font-weight: 700;">ISO 27001 CERTIFIED</span>
        </div>
      </div>

      <!-- Column 2: Supabase (Data, Auth & Storage Layer) -->
      <div class="card-clean featured" style="display: flex; flex-direction: column; justify-content: space-between; padding: 13px 13px; border-top: 3.5px solid var(--color-blue);">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 20px;">⚡</span>
              <strong style="font-size: 13.5px; color: var(--light-text-heading);">Supabase Core</strong>
            </div>
            <span class="badge-clean badge-blue" style="font-size: 9px;">Data &amp; Auth Tier</span>
          </div>
          <div class="card-subtitle" style="font-size: 10.5px; margin-bottom: 8px; color: #0284C7;">
            PostgreSQL Database, Auth &amp; Storage Engine
          </div>

          <div style="display: flex; flex-direction: column; gap: 6.5px;">
            <div style="background: var(--light-bg-subtle); border-radius: 3px; padding: 7px 9px; border: 1px solid var(--light-border);">
              <strong style="font-size: 10.5px; color: var(--light-text-heading); display: block;">🏛️ AWS Singapore (ap-southeast-1)</strong>
              <p style="font-size: 10px; color: var(--light-text-body); line-height: 1.3; margin: 1px 0 0 0;">
                All operational databases, booking states, and student custody records physically hosted in Singapore.
              </p>
            </div>

            <div style="background: var(--light-bg-subtle); border-radius: 3px; padding: 7px 9px; border: 1px solid var(--light-border);">
              <strong style="font-size: 10.5px; color: var(--light-text-heading); display: block;">🔐 Row-Level Security (RLS)</strong>
              <p style="font-size: 10px; color: var(--light-text-body); line-height: 1.3; margin: 1px 0 0 0;">
                Granular database policies enforce tenant and role isolation: users only see records permitted by RBAC.
              </p>
            </div>

            <div style="background: var(--light-bg-subtle); border-radius: 3px; padding: 7px 9px; border: 1px solid var(--light-border);">
              <strong style="font-size: 10.5px; color: var(--light-text-heading); display: block;">🔑 Role: DB, Auth &amp; Object Storage</strong>
              <p style="font-size: 10px; color: var(--light-text-body); line-height: 1.3; margin: 1px 0 0 0;">
                Integrates SSO authentication, equipment asset attachments, and digital signature sign-off vouchers.
              </p>
            </div>

            <div style="background: var(--light-bg-subtle); border-radius: 3px; padding: 7px 9px; border: 1px solid var(--light-border);">
              <strong style="font-size: 10.5px; color: var(--light-text-heading); display: block;">🛡️ Point-in-Time Recovery &amp; Encryption</strong>
              <p style="font-size: 10px; color: var(--light-text-body); line-height: 1.3; margin: 1px 0 0 0;">
                AES-256 encryption at rest, automatic daily snapshot backups, and high-availability multi-AZ redundancy.
              </p>
            </div>
          </div>
        </div>

        <div style="margin-top: 8px; padding-top: 6px; border-top: 1px dashed var(--light-border); display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 9.5px; color: var(--light-text-muted); font-family: var(--font-mono);">Role: DB &amp; Auth Vault</span>
          <span class="badge-clean badge-blue" style="font-size: 8.5px; font-weight: 700;">SOC 2 TYPE 2 CERTIFIED</span>
        </div>
      </div>

      <!-- Column 3: Overall Security & AWS Governance -->
      <div class="card-clean featured" style="display: flex; flex-direction: column; justify-content: space-between; padding: 13px 13px; border-top: 3.5px solid var(--color-emerald); background: #FFFFFF;">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 20px;">🛡️</span>
              <strong style="font-size: 13.5px; color: #065F46;">Overall Governance</strong>
            </div>
            <span class="badge-clean badge-green" style="font-size: 9px;">Institutional Standards</span>
          </div>
          <div class="card-subtitle" style="font-size: 10.5px; margin-bottom: 8px; color: #059669;">
            Data Residency, IM8 Alignment &amp; Hardened Access
          </div>

          <div style="display: flex; flex-direction: column; gap: 6.5px;">
            <div style="background: var(--light-bg-subtle); border-radius: 3px; padding: 7px 9px; border: 1px solid var(--light-border);">
              <strong style="font-size: 10.5px; color: var(--light-text-heading); display: block;">🇸🇬 100% Singapore Data Residency</strong>
              <p style="font-size: 10px; color: var(--light-text-body); line-height: 1.3; margin: 1px 0 0 0;">
                Zero overseas replication of sensitive student, staff, or campus asset data. Complies with IM8 standards.
              </p>
            </div>

            <div style="background: var(--light-bg-subtle); border-radius: 3px; padding: 7px 9px; border: 1px solid var(--light-border);">
              <strong style="font-size: 10.5px; color: var(--light-text-heading); display: block;">☁️ AWS Cloud Integrations &amp; Updates</strong>
              <p style="font-size: 10px; color: var(--light-text-body); line-height: 1.3; margin: 1px 0 0 0;">
                All background microservices, locker IoT sync workers, and system patches hosted securely in AWS Cloud.
              </p>
            </div>

            <div style="background: var(--light-bg-subtle); border-radius: 3px; padding: 7px 9px; border: 1px solid var(--light-border);">
              <strong style="font-size: 10.5px; color: var(--light-text-heading); display: block;">🔒 Secured Access &amp; RBAC Controls</strong>
              <p style="font-size: 10px; color: var(--light-text-body); line-height: 1.3; margin: 1px 0 0 0;">
                Granular multi-factor authentication (MFA), least-privilege API scoping, and timed token expirations.
              </p>
            </div>

            <div style="background: var(--light-bg-subtle); border-radius: 3px; padding: 7px 9px; border: 1px solid var(--light-border);">
              <strong style="font-size: 10.5px; color: var(--light-text-heading); display: block;">📜 36-Month Immutable Audit Trail</strong>
              <p style="font-size: 10px; color: var(--light-text-body); line-height: 1.3; margin: 1px 0 0 0;">
                Tamper-evident logs of every booking submission, approval, locker unlock, and asset check-in.
              </p>
            </div>
          </div>
        </div>

        <div style="background: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 3px; padding: 6px 8px; margin-top: 8px;">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <strong style="font-size: 9.5px; color: #065F46;">Cloud Baseline:</strong>
            <span style="font-family: var(--font-mono); font-size: 9px; color: #047857; font-weight: 700;">ISO 27001 • ISO 27701 • SOC 2</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Governance Disclaimer & Ongoing Certification Roadmap Card -->
    <div style="background: #FFFBEB; border: 1px solid #FDE68A; border-left: 3.5px solid #D97706; border-radius: 4px; padding: 9px 14px; margin-top: 10px; display: flex; align-items: flex-start; gap: 10px;">
      <span style="font-size: 15px; line-height: 1.2;">ℹ️</span>
      <div style="flex: 1;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <strong style="font-size: 11px; color: #92400E; text-transform: uppercase; letter-spacing: 0.3px;">Certification Status &amp; Experience Statement</strong>
          <span class="badge-clean" style="background: #FEF3C7; color: #B45309; border: 1px solid #FCD34D; font-size: 8.5px; padding: 1px 6px;">Active ISO 27001 Roadmap</span>
        </div>
        <p style="font-size: 10px; color: #78350F; line-height: 1.4; margin: 2px 0 0 0;">
          <strong>Organizational Certification Notice:</strong> While BeyondSensor is actively pursuing our own organizational <strong>ISO/IEC 27001 certification</strong> and continually open to enhancing our posture, our solution is engineered atop fully certified ISO 27001 / SOC 2 cloud infrastructure. Crucially, our team possesses <strong>extensive ground experience delivering systems for Singapore government agencies (MOE, SPF/AETOS, URA, NEA)</strong>—ensuring full competence to address all NP FMS security and compliance needs.
        </p>
      </div>
    </div>
  </div>

  <div class="slide-footer">
    <div class="footer-meta">Cybersecurity, Data Residency &amp; Compliance • BeyondSensor</div>
    <div class="slide-counter">05 / 13</div>
  </div>
</div>`,

  // SLIDE 11: ENDING (STRATEGIC PARTNERSHIP PLEDGE)
  `<!-- SLIDE 11: ENDING -->
<div class="slide-viewport theme-dark" id="slide-11">
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
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; padding: 0 30px;">
      
      <!-- Logo Lockup -->
      <div class="hero-logo-box" style="margin-bottom: 16px; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); padding: 8px 18px; border-radius: 6px;">
        <img src="../assets/design-references/beyond-sensor-logo.png" alt="BeyondSensor" style="height: 22px;">
        <span style="color: rgba(255,255,255,0.35); font-size: 14px; margin: 0 10px;">✕</span>
        <img src="../assets/design-references/ngee-ann-logo.png" alt="Ngee Ann Polytechnic" style="height: 20px; background: #FFF; padding: 3px 8px; border-radius: 3px;">
      </div>

      <!-- Main Headline -->
      <h2 style="font-family: var(--font-heading); font-size: 27px; font-weight: 800; color: #FFFFFF; line-height: 1.25; margin-bottom: 10px; max-width: 820px;">
        Ready to Deliver the Gold Standard for Block 52.
      </h2>

      <!-- Subtitle -->
      <p style="font-size: 14px; color: #94A3B8; max-width: 720px; line-height: 1.45; margin-bottom: 24px;">
        Combining rigorous public-sector asset custody with a fluid, frictionless campus mobile experience for FMS students and staff.
      </p>

      <!-- 3 Strategic Pillars Grid -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; width: 100%; max-width: 780px; margin-bottom: 26px;">
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-top: 3px solid #FF54B0; border-radius: 4px; padding: 14px 12px; text-align: center;">
          <div style="color: #FF54B0; font-family: var(--font-mono); font-weight: 800; font-size: 12px; letter-spacing: 0.5px;">⚡ ZERO QUEUES</div>
          <div style="color: #E2E8F0; font-size: 11.5px; font-weight: 600; margin-top: 4px;">Frictionless Self-Service</div>
          <div style="color: #94A3B8; font-size: 10.5px; line-height: 1.35; margin-top: 3px;">PWA mobile touchpoints paired with 24/7 Smart Locker pickup and returns.</div>
        </div>

        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-top: 3px solid #38BDF8; border-radius: 4px; padding: 14px 12px; text-align: center;">
          <div style="color: #38BDF8; font-family: var(--font-mono); font-weight: 800; font-size: 12px; letter-spacing: 0.5px;">🔒 100% CUSTODY</div>
          <div style="color: #E2E8F0; font-size: 11.5px; font-weight: 600; margin-top: 4px;">Institutional Accountability</div>
          <div style="color: #94A3B8; font-size: 10.5px; line-height: 1.35; margin-top: 3px;">36-month tamper-evident audit logs, OTP handshakes, and digital vouchers.</div>
        </div>

        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-top: 3px solid #34D399; border-radius: 4px; padding: 14px 12px; text-align: center;">
          <div style="color: #34D399; font-family: var(--font-mono); font-weight: 800; font-size: 12px; letter-spacing: 0.5px;">🇸🇬 LOCAL TEAM</div>
          <div style="color: #E2E8F0; font-size: 11.5px; font-weight: 600; margin-top: 4px;">Direct Singapore SLA</div>
          <div style="color: #94A3B8; font-size: 10.5px; line-height: 1.35; margin-top: 3px;">On-site tagging of 1,000+ assets, pilot dry run, and &lt;1 hr critical response.</div>
        </div>
      </div>

      <!-- Clean Contact Card -->
      <div style="background: rgba(17, 24, 39, 0.7); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 6px; padding: 12px 24px; display: inline-flex; align-items: center; gap: 20px;">
        <div style="text-align: left;">
          <div style="font-size: 10px; font-family: var(--font-mono); color: #94A3B8; text-transform: uppercase; letter-spacing: 0.5px;">Bidding Entity &amp; Contact Person</div>
          <div style="font-size: 12.5px; color: #FFFFFF; font-weight: 700; margin-top: 2px;">BeyondSensor Pte Ltd</div>
        </div>
        <div style="height: 24px; width: 1px; background: rgba(255, 255, 255, 0.15);"></div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 13px;">✉️</span>
          <a href="mailto:yy.foo@beyondsensor.com" style="font-family: var(--font-mono); font-size: 12px; color: #FF54B0; text-decoration: none; font-weight: 700; letter-spacing: 0.2px;">
            yy.foo@beyondsensor.com
          </a>
        </div>
      </div>

    </div>
  </div>

  <div class="slide-footer">
    <div class="footer-meta">Ngee Ann Polytechnic FMS • Tender Submission FY26</div>
    <div class="slide-counter">11 / 13</div>
  </div>
</div>`
];

