# CircLynk Digital — Pelican Theme

A modern, Lighthouse 95+ optimized Pelican theme for CircLynk Digital.

## Brand Colors
- **CircLynk** (wordmark): `#185FA5` (Blue)
- **DIGITAL** (wordmark): `#0EA5A4` (Teal)

## Stack
- Python Pelican static site generator
- Bootstrap 5.3 grid (custom design system on top)
- Google Fonts: Inter + Playfair Display + JetBrains Mono
- Pyodide for browser-based Python compiler

## Directory Structure
```
theme/
├── templates/
│   ├── base.html              # Master layout
│   ├── index.html             # Homepage
│   ├── article.html           # Blog post
│   ├── content.html           # Blog index
│   ├── page.html              # Static pages
│   ├── contact.html           # Contact page
│   ├── compiler.html          # Python compiler landing
│   ├── category.html          # Category archive
│   ├── tag.html               # Tag archive
│   ├── author.html            # Author archive
│   ├── 404.html               # 404 page
│   └── partial/
│       ├── header.html        # Nav + announce bar
│       ├── footer.html        # Site footer
│       ├── sidebar.html       # Blog sidebar
│       ├── articles_list.html # Article card macros
│       ├── pagination.html    # Page navigation
│       ├── og-tags.html       # Open Graph meta
│       ├── twitter-tags.html  # Twitter card meta
│       └── disqus.html        # Comments
└── static/
    ├── assets/
    │   ├── css/               # Modular CSS
    │   ├── js/                # JavaScript
    │   ├── fonts/             # Font files
    │   └── images/            # Favicon, logo
    └── vendor/
        ├── bootstrap/         # Bootstrap 5
        └── jquery/            # jQuery 3
```

## Setup
```bash
pip install pelican markdown
pelican content -s pelicanconf.py
pelican --listen  # dev server
```

## Python Compiler
The compiler is served at `/online-compiler-python/` via `TEMPLATE_PAGES` in pelicanconf.py.
Add content at `content/pages/compiler.md` with `template: compiler`.

## Lighthouse Optimizations
- Preconnect to Google Fonts
- defer on all JS
- Skip link for accessibility
- aria-label on all interactive elements
- Schema.org structured data
- Canonical URLs
- Semantic HTML5 throughout
- lazy loading on images

## Services
20 services across Strategy, Design, Development, and Enterprise categories.

## Industries
16 industries: AI, Enterprise, eCommerce, Education, FinTech, Food & Grocery,
Health & Wellness, Marketplace, Media, Non-Profit, Pet Care, Social Media,
Space Exploration, Startups, Travel, Web3 & Blockchain.

## Scalability Notes
1. Add new service pages at `content/pages/services/{slug}.md`
2. Add industry pages at `content/pages/industries/{slug}.md`
3. Enable plugins: `sitemap`, `seo`, `related_posts`, `neighbors`
4. Connect Brevo/Formspree for email forms
5. Add GA4 ID to `GOOGLE_ANALYTICS` in pelicanconf.py
6. Add Disqus shortname to `DISQUS_SITENAME` for comments
