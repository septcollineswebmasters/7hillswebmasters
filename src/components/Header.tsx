"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why us" },
  { href: "#process", label: "Process" },
  { href: "#locations", label: "Locations" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b-2 border-[rgba(255,90,60,0.18)] bg-[#fff7f0]/92 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="focus-ring group flex items-center gap-2.5">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-coral via-amber to-gold text-sm font-bold text-white shadow-[0_8px_20px_rgba(255,90,60,0.35)]">
            7
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink md:text-xl">
            7hillswebmasters
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring text-sm font-semibold text-ink-soft transition-colors hover:text-coral"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#schedule" className="btn-secondary focus-ring !py-2.5 !px-4 text-sm">
            Schedule a call
          </a>
          <a href="#contact" className="btn-primary focus-ring !py-2.5 !px-4 text-sm">
            Free audit
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-line bg-white/80 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t-2 border-[rgba(255,90,60,0.18)] bg-[#fff7f0]/97 px-5 py-4 backdrop-blur-md lg:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring rounded-lg px-2 py-2 text-base font-semibold text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#schedule"
              className="btn-secondary focus-ring mt-2"
              onClick={() => setOpen(false)}
            >
              Schedule a call
            </a>
            <a
              href="#contact"
              className="btn-primary focus-ring"
              onClick={() => setOpen(false)}
            >
              Free audit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
