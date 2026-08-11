import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LeadForms } from "@/components/LeadForms";
import { siteConfig } from "@/lib/site";

const differentiators = [
  {
    title: "Best service, best price",
    copy: "Senior-level analytics work without agency bloat. Transparent scopes, sharp delivery, and pricing that respects your budget.",
    tone: "card-coral",
  },
  {
    title: "10+ years in the weeds",
    copy: "Hands-on GA4, GTM, pixels, and CRO measurement across startups, mid-market, and enterprise stacks.",
    tone: "card-amber",
  },
  {
    title: "Measurement you can trust",
    copy: "Clean event models, consent-aware tagging, and audits that find revenue leaks before they cost campaigns.",
    tone: "card-sky",
  },
];

const steps = [
  {
    step: "01",
    title: "Discover",
    copy: "We map your funnel, ad stack, and current tracking gaps in a focused discovery call.",
    tone: "card-coral",
  },
  {
    step: "02",
    title: "Diagnose",
    copy: "Audit GA4, GTM, pixels, and conversions. You get prioritized fixes and a clear roadmap.",
    tone: "card-amber",
  },
  {
    step: "03",
    title: "Deliver",
    copy: "We implement, document, and validate—so marketing, product, and leadership share one source of truth.",
    tone: "card-sky",
  },
];

const serviceTones = [
  "card-coral",
  "card-amber",
  "card-sky",
  "card-coral",
  "card-amber",
  "card-sky",
  "card-coral",
];

