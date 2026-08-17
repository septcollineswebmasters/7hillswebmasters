# 7 Hills Webmasters — static website

Production-ready static site for **7 Hills Webmasters**, a web analytics and performance marketing agency.

No build step. No npm. Upload the files and go live.

Tagline: **Data-Driven Growth for Modern Businesses**

## What’s included

| Route | Page |
| --- | --- |
| `/` | Home |
| `/services/` | Services overview |
| `/services/web-analytics/` | Web analytics & tracking (GA4 / GTM) |
| `/services/google-ads/` | Google Ads agency |
| `/services/google-my-business/` | Google My Business / GBP agency |
| `/services/google-merchant-center/` | Google Merchant Center agency |
| `/about/` | About |
| `/contact/` | Contact form |
| `/schedule/` | Calendly booking |
| `/privacy/` | Privacy (placeholder) |
| `/terms/` | Terms (placeholder) |

URLs use **folders with `index.html`**, so browsers show `/services` or `/services/` — not `/services.html`.

## Quick start (local preview)

From this folder:

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Deploy

### Netlify (drag and drop)

1. Zip this project **or** drag the folder into [Netlify Drop](https://app.netlify.com/drop).
2. `netlify.toml`, `_redirects`, and `_headers` are already included.
3. Set your custom domain. Then update `siteUrl` in `assets/js/config.js`, plus the same domain in `robots.txt`, `sitemap.xml`, and each page’s canonical / Open Graph URLs (search-replace `https://7hillswebmasters.com`).

### Vercel

1. Import the Git repo **or** run `vercel` in this folder (Vercel CLI is optional; the dashboard import works).
2. Framework preset: **Other**. Output / root: this directory.
3. `vercel.json` enables trailing slashes and clean URLs.

### Cloudflare Pages

1. Workers & Pages → Create → upload assets, or connect Git.
2. Build command: leave empty. Output directory: `/`.

### Generic hosting (FTP / cPanel / Apache)

1. Upload **all** files, preserving folders.
2. `.htaccess` enables `DirectoryIndex` and trailing slashes.
3. Document root must be this folder (where `index.html` lives).

### Nginx (snippet)

```nginx
index index.html;
try_files $uri $uri/ $uri.html =404;
```

## Configure before launch

Edit **one file**: [`assets/js/config.js`](assets/js/config.js)

### 1. Contact form → `septcollineswebmasters@gmail.com`

The form is static-friendly (Formspree by default).

1. Create a form at [formspree.io](https://formspree.io/) with recipient **septcollineswebmasters@gmail.com**.
2. Copy the endpoint, e.g. `https://formspree.io/f/abcdxyz`.
3. Paste it into `formEndpoint` in `assets/js/config.js`.
4. Confirm the same URL in the form’s `action` on `/contact/` (or leave it; JavaScript uses `config.js` on submit).

Until `YOUR_FORM_ID` is replaced, submit shows a configuration message instead of failing silently.

**Netlify Forms alternative:** add `netlify` and `name="contact"` to the `<form>` in `contact/index.html`, deploy on Netlify, and set notifications to the same inbox. You can then skip Formspree.

**Getform / Basin:** paste their POST URL into `formEndpoint` the same way.

### 2. Calendly

1. Copy your event link, e.g. `https://calendly.com/your-handle/strategy-call`.
2. Set `calendlyUrl` in `assets/js/config.js`.
3. The `/schedule/` page embeds that URL via Calendly’s widget script.

Look for the HTML comment on `/schedule/` if you prefer to hard-code the embed.

### 3. Canonical domain

Replace `https://7hillswebmasters.com` in:

- `assets/js/config.js` → `siteUrl`
- `robots.txt`
- `sitemap.xml`
- `llms.txt` (optional)
- HTML `<link rel="canonical">`, Open Graph, and JSON-LD (sitewide search-replace is safest)

## Customize

| What | Where |
| --- | --- |
| Logo | `assets/img/logo.svg` and `favicon.svg` |
| Colors | CSS variables at the top of `assets/css/styles.css` (`--bg`, `--accent`, `--accent-2`) |
| Copy | Each `index.html` |
| NAP (name, address, phone) | Footer on every page, About, Contact — keep identical for local SEO |
| Social links | Footer `href="#"` placeholders |

## SEO / GEO / AEO

- Unique titles, meta descriptions, and Open Graph tags per page
- Semantic headings, internal links, `sitemap.xml`, `robots.txt`, `llms.txt`
- Organization + LocalBusiness (`ProfessionalService`) JSON-LD on Home and About (USA + India)
- Service schema on service pages
- FAQ schema on Web Analytics, Google Ads, GMB, and Merchant Center
- Consistent NAP:
  - **USA:** WeWork, 250 Broadway, New York, NY 10007
  - **India:** Indiqube Ascent, Koramangala 4th Block, Bengaluru, Karnataka 560095
  - **Phone:** +91 8197282499
  - **Email:** septcollineswebmasters@gmail.com

Privacy and Terms are **placeholders** — have counsel review them.

## Zip for download

From the parent folder:

```bash
zip -r 7hillswebmasters-site.zip 7hillswebmasters -x "*.git*"
```

Or zip this repository root excluding `.git`.
