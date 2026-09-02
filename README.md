# 7 Hills Webmasters — static website

Production-ready static site for **7 Hills Webmasters**. No build step. No npm.

Tagline: **Data-Driven Growth for Modern Businesses**

## Public vs operations contact

| Purpose | Value |
| --- | --- |
| Shown on the website | **hello@7hillswebmasters.com** |
| Enquiry form delivery | **septcollineswebmasters@gmail.com** (via FormSubmit, not displayed) |
| Booking | **https://calendly.com/septcollineswebmasters** |

No phone number is published on the site.

## What’s included

| Route | Page |
| --- | --- |
| `/` | Home |
| `/services/` | Services overview |
| `/services/web-analytics/` | Web analytics & tracking |
| `/services/google-ads/` | Google Ads agency |
| `/services/google-my-business/` | Google My Business / GBP |
| `/services/google-merchant-center/` | Merchant Center |
| `/about/` | About |
| `/contact/` | Contact |
| `/schedule/` | Calendly |
| `/privacy/`, `/terms/` | Placeholders |

Every page includes photography plus an **enquiry form** (`#enquire`). Header **Enquire** jumps to that form. **Book a Call** opens Calendly.

URLs use folders with `index.html` (no `.html` in the browser).

## Quick start (local preview)

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Deploy

- **Netlify:** drag the folder to [Netlify Drop](https://app.netlify.com/drop) (`netlify.toml` included).
- **Vercel:** import Git, framework **Other**, this directory as root (`vercel.json` included).
- **Cloudflare Pages:** empty build command, output `/`.
- **Apache / cPanel:** upload all files; `.htaccess` is included.

Then search-replace `https://7hillswebmasters.com` if you use another domain (`robots.txt`, `sitemap.xml`, canonical tags).

## Forms (already configured)

`assets/js/config.js` posts to:

`https://formsubmit.co/ajax/septcollineswebmasters@gmail.com`

**First submission:** FormSubmit emails that inbox asking you to confirm the address. After you click confirm, live enquiries arrive as formatted messages.

Honeypot field `_honey` is included. Public pages never show the operations address.

## Calendly (already configured)

`calendlyUrl`: `https://calendly.com/septcollineswebmasters`  
Embedded on `/schedule/`.

## Customize

| What | Where |
| --- | --- |
| Photos | `assets/img/*.jpg` |
| Logo | `assets/img/logo.svg` |
| Colors | CSS variables in `assets/css/styles.css` |
| Copy | Each `index.html` |
| Display email | Keep **hello@7hillswebmasters.com** consistent in HTML + `config.js` |

Privacy and Terms are placeholders for counsel review.
