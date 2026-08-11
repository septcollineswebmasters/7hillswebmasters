import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t-4 border-coral bg-navy text-[#fff7f0]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-coral to-amber text-sm font-bold text-white">
              7
            </span>
            <p className="font-display text-2xl font-semibold">7hillswebmasters</p>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
            GA4, GTM, conversion tracking, pixel setup, CRO, GTM cleanup, and
            tracking audits—best service, best price, from New York and Bengaluru
            to clients worldwide.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber">
            Contact
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-3 block text-sm text-white/90 transition hover:text-amber"
          >
            {siteConfig.email}
          </a>
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
            <a href="#contact" className="hover:text-amber">
              Contact form
            </a>
            <a href="#schedule" className="hover:text-amber">
              Schedule a call
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber">
            Offices
          </p>
          <ul className="mt-3 space-y-4 text-sm text-white/75">
            {siteConfig.locations.map((loc) => (
              <li key={loc.full}>
                <p className="font-semibold text-white">
                  {loc.country} · {loc.name}
                </p>
                <p>{loc.full}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} 7hillswebmasters. All rights reserved.</p>
          <p>SEO · GEO · AEO optimized web analytics agency</p>
        </div>
      </div>
    </footer>
  );
}
