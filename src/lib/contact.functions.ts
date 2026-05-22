import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const RESEND_API_URL = "https://api.resend.com/emails";
const TO_EMAIL = "tusshar@diamondrealty.co";
const FROM_EMAIL = "Diamond Realty <onboarding@resend.dev>";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(200).optional().default(""),
  requirementType: z.string().trim().max(120).optional().default(""),
  city: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(1).max(4000),
  // honeypot — bots fill hidden fields
  website: z.string().max(0).optional().default(""),
});

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website) {
      // Honeypot tripped — pretend success.
      return { ok: true };
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY is not configured");

    const rows: [string, string][] = [
      ["Name", data.name],
      ["Email", data.email],
      ["Company", data.company || "—"],
      ["Requirement Type", data.requirementType || "—"],
      ["Preferred City", data.city || "—"],
      ["Message", data.message],
    ];

    const html = `
      <div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;color:#1a1a1a;">
        <h2 style="font-weight:500;letter-spacing:-0.01em;margin:0 0 16px;">New Inquiry — Diamond Realty</h2>
        <table style="width:100%;border-collapse:collapse;font-family:Helvetica,Arial,sans-serif;font-size:14px;">
          ${rows
            .map(
              ([k, v]) => `
              <tr>
                <td style="padding:10px 12px;background:#f7f5f0;border:1px solid #eee;width:170px;color:#6b6b6b;text-transform:uppercase;font-size:11px;letter-spacing:0.12em;">${k}</td>
                <td style="padding:10px 12px;border:1px solid #eee;white-space:pre-wrap;">${escapeHtml(v)}</td>
              </tr>`,
            )
            .join("")}
        </table>
      </div>
    `;

    const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

    const res = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: data.email,
        subject: `New Inquiry — ${data.name}${data.company ? ` (${data.company})` : ""}`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Resend send failed", res.status, body);
      let detail = body;
      try {
        const parsed = JSON.parse(body);
        detail = parsed?.message || parsed?.error?.message || body;
      } catch {}
      throw new Error(`Email send failed (${res.status}): ${detail}`);
    }

    return { ok: true };
  });