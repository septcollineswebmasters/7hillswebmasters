# 7hillswebmasters

Official website for **7hillswebmasters** — a web analytics agency specializing in GA4, Google Tag Manager, conversion tracking, pixel setup, CRO, GTM cleanup, and tracking audits.

## Features

- SEO, GEO, and AEO-friendly marketing site (metadata, sitemap, robots, FAQ schema, LocalBusiness/ProfessionalService JSON-LD, speakable selectors)
- Contact form and Schedule a Call form that deliver leads to `septcollineswebmasters@gmail.com`
- Office locations in New York (USA) and Bengaluru (India)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Lead delivery

Contact and Schedule a Call forms use **JavaScript `fetch`** to send submissions to:

`septcollineswebmasters@gmail.com`

via [FormSubmit](https://formsubmit.co). The visitor stays on the website (no mailto / email-app redirect).

**Important:** The first successful FormSubmit delivery triggers an activation email to that inbox. Confirm it once so future leads arrive automatically.

## Deploy

Build production assets:

```bash
npm run build
npm start
```

Deploy on Vercel, Netlify, or any Node host that supports Next.js.

## Offices

- **USA:** WeWork, 250 Broadway, New York, NY 10007
- **India:** WeWork Cherry Hills, Embassy Golf Links Business Park, Domlur, Bengaluru, Karnataka 560071
