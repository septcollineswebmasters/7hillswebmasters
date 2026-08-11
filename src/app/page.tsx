import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LeadForms } from "@/components/LeadForms";
import { siteConfig } from "@/lib/site";

const differentiators = [
  {
    title: "Best service, best price",
    copy: "Senior-level analytics work without agency bloat. Transparent scopes, sharp delivery, and pricing that respects your budget.",
  },
  {
    title: "10+ years in the weeds",
    copy: "Hands-on GA4, GTM, pixels, and CRO measurement across startups, mid-market, and enterprise stacks.",
  },
  {
    title: "Measurement you can trust",
    copy: "Clean event models, consent-aware tagging, and audits that find revenue leaks before they cost campaigns.",
  },
];

const steps = [
  {
    step: "01",
    title: "Discover",
    copy: "We map your funnel, ad stack, and current tracking gaps in a focused discovery call.",
  },
  {
    step: "02",
    title: "Diagnose",
    copy: "Audit GA4, GTM, pixels, and conversions. You get prioritized fixes and a clear roadmap.",
  },
  {
    step: "03",
    title: "Deliver",
    copy: "We implement, document, and validate—so marketing, product, and leadership share one source of truth.",
  },
];

export default function Home() {
  return (
    <div id="top" className="atmosphere min-h-screen">
      <Header />

      <main>
        <section className="relative min-h-[100svh] overflow-hidden pt-28 md:pt-32">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_18%_12%,rgba(15,118,110,0.18),transparent_60%),radial-gradient(700px_420px_at_88%_18%,rgba(201,213,192,0.55),transparent_55%),linear-gradient(180deg,#e7f1f3_0%,#f7fafb_48%,#e6f0ec_100%)]" />
            <svg
              className="absolute inset-x-0 bottom-0 h-[48%] w-full md:h-[56%]"
              viewBox="0 0 1440 420"
              preserveAspectRatio="none"
            >
              <path
                d="M0 220C120 170 190 110 300 130C410 150 460 230 580 215C700 200 740 110 860 125C980 140 1030 220 1160 205C1290 190 1350 120 1440 150V420H0V220Z"
                fill="#0f766e"
                fillOpacity="0.18"
              />
              <path
                d="M0 280C150 240 210 190 340 205C470 220 520 290 650 270C780 250 820 170 950 185C1080 200 1140 280 1270 260C1350 248 1400 220 1440 230V420H0V280Z"
                fill="#122033"
                fillOpacity="0.14"
              />
              <path
                d="M0 340C160 310 230 280 360 295C490 310 540 360 670 345C800 330 850 270 980 285C1110 300 1180 355 1300 340C1370 330 1410 310 1440 315V420H0V340Z"
                fill="#0f766e"
                fillOpacity="0.28"
              />
              <path
                className="chart-line"
                d="M820 210 C900 195, 940 150, 1000 140 C1060 130, 1100 170, 1160 120 C1220 70, 1280 95, 1360 80"
                fill="none"
                stroke="#0f766e"
                strokeWidth="4"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <circle cx="1360" cy="80" r="7" fill="#0f766e" />
              {[520, 610, 700, 790, 880, 970, 1060].map((x, i) => (
                <circle
                  key={x}
                  cx={x}
                  cy={200 - (i % 3) * 14}
                  r="5"
                  fill="#ffffff"
                  fillOpacity="0.9"
                />
              ))}
            </svg>
          </div>

          <div className="relative mx-auto flex min-h-[calc(100svh-7rem)] max-w-6xl flex-col justify-center px-5 pb-24 md:px-8">
            <div className="reveal relative z-10 max-w-3xl">
              <p className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
                7hillswebmasters
              </p>
              <h1 className="mt-5 max-w-2xl text-2xl font-semibold leading-tight text-ink sm:text-3xl md:text-[2.15rem]">
                The web analytics agency brands hire for GA4, GTM, and conversions that actually convert.
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
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-white/55" aria-label="Trusted focus areas">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-5 text-sm font-medium text-ink-soft md:px-8">
            <span className="text-ink">Specialized in</span>
            <span>GA4</span>
            <span>Google Tag Manager</span>
            <span>Conversion Tracking</span>
            <span>Pixel Setup</span>
            <span>CRO</span>
            <span>GTM Cleanup</span>
            <span>Tracking Audits</span>
          </div>
        </section>

        <section id="services" className="scroll-mt-28 mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
              Services
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-ink md:text-5xl">
              Everything your measurement stack needs—nothing it doesn’t.
            </h2>
            <p className="aeo-answer mt-4 text-lg text-ink-soft">
              7hillswebmasters provides end-to-end web analytics services so
              acquisition spend, product decisions, and revenue reporting stay
              aligned.
            </p>
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service) => (
              <article key={service.slug} className="border-t border-line pt-6">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-ink-soft">{service.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="why-us" className="scroll-mt-28 bg-[linear-gradient(180deg,#f2f7f5_0%,#eef3f6_100%)] py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
                Why 7hillswebmasters
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold text-ink md:text-5xl">
                Built for teams that need clarity, not another dashboard vendor.
              </h2>
              <p className="aeo-answer mt-4 text-lg text-ink-soft">
                From first pixel to full funnel CRO, we give startups and enterprises
                the same promise: the best analytics service at the best price.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {differentiators.map((item) => (
                <article key={item.title} className="md:pr-4">
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-ink-soft">{item.copy}</p>
                </article>
              ))}
            </div>

            <aside className="mt-14 max-w-4xl border-l-4 border-teal pl-6">
              <p className="font-display text-2xl font-semibold text-ink md:text-3xl">
                “If your ads are smart but your tags are messy, you are optimizing
                noise. We fix the foundation.”
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-ink-soft">
                7hillswebmasters · New York & Bengaluru
              </p>
            </aside>
          </div>
        </section>

        <section id="process" className="scroll-mt-28 mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
              Process
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-ink md:text-5xl">
              A simple path from broken tracking to confident decisions.
            </h2>
          </div>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((item) => (
              <li key={item.step}>
                <p className="font-display text-sm font-semibold tracking-[0.2em] text-teal">
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

        <section id="locations" className="scroll-mt-28 border-y border-line bg-white/60 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
                Offices
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold text-ink md:text-5xl">
                Present in the USA and India. Serving clients everywhere.
              </h2>
              <p className="aeo-answer mt-4 text-lg text-ink-soft">
                Meet us in New York or Bengaluru—or work remotely with the same
                senior analytics care either way.
              </p>
            </div>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {siteConfig.locations.map((loc) => (
                <article key={loc.full} className="border-t border-line pt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal">
                    {loc.country}
                  </p>
                  <h3 className="font-display mt-2 text-3xl font-semibold text-ink">
                    {loc.name}
                  </h3>
                  <p className="mt-3 max-w-md text-ink-soft">{loc.full}</p>
                  <a
                    className="mt-4 inline-flex text-sm font-semibold text-teal underline-offset-4 hover:underline"
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
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
              FAQ
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-ink md:text-5xl">
              Answers for search, AI assistants, and busy buyers.
            </h2>
          </div>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {siteConfig.faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="cursor-pointer list-none font-display text-xl font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}
                    <span className="mt-1 text-teal transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="aeo-answer mt-3 max-w-3xl text-ink-soft">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8 md:pb-32">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
              Start today
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-ink md:text-5xl">
              Ready for analytics that pay for themselves?
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Send a brief or schedule a call. We’ll reply with next steps and
              honest pricing.
            </p>
          </div>
          <LeadForms />
        </section>
      </main>

      <Footer />
    </div>
  );
}
