import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

type LeadBody = {
  kind?: string;
  name?: string;
  email?: string;
  company?: string;
  website?: string;
  service?: string;
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
  timezone?: string;
  website_url?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  let body: LeadBody;

  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot
  if (body.website_url) {
    return NextResponse.json({ ok: true });
  }

  const kind = body.kind === "schedule" ? "schedule" : "contact";
  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message || !isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid name, email, and message." },
      { status: 400 }
    );
  }

  if (kind === "schedule" && (!body.preferredDate || !body.preferredTime)) {
    return NextResponse.json(
      { ok: false, error: "Please choose a preferred date and time." },
      { status: 400 }
    );
  }

  const subject =
    kind === "schedule"
      ? `Schedule a call — ${name}`
      : `New lead — ${body.service || "General"} — ${name}`;

  const lines = [
    `Lead type: ${kind === "schedule" ? "Schedule a call" : "Contact form"}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${body.company || "—"}`,
    `Website: ${body.website || "—"}`,
    `Service: ${body.service || "—"}`,
    kind === "schedule"
      ? `Preferred: ${body.preferredDate} ${body.preferredTime} (${body.timezone || "unspecified"})`
      : null,
    "",
    "Message:",
    message,
  ].filter(Boolean);

  const payload = {
    name,
    email,
    _subject: subject,
    _template: "table",
    _replyto: email,
    _captcha: "false",
    company: body.company || "",
    website: body.website || "",
    service: body.service || "",
    preferredDate: body.preferredDate || "",
    preferredTime: body.preferredTime || "",
    timezone: body.timezone || "",
    message: lines.join("\n"),
  };

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      console.error("FormSubmit error:", response.status, text);
      return NextResponse.json(
        {
          ok: false,
          error: `Could not deliver the message. Please email ${siteConfig.email} directly.`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead delivery failed:", error);
    return NextResponse.json(
      {
        ok: false,
        error: `Could not deliver the message. Please email ${siteConfig.email} directly.`,
      },
      { status: 502 }
    );
  }
}
