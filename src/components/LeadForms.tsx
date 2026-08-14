"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

type FormKind = "contact" | "schedule";
type Status = "idle" | "loading" | "success" | "error";

const services = [
  "GA4 Setup & Migration",
  "Google Tag Manager",
  "Conversion Tracking",
  "Pixel Setup",
  "Conversion Rate Optimization",
  "GTM Cleanup",
  "Tracking Audit",
  "Other / Not sure",
];

function buildMailBody(kind: FormKind, data: Record<string, string>) {
  const lines = [
    `Lead type: ${kind === "schedule" ? "Schedule a call" : "Contact form"}`,
    `Name: ${data.name || ""}`,
    `Email: ${data.email || ""}`,
    `Company: ${data.company || "—"}`,
    `Website: ${data.website || "—"}`,
    `Service: ${data.service || "—"}`,
    kind === "schedule"
      ? `Preferred: ${data.preferredDate || ""} ${data.preferredTime || ""} (${data.timezone || ""})`
      : null,
    "",
    "Message:",
    data.message || "",
  ].filter((line): line is string => Boolean(line));

  return lines.join("\n");
}

/**
 * Sends lead data to septcollineswebmasters@gmail.com via FormSubmit (JS fetch).
 * No mailto redirect — stays on the website and shows success/error inline.
 */
