# Cloud Infrastructure Cost Models & 36-Month Budget Projections

**Tender Reference:** `FY26/FMS/003x/ITQ`  
**Target:** School of Film & Media Studies (FMS), Ngee Ann Polytechnic  
**Contract Duration:** 36 Months (3 Years)  
**Procurement Context:** GeBIZ Invitation to Quote (ITQ) Ceiling $\le \text{S}\$90,000$ (Estimated bid range: $\text{S}\$50,000 - \text{S}\$80,000$)  
**Currency Exchange Benchmark:** $1.00 \text{ USD} \approx 1.35 \text{ SGD}$  

---

## 1. Modular Infrastructure Component Pricing (A La Carte)

The table below breaks down every individual cloud service evaluated, its tier requirements, and its 36-month cost impact.

| Component Area | Service & Plan Tier | Included Resources & Capacity | Monthly Cost (USD) | 36-Month Total (USD) | 36-Month Total (SGD) |
| :--- | :--- | :--- | :---: | :---: | :---: |
| **Frontend / Web App** | **Vercel Pro** (1 Developer Seat)* | 1 TB Bandwidth, 1M Serverless Invocations, Automated CI/CD, SSL | $20.00 / mo | $720.00 | **~S$ 972** |
| | *Vercel Pro (2 Developer Seats)* | Additional admin/team member seat | + $20.00 / mo | + $720.00 | + ~S$ 972 |
| **Database & Auth** | **Supabase Pro** | 8 GB Database, 100k MAU, 100 GB Storage, Realtime, Daily Backups (7d) | $25.00 / mo | $900.00 | **~S$ 1,215** |
| **30-Day Backup Mandate** | **Option A: Scripted S3 Dumps** | Daily `pg_dump` via GitHub Action to AWS S3 (Singapore) (Clause 13.4) | ~$2.00 / mo | ~$72.00 | **~S$ 97** |
| *(Clause 13.4)* | **Option B: Supabase PITR Add-On** | Managed 30-Day Point-in-Time Recovery directly in Supabase Dashboard | $100.00 / mo | $3,600.00 | **~S$ 4,860** |
| **Transactional Email** | **Option A: AWS SES (Singapore)** | 10,000 emails/mo via `ap-southeast-1` (Used with React Email) | ~$1.50 / mo | ~$54.00 | **~S$ 73** |
| *(Clause 8.1 & 8.2)* | **Option B: Resend Pro** | 50,000 emails/mo, dedicated API, React Email native dashboard | $20.00 / mo | $720.00 | **~S$ 972** |
| **Self-Hosted IaaS** | **Akamai / Linode 8 GB VM** | 4 vCPU, 8 GB RAM, 160 GB SSD (Singapore DC) for Docker Stack | $48.00 / mo | $1,728.00 | **~S$ 2,333** |
| *(Alternative Stack)* | **Akamai Object Storage** | 250 GB S3-compatible storage in Singapore (Backups + Logs) | $5.00 / mo | $180.00 | **~S$ 243** |
| **Domain & Monitoring** | **Route53 / Cloudflare + Uptime** | DNS hosting, automated health check alerts, SSL verification | ~$3.00 / mo | ~$108.00 | **~S$ 146** |

*\*Note: Commercial public sector projects cannot use Vercel Free or Supabase Free tiers without violating platform Terms of Service.*

---

## 2. The 4 Comparative Stack Scenarios (36-Month Projections)