export default function Home() {
  return (
    <div id="top" className="atmosphere min-h-screen">
      <Header />

      <main>
        <section className="relative min-h-[100svh] overflow-hidden pt-28 md:pt-32">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="sunrise-orb pulse-glow absolute -right-16 top-10 h-72 w-72 rounded-full opacity-80 md:right-10 md:h-[26rem] md:w-[26rem]" />
            <div className="absolute left-[-6rem] top-40 h-56 w-56 rounded-full bg-sky/30 blur-3xl" />
            <svg
              className="absolute inset-x-0 bottom-0 h-[46%] w-full md:h-[52%]"
              viewBox="0 0 1440 420"
              preserveAspectRatio="none"
            >
              <path
                d="M0 220C120 170 190 110 300 130C410 150 460 230 580 215C700 200 740 110 860 125C980 140 1030 220 1160 205C1290 190 1350 120 1440 150V420H0V220Z"
                fill="#ff8f7a"
                fillOpacity="0.35"
              />
              <path
                d="M0 280C150 240 210 190 340 205C470 220 520 290 650 270C780 250 820 170 950 185C1080 200 1140 280 1270 260C1350 248 1400 220 1440 230V420H0V280Z"
                fill="#ff5a3c"
                fillOpacity="0.28"
              />
              <path
                d="M0 340C160 310 230 280 360 295C490 310 540 360 670 345C800 330 850 270 980 285C1110 300 1180 355 1300 340C1370 330 1410 310 1440 315V420H0V340Z"
                fill="#241b3e"
                fillOpacity="0.2"
              />
              <path
                className="chart-line"
                d="M820 210 C900 195, 940 150, 1000 140 C1060 130, 1100 170, 1160 120 C1220 70, 1280 95, 1360 80"
                fill="none"
                stroke="#ffb020"
                strokeWidth="5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <circle cx="1360" cy="80" r="8" fill="#ff5a3c" />
              {[520, 610, 700, 790, 880, 970, 1060].map((x, i) => (
                <circle
                  key={x}
                  cx={x}
                  cy={200 - (i % 3) * 14}
                  r="6"
                  fill="#fff7f0"
                  stroke="#ff5a3c"
                  strokeWidth="2"
                />
              ))}
            </svg>
          </div>

          <div className="relative mx-auto flex min-h-[calc(100svh-7rem)] max-w-6xl flex-col justify-center px-5 pb-24 md:px-8">
            <div className="reveal relative z-10 max-w-3xl">
              <span className="pill">Web analytics agency · Sunrise ready</span>
              <p className="font-display mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
                7hillswebmasters
              </p>
              <h1 className="mt-5 max-w-2xl text-2xl font-semibold leading-tight text-ink sm:text-3xl md:text-[2.15rem]">
                The colorful, conversion-obsessed analytics partner brands hire for GA4, GTM, and revenue tracking.
              </h1>
              <p className="hero-lead aeo-answer mt-5 max-w-xl text-lg text-ink-soft">
                Over 10 years specializing in GA4, GTM, conversion tracking, pixels,
                CRO, and tracking audits—best service, best price, for startups to enterprise.
              </p>
              <div className="reveal-delay-1 mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="btn-primary focus-ring">
                  Request a free tracking audit
                </a>
                <a href="#schedule" className="btn-secondary focus-ring">
                  Schedule a call
                </a>
              </div>

              <div className="reveal-delay-2 mt-10 grid max-w-xl grid-cols-3 gap-3">
                {[
                  { label: "Years", value: "10+" },
                  { label: "Focus", value: "GA4/GTM" },
                  { label: "Promise", value: "Best price" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border-2 border-[rgba(255,90,60,0.25)] bg-white/80 px-3 py-3 text-center shadow-[0_8px_24px_rgba(255,90,60,0.12)]"
                  >
                    <p className="font-display text-xl font-bold text-coral md:text-2xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-soft">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 -mt-6 px-5 md:px-8" aria-label="Trusted focus areas">
          <div className="card mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 border-2 border-coral/30 bg-white/90 px-5 py-4 text-sm font-semibold text-ink-soft">
            <span className="rounded-full bg-coral px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              Specialized in
            </span>
            <span>GA4</span>
            <span className="text-coral">•</span>
            <span>Google Tag Manager</span>
            <span className="text-amber">•</span>
            <span>Conversion Tracking</span>
            <span className="text-sky-deep">•</span>
            <span>Pixel Setup</span>
            <span className="text-coral">•</span>
            <span>CRO</span>
            <span className="text-amber">•</span>
            <span>GTM Cleanup</span>
            <span className="text-sky-deep">•</span>
            <span>Tracking Audits</span>
          </div>
        </section>

        <section id="services" className="scroll-mt-28 mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-2xl">
            <span className="pill">Services</span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-ink md:text-5xl">
              Everything your measurement stack needs—nothing it doesn’t.
            </h2>
            <p className="aeo-answer mt-4 text-lg text-ink-soft">
              7hillswebmasters provides end-to-end web analytics services so
              acquisition spend, product decisions, and revenue reporting stay
              aligned.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service, index) => (
              <article
                key={service.slug}
                className={`card ${serviceTones[index % serviceTones.length]} p-6`}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border-2 border-coral/25 bg-white/70 font-display text-lg font-bold text-coral">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-ink-soft">{service.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="why-us" className="scroll-mt-28 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-3xl">
              <span className="pill">Why 7hillswebmasters</span>
              <h2 className="font-display mt-4 text-3xl font-semibold text-ink md:text-5xl">
                Built for teams that need clarity, not another dashboard vendor.
              </h2>
              <p className="aeo-answer mt-4 text-lg text-ink-soft">
                From first pixel to full funnel CRO, we give startups and enterprises
                the same promise: the best analytics service at the best price.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {differentiators.map((item) => (
                <article key={item.title} className={`card ${item.tone} p-6`}>
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-ink-soft">{item.copy}</p>
                </article>
              ))}
            </div>

            <aside className="card card-navy mt-10 border-l-8 border-l-amber p-6 md:p-8">
              <p className="font-display text-2xl font-semibold md:text-3xl">
                “If your ads are smart but your tags are messy, you are optimizing
                noise. We fix the foundation.”
              </p>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-amber">
                7hillswebmasters · New York & Bengaluru
              </p>
            </aside>
          </div>
        </section>

        <section id="process" className="scroll-mt-28 mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-2xl">
            <span className="pill">Process</span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-ink md:text-5xl">
              A simple path from broken tracking to confident decisions.
            </h2>
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((item) => (
              <li key={item.step} className={`card ${item.tone} p-6`}>
                <p className="font-display text-sm font-bold tracking-[0.2em] text-coral">
                  {item.step}
                </p>
                <h3 className="font-display mt-3 text-2xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-ink-soft">{item.copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="locations" className="scroll-mt-28 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="pill">Offices</span>
              <h2 className="font-display mt-4 text-3xl font-semibold text-ink md:text-5xl">
                Present in the USA and India. Serving clients everywhere.
              </h2>
              <p className="aeo-answer mt-4 text-lg text-ink-soft">
                Meet us in New York or Bengaluru—or work remotely with the same
                senior analytics care either way.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {siteConfig.locations.map((loc, index) => (
                <article
                  key={loc.full}
                  className={`card p-6 md:p-8 ${index === 0 ? "card-coral" : "card-sky"}`}
                >
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-coral">
                    {loc.country}
                  </p>
                  <h3 className="font-display mt-2 text-3xl font-semibold text-ink">
                    {loc.name}
                  </h3>
                  <p className="mt-3 max-w-md text-ink-soft">{loc.full}</p>
                  <a
                    className="mt-5 inline-flex rounded-full border-2 border-coral/40 bg-white px-4 py-2 text-sm font-bold text-coral-deep transition hover:bg-coral hover:text-white"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on map
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-28 mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-2xl">
            <span className="pill">FAQ</span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-ink md:text-5xl">
              Answers for search, AI assistants, and busy buyers.
            </h2>
          </div>
          <div className="card mt-10 divide-y-2 divide-[rgba(255,90,60,0.12)] overflow-hidden border-2 border-coral/25 p-2 md:p-4">
            {siteConfig.faqs.map((faq) => (
              <details key={faq.question} className="group px-3 py-4 md:px-4">
                <summary className="cursor-pointer list-none font-display text-xl font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-coral/40 bg-peach text-coral transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="aeo-answer mt-3 max-w-3xl text-ink-soft">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8 md:pb-32">
          <div className="mb-10 max-w-2xl">
            <span className="pill">Start today</span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-ink md:text-5xl">
              Ready for analytics that pay for themselves?
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Send a brief or schedule a call. Your form submits by JavaScript and
              lands in our inbox—no email app redirect.
            </p>
          </div>
          <LeadForms />
        </section>
      </main>

      <Footer />
    </div>
  );
}