async function deliverLead(kind: FormKind, data: Record<string, string>) {
  const subject =
    kind === "schedule"
      ? `Schedule a call — ${data.name}`
      : `New lead — ${data.service || "General"} — ${data.name}`;

  const formData = new FormData();
  formData.append("name", data.name || "");
  formData.append("email", data.email || "");
  formData.append("company", data.company || "");
  formData.append("website", data.website || "");
  formData.append("service", data.service || "");
  formData.append("preferredDate", data.preferredDate || "");
  formData.append("preferredTime", data.preferredTime || "");
  formData.append("timezone", data.timezone || "");
  formData.append("message", buildMailBody(kind, data));
  formData.append("_subject", subject);
  formData.append("_template", "table");
  formData.append("_replyto", data.email || "");
  formData.append("_captcha", "false");
  formData.append("_honey", "");

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.email)}`,
    {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    }
  );

  const contentType = response.headers.get("content-type") || "";
  let payload: { success?: string | boolean; message?: string } = {};

  if (contentType.includes("application/json")) {
    payload = (await response.json()) as typeof payload;
  } else {
    const text = await response.text();
    if (!response.ok || text.toLowerCase().includes("just a moment")) {
      throw new Error(
        "Email service is temporarily unavailable. Please try again in a moment."
      );
    }
  }

  if (!response.ok) {
    throw new Error(
      payload.message ||
        "We could not send your message right now. Please try again."
    );
  }

  // FormSubmit returns success: "true" or true after activation
  if (payload.success === false) {
    throw new Error(
      payload.message ||
        "We could not send your message right now. Please try again."
    );
  }
}

export function LeadForms() {
  const [contactStatus, setContactStatus] = useState<Status>("idle");
  const [scheduleStatus, setScheduleStatus] = useState<Status>("idle");
  const [contactMessage, setContactMessage] = useState("");
  const [scheduleMessage, setScheduleMessage] = useState("");

  async function submit(kind: FormKind, event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    // Honeypot
    if (data.website_url) {
      return;
    }

    if (kind === "contact") {
      setContactStatus("loading");
      setContactMessage("");
    } else {
      setScheduleStatus("loading");
      setScheduleMessage("");
    }

    try {
      await deliverLead(kind, data);
      form.reset();
      if (kind === "contact") {
        setContactStatus("success");
        setContactMessage(
          `Thanks! Your message was sent to ${siteConfig.email}. We’ll reply shortly.`
        );
      } else {
        setScheduleStatus("success");
        setScheduleMessage(
          `Call request sent to ${siteConfig.email}. We’ll confirm your time by email within one business day.`
        );
      }
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      if (kind === "contact") {
        setContactStatus("error");
        setContactMessage(message);
      } else {
        setScheduleStatus("error");
        setScheduleMessage(message);
      }
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <section
        id="contact"
        className="card card-coral scroll-mt-28 p-6 md:p-8"
        aria-labelledby="contact-heading"
      >
        <span className="pill">Contact</span>
        <h2
          id="contact-heading"
          className="font-display mt-4 text-3xl font-semibold text-ink md:text-4xl"
        >
          Tell us what you need tracked
        </h2>
        <p className="mt-3 text-ink-soft">
          Form data is emailed instantly to{" "}
          <strong className="text-coral-deep">{siteConfig.email}</strong>. Expect
          a clear scope and the best price for the work.
        </p>

        <form className="mt-7 space-y-4" onSubmit={(e) => submit("contact", e)} noValidate={false}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-ink">
              Full name
              <input
                className="input-field mt-1.5"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Alex Rivera"
              />
            </label>
            <label className="block text-sm font-semibold text-ink">
              Work email
              <input
                className="input-field mt-1.5"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="alex@company.com"
              />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-ink">
              Company
              <input
                className="input-field mt-1.5"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Acme Inc."
              />
            </label>
            <label className="block text-sm font-semibold text-ink">
              Website
              <input
                className="input-field mt-1.5"
                name="website"
                type="url"
                placeholder="https://"
              />
            </label>
          </div>
          <label className="block text-sm font-semibold text-ink">
            Service interest
            <select
              className="input-field mt-1.5"
              name="service"
              defaultValue="Tracking Audit"
            >
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-semibold text-ink">
            Project details
            <textarea
              className="input-field mt-1.5 min-h-32 resize-y"
              name="message"
              required
              placeholder="Share your stack, current issues, and goals…"
            />
          </label>
          <input
            type="text"
            name="website_url"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <button
            type="submit"
            className="btn-primary focus-ring w-full sm:w-auto"
            disabled={contactStatus === "loading"}
          >
            {contactStatus === "loading" ? "Sending to email…" : "Send message"}
          </button>
          {contactMessage && (
            <p
              className={`rounded-xl border-2 px-4 py-3 text-sm font-medium ${
                contactStatus === "error"
                  ? "border-coral/40 bg-[#fff0ec] text-coral-deep"
                  : "border-sky/50 bg-[#eef9fd] text-sky-deep"
              }`}
              role="status"
            >
              {contactMessage}
            </p>
          )}
        </form>
      </section>

      <section
        id="schedule"
        className="card card-navy scroll-mt-28 p-6 md:p-8"
        aria-labelledby="schedule-heading"
      >
        <span className="inline-flex rounded-full border border-amber/50 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-amber">
          Schedule a call
        </span>
        <h2
          id="schedule-heading"
          className="font-display mt-4 text-3xl font-semibold md:text-4xl"
        >
          Book a discovery call
        </h2>
        <p className="mt-3 text-white/75">
          Pick a preferred date and time. We’ll email confirmation from{" "}
          <strong className="text-amber">{siteConfig.email}</strong> and walk
          through your GA4, GTM, and conversion goals.
        </p>

        <form className="mt-7 space-y-4" onSubmit={(e) => submit("schedule", e)}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-white">
              Full name
              <input
                className="input-field mt-1.5 border-white/20 bg-white/10 text-white placeholder:text-white/45"
                name="name"
                type="text"
                required
                placeholder="Jordan Lee"
              />
            </label>
            <label className="block text-sm font-semibold text-white">
              Work email
              <input
                className="input-field mt-1.5 border-white/20 bg-white/10 text-white placeholder:text-white/45"
                name="email"
                type="email"
                required
                placeholder="jordan@company.com"
              />
            </label>
          </div>
          <label className="block text-sm font-semibold text-white">
            Company
            <input
              className="input-field mt-1.5 border-white/20 bg-white/10 text-white placeholder:text-white/45"
              name="company"
              type="text"
              placeholder="Your company"
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-white">
              Preferred date
              <input
                className="input-field mt-1.5 border-white/20 bg-white/10 text-white"
                name="preferredDate"
                type="date"
                required
              />
            </label>
            <label className="block text-sm font-semibold text-white">
              Preferred time
              <input
                className="input-field mt-1.5 border-white/20 bg-white/10 text-white"
                name="preferredTime"
                type="time"
                required
              />
            </label>
          </div>
          <label className="block text-sm font-semibold text-white">
            Timezone
            <select
              className="input-field mt-1.5 border-white/20 bg-white/10 text-white"
              name="timezone"
              defaultValue="America/New_York"
            >
              <option value="America/New_York">Eastern Time (US)</option>
              <option value="America/Chicago">Central Time (US)</option>
              <option value="America/Denver">Mountain Time (US)</option>
              <option value="America/Los_Angeles">Pacific Time (US)</option>
              <option value="Asia/Kolkata">India Standard Time</option>
              <option value="UTC">UTC</option>
            </select>
          </label>
          <label className="block text-sm font-semibold text-white">
            What should we cover?
            <textarea
              className="input-field mt-1.5 min-h-28 resize-y border-white/20 bg-white/10 text-white placeholder:text-white/45"
              name="message"
              required
              placeholder="Audit, GTM cleanup, new pixel setup…"
            />
          </label>
          <input
            type="text"
            name="website_url"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-transparent bg-gradient-to-r from-coral via-[#ff7a3c] to-amber px-5 py-3 font-bold text-white shadow-[0_10px_28px_rgba(255,90,60,0.4)] transition hover:brightness-105 sm:w-auto"
            disabled={scheduleStatus === "loading"}
          >
            {scheduleStatus === "loading" ? "Sending request…" : "Request call time"}
          </button>
          {scheduleMessage && (
            <p
              className={`rounded-xl border-2 px-4 py-3 text-sm font-medium ${
                scheduleStatus === "error"
                  ? "border-coral/50 bg-coral/15 text-[#ffd2c8]"
                  : "border-amber/40 bg-amber/15 text-amber"
              }`}
              role="status"
            >
              {scheduleMessage}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
