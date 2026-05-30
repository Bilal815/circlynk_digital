# ============================================================
# CIRCLYNK DIGITAL — pelicanconf.py
# ============================================================
from datetime import datetime

AUTHOR          = 'CircLynk Digital'
SITENAME        = 'CircLynk Digital'
SITEURL         = 'https://circlynkdigital.com'
SITESUBTITLE    = 'Software & Digital Transformation'
SITEDESCRIPTION = 'Custom software, free developer tools, and digital products for Pakistani SMEs and US startups.'

PATH           = 'content'
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
RELATED_POSTS_MAX = 10

# URLs — clean SEO-friendly
ARTICLE_URL      = '{slug}/'
ARTICLE_SAVE_AS  = '{slug}/index.html'
PAGE_URL         = '{slug}/'
PAGE_SAVE_AS     = '{slug}/index.html'
CATEGORY_URL     = '{slug}/'
CATEGORY_SAVE_AS = '{slug}/index.html'
TAG_URL          = '{slug}/'
TAG_SAVE_AS      = '{slug}/index.html'
AUTHOR_URL       = '{slug}/'
AUTHOR_SAVE_AS   = '{slug}/index.html'

# Template Page Routing
TEMPLATE_PAGES = {
    'compiler.html': 'online-compiler-python/index.html',
    'blog.html': 'blog/index.html',
    'contact.html': 'contact.html',
    '404.html': '404.html',
    'marketplace.html': 'marketplace/index.html',
    'services.html': 'services/index.html',
    'service_detail.html': 'service_detail/index.html',
    'industries.html': 'industries/index.html',
    'industry_detail.html': 'industry_detail/index.html',
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
    'yuicompressor',
    #'sitemap',
    #'seo',
    'related_posts',
    #'neighbors',
]

# Yuicompressor
#YUICOMPRESSOR_EXECUTABLE = 'yui_compressor.py'

# Sitemap settings
SITEMAP = {
    'siteurl': SITEURL,
    'format': 'xml',
    'priorities': {
        'articles': 1,
        'indexes': 1,
        'pages': 1
    },
    'changefreqs': {
        'articles': 'daily',
        'pages': 'daily',
        'indexes': 'daily',
    },
    'exclude': ['404', 'archives', 'tags', 'authors'],  # ex: ['404', 'archives', 'tags', 'authors']
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
CACHE_CONTENT    = True
LOAD_CONTENT_CACHE = True

# DIRECT TEMPLATES
DIRECT_TEMPLATES = ['index', 'tags', 'categories', 'authors', 'archives', '404']

# MENUITEMS (fallback nav)
MENUITEMS = (
    ('Services', '/services/'),
    ('Industries', '/industries/'),
    ('Tools', '/online-compiler-python/'),
    ('Blog', '/blog/'),
    ('About', '/about/'),
    ('Contact', '/contact/'),
)