To give you complete flexibility in balancing developer velocity, data residency, and profit margins, here are the 4 viable full-stack configurations:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   36-MONTH COST COMPARISON (SGD)                       │
├────────────────────────────────────────────────────────────────────────┤
│ Scenario 1 (Lean Compliant)   : ████ S$ 2,433                          │
│ Scenario 2 (Resend Pro Stack) : ██████ S$ 3,332                        │
│ Scenario 3 (Akamai All-In-One): ████ S$ 2,795                          │
│ Scenario 4 (Max Managed PITR) : ████████████ S$ 8,192                  │
└────────────────────────────────────────────────────────────────────────┘
```

---

### Scenario 1: Lean & Compliant Stack (Recommended Baseline)
* **Components:** Vercel Pro ($20) + Supabase Pro ($25) + Scripted S3 Backups ($2) + AWS SES SG / React Email ($1.50) + DNS/Monitoring ($3)
* **Monthly Cost:** **~$51.50 USD / month** (~S$ 69.50 SGD)
* **36-Month Total Cost:** **~$1,854 USD (~S$ 2,503 SGD)**
* **Why Choose This:**
  - Lowest cost while maintaining 100% compliance.
  - Zero US data residency friction (AWS SES strictly in Singapore `ap-southeast-1`).
  - React Email gives you identical modern email templates as Resend.
  - Leaves $> 95\%$ of your contract value as gross margin.

---

### Scenario 2: Developer-Velocity Stack (With Resend Pro)
* **Components:** Vercel Pro ($20) + Supabase Pro ($25) + Scripted S3 Backups ($2) + **Resend Pro ($20)** + DNS/Monitoring ($3)
* **Monthly Cost:** **~$70.00 USD / month** (~S$ 94.50 SGD)
* **36-Month Total Cost:** **~$2,520 USD (~S$ 3,402 SGD)**
* **Why Choose This:**
  - You get Resend’s managed dashboard, delivery analytics, and direct SDK integration.
  - Additional cost over 36 months is only **+S$ 899 SGD** ($24.97/mo difference).
  - Requires adding Resend Inc. as a disclosed sub-processor under Annex A Clause 9.

---

### Scenario 3: Flat Fixed-Cost Self-Hosted Stack (Akamai / Linode)
* **Components:** Linode 8 GB VM ($48) + Akamai Object Storage ($5) + AWS SES SG ($1.50) + DNS/Monitoring ($3)
* **Monthly Cost:** **~$57.50 USD / month** (~S$ 77.60 SGD)
* **36-Month Total Cost:** **~$2,070 USD (~S$ 2,795 SGD)**
* **Why Choose This:**
  - 100% on-premise style control in Singapore.
  - Completely flat, unmetered cost with zero platform seat fees.
  - Higher operational overhead (requires managing Linux OS, Docker, and failover).

---

### Scenario 4: Fully Hands-Off Enterprise Managed Stack
* **Components:** Vercel Pro ($20) + Supabase Pro ($25) + **Supabase 30-Day PITR Add-On ($100)** + Resend Pro ($20) + DNS ($3)
* **Monthly Cost:** **~$168.00 USD / month** (~S$ 226.80 SGD)
* **36-Month Total Cost:** **~$6,048 USD (~S$ 8,165 SGD)**
* **Why Choose This:**
  - Zero scripting needed: Supabase dashboard handles 30-day point-in-time database restoration at the click of a button.
  - Highest convenience, but the $100/mo PITR add-on represents 60% of the entire hosting bill.

---

## 3. Financial Summary Table: Scenario Comparison

| Financial Metric | Scenario 1: Lean Compliant | Scenario 2: Resend Pro | Scenario 3: Akamai Linode | Scenario 4: Max Managed |
| :--- | :---: | :---: | :---: | :---: |
| **Frontend Platform** | Vercel Pro | Vercel Pro | Self-Hosted Docker | Vercel Pro |
| **Database Platform** | Supabase Pro | Supabase Pro | Self-Hosted Postgres | Supabase Pro |
| **Email Service** | AWS SES (SG) + React Email | Resend Pro | AWS SES (SG) | Resend Pro |
| **30-Day Backup Engine** | Automated S3 Dumps | Automated S3 Dumps | Automated S3 Dumps | Supabase Managed PITR |
| **Monthly Cost (USD)** | **$51.50** | **$70.00** | **$57.50** | **$168.00** |
| **Monthly Cost (SGD)** | **~S$ 69.50** | **~S$ 94.50** | **~S$ 77.60** | **~S$ 226.80** |
| **36-Month Cost (USD)**| **$1,854.00** | **$2,520.00** | **$2,070.00** | **$6,048.00** |
| **36-Month Cost (SGD)**| **~S$ 2,503** | **~S$ 3,402** | **~S$ 2,795** | **~S$ 8,165** |
| **% of S$60k Tender Bid**| **4.1%** | **5.6%** | **4.6%** | **13.6%** |

---

## 4. Key Cost Optimization Takeaways

1. **The Biggest Cost Lever is the 30-Day Backup:**
   - Choosing **automated daily S3 dumps** (~$2/mo) instead of Supabase’s managed PITR add-on ($100/mo) **saves S$ 4,763 SGD** over the contract period with virtually identical data safety.
2. **Resend Pro is Highly Affordable:**
   - If you choose Resend Pro over AWS SES, the cost difference over 3 years is only **~S$ 899 SGD (~S$25/mo)**. If your team saves even 5 hours of setup and template maintenance time, Resend easily pays for itself.
3. **Buffer for Exchange Rate Fluctuation:**
   - Because GeBIZ tenders are fixed-price in Singapore Dollars (SGD) while cloud bills are invoiced in US Dollars (USD), factor in a **5% to 8% FX buffer** (e.g. assume 1 USD = 1.38 SGD) when finalizing your tender pricing table.
