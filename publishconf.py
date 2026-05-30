# ============================================================
# PUBLISHCONF.PY — Production overrides
# ============================================================

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *

SITEURL = 'https://circlynkdigital.com'
RELATIVE_URLS = False

DELETE_OUTPUT_DIRECTORY = True
DEBUG = False

# Disable caching in CI (important for reliability)
CACHE_CONTENT = False
LOAD_CONTENT_CACHE = False

# Ensure correct feeds
FEED_ALL_ATOM = 'all.atom.xml'
CATEGORY_FEED_ATOM = '{slug}.atom.xml'

# Production-safe
WITH_FUTURE_DATES = False