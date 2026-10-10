# Vercel Hosting Review: Costs, Compliance & Architectural Implications

**Tender Reference:** `FY26/FMS/003x/ITQ`  
**Platform Evaluated:** Vercel (Frontend & Serverless Application Hosting)  
**Target:** School of Film & Media Studies (FMS), Ngee Ann Polytechnic  
**Contract Duration:** 36 Months (3 Years)  

---

## 1. Executive Verdict

**Verdict:** **FEASIBLE ON VERCEL PRO, BUT WITH 3 CRITICAL CONFIGURATION SAFEGUARDS.**

Hosting the web application on Vercel is highly advantageous for fast development, zero-ops CI/CD, global CDN speed, and native Next.js optimization. Vercel itself is **ISO/IEC 27001 certified** and **SOC 2 Type 2 certified**.

However, because this is an ITQ bound by Singapore Government Procurement rules and **Annex A (Data Disclosure & PDPA)**:
1. **Serverless Region Mandate (`sin1`)**: Default Vercel serverless functions run in the US (`iad1`). You **must explicitly hardcode `sin1` (Singapore)** in `vercel.json` so personal data (names, IDs, emails) is never processed abroad.
2. **Plan Tier**: You **cannot use the Free/Hobby tier** (violates Vercel commercial ToS). You must use **Vercel Pro** (~US$20/mo per seat). Vercel Enterprise (~US$20k+/yr) is commercially unviable given GeBIZ ITQ budget caps ($\le \text{S}\$90,000$).
3. **Audit Log Draining**: Vercel Pro only retains runtime logs for 1–3 days. If API routes process authentication or approvals, you must drain logs or handle all audit records inside PostgreSQL.

---

## 2. 36-Month Cost Projection Breakdown

Because ITQs have a maximum procurement ceiling of **S$90,000**, hosting and operational expenses must remain lean over the 36-month contract.

### A. Vercel Hosting Cost (36 Months)

