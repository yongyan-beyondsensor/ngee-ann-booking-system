/**
 * Resend Email Connection Test Script
 * Location: 01-planning/01-tender-submission/scripts/test-resend.mjs
 * 
 * Usage:
 *   1. Direct CLI arguments:
 *      node "01-planning/01-tender-submission/scripts/test-resend.mjs" <API_KEY> <RECIPIENT_EMAIL>
 * 
 *   2. Or using .env (reads from project root or current folder):
 *      node --env-file=.env "01-planning/01-tender-submission/scripts/test-resend.mjs"
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to auto-load .env if not loaded via --env-file
function tryLoadEnv() {
  const possiblePaths = [
    path.resolve(process.cwd(), ".env"),
    path.resolve(__dirname, ".env"),
    path.resolve(__dirname, "../../..", ".env"),
  ];

  for (const envPath of possiblePaths) {
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf-8");
      for (const line of content.split("\n")) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
          const [key, ...rest] = trimmed.split("=");
          const val = rest.join("=").trim().replace(/^['"]|['"]$/g, "");
          if (!process.env[key.trim()]) {
            process.env[key.trim()] = val;
          }
        }
      }
      break;
    }
  }
}

tryLoadEnv();

const apiKey = process.argv[2] || process.env.RESEND_API_KEY;
const recipientEmail = process.argv[3] || process.env.TEST_RECIPIENT_EMAIL || process.env.RESEND_TO_EMAIL;
const senderEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

async function main() {
  console.log("=================================================");
  console.log(" 🚀 Resend Connection & Email Dispatch Test       ");
  console.log("    Tender Submission Scripts (BeyondSensor)      ");
  console.log("=================================================");

  if (!apiKey) {
    console.error("\n❌ Error: Missing RESEND_API_KEY.");
    console.log("\nUsage Options:");
    console.log("  1. CLI:  node 01-planning/01-tender-submission/scripts/test-resend.mjs re_123456789 your_email@example.com");
    console.log("  2. .env: Add RESEND_API_KEY=re_... in .env and run:");
    console.log("           node 01-planning/01-tender-submission/scripts/test-resend.mjs your_email@example.com\n");
    process.exit(1);
  }

  if (!recipientEmail) {
    console.error("\n❌ Error: Missing recipient email address.");
    console.log("\nUsage:");
    console.log("  node 01-planning/01-tender-submission/scripts/test-resend.mjs " + apiKey.slice(0, 7) + "... your_email@example.com\n");
    process.exit(1);
  }

  console.log(`\n🔑 API Key:     ${apiKey.slice(0, 6)}...${apiKey.slice(-4)}`);
  console.log(`📤 From:        ${senderEmail}`);
  console.log(`📥 To:          ${recipientEmail}`);
  console.log(`⏱  Timestamp:   ${new Date().toISOString()}`);

  const payload = {
    from: senderEmail,
    to: [recipientEmail],
    subject: `Resend Connection Test - BeyondSensor Booking System (${new Date().toLocaleTimeString()})`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #2563eb; margin-top: 0;">✅ Resend Connection Verified!</h2>
        <p>This test email confirms that your <strong>Resend API connection</strong> and credentials for the <strong>Ngee Ann Booking System</strong> are active and operational.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; color: #64748b;"><strong>Sender:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${senderEmail}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; color: #64748b;"><strong>Recipient:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${recipientEmail}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; color: #64748b;"><strong>Server Time:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${new Date().toISOString()}</td>
          </tr>
        </table>

        <!-- Link Examples -->
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin: 20px 0;">
          <h4 style="margin: 0 0 10px 0; color: #0f172a; font-size: 14px;">🔗 Link Examples:</h4>
          
          <!-- 1. Inline Text Link -->
          <p style="margin: 0 0 12px 0; font-size: 14px;">
            1. Inline text link: Visit 
            <a href="https://www.google.com" target="_blank" style="color: #2563eb; text-decoration: underline; font-weight: 500;">
              Google Search (www.google.com)
            </a>
          </p>

          <!-- 2. Styled Action Button Link -->
          <p style="margin: 0 0 8px 0; font-size: 14px;">2. Styled button link:</p>
          <a href="https://www.google.com" target="_blank" style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
            Open Google in Browser &rarr;
          </a>
        </div>

        <p style="font-size: 13px; color: #64748b; margin-bottom: 0;">
          Sent by BeyondSensor Dev Tools · Tender Ref: FY26/FMS/003x/ITQ
        </p>
      </div>
    `,
  };

  try {
    console.log("\n📡 Sending request to https://api.resend.com/emails...");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey.trim()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("\n❌ Resend API Error:", response.status, response.statusText);
      console.error(JSON.stringify(data, null, 2));

      if (data?.message && data.message.includes("can only send testing emails to your own email")) {
        console.log("\n💡 NOTE: With 'onboarding@resend.dev', Resend only allows sending test emails to the email address registered with your Resend account.");
      }
      process.exit(1);
    }

    console.log("\n🎉 SUCCESS! Email dispatched successfully.");
    console.log("-------------------------------------------------");
    console.log(`Email ID: ${data.id}`);
    console.log("Check your inbox (or spam folder) for the test message.\n");
  } catch (err) {
    console.error("\n❌ Network / Connection Failure:", err.message);
    process.exit(1);
  }
}

main();
