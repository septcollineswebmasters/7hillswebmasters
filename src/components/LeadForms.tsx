"use client";

import { FormEvent, useState } from "react";

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

export function LeadForms() {
  const [contactStatus, setContactStatus] = useState<Status>("idle");
  const [scheduleStatus, setScheduleStatus] = useState<Status>("idle");
  const [contactMessage, setContactMessage] = useState("");
  const [scheduleMessage, setScheduleMessage] = useState("");

  async function submit(kind: FormKind, event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    if (kind === "contact") {
      setContactStatus("loading");
      setContactMessage("");
    } else {
      setScheduleStatus("loading");
      setScheduleMessage("");
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ kind, ...payload }),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Unable to send right now.");
      }

      form.reset();
      if (kind === "contact") {
        setContactStatus("success");
        setContactMessage(
          "Thanks—your message is on its way. We’ll reply at your email shortly."
        );
      } else {
        setScheduleStatus("success");
        setScheduleMessage(
          "Request received. We’ll confirm your call time by email within one business day."
        );
      }
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please email us directly.";
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
        className="scroll-mt-28 rounded-[1.5rem] border border-line bg-white/75 p-6 shadow-[0_20px_50px_rgba(18,32,51,0.06)] md:p-8"
        aria-labelledby="contact-heading"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
          Contact
        </p>
        <h2 id="contact-heading" className="font-display mt-2 text-3xl font-semibold text-ink md:text-4xl">
          Tell us what you need tracked
        </h2>
        <p className="mt-3 text-ink-soft">
          Leads go straight to{" "}
          <a
            className="font-medium text-teal underline-offset-2 hover:underline"
            href="mailto:septcollineswebmasters@gmail.com"
          >
            septcollineswebmasters@gmail.com
          </a>
          . Expect a clear scope and the best price for the work.
        </p>

        <form className="mt-7 space-y-4" onSubmit={(e) => submit("contact", e)}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-ink">
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
            <label className="block text-sm font-medium text-ink">
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
            <label className="block text-sm font-medium text-ink">
              Company
              <input
                className="input-field mt-1.5"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Acme Inc."
              />
            </label>
            <label className="block text-sm font-medium text-ink">
              Website
              <input
                className="input-field mt-1.5"
                name="website"
                type="url"
                placeholder="https://"
              />
            </label>
          </div>
          <label className="block text-sm font-medium text-ink">
            Service interest
            <select className="input-field mt-1.5" name="service" defaultValue="Tracking Audit">
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-medium text-ink">
            Project details
            <textarea
              className="input-field mt-1.5 min-h-32 resize-y"
              name="message"
              required
              placeholder="Share your stack, current issues, and goals…"
            />
          </label>
          <input type="text" name="website_url" className="hidden" tabIndex={-1} autoComplete="off" />
          <button
            type="submit"
            className="btn-primary focus-ring w-full sm:w-auto"
            disabled={contactStatus === "loading"}
          >
            {contactStatus === "loading" ? "Sending…" : "Send message"}
          </button>
          {contactMessage && (
            <p
              className={`text-sm ${
                contactStatus === "error" ? "text-red-700" : "text-teal-deep"
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
        className="scroll-mt-28 rounded-[1.5rem] border border-line bg-[linear-gradient(165deg,#122033_0%,#1a3a45_55%,#0f766e_120%)] p-6 text-white shadow-[0_20px_50px_rgba(18,32,51,0.18)] md:p-8"
        aria-labelledby="schedule-heading"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-soft">
          Schedule a call
        </p>
        <h2 id="schedule-heading" className="font-display mt-2 text-3xl font-semibold md:text-4xl">
          Book a discovery call
        </h2>
        <p className="mt-3 text-white/75">
          Pick a preferred date and time. We’ll confirm by email and walk through
          your GA4, GTM, and conversion goals—no pressure, no fluff.
        </p>

        <form className="mt-7 space-y-4" onSubmit={(e) => submit("schedule", e)}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-white">
              Full name
              <input
                className="input-field mt-1.5 border-white/15 bg-white/10 text-white placeholder:text-white/45"
                name="name"
                type="text"
                required
                placeholder="Jordan Lee"
              />
            </label>
            <label className="block text-sm font-medium text-white">
              Work email
              <input
                className="input-field mt-1.5 border-white/15 bg-white/10 text-white placeholder:text-white/45"
                name="email"
                type="email"
                required
                placeholder="jordan@company.com"
              />
            </label>
          </div>
          <label className="block text-sm font-medium text-white">
            Company
            <input
              className="input-field mt-1.5 border-white/15 bg-white/10 text-white placeholder:text-white/45"
              name="company"
              type="text"
              placeholder="Your company"
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-white">
              Preferred date
              <input
                className="input-field mt-1.5 border-white/15 bg-white/10 text-white"
                name="preferredDate"
                type="date"
                required
              />
            </label>
            <label className="block text-sm font-medium text-white">
              Preferred time
              <input
                className="input-field mt-1.5 border-white/15 bg-white/10 text-white"
                name="preferredTime"
                type="time"
                required
              />
            </label>
          </div>
          <label className="block text-sm font-medium text-white">
            Timezone
            <select
              className="input-field mt-1.5 border-white/15 bg-white/10 text-white"
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
          <label className="block text-sm font-medium text-white">
            What should we cover?
            <textarea
              className="input-field mt-1.5 min-h-28 resize-y border-white/15 bg-white/10 text-white placeholder:text-white/45"
              name="message"
              required
              placeholder="Audit, GTM cleanup, new pixel setup…"
            />
          </label>
          <input type="text" name="website_url" className="hidden" tabIndex={-1} autoComplete="off" />
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-ink transition hover:bg-teal-soft sm:w-auto"
            disabled={scheduleStatus === "loading"}
          >
            {scheduleStatus === "loading" ? "Booking…" : "Request call time"}
          </button>
          {scheduleMessage && (
            <p
              className={`text-sm ${
                scheduleStatus === "error" ? "text-red-200" : "text-teal-soft"
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
