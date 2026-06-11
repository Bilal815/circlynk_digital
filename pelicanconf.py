# ============================================================
# CIRCLYNK DIGITAL — pelicanconf.py
# ============================================================
from datetime import datetime

AUTHOR          = 'CircLynk Digital'
SITENAME        = 'CircLynk Digital'
SITEURL         = 'https://circlynkdigital.com'
SITESUBTITLE    = 'Software & Digital Transformation'
SITEDESCRIPTION = 'Custom software, free developer tools, and digital products for SMEs and startups.'



PATH           = 'content'
THEME_STATIC   = '/theme/assets'
SITELOGO       = THEME_STATIC + '/images/circlynk_digital_logo.png'
SITELOGOALT    = 'CircLynk Digital Brand Logo'
TIMEZONE       = 'Asia/Karachi'
DEFAULT_LANG   = 'en'
DEFAULT_LOCALE = 'en_US'
NOW            = datetime.now()

# THEME
THEME = 'theme'

# FEED
FEED_ALL_ATOM         = 'all.atom.xml'
CATEGORY_FEED_ATOM    = '{slug}.atom.xml'
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM      = None
AUTHOR_FEED_RSS       = None

# Limitting related posts
#RELATED_POSTS_MAX = 10

### URLs — clean SEO-friendly
# Article settings
ARTICLE_URL      = '{slug}/'
ARTICLE_SAVE_AS  = '{slug}/index.html'

# Page settings
PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'

# Index settings
INDEX_URL = ''
INDEX_SAVE_AS = 'index.html'

# Category settings
CATEGORY_URL     = '{slug}/'
CATEGORY_SAVE_AS = '{slug}/index.html'

# Tag settings
TAG_URL          = '{slug}/'
TAG_SAVE_AS      = '{slug}/index.html'

# Author settings
AUTHOR_URL       = '{slug}/'
AUTHOR_SAVE_AS   = '{slug}/index.html'

# Template Page Routing
TEMPLATE_PAGES = {
    'tools.html': 'tools/index.html',
    'blog.html': 'blog.html',
    'contact.html': 'contact.html',
}

# PAGINATION
DEFAULT_PAGINATION = 10
DEFAULT_ORPHANS    = 2
PAGINATION_PATTERNS = (
    (1, '{url}', '{save_as}'),
    (2, '{base_name}/page/{number}/', '{base_name}/page/{number}/index.html'),
)

# STATIC PATHS
STATIC_PATHS = ['images', 'extras']
EXTRA_PATH_METADATA = {
    'extras/robots.txt': {'path': 'robots.txt'},
    'extras/sitemap.xml': {'path': 'sitemap.xml'},
}

# PLUGINS
PLUGIN_PATHS = ['plugins']
PLUGINS = [
    #'yuicompressor',
    'sitemap',
    #'related_posts',
    #'neighbors',
]

# Sitemap settings
SITEMAP = {
    'format': 'xml',

    'priorities': {
        'articles': 1.0,
        'indexes': 0.8,
        'pages': 0.8
    },

    'changefreqs': {
        'articles': 'daily',
        'pages': 'daily',
        'indexes': 'daily',
    },

    'exclude': ['404', 'archives', 'tags', 'authors']
}

# SEO PLUGIN
SEO_REPORT    = True
SEO_ENHANCER  = True

# RELATED POSTS
RELATED_POSTS_MAX = 3

# MARKDOWN
MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.codehilite': {},
        'markdown.extensions.extra': {},
        'markdown.extensions.toc': {'permalink': True},
        'markdown.extensions.meta': {},
        'markdown.extensions.tables': {},
    },
    'output_format': 'html5',
}

# Language
LANGUAGE = [DEFAULT_LANG, 'ur']

# Location
COMPANY_LOCALITY = "South Carolina"
COMPANY_COUNTRY = "United States"