| Line Item | Tier / Unit | Monthly Cost (USD) | 36-Month Total (USD) | 36-Month Total (SGD ~1.35) |
| :--- | :--- | :---: | :---: | :---: |
| **Vercel Pro Base Plan** | 1 Developer / Admin Seat | $20.00 / mo | $720.00 | ~S$ 972 |
| **Fast Data Transfer (Bandwidth)** | 1 TB/month included (FMS usage estimated < 150 GB/mo) | $0.00 (within quota) | $0.00 | S$ 0 |
| **Serverless Function Executions** | 1,000,000 invocations / mo included (More than sufficient for FMS) | $0.00 (within quota) | $0.00 | S$ 0 |
| **Custom Domain & Automated SSL** | Included (wildcard TLS via Let's Encrypt) | $0.00 | $0.00 | S$ 0 |
| **Vercel Subtotal** | | **$20.00 / mo** | **$720.00** | **~S$ 972** |

*(Note: Adding a 2nd developer seat increases Vercel by $20/mo. For single-lead delivery, 1 seat is sufficient).*

---

### B. Total Estimated Cloud Infrastructure Stack (Vercel + Supabase + SES)

To understand the full operational cost for 36 months:

| Service Provider | Role in Stack | Monthly Cost (USD) | 36-Month Total (USD) | 36-Month Total (SGD) |
| :--- | :--- | :---: | :---: | :---: |
| **Vercel Pro** | Web App & SSR / API Hosting | $20.00 | $720.00 | ~S$ 972 |
| **Supabase Pro** | PostgreSQL, Auth, Realtime, Storage | $25.00 | $900.00 | ~S$ 1,215 |
| **Supabase 30-Day PITR** | Automated 30-day backup retention (Clause 13.4) | $100.00 | $3,600.00 | ~S$ 4,860 |
| **AWS SES (Singapore)** | Custom transactional SMTP (Annex A PDPA) | ~$2.00 | $72.00 | ~S$ 97 |
| **Total Cloud Infra Cost** | **Complete SaaS Backend & Frontend** | **~$147.00 / mo** | **~$5,292.00** | **~S$ 7,144** |

> **Cost Optimization Tip:** Instead of paying $100/mo for Supabase managed 30-day PITR ($3,600 over 36 months), you can run an automated daily GitHub Action / AWS Lambda `pg_dump` script sending encrypted SQL dumps to AWS S3 in Singapore for ~**S$2/month**, reducing your total 36-month hosting bill to **~S$2,300 SGD**.

---

## 3. Critical Technical & Compliance Implications

### 1. Singapore Data Residency & Annex A PDPA (Clause 13.2 & Annex A Clause 4)
- **The Issue:** Vercel is a global edge network. By default, Vercel Serverless Functions (API routes, Next.js Server Components, Server Actions) deploy to **Washington D.C., USA (`iad1`)**.
- **Tender Restriction:** Annex A Clause 4 strictly states: *"The contractor shall not transfer personal data held in connection with this agreement outside Singapore, or allow parties outside Singapore to have access to it, without the prior approval of the agency."*
- **Solution:** You **must** lock serverless regions to Singapore by adding this configuration to your project root `vercel.json`:
  ```json
  {
    "regions": ["sin1"]
  }
  ```
  This guarantees that all serverless compute executes in AWS Singapore (`ap-southeast-1`), matching your Supabase database region.

### 2. ISO/IEC 27001 Certification (Clause 13.1)
- **Tender Requirement:** Vendor must possess a valid ISO/IEC 27001 certification covering the proposed service and operational environment.
- **Vercel Standing:** Vercel holds both **ISO/IEC 27001:2013** and **SOC 2 Type 2** certifications. 
- **Submission Action:** You can download Vercel’s ISO 27001 compliance certificate from the Vercel Trust Center to include as supporting evidence for your hosting environment compliance.

### 3. Service Level Agreement (SLA) & 99.5% Uptime (Clause 11.1)
- **Tender Requirement:** Monthly system availability $\ge 99.5\%$ (excluding scheduled maintenance).
- **Vercel Standing:**
  - Vercel Enterprise provides a formal contractual 99.99% SLA.
  - Vercel Pro does *not* offer contractual SLA payout credits, but its underlying architecture (Anycast CDN + AWS infrastructure) historically maintains $> 99.95\%$ uptime, comfortably surpassing the 99.5% threshold.
  - Because maintenance windows require 3 business days' notice under Clause 11.4, Vercel's zero-downtime atomic deployments are a major benefit (deployments switch instantly without maintenance downtime).

### 4. 36-Month Audit Logging (Clause 3.0)
- **The Issue:** Vercel Pro runtime logs only persist for up to 3 days in the dashboard.
- **Solution:** Do not rely on Vercel for operational audit logs. All critical operations (user login, loan check-out, approval click, returns, and inventory modifications) should write directly to your PostgreSQL `security_audit_logs` table via Supabase client/server calls.

### 5. Mobile & Desktop Responsive Access (Clause 3.0 & 6.2)
- Technical officers and students will be accessing the system on store counter tablets, mobile phones (for QR code scanning and self-service checks), and desktop browsers.
- Vercel provides fast global edge asset delivery with automated Brotli/Gzip compression and WebP/AVIF image optimization, ensuring fluid mobile responsiveness.

---

## 4. Architectural Alternatives: Vercel vs. Pure Static (S3/CloudFront)

If you wish to compare architectures:

| Criteria | Vercel Pro (Next.js SSR / API) | AWS S3 + CloudFront (Singapore) / Cloudflare Pages |
| :--- | :--- | :--- |
| **Framework** | Next.js / Nuxt / SvelteKit | Vite + React SPA |
| **Hosting Cost (36 Mo)** | ~S$ 972 | ~S$ 50 – S$ 150 |
| **Compliance Risk** | Zero (if `regions: ["sin1"]` is set) | Zero (S3 bucket strictly locked to `ap-southeast-1`) |
| **Serverless Maintenance**| Zero maintenance, automated preview branches | Requires AWS IAM, S3 bucket policies, CloudFront config |
| **Developer Velocity** | Very High (Instant git-push deploy) | Medium (Setup CI/CD deployment pipeline) |

**Recommendation:** If you are building with Next.js or need server-side rendering / server actions, **Vercel Pro (configured with `sin1`) is the best balance of speed, compliance, and developer convenience**, and its ~S$972 3-year cost is negligible within the tender budget.