# SOCIAL
SOCIAL_MEDIA_LINKS = (
    ('linkedin', 'https://linkedin.com/company/circlynk'),
    ('twitter', 'https://twitter.com/circlynk'),
)

# BRAND CONFIG
YOUR_TWITTER_HANDLE = 'circlynk'
GOOGLE_ANALYTICS    = ''  # Add GA4 ID: G-XXXXXXXXXX
DISQUS_SITENAME     = ''  # Add Disqus shortname

# SEO
REL_CANONICAL = True

# JINJA EXTENSIONS
JINJA_ENVIRONMENT = {
    'extensions': ['jinja2.ext.do', 'jinja2.ext.loopcontrols'],
}

# CACHE
CACHE_CONTENT    = False
LOAD_CONTENT_CACHE = False

# DIRECT TEMPLATES
DIRECT_TEMPLATES = ['index', 'tags', 'categories', 'authors', 'archives', '404']

# MEGAMENU
NAVIGATION_CONFIG = {
    "groups": [
        {
            "title": "Services",
            "url": "/services/",
            "items": [
                ("Strategy", "/strategy/"),
                ("Product Design", "/product-design/"),
                ("Branding", "/branding/"),
                ("UX/UI Design", "/ux-ui-design/"),
                ("Product Management", "/product-management/"),
                ("MVP Development", "/mvp-development/"),
                ("Web Development", "/web-development/"),
                ("Mobile Apps", "/mobile-app-development/"),
                ("Custom Software", "/custom-software/"),
                ("Application Security", "/application-security/"),
                ("Cloud Solutions", "/cloud-solutions/"),
                ("IoT Solutions", "/iot-solutions/"),
                ("Enterprise Digital Transformation", "/enterprise-digital-transformation/"),
                ("ITSM / ITAM", "/itsm-istam/"),
                ("Business Process Transformation", "/business-process-transformation/"),
                ("Business Process Outsourcing", "/business-process-outsourcing/"),
                ("Video Analytics", "/video-analytics/"),
                ("Infrastructure Management", "/infrastructure-management/"),
            ]
        },
        {
            "title": "Industries",
            "url": "/industries/",
            "items": [
                ("AI", "/artificial-intelligence/"),
                ("Enterprise", "/enterprise/"),
                ("eCommerce", "/ecommerce/"),
                ("Education", "/education/"),
                ("FinTech", "/fintech/"),
                ("Education", "/education/"),
                ("Food & Grocery", "/food-and-grocery/"),
                ("Health & Wellness", "/health-and-wellness/"),
                ("Marketplaces", "/marketplaces/"),
                ("Media & Publishing", "/media-and-publishing/"),
                ("Non-Profit", "/non-profit/"),
                ("Pet Care", "/pet-care/"),
                ("Social Media", "/social-media/"),
                ("Space Exploration", "/space-exploration/"),
                ("Startups", "/startups/"),
                ("Travel", "/travel/"),
                ("Web3 & Blockchain", "/web3--blockchain/")
            ]
        },
        {
            "title": "Tools",
            "url": "/tools/",
            "items": [
                ("Python Compiler", "/online-compiler-python/"),
                ("JSON Formatter", "/json-formatter/"),
                ("SQL Generator", "/sql-generator/"),
                ("Explore All Tools", "/tools/"),
                
            ]
        },
        {
            "title": "Company",
            "url": "/",
            "items": [
                ("Marketplace", "/marketplace/"),
                ("Blog", "/blog/"),
                ("About", "/about/"),
                ("Contact", "/contact/")
            ]
        }
    ],
    "cta": {
        "text": "Try Compiler →",
        "url": "/online-compiler-python/"
    }
}

# Announcements Bar
ANNOUNCEMENTS = [
    "🚀 Python Compiler — Live Now. No signup required.",
    "🛠️ Free tools & templates dropping weekly.",
    "📦 Pre-built web apps & ecom stores — coming soon.",
    "🤝 Serving SMEs & startups.",
    "⚡ CircLynk Digital — Software. Built right."
]
